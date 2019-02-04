let list = [];
function addToDoItem() {
    if(todo.value == ''){
        alert("Please fill the input");
    } 
    list.unshift(todo.value);
    todo.value = '';    
    main.innerHTML = '';  
    createItem();   
} 
console.log('list',list);

function createItem(){ 
    for(let i = 0; i < list.length; i++) {         
    var container = document.createElement('div');
    container.innerHTML = '';
        container.className = ('main')
        var sp = document.createElement('span');
        var text = document.createTextNode(list[i]);
        sp.appendChild(text) ;
        container.appendChild(sp);
        main.appendChild(container);
    }
}