const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Iterate through the children of nav and shift items from navContentNames into textContent of each child element.
let navContentNames = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact'];
let nav = document.querySelector('nav');
let navItems = Array.from(nav.children);
navItems.forEach(e => {
  e.textContent = navContentNames.shift();
  e.style.color = 'green';
});

// Task 3
let a = document.createElement('a');
let b = document.createElement('a');
a.textContent = 'Append';
a.style.color = 'green';
b.textContent = 'Prepend';
b.style.color = 'green';
nav.append(a);
nav.prepend(b);

// Cta Section

document.querySelector('.cta .cta-text h1').textContent = "Dom Is Awesome";
document.querySelector('.cta .cta-text button').textContent = "Get Started";
document.getElementById('cta-img').src = "img/header-img.png";



// Main Content section

let topContent = document.querySelector('.top-content');
let botContent = document.querySelector('.bottom-content');

// Set H4 Content
topContent.children[0].children[0].textContent = "Features";
topContent.children[1].children[0].textContent = "About";

// Set p content
topContent.children[0].children[1].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topContent.children[1].children[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// set image src
document.getElementById('middle-img').src = "img/mid-page-accent.jpg";

// Set h4 content for bottom
botContent.children[0].children[0].textContent = "Services";
botContent.children[1].children[0].textContent = "Product";
botContent.children[2].children[0].textContent = "Vision";

// Set p content for bottom
botContent.children[0].children[1].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
botContent.children[1].children[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
botContent.children[2].children[1].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";



// Contact section

let contact = document.querySelector('.contact');

contact.children[0].textContent = "Contact";
contact.children[1].textContent = "123 Way 456 Street Somewhere, USA";
contact.children[2].textContent = "1 (888) 888-8888";
contact.children[3].textContent = "sales@greatidea.io";

// Copyright section

document.querySelector('footer p').textContent = "Copyright Great Idea! 2018";
