const div=document.getElementById("div")
let countdown =10 ;
let fun=(n)=>{
    if(n>0){
      fun2(n); 
     }
    if(n==0){
     setTimeout(() => {
        div.innerHTML="happy independance day" ;
         }, 1000);    
    }
}
fun2=(n)=>{
    setTimeout(() => {
        div.innerHTML=n ;
        n--;
        fun(n);
         }, 1000); 
}
fun(countdown);