from ninja.files import UploadedFile
from django.http import HttpRequest
from ninja import Router, File, Form

from .schemas import styleReuqest, styleResponse
from api.services.style_transfer import style_transe

router = Router()


@router.post("/", response=styleResponse)
def style(request: HttpRequest, style_request: styleReuqest = Form(...)) -> dict:
    file_url = style_transe(style_request.url)
    s3_url = f'https://sparta-team4-project.s3.ap-northeast-2.amazonaws.com/style_trans_image/{file_url}'
    return {'result': s3_url}
