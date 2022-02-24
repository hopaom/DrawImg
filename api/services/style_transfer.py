from ninja.files import UploadedFile
from ninja import File
import requests

def style_transe(url):
    URL = "http://127.0.0.1:5000/style"
    res = requests.post(URL, json={'url':url})
    return res.json()['result']
