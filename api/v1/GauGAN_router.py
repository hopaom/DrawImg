import json
from ninja.files import UploadedFile
from django.http import HttpRequest, HttpResponse
from ninja import Router, File, Form



from .schemas import gauganResponse, gauganReuqest
from api.services.GauGAN import GauGAN_transe

router = Router()


@router.post("/", response=gauganResponse)
# def GauGAN(request: HttpRequest, style_request:gauganReuqest=Form(...)) -> dict:
def GauGAN(request: HttpRequest):
    data = (json.loads(request.body))['data']
    file_url = GauGAN_transe(data)
    file_url = file_url['url']
    s3_url = f'https://sparta-team4-project.s3.ap-northeast-2.amazonaws.com/gau_image/{file_url}'

    return {'result':s3_url}
