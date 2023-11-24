document.querySelectorAll(".cardedin>div:last-child").forEach(item => item.addEventListener('click', add));
let count;
let price;
let priceDef;
function add(event) {
  count = parseInt(event.currentTarget.closest(".cardedin").querySelector("div:nth-child(2)>div:nth-child(2)").innerText);
  price = parseInt(event.currentTarget.closest(".card").querySelector(".card-text").innerText.split(" ")[1]);
  if (count == 0){
    count++;
    event.currentTarget.closest(".cardedin").querySelector("div:nth-child(2)>div:nth-child(2)").querySelector("p").innerHTML = count+""; 
    event.currentTarget.closest(".card").querySelector(".card-text").innerHTML = "";
    event.currentTarget.closest(".card").querySelector(".card-text").insertAdjacentHTML("afterbegin",`Цена: ${count*price} руб`);
  }else{
    priceDef = price/count;
    count++;
    event.currentTarget.closest(".cardedin").querySelector("div:nth-child(2)>div:nth-child(2)").querySelector("p").innerHTML = count+""; 
    event.currentTarget.closest(".card").querySelector(".card-text").innerHTML = "";
    event.currentTarget.closest(".card").querySelector(".card-text").insertAdjacentHTML("afterbegin",`Цена: ${count*priceDef} руб`);
  }
  
}

document.querySelectorAll(".cardedin>div:first-child").forEach(item => item.addEventListener('click', minus));
function minus(event) {
  count = parseInt(event.currentTarget.closest(".cardedin").querySelector("div:nth-child(2)>div:nth-child(2)").innerText);
  
  if (count > 1){
   price = parseInt(event.currentTarget.closest(".card").querySelector(".card-text").innerText.split(" ")[1]);
   priceDef = price/count;
   count--;
   event.currentTarget.closest(".cardedin").querySelector("div:nth-child(2)>div:nth-child(2)").querySelector("p").innerHTML = count+""; 
   event.currentTarget.closest(".card").querySelector(".card-text").innerHTML = "";
   event.currentTarget.closest(".card").querySelector(".card-text").insertAdjacentHTML("afterbegin",`Цена: ${price-priceDef} руб`);
  }else if (count == 1){
    count--;
    event.currentTarget.closest(".cardedin").querySelector("div:nth-child(2)>div:nth-child(2)").querySelector("p").innerHTML = count+""; 
  }
}


let products = [];

class Product {
  constructor(img,name,price,count){
      this.img = img;
      this.name = name;
      this.price = price;
      this.count = count;
  }
}

document.querySelectorAll(".corzcat").forEach(item => item.addEventListener('click', addToCart));
function addToCart(event) {
  let parentCart = event.target.closest(".card");
  let title = parentCart.querySelector(".card-body h4").innerText
  let elem = products.find(item => item.name == title);
  if (elem){
    let price = parentCart.querySelector(".card-text").innerText.split(" ")[1];
    let count = parentCart.querySelector(".cardedin").querySelector("div:nth-child(2)>div:nth-child(2)").innerText;
    elem.price = price;
    elem.count = count;
  }else{
    let img = parentCart.querySelector(".card-img-top").getAttribute("src");
    let price = parentCart.querySelector(".card-text").innerText.split(" ")[1];
    let count = parentCart.querySelector(".cardedin").querySelector("div:nth-child(2)>div:nth-child(2)").innerText;
    products.push(new Product(img,title,price,count));
  }
}

document.querySelector(".gotoCard").addEventListener("click" , moveCart);

function moveCart(event) {



  document.querySelector(".need").innerHTML = "";
  products.forEach(item =>{
    document.querySelector(".need").insertAdjacentHTML("afterbegin", `
    <hr class="my-4" style="width:100%">
              
                                <div class="row mb-4 d-flex justify-content-between align-items-center">
                                  <div class="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                      src=${item.img}
                                      class="img-fluid rounded-3" alt="Cotton T-shirt">
                                  </div>
                                  <div class="col-md-3 col-lg-3 col-xl-3">
                                    <h6 class="text-muted">${item.name}</h6>                  
                                  </div>
                                  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                  
              
                                   <p>${item.count}</p>
              
                                  </div>
                                  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h6 class="mb-0">${item.price} руб</h6>
                                  </div>
                                  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <a href="#!" class="text-muted"><i class="fa fa-times-circle-o" aria-hidden="true"></i></a>
                                  </div>
                                </div>
              
                                <hr class="my-4" style="width:100%">
    
    
    
    `)
  })
 
}

