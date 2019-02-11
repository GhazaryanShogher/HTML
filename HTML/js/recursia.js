function rec(num){
    if(num < 0) return 'Please insert a natural number';
    if(num == 0) return 1;
    if(num > 0) return num* rec(num-1);
}
console.log(rec(5));
console.log(rec(-4));