const input=document.getElementById("todo-input");
const list=document.getElementById("todo-list");

function addList(){
    if(input.value==''){
        alert("Add your list");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML= "\u274c";
        li.appendChild(span);
    }
    input.value='';
}

input.addEventListener('keypress', (event) => {
    if(event.key === "Enter") {
        if(input.value==''){
            alert("Add your list");
        }
        else{
            let li= document.createElement("li");
            li.innerHTML= input.value;
            list.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML= "\u274c";
            li.appendChild(span);
        }
        input.value='';
    }
});

list.addEventListener("click",function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove()
    }
})

function clearControl() {
    document.getElementById("todo-list").innerHTML='';
}

