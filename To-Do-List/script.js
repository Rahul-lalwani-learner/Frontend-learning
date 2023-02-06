let addtask=document.querySelector('#addtask');
let alltask=document.querySelector("#allTasks");
let cleartask=document.querySelector('#cleartask');
let inputtask=document.querySelector('#input-task input');
let Done=document.querySelector('#Donetask');
// console.log(addtask)
inputtask.addEventListener('keydown',(e)=>{
    if(e.key=="Enter"){
        if(inputtask.value.trim()==""){
            alert("You need to type something to add task");
        }
        else{
            alltask.innerHTML+="<div class='task'>"+inputtask.value+"</div>";
            inputtask.value="";
        }
    }
})
addtask.addEventListener('click',function(){
    if(inputtask.value.trim()==""){
        alert("You need to type something to add task");
    }
    else{
        alltask.innerHTML+="<div class='task'>"+inputtask.value+"</div>";
        inputtask.value="";
    }
}); 
cleartask.addEventListener('click',function(){
    alltask.innerHTML="";
}); 
Done.addEventListener('click',function(){
    if(alltask.innerText==""){
        alert("All Tasks are completed")
    }
    else{
        let completedTask=alltask.querySelector(".task:nth-child(1)")
        completedTask.remove()
    }
    // console.log(completedTask.innertext);
})
