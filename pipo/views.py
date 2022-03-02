from django.shortcuts import render

# Create your views here.

def pipo(request, idx, img):
    img = f"https://sparta-team4-project.s3.ap-northeast-2.amazonaws.com/{idx}/{img}.png"
    return render(request,'pipo/pipo.html',{'result':img})


