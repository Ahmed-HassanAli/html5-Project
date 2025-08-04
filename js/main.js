
        let currentPage = 'home';
        let cartCount = 0;

       
        function updateCartCount() {
            const cartCountElement = document.getElementById('cart-count');
            cartCountElement.textContent = cartCount;
        }

        function addToCart() {
            cartCount++;
            updateCartCount();
        }

        function clearCart() {
            cartCount = 0;
            updateCartCount();
        }

       
        function handleOrderFormSubmission(event) {
            event.preventDefault(); 
           
            console.log('Order submitted!');

         
            showPage('confirmation');
            clearCart();
        }

        
        const pages = {
            home: `
                <section class="hero-section">
                    <div class="container">
                        <div class="card">
                            <h1>Flora <span>changes</span> your aura</h1>
                            <p>Are you looking to add a little plants to your home or office?</p>
                            <a href="#" onclick="showPage('products')">View Products</a>
                        </div>
                    </div>
                </section>
                <section class="section-about">
                    <div class="container">
                        <div class="text">
                            <h2><span>A</span>bout Us</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto commodi dicta
                                 doloribus quibusdam fugiat praesentium culpa. Cumque nemo deleniti distinctio.
                                 Qui nobis dolorem aspernatur illo. Exercitationem mollitia nulla dolore.</p>
                            <div class="social">
                              <img src="images/logo-facebook.svg" alt="Facebook">
                               <img src="images/logo-instagram.svg" alt="Instagram">
                              <img src="images/logo-whatsapp.svg" alt="Whatsapp">
                               
                            </div>
                        </div>
                        <div class="img">
                            <img src="images/annie-spratt-01Wa3tPoQQ8-unsplash.jpg" alt="">
                        </div>
                    </div>
                </section>
                <section class="section-flip-cards">
                    <h2 style="text-align: center; margin-bottom: 30px;">Our Special Categories</h2>
                    <div class="container">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="images/card-1.png" alt="Category 1">
                                    <h3>Indoor Plants</h3>
                                </div>
                                <div class="flip-card-back">
                                    <p>Add a touch of green to your living space with our beautiful collection of indoor plants.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="images/card-2ficus.png" alt="Category 2">
                                    <h3>Outdoor Plants</h3>
                                </div>
                                <div class="flip-card-back">
                                    <p>Brighten up your garden and patio with our vibrant and resilient outdoor plants.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="images/card-3.png" alt="Category 3">
                                    <h3>Succulents</h3>
                                </div>
                                <div class="flip-card-back">
                                    <p>Easy to care for and stylish, our succulents are perfect for any space.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section-promotions">
                    <div class="container">
                        <div class="img">
                            <img src="images/annie-spratt-KQ6sO8m1ZDE-unsplash.jpg" alt="">
                        </div>
                        <div class="text">
                            <h2>Discounts & Promotions</h2>
                            <ul>
                                <li>Buy now and get 15% off your next purchase.</li>
                                <li>Buy in your birthday and get 30% discount.</li>
                                <li>Discount 10% for students.</li>
                                <li>Friday offer buy 1 get 1.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            `,
            products: `
                <section class="section-products">
                    <div class="container">
                        <div class="product-card">
                            <img src="images/card-6-removebg-preview.png" alt="Product 1">
                            <div class="product-info">
                                <h3>Aloe Vera Plant</h3>
                                <p>$15.00</p>
                                <button class="add-to-cart-btn" onclick="addToCart()">Add to Cart</button>
                            </div>
                        </div>
                        <div class="product-card">
                            <img src="images/card-5-removebg-preview.png" alt="Product 2">
                            <div class="product-info">
                                <h3>Snake Plant</h3>
                                <p>$25.00</p>
                                <button class="add-to-cart-btn" onclick="addToCart()">Add to Cart</button>
                            </div>
                        </div>
                        <div class="product-card">
                            <img src="images/card-4-removebg-preview.png" alt="Product 3">
                            <div class="product-info">
                                <h3>Monstera Deliciosa</h3>
                                <p>$45.00</p>
                                <button class="add-to-cart-btn" onclick="addToCart()">Add to Cart</button>
                            </div>
                        </div>
                        <div class="product-card">
                            <img src="images/pngwing.com.png" alt="Product 4">
                            <div class="product-info">
                                <h3>Fiddle Leaf Fig</h3>
                                <p>$60.00</p>
                                <button class="add-to-cart-btn" onclick="addToCart()">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </section>
            `,
            form: `
                <section class="section-order-form">
                    <div class="container">
                        <h2>Place Your Order</h2>
                        <form id="order-form">
                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="address">Shipping Address</label>
                                <input type="text" id="address" name="address" required>
                            </div>
                            <button type="submit" class="form-submit-btn">Place Order</button>
                        </form>
                    </div>
                </section>
            `,
            confirmation: `
                <section class="section-confirmation">
                    <div class="container">
                        <i class="fas fa-check-circle icon-success"></i>
                        <h2>Order Sent Successfully!</h2>
                        <p>Thank you for your purchase. We will send you an email with the details shortly.</p>
                        <a href="#" onclick="showPage('home')" style="margin-top: 20px; display: inline-block; color: white; padding: 10px 20px; background-color: #088F57; border-radius: 5px;">Back to Home</a>
                    </div>
                </section>
            `
        };

        function showPage(pageId) {
            const mainContent = document.getElementById('main-content');
            mainContent.innerHTML = pages[pageId];
            currentPage = pageId;
            
        
            const navLinks = document.querySelectorAll('.navbar a');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.getElementById(pageId + '-link');
            if (activeLink) {
                activeLink.classList.add('active');
            }

            
            if (pageId === 'form') {
                document.getElementById('order-form').addEventListener('submit', handleOrderFormSubmission);
            }
        }
        
    
        document.addEventListener('DOMContentLoaded', () => {
            showPage('home');
            updateCartCount();
        });