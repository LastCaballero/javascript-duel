
class Container {
    container
    constructor(){}
    Get(){
        return this.container
    }
}


class CounterButton extends Container{
    container
    constructor(text, clickAction){
        super()
        this.container = document.createElement('button')
        this.container.innerHTML = text
        this.container.onclick = clickAction
    }
}

class CounterParagraph extends Container{
    container
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
}