let dc = ( what ) => document.createElement( what )

class SmartBox {
    Box
    constructor( what ){
        this.Box = dc( what )
        this.Box.className = 'oo' + this.Box.tagName
    }
    Get(){
        return this.Box
    }
}

class ActionBox extends SmartBox{
    constructor( what, action ){
        super( what )
        Object.assign( this.Box, action)
    }
}

class NumberBox extends SmartBox{
    Number
    constructor( what, number ){
        super(what)
        this.Number = number
    }
    Up(){
        this.Number++
        this.Box.innerHTML = this.Number
    }
    Down(){
        this.Number--
        this.Box.innerHTML = this.Number
    }
}

class HourBox extends SmartBox{
    constructor(what){
        super(what)
        this.Cycle()
    }
    Cycle(){
        setInterval(()=>{ this.Box.innerHTML = new Date().getHours() },1000)
    }
}

class MinuteBox extends SmartBox{
    constructor(what){
        super(what)
        this.Cycle()
    }
    Cycle(){
        setInterval(()=>{ this.Box.innerHTML = new Date().getMinutes() },1000)
    }
}

class SecondBox extends SmartBox{
    constructor(what){
        super(what)
        this.Cycle()
    }
    Cycle(){
        setInterval(()=>{ this.Box.innerHTML = new Date().getSeconds() },1000)
    }
}