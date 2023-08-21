
function clickBtn(target) {

    // product name passing
    const selectedProductContainer = document.getElementById('selected-products');
    const productName = target.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = productName;
    selectedProductContainer.appendChild(li);

    const price = target.parentNode.childNodes[2].innerText;
    console.log(price);

    // total pricing passing
    // const totalPriceElement = document.getElementById('product-price');
    // const totalPrice = totalPriceElement.innerText;
    // totalPriceElement.innerText = toatal;





}