
var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discountCode = document.getElementById('discount_code1');
let cart = document.getElementById("cart");

add = () => {
  cart.innerHTML +=  `
  <div class="row">
  <!-- cart images div -->
  <div
      class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
      <img src="assets/undraw_authentication_fsn5.svg" class="img-fluid" alt="cart img">
  </div>
  <!-- cart product details -->
  <div class="col-md-7 col-11 mx-auto px-4 mt-2">
      <div class="row">
          <!-- product name  -->
          <div class="col-6 card-title">
              <h1 class="mb-4 product_name">${data.key}</h1>
              <p class="mb-2">COLOR: BLUE</p>
              <p class="mb-3">SIZE: M</p>
          </div>
          <!-- quantity inc dec -->
          <div class="col-6">
              <ul class="pagination justify-content-end set_quantity">
                  <li class="page-item">
                      <button class="page-link "
                          onclick="decreaseNumber('textbox','itemval')">
                          <i class="fas fa-minus"></i> </button>
                  </li>
                  <li class="page-item"><input type="text" name="" class="page-link"
                          value="0" id="textbox">
                  </li>
                  <li class="page-item">
                      <button class="page-link"
                          onclick="increaseNumber('textbox','itemval')"> <i
                              class="fas fa-plus"></i></button>
                  </li>
              </ul>
          </div>
      </div>
      <!-- //remover move and price -->
      <div class="row">
          <div class="col-8 d-flex justify-content-between remove_wish">
              <i onclick="dltitem()" class="fas fa-trash-alt"> DELETE</i>
              <i class="fas fa-heart"> FAVORITE</i>
          </div>
          <div class="col-4 d-flex justify-content-end price_money">
              <h3>$<span id="itemval">0.00 </span></h3>
          </div>
      </div>
  </div>`
}
const decreaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    console.log(itemprice.innerHTML);
    if (itemval.value <= 0) {
        itemval.value = 0;
        alert('Negative quantity not allowed');
    } else {
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = '#fff';
        itemval.style.color = '#000';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}
const increaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itemval.value);
    if (itemval.value >= 5) {
        itemval.value = 5;
        alert('max 5 allowed');
        itemval.style.background = 'red';
        itemval.style.color = '#fff';
    } else {
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}
const discount_code = () => {
    let totalamtcurr = parseInt(total_cart_amt.innerHTML);
    let error_trw = document.getElementById('error_trw');
    if (discountCode.value === '14Aug') {
        let newtotalamt = totalamtcurr - 15;
        total_cart_amt.innerHTML = newtotalamt;
        error_trw.innerHTML = "Hurray! code is valid";
    } else {
        error_trw.innerHTML = "Try Again! Valid code is 14Aug";
    }
}
dltitem = () =>{
    firebase.database().ref('todos').remove();
    let cart = document.getElementById("cart")
    cart.innerHTML = ""
    
}