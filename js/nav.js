const createNav = () => {
    let nav=document.querySelector('.navbar');
    nav.innerHTML=`
    <a href="#"><img src="/images/images/logo.svg" alt="xyz"></a>
                <ul> 
                    <li><a class="nav_link active" href="http://127.0.0.1:5501/html/home.html">Home</a></li>
                    <li><a class="nav_link" href="http://127.0.0.1:5501/html/products1.html">Product</a></li>
                    <li><a class="nav_link" href="http://127.0.0.1:5501/html/cart.html">Cart</a></li>
                    <li><a class="nav_link" href="http://127.0.0.1:5501/html/login.html?#">Login</a></li>
                </ul>
    `;
}
const navLinkEls =document.querySelectorAll('.nav_link');
navLinkEls.forEach(navLinkEl=>{
    console.log(navLinkEl.href)
    navLinkEl.addEventListener('click', ()=>{
        document.querySelector('.active')?.classList.remove('active');
        navLinkEl.classList.add('.active');
    })
})
createNav();

