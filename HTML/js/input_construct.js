//creating element with class
class Element {
    constructor(tag,color,text,background){
        this.tag = tag;
        this.color = color;
        this.text = text;
        this.background = background;
    }
    elemCreate(){
        var elem = document.createElement(this.tag);
        elem.style.color = this.color;
        elem.innerHTML = this.text;
        elem.style.background = this.background;
        elem.className = 'sizes';
        container.appendChild(elem);
    }

}
//call
function creator(){
    let tag1 = content.value;
    let color1 = color.value; 
    let text1 = text.value;
    let background1 = fon.value;
    var elemen = new Element(tag1,color1,text1,background1);
    elemen.elemCreate();
 }
// function Create(tag,color,text,background){
//     this.tag = tag;
//     this.color = color;
//     this.text = text;
//     this.background = background;
//     this.create = function(){
//         var elem = document.createElement(this.tag);
//         elem.style.color = this.color;
//         elem.innerHTML = this.text;
//         elem.style.background = this.background;
//         elem.className = 'sizes';
//         container.appendChild(elem);
//     }
// }
// function Creator(tag,color,text,background){
//     Create.call(this,tag,color,text,background);
// }