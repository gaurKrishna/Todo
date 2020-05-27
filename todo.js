function remove(event){
    var thirdsection = document.getElementsByTagName("main")[0].getElementsByClassName("Completed")[0];
    thirdsection.removeChild(event.target.parentElement);
}

function addToDone(event){
    var thirdsection = document.getElementsByTagName("main")[0].getElementsByClassName("Completed")[0];
    var secondsection = document.getElementsByTagName("main")[0].getElementsByClassName("Under-progress")[0];
    var mydiv = document.createElement("div");
    var ptag = document.createElement("p");
    var myhr = document.createElement("hr");
    var mybutton = document.createElement("button");
    mybutton.setAttribute("class", "fa fa-trash");
    ptag.style.color = "Black";
    ptag.style.textDecoration = "line-through";
    ptag.style.fontFamily = "cursive";
    ptag.innerHTML = event.target.previousElementSibling.innerHTML;
    mybutton.addEventListener("click", remove);
    mydiv.appendChild(ptag);
    mydiv.appendChild(mybutton);
    mydiv.appendChild(myhr);
    thirdsection.appendChild(mydiv);
    secondsection.removeChild(event.target.parentElement);
    console.log(removed);
}

function addUnderProcess(event){
    var secondsection = document.getElementsByTagName("main")[0].getElementsByClassName("Under-progress")[0];
    var firstsection = document.getElementsByTagName("main")[0].getElementsByClassName("Todo")[0];
    var mydiv = document.createElement("div");
    var ptag = document.createElement("p");
    var mybutton = document.createElement("button");
    var myhr = document.createElement("hr");
    mybutton.setAttribute("class", "fa fa-check");
    ptag.innerHTML = event.target.previousElementSibling.innerHTML;
    mybutton.addEventListener("click", addToDone);
    mydiv.appendChild(ptag);
    mydiv.appendChild(mybutton);
    mydiv.appendChild(myhr);
    secondsection.appendChild(mydiv);
    var removed = firstsection.removeChild(event.target.parentElement);
    console.log(removed);
}

function addForm() {
    var addtodo_form = document.forms.addtodo;
    if (addtodo_form.Todo.value){
        var firstsection = document.getElementsByTagName("main")[0].getElementsByClassName("Todo")[0];
        var mydiv = document.createElement("div");
        var ptag = document.createElement("p");
        var mybutton = document.createElement("button");
        var myhr = document.createElement("hr");
        mybutton.setAttribute("class", "fa fa-hourglass");
        ptag.innerHTML =  addtodo_form.Todo.value;
        ptag.style.fontFamily = "cursive";
        mybutton.addEventListener("click", addUnderProcess);
        mydiv.appendChild(ptag);
        mydiv.appendChild(mybutton);
        mydiv.appendChild(myhr);
        firstsection.appendChild(mydiv); 
        console.log(addtodo_form.Todo.placeholder);
    }
    else
    {
        addtodo_form.Todo.placeholder = "This field can't be empty!"; 
    }
}

