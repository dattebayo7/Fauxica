const createFooter = () => {
    let nav=document.querySelector('footer');
    nav.innerHTML=`
    <div class="footer-content">
                    <img src="/images/images/fauxica.svg" class="logo" alt="">
                    <div class="footer-ul-container">
                        <ul class="category">
                            <li class="category-title"> Men</li>
                            <li><a href="#" class=footer-link>T-shirts</a></li>
                            <li><a href="#" class=footer-link>Sweat shirts</a></li>
                            <li><a href="#" class=footer-link>Jeans</a></li>
                            <li><a href="#" class=footer-link>Trousers</a></li>
                            <li><a href="#" class=footer-link>Shorts</a></li>
                            <li><a href="#" class=footer-link>Shoes</a></li>
                            <li><a href="#" class=footer-link>Casuals</a></li>
                            <li><a href="#" class=footer-link>Sports</a></li>
                        </ul>
                        <ul class="category">
                            <li class="category-title"> Women</li>
                            <li><a href="#" class=footer-link>T-shirts</a></li>
                            <li><a href="#" class=footer-link>Sweat shirts</a></li>
                            <li><a href="#" class=footer-link>Jeans</a></li>
                            <li><a href="#" class=footer-link>Trousers</a></li>
                            <li><a href="#" class=footer-link>Shorts</a></li>
                            <li><a href="#" class=footer-link>Shoes</a></li>
                            <li><a href="#" class=footer-link>Casuals</a></li>
                            <li><a href="#" class=footer-link>Sports</a></li>
                        </ul>
                    </div>
                </div>
                <p class="footer-title">About us</p>
                    <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Ad placeat quis accusantium. Vel nesciunt repudiandae impedit, 
                         voluptate fuga commodi repellat tempora natus vo
                         luptatum veritatis doloremque ex ad, temporibus quasi perspiciatis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facilis perferendis autem sint. Ad, cum. Ea, mollitia. Itaque laudantium natus temporibus culpa vero animi ut, maiores esse, ipsam molestias amet!</p>
                    <p class="info"> Support email : help@fauxica.com, customersupport@fauxica.com</p>
                    <p class="info"> Telephone: 1039 5767 1020, 123 456 789</p>
                    <div class="footer-social-handle">
                        <div>
                            <a href="#" class="social-link"> terms & conditions</a>
                            <a href="#" class="social-link"> privcay page</a> 
                        </div>
                        <div>
                            <a href="#" class="social-link"> instagram</a> 
                            <a href="#" class="social-link"> twitter</a> 
                            <a href="#" class="social-link"> facebook</a> 
                            <a href="#" class="social-link"> threads</a> 
                        </div>
                    </div>
                    <p class="footer-credit"> Fauxica, Best apparels online store</p>
    `;
}
createFooter();