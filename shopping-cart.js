let arrayOfProducts=[
    {
        productName:"AERPREADY SHIRT",
        productImage:"img/product1.jpg",
        productPrice:25,
        state:'not-added'
    },
    {
        productName:"WIRELESS EARBUDS",
        productImage:"img/product2.jpg",
        productPrice:100,
        state:'not-added'
    },
    {
        productName:"HOODED PARKA",
        productImage:"img/product3.jpg",
        productPrice:45,
        state:'not-added'
    },
    {
        productName:"STRAW METAL BOTTLE",
        productImage:"img/product4.jpg",
        productPrice:24.04,
        state:'not-added'
    },
    {
        productName:"METAL SUNGLASSES",
        productImage:"img/product5.jpg",
        productPrice:50,
        state:'not-added'
    },
    {
        productName:"BACK HAT",
        productImage:"img/product6.jpg",
        productPrice:50,
        state:'not-added'
    },
    {
        productName:"BACK PACK",
        productImage:"img/product7.jpg",
        productPrice:70,
        state:'not-added'
    },
    {
        productName:"ULTRABOOST 22",
        productImage:"img/product8.jpg",
        productPrice:45,
        state:'not-added'
    }

];
//localStorage.clear();
//localStorage.clear();
let nbProducts;
let cart=document.querySelector('.cart-items');
let totalCart=document.querySelector('.cart');
let item=document.getElementById('item');
let productsBuyed=document.getElementById('pd');
let total=document.querySelector('.total');
let sum=0;


if(localStorage.getItem('cart')!=null){
    cart.innerHTML=localStorage.getItem('cart');
}
else{
    cart.innerHTML=`<button class="previous" onclick="hideCart();"><img src="img/Screenshot 2023-06-21 225736.png" alt="" class="previous-img"></button>
    <div class="cart-title"><h2>Your Cart</h2></div>`;
}
if(localStorage.getItem('nbProducts')!=null){
    nbProducts=localStorage.getItem('nbProducts');
    productsBuyed.innerHTML=nbProducts;
}
else{
    nbProducts=0;
    productsBuyed.innerHTML=nbProducts;
}
function addToCart(index){
    if(arrayOfProducts[index-1].state==='not-added'){
        cart.innerHTML+=`
                    <div>
                        <div class="items" id="item${index}">
                            <div>
                                <img src=${arrayOfProducts[index-1].productImage} alt="p1" class="img-item">
                            </div>
                    <div class="description">
                        <p class="item-title">${arrayOfProducts[index-1].productName}</p>
                        <p class="item-price">${arrayOfProducts[index-1].productPrice}</p>
                        <input type="number" name="Number"  id="number-${index}" min="1">
                    </div>
                    <button class="delete" onclick="removeProduct(${index});"><img src="img/bxs-trash-alt.png" alt="" class="delete-item"></button>
                    </div>
                    </div>`;
        let coef=document.querySelector(`#number-${index}`);
        coef.addEventListener('input',()=>{
            updateTotal(index);     
        });
        
        arrayOfProducts[index-1].state='added';
        nbProducts++;
        localStorage.setItem('nbProducts',nbProducts);
        productsBuyed.innerHTML=nbProducts;
        
        
    }
    else{
        alert('product added');
    }
    localStorage.setItem('cart',cart.innerHTML);
}

function showCart(){
    //cart.classList.add('buy');
    totalCart.classList.add('buy');
}
function hideCart(){
    //cart.classList.remove('buy');
    totalCart.classList.remove('buy');
}

function removeProduct(index){
    let item=document.getElementById(`item${index}`);
    item.parentElement.remove();
    arrayOfProducts[index-1].state='not-added';
    nbProducts--;
    localStorage.setItem('nbProducts',nbProducts);
    productsBuyed.innerHTML=nbProducts;
    localStorage.setItem('cart',cart.innerHTML);
    sum-=Number(arrayOfProducts[index-1].productPrice);
    total.innerHTML=sum;
    
}

function updateTotal(index){
    
    let items=document.querySelectorAll('.items');
    items.forEach((item)=>{
        let quantityInput=item.querySelector('input[name="Number"]');
        let quantity=quantityInput.value;
        sum+=Number(arrayOfProducts[index-1].productPrice)*Number(quantity);

        })
    total.innerHTML=sum;
}



