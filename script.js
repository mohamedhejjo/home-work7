let task=document.getElementById("tasktitle");
let time=document.getElementById("time");
let CreateTask=document.getElementById("submit");
let mohamed = JSON.parse(localStorage.getItem("array"));
var i=0;
if(mohamed==null){
    let obj=[];
    localStorage.setItem("array", JSON.stringify(obj));
}else{
    i=mohamed.length;
    let test=document.getElementsByClassName("divdivdiv")[0];
    test.innerHTML="";
    mohamed.forEach(function(value){
        let msg=

        '<div class="div15">'+
        '<h2 id="h22">' +value.task + '</h2>'+
        '<button class="btn5">Waiting</button>'+
        '<div class="divft">'+
           '<button class="f1"  onclick="btntntbf('+value.id+')">x</button>'+
            '<button class="t1" onclick="btntntbtt('+value.id+')" ondblclick="btntntbt('+value.id+')">✓</button>'+
        
        '</div>'+ 
           '<p id="time1" style="margin-top: -5px;" >'+value.time +  '</p>'
        +'   </div>';
           test.innerHTML += msg;
         
    });

}

let form=document.getElementById("form1");
function submit1(){

    if(task.value !=="" && time.value !==""){
        CreateTask.disabled=false;
    }else{
        CreateTask.disabled=true;
       

    }
  
   
}
task.onkeyup=submit1;
time.onkeyup=submit1;


CreateTask.onclick=function(){
    if(task.value !=="" && time.value !==""){
        submit1();
        obj = JSON.parse(localStorage.getItem("array"));
        obj.push({"task":task.value,"time":time.value,"id":i});
        localStorage.setItem("array", JSON.stringify(obj));
    }
};

let true1=document.getElementsByClassName("t1");
let false1=document.getElementsByClassName("f1");

function btntntbtt(r){
    document.getElementsByClassName("btn5")[r-1].style.border="3px solid #FF9A34";
    document.getElementsByClassName("btn5")[r-1].style.backgroundColor="#FFE7CF";
    document.getElementsByClassName("btn5")[r-1].style.color="#FF9A34";
    document.getElementsByClassName("btn5")[r-1].innerText="Progress";
    document.getElementsByClassName("div15")[r-1].style.border="3px solid #FF9A34";

}
function btntntbt(r){
    document.getElementsByClassName("btn5")[r-1].style.border="3px solid #7DD181";
    document.getElementsByClassName("btn5")[r-1].style.backgroundColor="#C9FFE2";
    document.getElementsByClassName("btn5")[r-1].style.color="#7DD181";
    document.getElementsByClassName("btn5")[r-1].innerText="Done";
    document.getElementsByClassName("t1")[r-1].style.display="none";
    document.getElementsByClassName("div15")[r-1].style.border="3px solid #7DD181";

}
function btntntbf(r){
    let mohamed2 = JSON.parse(localStorage.getItem("array"));
    document.getElementsByClassName("div15")[r-1].style.display="none";
//     mohamed2.forEach(function(value){
//         if(value.id==r-1){
// localStorage.removeItem("mohamed2.pop")


    //     }
    // });
}

let mohamedhejjo = JSON.parse(localStorage.getItem("array"));

let test=document.getElementsByClassName("divdivdiv")[0];

    test.innerHTML="";
    function mohh() {
        mohamedhejjo.forEach(function(value){
            let msg=
    
            '<div class="div15">'+
            '<h2 id="h22">' +value.task + '</h2>'+
            '<button class="btn5">Waiting</button>'+
            '<div class="divft">'+
               '<button class="f1"  onclick="btntntbf('+value.id+')">x</button>'+
                '<button class="t1" onclick="btntntbtt('+value.id+')" ondblclick="btntntbt('+value.id+')">✓</button>'+
            
            '</div>'+ 
               '<p id="time1" style="margin-top: -5px;" >'+value.time +  '</p>'
            +'   </div>';
               test.innerHTML += msg;
               task.value ="" ;
               time.value="";
             
        });
        i++;

    }
  
    mohh();






