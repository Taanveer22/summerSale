let totalPrice = 0;
function clickBtn(target) {

    // product name passing
    const selectedProductContainer = document.getElementById('selected-products');
    const productName = target.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = productName;
    selectedProductContainer.appendChild(li);

  
    // product price acessing
    const price = target.parentNode.parentNode.childNodes[5].innerText.split(" ")[0];
    totalPrice = parseInt(totalPrice) + parseInt(price);
    document.getElementById('total-price').innerText = totalPrice;



}

