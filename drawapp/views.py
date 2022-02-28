from io import BytesIO
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
import requests
from PIL import Image
from django.http import HttpResponse
from django.shortcuts import render, redirect
import base64
from drawapp.apps import DrawappConfig
import re
from uuid import uuid4


def firstpage(request):
    return render(request, 'drawapp/firstpage.html')

def img_upload(request):
    img_file = request.POST.__getitem__('img_64')
    img_data = re.sub('^data:image/.+;base64,', '', img_file)
    img = Image.open(BytesIO(base64.b64decode(img_data)))
    buffer =BytesIO()
    img.save(buffer, 'PNG')
    buffer.seek(0)
    file_name=str(uuid4().hex)
    DrawappConfig.s3.put_object(Bucket="sparta-team4-project", Key=f"img_upload/{file_name}.jpg", Body=buffer, ACL='public-read')
    return HttpResponse(file_name)

def test(request, img):
    img = f"https://sparta-team4-project.s3.ap-northeast-2.amazonaws.com/img_upload/{img}.jpg"
    return render(request, 'test.html', {'result':img})

def drawpage(request):
    return render(request, 'drawapp/drawpage.html')
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