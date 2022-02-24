from ninja.files import UploadedFile
from django.http import HttpRequest
from ninja import Router, File, Form

from .schemas import pipoReuqest, pipoResponse
from api.services.pipo import pipo_transe

router = Router()


@router.post("/", response=pipoResponse)
def pipo(request: HttpRequest, pipo_request: pipoReuqest = Form(...)) -> dict:
    file_url = pipo_transe(pipo_request.url)
    url1 = file_url['img']
    url2 = file_url['label_img']
    hex_list = file_url['hex_list']
    s3_url = f'https://sparta-team4-project.s3.ap-northeast-2.amazonaws.com/result_image/{url1}'
    s3_url2 = f'https://sparta-team4-project.s3.ap-northeast-2.amazonaws.com/result_image/{url2}'



    return {'img': s3_url, 'label': s3_url2, 'hex': hex_list}
    