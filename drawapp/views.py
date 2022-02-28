from io import BytesIO
from django.shortcuts import render
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
import requests
from PIL import Image

# Create your views here.

def index_test(request):
    return render(request, 'index.html')

def email_test(request):
    return render(request, 'email_test.html')

def nst_test(request):
    return render(request, 'nst_test.html')

def style_upload(request):
    return render(request, 'style_upload.html')

def send_email(request):
    url=request.POST['url']
    id = request.POST['id']
    email = request.POST['email']

    URL = "http://127.0.0.1:5000/pipo"
    url = (requests.post(URL, json={'url':url})).json()
    imgs = [url['img'],url['label_img']]
    names = []
    for img in imgs:
        name = img.split('/')[-1].split('.')[0]
        names.append(name)
        res = requests.get(img)
        res = Image.open(BytesIO(res.content))
        res.save(f'media/result/{name}.png', 'png')
    mail_subject = 'smtp를 사용하여 이메일 보내기'
    message = render_to_string('email.html', {
    'img': url['img'],
    'label': url['label_img']
	})
    to_email = f'{id}@{email}'
    send_email = EmailMessage(mail_subject, message, to=[to_email])
    send_email.content_subtype = 'html'  # html 코드로 나타내기 위함.
    send_email.attach_file(f'media/result/{names[0]}.png')
    send_email.attach_file(f'media/result/{names[1]}.png')
    send_email.send()

    return render(request, 'index.html')