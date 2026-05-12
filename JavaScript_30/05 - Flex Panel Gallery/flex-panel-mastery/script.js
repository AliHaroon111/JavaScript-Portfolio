const products = document.querySelectorAll('.panel')

function toggleOpen(){
  this.classList.toggle('open')
}

function toggleActive(e){
    console.log(e.propertyName)
    if(propertyName.includes('flex')){
        this.classList.toggle('open-active')
    }
}



products.forEach(product => {product.addEventListener('click',toggleOpen) });
products.forEach(product => {product.addEventListener('transitionend',toggleActive) });