function Create(tag,color,text,background){
    this.tag = tag;
    this.color = color;
    this.text = text;
    this.background = background;
    this.create = function(){
        var elem = document.createElement('this.tag');
        elem.style.color = this.color;
        elem.innerHTML = this.text;
        elem.style.background = this.background;
    }

}