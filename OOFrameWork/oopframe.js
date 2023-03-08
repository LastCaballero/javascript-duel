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

