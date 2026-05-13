const products = document.querySelectorAll('.panel')

function toggleOpen(){
  products.forEach(product => {
    if (product !== this){
      product.classList.remove('open');
      product.classList.remove('open-active');
    }
  });
  this.classList.toggle('open')
}



function toggleActive(e){
    console.log(e.propertyName)
    if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active')
    }
}



products.forEach(product => {product.addEventListener('click',toggleOpen) });
products.forEach(product => {product.addEventListener('transitionend',toggleActive) });