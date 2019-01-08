// Using Jquery to manage a basic cart

//Pulling all the prices from the page.
var priceA = $(".priceA").attr("data_value")


//Where i = the number of items in the cart.
var i =0;

function addtocartA(){
  i++;
  document.getElementById('totalprice').innerHTML= "£" + i*priceA;
}

function minustocartA(){
  i--;
  document.getElementById('totalprice').innerHTML= "£"+ i*priceA;
}
