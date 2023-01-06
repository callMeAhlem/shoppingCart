// like button
var btnHeart = document.getElementsByClassName('like');
for(let i=0;i<3;i++){
    btnHeart[i].onclick=btnLike;
function btnLike (){
  if (btnHeart[i].style.color==='red'){
    btnHeart[i].style.color='black';
  }
  else{
    btnHeart[i].style.color='red';}
}}
//delete button
var mainDiv=document.querySelector('.items');
var divItem =document.querySelectorAll('.Item');
var deleteBtn = document.getElementsByClassName('delete');
var totalPrice=document.querySelector('#finalPrice');
var itemPrice=document.querySelectorAll('.price');
var itemQuant=document.querySelectorAll('.Quant');
for(let i=0;i<3;i++){
    deleteBtn[i].onclick=deleteItem;
    function deleteItem(){
        mainDiv.removeChild(divItem[i]);
        var newPrice = parseInt(totalPrice.value) - parseInt(itemPrice[i].getAttribute('value'))*parseInt(itemQuant[i].getAttribute('value'));
        if (newPrice==0){
          document.querySelector('#total-price').innerHTML="The cart is empty!";
          let btn=document.createElement("button")
          btn.textContent="GO SHOPPING"
          document.querySelector('#total-price').appendChild(btn);
          btn.style.position = "absolute";
          btn.style.top = "230px";
          btn.style.left = "500px";

        }
      totalPrice.setAttribute('value',newPrice);

    }}
    //incrementing button
    var incrementBtn=document.querySelectorAll('.plus-btn');
    var decrementBtn=document.querySelectorAll('.minus-btn');

    for(let i=0;i<3;i++){
      incrementBtn[i].onclick= incrementNum;
      function incrementNum(){
        var newQuant=parseInt(itemQuant[i].getAttribute('value'));
        newQuant++;
        itemQuant[i].setAttribute('value',newQuant);
        var newPrice = parseInt(totalPrice.value) + parseInt(itemPrice[i].getAttribute('value'));
        totalPrice.setAttribute('value',newPrice);
      }
    }

    for(let i=0;i<3;i++){
      decrementBtn[i].onclick= decrementNum;
      function decrementNum(){
        var newQuant=parseInt(itemQuant[i].getAttribute('value'));
        if(newQuant>=2){
        newQuant--;
        itemQuant[i].setAttribute('value',newQuant);
        var newPrice = parseInt(totalPrice.value) - parseInt(itemPrice[i].getAttribute('value'));
        totalPrice.setAttribute('value',newPrice);}
        else 
        {  mainDiv.removeChild(divItem[i]);
          var newPrice = parseInt(totalPrice.value) - parseInt(itemPrice[i].getAttribute('value'))*parseInt(itemQuant[i].getAttribute('value'));
          totalPrice.setAttribute('value',newPrice);

        }
    }


  }
    