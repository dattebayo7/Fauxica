
const navLinkEls = document.querySelectorAll('.nav_link');
const windowPathname=window.location.pathname;
navLinkEls.forEach(navLinkEl=>{
    const navLinkPathname = new URL(navLinkEl.href).pathname;
    if((windowPathname === navLinkPathname) || (windowPathname === '/html/index.html' && navLinkPathname === '/')){
        navLinkEl.classList.add('active');
    }
});

const createNav = () => {
    let nav=document.querySelector('.navbar');
    nav.innerHTML=`
    <a href="#"><img src="/images/images/logo.svg" alt="xyz"></a>
                <ul> 
                    <li class="nav_item"><a class="nav_link" href="http://127.0.0.1:5501/html/index.html">Home</a></li>
                    <li class="nav_item"><a class="nav_link" href="http://127.0.0.1:5501/html/products1.html">Product</a></li>
                    <li class="nav_item"><a class="nav_link" href="http://127.0.0.1:5501/html/cart.html">Cart</a></li>
                    <li class="nav_item"><a class="nav_link" href="http://127.0.0.1:5501/html/login.html?#">Login</a></li>
                </ul>
    `;
}
createNav();

