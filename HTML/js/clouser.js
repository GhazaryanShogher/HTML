function addCount() {
    let num = 1;
    function incr(){
      return num++;
    }
    return incr;
  }
  let incr =  addCount();
  console.log(incr());