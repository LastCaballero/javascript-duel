
class SmartBox {
    Box
    constructor(what, vars){
        this.Box = document.createElement(what)
        Object.assign( this.Box, vars ) 
        this.Box.className = "oop" + this.Box.tagName 
    }
    Get(){
        return this.Box
    }
    
}

class ActionBox extends SmartBox {
    constructor( what, vars, actions ){
        super( what, vars )
        this.Enhance( actions )
    }
    Enhance( actions ){
        Object.assign( this.Box, actions )
    }
}

