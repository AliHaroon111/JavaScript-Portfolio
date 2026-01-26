// Example 1
document.getElementById("changeTextButton").addEventListener('click',  function ()  {

    let paragraph=  document.getElementById('myParagrapgh')
    // console.log(paragraph);
    paragraph.textContent = "Paragraph is changed"
    
    

    // // understanding you can uncomment and see
    // console.log(this);
    // if you use  --->   => keyword then 'this' keywrod point globally
    // or if you use ---> function  then 'this' point to it tell exaclty what btn you are talking
    // I was putting a screenshot in document name function or =>
    // // understanding you can uncomment and see
    
})


// Example 2
document.getElementById('highlightFirstCity').addEventListener('click', function(){

    let citiesList = document.getElementById("citiesList")
    // To highlight the first element here the question is how we access it--------->citiesList.firstElementChild
  console.log(citiesList.firstElementChild.classList.add("highlight"))
//   You can ahead and use-----> lastElementChild
})

//Example 3
document.getElementById('changeOrder').addEventListener('click', function(){
    let tochange=document.getElementById('cofeeType')
    tochange.textContent="Espresso"
    tochange.style.backgroundColor="brown"
    tochange.style.padding="5px"
})


// Example 4
document.getElementById('addNewItem').addEventListener('click', function(){
    
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"
    document.getElementById("shoppingList").appendChild(newItem)
})


// Example 5
document.getElementById("removeLastTask").addEventListener('click', function(){
    let remList = document.getElementById("taskList")
    remList.remove()
})