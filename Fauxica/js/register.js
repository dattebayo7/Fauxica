let btnclick=document.querySelector('button')
btnclick.addEventListener("click",(e)=>{
    if(document.getElementById('input-text').value!==''){
         let url="http://127.0.0.1:5501/html/login.html"
         window.open(url,"_self")
    }
})