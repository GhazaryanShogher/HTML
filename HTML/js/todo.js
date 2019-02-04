let list = [];
//adding new to do to existing list
function addToDoItem() {
    if(todo.value == ''){
        alert("Please fill the input");
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
    i1.className = ("far fa-check-square fa-2x green-color");
    i1.addEventListener("click", changeColor);
    var i2 = document.createElement('i');
    i2.className = ("far fa-trash-alt f2ed fa-2x");
    container.innerHTML = '';
        container.className = ('main')
        var sp = document.createElement('div');
        sp.className = ('text')
        var text = document.createTextNode(list[i]);
        sp.appendChild(text) ;
        container.appendChild(i1);
        container.appendChild(sp);
        container.appendChild(i2);
        main.appendChild(container);
    }
}
//will change the color of chacked item after clicking on it
function changeColor(){
   this.style.color = "red";

}
//deleteing from todo list
function del(){

}