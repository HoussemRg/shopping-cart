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
let nbProducts=0;
let cart=document.querySelector('.cart');
let item=document.getElementById('item');
let productsBuyed=document.getElementById('pd');
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
                        <input type="number" name="Number" value="1" id="number" min="1">
                    </div>
                    <button class="delete" onclick="removeProduct(${index});"><img src="img/bxs-trash-alt.png" alt="" class="delete-item"></button>
                    </div>
                    <div class="total"></div>
                    <button class="calculate">Buy Now</button>
                    </div>`;
        arrayOfProducts[index-1].state='added';
        nbProducts++;
        productsBuyed.innerHTML=nbProducts;
    }
    else{
        alert('product added');
    }
    
}

function showCart(){
    cart.classList.add('buy');
    console.log(cart);
}
function hideCart(){
    cart.classList.remove('buy');
    console.log(cart);
}

function removeProduct(index){
    let item=document.getElementById(`item${index}`);
    item.parentElement.remove();
    arrayOfProducts[index-1].state='not-added';
    nbProducts--;
    productsBuyed.innerHTML=nbProducts;
}