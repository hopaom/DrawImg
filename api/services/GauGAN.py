import requests
import time 

def GauGAN_transe(data):
    URL = "http://127.0.0.1:5000/generate"
    res = requests.post(URL, json={'data':data})

    return res.json()