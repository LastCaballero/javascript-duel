let dc = ( what ) => document.createElement( what )

class SmartBox {
    Box
    constructor( what ){
        this.Box = dc( what )
    }
    Get(){
        return this.Box
    }
}

class ActionBox{
    constructor( what, action ){
        super( what )
        Object.assign( this.Box, action)
    }
}

class NumberBox{
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

class HourBox{
    constructor(what){
        super(what)
        this.Cycle()
    }
    Cycle(){
        setInterval(()=>{ this.Box.innerHTML = new Date().getHours() },1000)
    }
}

class MinuteBox{
    constructor(what){
        super(what)
        this.Cycle()
    }
    Cycle(){
        setInterval(()=>{ this.Box.innerHTML = new Date().getMinutes() },1000)
    }
}

class SecondBox{
    constructor(what){
        super(what)
        this.Cycle()
    }
    Cycle(){
        setInterval(()=>{ this.Box.innerHTML = new Date().getSeconds() },1000)
    }
}