from django.shortcuts import render, redirect
from .models import Todo

def index(request):
    todo = Todo.objects.all()

    if request.method == "POST":
        title = request.POST.get("title")
        if title:
            Todo.objects.create(title=title)
        return redirect("index")

    return render(request, "index.html", {"todo": todo})

def delete_todo(request, todo_id):
    todo = Todo.objects.get(id=todo_id)
    todo.delete()
    return redirect("index")

def toggle_todo(request, todo_id):
    todo = Todo.objects.get(id=todo_id)
    todo.completed = not todo.completed
    todo.save()
    return redirect("index")
