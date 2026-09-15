const cart=[];const cartBtn=document.getElementById("cartBtn");const cartSidebar=document.getElementById("cartSidebar");const closeCart=document.getElementById("closeCart");const overlay=document.getElementById("overlay");const cartItems=document.getElementById("cartItems");const cartCount=document.getElementById("cartCount");const cartTotal=document.getElementById("cartTotal");const addButtons=document.querySelectorAll(".add-btn");const categoryButtons=document.querySelectorAll(".category-btn");const products=document.querySelectorAll(".product-card");const searchInput=document.getElementById("searchInput");const themeBtn=document.getElementById("themeBtn");const menuBtn=document.getElementById("menuBtn");const nav=document.querySelector(".navbar nav");

addButtons.forEach(button=>{button.addEventListener("click",()=>{cart.push({name:button.dataset.name,price:Number(button.dataset.price)});updateCart();openCart()})});
function updateCart(){cartCount.textContent=cart.length;if(cart.length===0){cartItems.innerHTML='<p class="empty-cart">Your cart is empty.</p>';cartTotal.textContent="$0.00";return}cartItems.innerHTML="";let total=0;cart.forEach((item,index)=>{total+=item.price;const div=document.createElement("div");div.className="cart-item";div.innerHTML=`<div><h4>${item.name}</h4><p>$${item.price.toFixed(2)}</p></div><button class="remove-item" onclick="removeItem(${index})">Remove</button>`;cartItems.appendChild(div)});cartTotal.textContent="$"+total.toFixed(2)}
function removeItem(index){cart.splice(index,1);updateCart()}
function openCart(){cartSidebar.classList.add("open");overlay.classList.add("show")}
function closeCartSidebar(){cartSidebar.classList.remove("open");overlay.classList.remove("show")}
cartBtn.addEventListener("click",openCart);closeCart.addEventListener("click",closeCartSidebar);overlay.addEventListener("click",closeCartSidebar);

categoryButtons.forEach(button=>{button.addEventListener("click",()=>{categoryButtons.forEach(btn=>btn.classList.remove("active"));button.classList.add("active");const category=button.dataset.category;let visibleProducts=0;products.forEach(product=>{const match=category==="all"||product.dataset.category===category;product.style.display=match?"block":"none";if(match)visibleProducts++});document.getElementById("noProducts").style.display=visibleProducts===0?"block":"none"})});

searchInput.addEventListener("input",()=>{const search=searchInput.value.toLowerCase().trim();let visibleProducts=0;products.forEach(product=>{const name=product.dataset.name.toLowerCase();const match=name.includes(search);product.style.display=match?"block":"none";if(match)visibleProducts++});document.getElementById("noProducts").style.display=visibleProducts===0?"block":"none"});

document.querySelectorAll(".favorite").forEach(button=>{button.addEventListener("click",()=>{button.classList.toggle("liked");button.textContent=button.classList.contains("liked")?"♥":"♡"})});
themeBtn.addEventListener("click",()=>{document.body.classList.toggle("dark");themeBtn.textContent=document.body.classList.contains("dark")?"☀️":"🌙"});
menuBtn.addEventListener("click",()=>nav.classList.toggle("show"));
document.querySelectorAll(".navbar nav a").forEach(link=>link.addEventListener("click",()=>nav.classList.remove("show")));

document.getElementById("newsletterForm").addEventListener("submit",event=>{event.preventDefault();const email=document.getElementById("emailInput").value;alert("Thanks for subscribing, "+email+"!");event.target.reset()});
document.getElementById("contactForm").addEventListener("submit",event=>{event.preventDefault();alert("Thank you! Your message has been received.");event.target.reset()});
document.getElementById("checkoutBtn").addEventListener("click",()=>{if(cart.length===0){alert("Your cart is empty!");return}alert("This is a school project, so checkout is simulated.")});
updateCart();
