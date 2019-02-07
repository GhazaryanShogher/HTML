//adding new to do to existing list
function addToDoItem() {
    if(todo.value == ''){
        alert("Please fill the input");
        return;
    } 
    createItem(todo.value); 
    todo.value = '';      
} 
//creating todo div
function createItem(val){        
    var container = document.createElement('div');
    var i1 = document.createElement('i');
    i1.className = ("far fa-check-square fa-2x green-color");
    i1.style.flex = 1;
    i1.addEventListener("click", completedItem);
    var i2 = document.createElement('i');
    i2.className = ("far fa-trash-alt f2ed fa-2x");    
    i2.addEventListener("click", del);
    container.innerHTML = '';
    container.className = ('main')
    var sp = document.createElement('div');
    sp.className = ('text green-color')
    var text = document.createTextNode(val);
    sp.appendChild(text) ;
    container.appendChild(i1);
    container.appendChild(sp);
    container.appendChild(i2);
    main.insertBefore(container,main.childNodes[0]);
}
//change the color of chacked item after clicking on it
function completedItem(){
    if(this.classList.contains('green-color')){
        this.classList.add("red-color");
        this.classList.remove("green-color");
        this.nextSibling.classList.add("red-color");
        this.nextSibling.classList.remove("green-color");
    } else {  
        this.classList.add("green-color");
        this.classList.remove("red-color");
        this.nextSibling.classList.add("green-color");
        this.nextSibling.classList.remove("red-color");
    }  
}
//deleteing from todo list
function del(){
    this.parentNode.remove(this.parentNode);
}
// show done list
function completed(){
    let divs = document.getElementsByTagName('i');
    for(let i = 0; i<divs.length; i++){
        if(divs[i].classList.contains('green-color')){
            divs[i].parentNode.style.display = "none"
        } 
        else if(divs[i].classList.contains('red-color')){
            divs[i].parentNode.style.display = "flex"
        } 
    }    
}
// show active list
function active(){
    let divs = document.getElementsByTagName('i');
    for(let i = 0; i<divs.length; i++){
        if(divs[i].classList.contains('red-color')){
            divs[i].parentNode.style.display = "none"
        } 
        else if(divs[i].classList.contains('green-color')){
            divs[i].parentNode.style.display = "flex"
        } 
    }    
}
//show all items
function showAll(){
    let divs = document.getElementsByTagName('i');
    for(let i = 0; i<divs.length; i++){
        divs[i].parentNode.style.display = "flex"
    }    
}