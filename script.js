// ============================================
// MENU DATA
// ============================================

const menuData = {
    appetizers: [
        {
            name: "Bruschetta",
            emoji: "🍞",
            description: "Crispy bread topped with tomato, garlic, and fresh basil",
            price: "$8.99"
        },
        {
            name: "Calamari Fritti",
            emoji: "🦑",
            description: "Golden fried squid served with marinara sauce",
            price: "$10.99"
        },
        {
            name: "Shrimp Cocktail",
            emoji: "🍤",
            description: "Chilled shrimp with zesty cocktail sauce",
            price: "$12.99"
        },
        {
            name: "Cheese & Charcuterie",
            emoji: "🧀",
            description: "Curated selection of artisan cheeses and cured meats",
            price: "$14.99"
        }
    ],
    mains: [
        {
            name: "Grilled Salmon",
            emoji: "🐟",
            description: "Fresh Atlantic salmon with lemon butter sauce",
            price: "$24.99"
        },
        {
            name: "Ribeye Steak",
            emoji: "🥩",
            description: "Premium cut ribeye with truffle mashed potatoes",
            price: "$28.99"
        },
        {
            name: "Pasta Carbonara",
            emoji: "🍝",
            description: "Creamy Roman pasta with bacon and parmesan",
            price: "$16.99"
        },
        {
            name: "Herb Crusted Chicken",
            emoji: "🍗",
            description: "Roasted chicken breast with seasonal vegetables",
            price: "$18.99"
        }
    ],
    desserts: [
        {
            name: "Tiramisu",
            emoji: "🍰",
            description: "Classic Italian dessert with layers of espresso and cream",
            price: "$7.99"
        },
        {
            name: "Chocolate Lava Cake",
            emoji: "🍫",
            description: "Warm chocolate cake with molten center",
            price: "$8.99"
        },
        {
            name: "Panna Cotta",
            emoji: "🥛",
            description: "Silky smooth Italian custard with berry compote",
            price: "$7.99"
        },
        {
            name: "Crème Brûlée",
            emoji: "🔥",
            description: "Caramelized custard with vanilla bean",
            price: "$8.99"
        }
    ],
    drinks: [
        {
            name: "House Wine",
            emoji: "🍷",
            description: "Selection of red, white, and rosé wines",
            price: "$8-12"
        },
        {
            name: "Craft Cocktails",
            emoji: "🍹",
            description: "House specialty cocktails prepared by expert mixologists",
            price: "$10-14"
        },
        {
            name: "Espresso",
            emoji: "☕",
            description: "Premium Italian espresso and specialty coffee",
            price: "$3-6"
        },
        {
            name: "Fresh Juices",
            emoji: "🧃",
            description: "Freshly squeezed orange, lemon, and vegetable juices",
            price: "$5-7"
        }
    ]
};

// ============================================
// MENU FUNCTIONALITY
// ============================================

const menuItems = document.getElementById('menuItems');
const categoryBtns = document.querySelectorAll('.category-btn');

function displayMenuItems(category) {
    menuItems.innerHTML = '';
    
    menuData[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="item-image">${item.emoji}</div>
            <div class="item-content">
                <div class="item-name">${item.name}</div>
                <div class="item-description">${item.description}</div>
                <div class="item-price">${item.price}</div>
            </div>
        `;
        menuItems.appendChild(menuItem);
    });
}

// Initialize with appetizers
displayMenuItems('appetizers');

// Category button click handlers
categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        categoryBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const category = this.getAttribute('data-category');
        displayMenuItems(category);
    });
});

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// CONTACT FORM HANDLER
// ============================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.elements[0].value;
    const email = this.elements[1].value;
    const message = this.elements[2].value;
    
    // Validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields!');
        return;
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }
    
    // Success message
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.5s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe menu items for animation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelectorAll('.menu-item').forEach(item => {
            observer.observe(item);
        });
    }, 100);
});

// ============================================
// BUTTON HOVER EFFECTS
// ============================================

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        if (!this.classList.contains('category-btn') || this.classList.contains('active')) {
            this.style.transform = 'scale(1.05)';
        }
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ============================================
// LAZY LOAD OPTIMIZATION
// ============================================

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.dataset.src) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.src = entry.target.dataset.src;
                        observer.unobserve(entry.target);
                    }
                });
            });
            observer.observe(img);
        }
    });
}

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================

window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// PRELOAD CRITICAL RESOURCES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Restaurant Website Loaded Successfully!');
});

// ============================================
// MOBILE VIEWPORT FIX
// ============================================

if (window.innerWidth < 768) {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5');
}
