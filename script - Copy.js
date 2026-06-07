// ===== PRODUCT DATABASE =====
const products = [
    { id: 1, name: "Fresh Tomatoes", price: 5000, category: "fruits", image: "tomatoes.jpg", rating: 4.5, sold: 1234 },
    { id: 2, name: "Red Onions", price: 2500, category: "herbs", image: "onions.jpg", rating: 4.3, sold: 987 },
    { id: 3, name: "Fresh Garlic", price: 8000, category: "herbs", image: "Garlic.jpg", rating: 4.7, sold: 567 },
    { id: 4, name: "Fresh Spinach", price: 3000, category: "leafy", image: "Spinach.jpg", rating: 4.6, sold: 876 },
    { id: 5, name: "Fresh Kale", price: 3000, category: "leafy", image: "Fresh Kale.jpg", rating: 4.4, sold: 654 },
    { id: 6, name: "Mushrooms", price: 8000, category: "leafy", image: "Mushrooms.jpg", rating: 4.8, sold: 432 },
    { id: 7, name: "Zucchini", price: 3500, category: "fruits", image: "Zucchini.jpg", rating: 4.2, sold: 321 },
    { id: 8, name: "Squash", price: 4000, category: "fruits", image: "Squash.jpg", rating: 4.1, sold: 234 },
    { id: 9, name: "Green Peppers", price: 3500, category: "fruits", image: "Green Pepper.jpg", rating: 4.5, sold: 543 },
    { id: 10, name: "Irish Potatoes", price: 4000, category: "root", image: "Potatoes.jpg", rating: 4.6, sold: 765 },
    { id: 11, name: "Lettuce", price: 2500, category: "leafy", image: "Lettuce.jpg", rating: 4.3, sold: 432 },
    { id: 12, name: "Green Beans", price: 3500, category: "leafy", image: "Green Beans.jpg", rating: 4.4, sold: 321 }
];

// ===== SHOPPING CART =====
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartUI();
    updateUserUI();
    initFlashSaleTimer();
    initSlideshow();
    loadPricingTable();
    setupEventListeners();
    
    // Hide loading states
    document.body.style.opacity = '1';
});

