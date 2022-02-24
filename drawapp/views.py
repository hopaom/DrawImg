from io import BytesIO, StringIO
from django.shortcuts import render
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
import requests
from PIL import Image
import numpy as np

# Create your views here.

def index_test(request):
    return render(request, 'index.html')

def email_test(request):
    url = "https://sparta-team4-project.s3.ap-northeast-2.amazonaws.com/result_image/6a4936f819c948b9965cdd191f6125d3"
    res = requests.get(url)
    res = Image.open(BytesIO(res.content))
    res.save('sample.png', 'png')
    mail_subject = 'smtp를 사용하여 이메일 보내기'
    message = render_to_string('email.html', {
    'url': '1'
	})
    to_email = 'aopd408@gmail.com'
    send_email = EmailMessage(mail_subject, message, to=[to_email])
    send_email.content_subtype = 'html'  # html 코드로 나타내기 위함.
    send_email.attach_file('sample.png')
    send_email.send()

    return render(request, 'index.html')