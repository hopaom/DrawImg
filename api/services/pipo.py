import requests

def pipo_transe(url):
    URL = "http://127.0.0.1:5000/pipo"
    res = requests.post(URL, json={'url':url})
    return res.json()