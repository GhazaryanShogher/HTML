fetch("https://jsonplaceholder.typicode.com/todos")
.then(response=> response.json() 
    .then(data=>{
    for(let i=0; i<5; i++){
        for(key in data[i]){
        let lis = document.createElement('li');
        var text= document.createTextNode(data[i][key]);
        obj.appendChild(lis);
        lis.appendChild(text);  
        }        
    }
})
)
.catch(error=>console.log(error))