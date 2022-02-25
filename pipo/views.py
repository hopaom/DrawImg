from django.shortcuts import render

# Create your views here.

def pipo(request):
    return render(request,'pipo/pipo.html',{})

