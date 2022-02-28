from django.apps import AppConfig
import boto3
from DrawImg.settings import AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY, AWS_S3_REGION_NAME

class DrawappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'drawapp'

    s3 = boto3.client(
        's3', 
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
        region_name=AWS_S3_REGION_NAME,
        )