// ===== LOAD PRODUCTS =====
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}" data-price="${product.price}">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/200x200/2e8b57/white?text=${product.name}'">
            <h4>${product.name}</h4>
            <div class="product-rating">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))} (${product.sold}+)</div>
            <div class="product-price">UGX ${product.price.toLocaleString()}</div>
            <button onclick="addToCart('${product.name}', ${product.price})" class="add-to-cart-btn">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `).join('');
}

// ===== FILTER PRODUCTS =====
function filterProducts() {
    const category = document.getElementById('categoryFilter')?.value || 'all';
    const maxPrice = parseInt(document.getElementById('priceFilter')?.value || 10000);
    const sortBy = document.getElementById('sortFilter')?.value || 'default';
    
    let filtered = [...products];
    
    // Filter by category
    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }
    
    // Filter by price
    filtered = filtered.filter(p => p.price <= maxPrice);
    
    // Sort products
    if (sortBy === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
        filtered.sort((a, b) => b.sold - a.sold);
    }
    
    // Render filtered products
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = filtered.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/200x200/2e8b57/white?text=${product.name}'">
                <h4>${product.name}</h4>
                <div class="product-rating">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</div>
                <div class="product-price">UGX ${product.price.toLocaleString()}</div>
                <button onclick="addToCart('${product.name}', ${product.price})" class="add-to-cart-btn">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        `).join('');
    }
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    
    if (!searchTerm) {
        filterProducts();
        return;
    }
    
    const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm));
    const productsGrid = document.getElementById('productsGrid');
    
    if (productsGrid) {
        productsGrid.innerHTML = filtered.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/200x200/2e8b57/white?text=${product.name}'">
                <h4>${product.name}</h4>
                <div class="product-price">UGX ${product.price.toLocaleString()}</div>
                <button onclick="addToCart('${product.name}', ${product.price})" class="add-to-cart-btn">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        `).join('');
    }
}

function updatePriceValue() {
    const priceFilter = document.getElementById('priceFilter');
    const priceValue = document.getElementById('priceValue');
    if (priceFilter && priceValue) {
        priceValue.textContent = `UGX ${parseInt(priceFilter.value).toLocaleString()}`;
        filterProducts();
    }
}

function clearFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (categoryFilter) categoryFilter.value = 'all';
    if (priceFilter) priceFilter.value = '10000';
    if (sortFilter) sortFilter.value = 'default';
    
    updatePriceValue();
    filterProducts();
}

// ===== SHOPPING CART FUNCTIONS =====
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: name, price: price, quantity: 1, image: getProductImage(name) });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showNotification(`${name} added to cart!`, 'success');
}

function updateCartUI() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const cartCountElem = document.getElementById('cartCount');
    const cartTotalElem = document.getElementById('cartTotal');
    const cartItemsElem = document.getElementById('cartItems');
    
    if (cartCountElem) cartCountElem.textContent = cartCount;
    if (cartTotalElem) cartTotalElem.textContent = cartTotal.toLocaleString();
    
    // Update cart dropdown items
    if (cartItemsElem) {
        if (cart.length === 0) {
            cartItemsElem.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        } else {
            cartItemsElem.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/50x50/2e8b57/white?text='">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">UGX ${item.price.toLocaleString()}</div>
                        <div class="cart-item-quantity">
                            <button onclick="updateQuantity('${item.name}', -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity('${item.name}', 1)">+</button>
                            <button onclick="removeFromCart('${item.name}')" style="background:#ff6b6b; color:white;">Remove</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Update min order warning
    const minOrderWarning = document.getElementById('minOrderWarning');
    const remainingAmount = document.getElementById('remainingAmount');
    if (minOrderWarning && remainingAmount) {
        if (cartTotal > 0 && cartTotal < 10000) {
            minOrderWarning.style.display = 'block';
            remainingAmount.textContent = (10000 - cartTotal).toLocaleString();
        } else {
            minOrderWarning.style.display = 'none';
        }
    }
}

function updateQuantity(name, delta) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.name !== name);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    }
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showNotification(`${name} removed from cart`, 'info');
}

function toggleCart() {
    const cartDropdown = document.getElementById('cartDropdown');
    if (cartDropdown) {
        cartDropdown.classList.toggle('active');
        
        // Close user menu if open
        const userMenu = document.getElementById('userMenu');
        if (userMenu) userMenu.classList.remove('active');
    }
}

function proceedToCheckout() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    if (total < 10000) {
        showNotification(`Minimum order is UGX 10,000. Add UGX ${(10000 - total).toLocaleString()} more.`, 'error');
        return;
    }
    
    if (!currentUser) {
        showNotification('Please login to checkout', 'error');
        showLoginModal();
        return;
    }
    
    // Simulate checkout
    showNotification('Order placed successfully! We will contact you shortly.', 'success');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    toggleCart();
}

function getProductImage(name) {
    const product = products.find(p => p.name === name);
    return product ? product.image : 'placeholder.jpg';
}

// ===== USER AUTHENTICATION =====
function toggleUserMenu() {
    const userMenu = document.getElementById('userMenu');
    if (userMenu) {
        userMenu.classList.toggle('active');
        
        // Close cart if open
        const cartDropdown = document.getElementById('cartDropdown');
        if (cartDropdown) cartDropdown.classList.remove('active');
    }
}

function updateUserUI() {
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userInfoSection = document.getElementById('userInfoSection');
    const userLinksSection = document.getElementById('userLinksSection');
    
    if (currentUser) {
        if (userNameDisplay) userNameDisplay.textContent = currentUser.name.split(' ')[0];
        if (userInfoSection) userInfoSection.style.display = 'none';
        if (userLinksSection) userLinksSection.style.display = 'block';
    } else {
        if (userNameDisplay) userNameDisplay.textContent = 'Account';
        if (userInfoSection) userInfoSection.style.display = 'block';
        if (userLinksSection) userLinksSection.style.display = 'none';
    }
}

function showLoginModal() {
    const modal = document.getElementById('authModal');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (modal) {
        if (loginForm) loginForm.style.display = 'block';
        if (registerForm) registerForm.style.display = 'none';
        modal.classList.add('active');
    }
}

function showRegisterModal() {
    const modal = document.getElementById('authModal');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (modal) {
        if (loginForm) loginForm.style.display = 'none';
        if (registerForm) registerForm.style.display = 'block';
        modal.classList.add('active');
    }
}

function closeModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('active');
}

function login() {
    const email = document.getElementById('loginEmail')?.value;
    const password = document.getElementById('loginPassword')?.value;
    
    // Demo login - accept any email/password
    if (email && password) {
        currentUser = { name: email.split('@')[0], email: email };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserUI();
        closeModal();
        showNotification('Login successful!', 'success');
    } else {
        showNotification('Please enter email and password', 'error');
    }
}

function register() {
    const name = document.getElementById('regName')?.value;
    const email = document.getElementById('regEmail')?.value;
    const phone = document.getElementById('regPhone')?.value;
    const password = document.getElementById('regPassword')?.value;
    
    if (name && email && phone && password) {
        currentUser = { name: name, email: email, phone: phone };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserUI();
        closeModal();
        showNotification('Registration successful! Welcome to Fresh Wave!', 'success');
    } else {
        showNotification('Please fill all fields', 'error');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserUI();
    showNotification('Logged out successfully', 'info');
}

// ===== FLASH SALE COUNTDOWN =====
function initFlashSaleTimer() {
    // Set end time to 24 hours from now
    let endTime = localStorage.getItem('flashSaleEndTime');
    if (!endTime) {
        endTime = new Date().getTime() + (24 * 60 * 60 * 1000);
        localStorage.setItem('flashSaleEndTime', endTime);
    }
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = parseInt(endTime) - now;
        
        if (distance < 0) {
            // Reset for next day
            const newEndTime = new Date().getTime() + (24 * 60 * 60 * 1000);
            localStorage.setItem('flashSaleEndTime', newEndTime);
            initFlashSaleTimer();
            return;
        }
        
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const hoursElem = document.getElementById('hours');
        const minutesElem = document.getElementById('minutes');
        const secondsElem = document.getElementById('seconds');
        
        if (hoursElem) hoursElem.textContent = hours.toString().padStart(2, '0');
        if (minutesElem) minutesElem.textContent = minutes.toString().padStart(2, '0');
        if (secondsElem) secondsElem.textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===== SLIDESHOW =====
let slideIndex = 0;
let slideInterval;

function initSlideshow() {
    showSlide(slideIndex);
    startSlideshow();
}

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');
    
    if (slides.length === 0) return;
    
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    slides[slideIndex].style.display = 'block';
    if (dots[slideIndex]) dots[slideIndex].classList.add('active');
}

function changeSlide(n) {
    showSlide(slideIndex += n);
    resetSlideshow();
}

function startSlideshow() {
    slideInterval = setInterval(() => {
        showSlide(slideIndex += 1);
    }, 4000);
}

function resetSlideshow() {
    clearInterval(slideInterval);
    startSlideshow();
}

// Create dots dynamically
function createDots() {
    const slides = document.getElementsByClassName('slide');
    const dotsContainer = document.querySelector('.dots-container');
    
    if (!dotsContainer || slides.length === 0) return;
    
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = function() { showSlide(slideIndex = i); resetSlideshow(); };
        dotsContainer.appendChild(dot);
    }
}

// ===== LOAD PRICING TABLE =====
function loadPricingTable() {
    const tableBody = document.getElementById('pricingTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = products.map(product => `
        <tr>
            <td>${product.name}</td>
            <td>UGX ${product.price.toLocaleString()}</td>
            <td>${product.price >= 5000 ? '1kg' : '2kg'}</td>
            <td><button class="buy-now-btn" onclick="addToCart('${product.name}', ${product.price})">Buy Now</button></td>
        </tr>
    `).join('');
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.background = type === 'success' ? '#2e8b57' : type === 'error' ? '#ff6b6b' : '#2196F3';
    notification.style.color = 'white';
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add slideOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ===== BACK TO TOP =====
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== CONTACT FORM =====
function setupEventListeners() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('contactName')?.value.trim();
            const phone = document.getElementById('contactPhone')?.value.trim();
            const email = document.getElementById('contactEmail')?.value.trim();
            const message = document.getElementById('contactMessage')?.value.trim();
            
            if (!name || !phone || !email) {
                showNotification('Please fill all required fields', 'error');
                return;
            }
            
            showNotification('Message sent successfully! We will reply within 24 hours.', 'success');
            contactForm.reset();
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        const cartContainer = document.querySelector('.cart-icon-container');
        const userContainer = document.querySelector('.user-dropdown-container');
        const cartDropdown = document.getElementById('cartDropdown');
        const userMenu = document.getElementById('userMenu');
        
        if (cartContainer && cartDropdown && !cartContainer.contains(e.target)) {
            cartDropdown.classList.remove('active');
        }
        
        if (userContainer && userMenu && !userContainer.contains(e.target)) {
            userMenu.classList.remove('active');
        }
    });
}

// Load dots after slides are ready
setTimeout(createDots, 100);