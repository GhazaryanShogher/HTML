fetch("https://jsonplaceholder.typicode.com/todos")
.then(response=> response.json() 
    .then(data=>{
    for(let i=0; i<5; i++){
        console.log(data[i])
        let lis = document.createElement('li');
        for(key in data[i]){
            lis.innerHTML += data[i][key];
        obj.appendChild(lis);
        }        
    }
})
)
.catch(error=>console.log(error))