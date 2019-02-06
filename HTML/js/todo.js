let list = [];
//adding new to do to existing list
function addToDoItem() {
    if(todo.value == ''){
        alert("Please fill the input");
        return;
    } 
    list.unshift(todo.value);
    todo.value = '';    
    main.innerHTML = '';  
    createItem();   
} 
//creating todo div
function createItem(){ 
    for(let i = 0; i < list.length; i++) {         
        var container = document.createElement('div');
        var i1 = document.createElement('i');
        i1.className = ("far fa-check-square fa-2x green-color active");
        i1.style.flex = 1;
        i1.addEventListener("click", completedItem);
        var i2 = document.createElement('i');
        i2.className = ("far fa-trash-alt f2ed fa-2x");    
        i2.addEventListener("click", del);
        container.innerHTML = '';
        container.className = ('main')
        var sp = document.createElement('div');
        sp.className = ('text green-color')
        var text = document.createTextNode(list[i]);
        sp.appendChild(text) ;
        container.appendChild(i1);
        container.appendChild(sp);
        container.appendChild(i2);
        main.appendChild(container);
    }
}
//will change the color of chacked item after clicking on it
//bincoler = true means that list is active
let binColor = true;
function completedItem(){
    if(binColor){
        this.style.color = "red";        
        this.nextSibling.style.color = "red";
        this.nextSibling.className.replace("active","complated");
        this.nextSibling.style.textDecoration = "line-through";
        binColor = false;
        return;
    } else {
        this.style.color = "green";
        this.nextSibling.style.color = "green";
        this.nextSibling.className.replace("complated","active");
        this.nextSibling.style.textDecoration = "none";
        binColor = true;
    }  
}
//deleteing from todo list
function del(){
    this.parentNode.remove(this.parentNode);
    let text = this.previousSibling.innerHTML;
    for(let i =0; i<list.length; i++){
        if(list[i] == text){
            list.splice(i,1);
        }
    }
}
function completed(){
    let divs = document.getElementsByClassName(main);
    for(let i = 0; i<divs.length; i++){
        if(divs[i].classList.contains('complated')){
            divs[i].style.display = "block"
        } else {
            divs[i].style.display = "none"
        }

    }
    
}