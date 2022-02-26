from django.shortcuts import render, redirect


def firstpage(request):
    return render(request, 'drawapp/firstpage.html')

def aaa(request):
    return render(request, 'drawapp/aaa.html')