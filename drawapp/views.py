from django.shortcuts import render

# Create your views here.
def select_style(request):
    return render(request, 'drawapp/select_style.html')