
//  let list = ["ajjaj"];
//  list.unshift("kdshcfif");
function addToDoItem() {
    let list = ["ajjaj"];
    let inp = todo.value;
    if(inp.length == 0){
        alert("Please fill the input");
    } else{
        function unshift(){
            list.unshift(inp);
            console.log(list);
            return list;
        }        
    } 
    
    
}
  let arrToDo =  addToDoItem();
  console.log(arrToDo())
  
// function add(){
//     let inp = todo.value;
//     if(inp.length == 0){
//         alert("Please fill the input");
//     } else{ 
//         list.unshift(inp);
//         console.log(list)
//         return list;
//     }
//     console.log("list", list)
// }
// console.log(list);

