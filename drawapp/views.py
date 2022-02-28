from django.shortcuts import render, redirect


def drawpage(request):
    return render(request, 'drawapp/drawpage.html')
