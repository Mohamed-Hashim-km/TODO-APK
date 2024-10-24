const inputbox=document.querySelector("#input-box");
const listConatiner=document.querySelector("#listcontainer");

function addTask(){
    if(inputbox.value==""){
        alert("you should write somthing");
    }
    else{
        let li=document.createElement("li")
        li.textContent=inputbox.value;
        listConatiner.appendChild(li);
        let span=document.createElement("span");
        span.textContent="\u00d7"
        li.appendChild(span);


    }
    inputbox.value="";
    showtask()
}

listConatiner.addEventListener("click",(e)=>{
   if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    showtask()
   }
   else if(e.target.tagName==="SPAN"){
      e.target.parentElement.remove()
      showtask()
   }
},false);

function showtask(){
    localStorage.setItem("data",listConatiner.innerHTML);
}
function savedata(){
    listConatiner.innerHTML=localStorage.getItem("data")
}
savedata()
