
class Container {
    container
    constructor(what){
        this.container = document.createElement(what)
    }
    Paint(){
        return this.container
    }
    UpDate(){
        
    }
}


class CounterButton extends Container{
    constructor(text, clickAction){
        super('button')
        this.container.innerHTML = text
        this.container.onclick = clickAction
    }
}

class CounterParagraph extends Container{
    num
    constructor(num){
        super('p')
        this.num = num
        this.container.innerHTML = this.num
    }
    Up(){
        this.num++
        this.container.innerHTML = this.num
    }
    Down(){
        this.num--
        this.container.innerHTML = this.num
    }   
}