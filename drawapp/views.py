from django.http import HttpResponse
from django.shortcuts import render, redirect
import base64
from drawapp.apps import DrawappConfig
from PIL import Image
from io import BytesIO
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