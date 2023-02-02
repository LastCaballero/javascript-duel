
class Container {
    container
    constructor(){}
    Paint(){
        return this.container
    }
}


class CounterButton extends Container{
    constructor(text, clickAction){
        super()
        this.container = document.createElement('button')
        this.container.innerHTML = text
        this.container.onclick = clickAction
    }
}

class CounterParagraph extends Container{
    num
    constructor(num){
        super()
        this.container = document.createElement('p')
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