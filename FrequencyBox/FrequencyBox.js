class FrequencyBox {
    TimeStart
    TimeEnd
    Count
    constructor() {
        this.Count = 0    
    }
    Cycle () {
        if ( ! this.TimeStart ) {
            this.TimeStart = new Date()
        }
        this.TimeEnd = new Date()
        this.Count++
    }
    Get() {
        return ( ( ( this.TimeEnd - this.TimeStart ) / this.Count ) / 1000 ).toFixed( 2 ) 
    }
}

class Display {
    Display
    constructor() {
        this.Display = document.createElement('p')
        this.Display.innerText = 0
    }
    Set( num ) {
        this.Display.innerText = num
    }
    Get() {
        return this.Display
    }
}

class Button {
    Button
    constructor( name, action ) {
        this.Button = document.createElement('button')
        this.Button.innerText = name
        this.Button.onclick = action
        return this.Button
    }
}

class Box {
    Box
    Display
    Button
    FrequencyBox
    constructor( name ) {
        this.FrequencyBox = new FrequencyBox()
        this.Box = document.createElement('div')
        this.Display = new Display()
        this.Button = new Button(
            name ? name: 'noname', () => {
                this.FrequencyBox.Cycle()
                this.Display.Set( this.FrequencyBox.Get() )
            }
        )
        this.Box.append(
            this.Display.Get(),
            this.Button
        )
        this.Box.style.display = 'grid'
        this.Box.style.gridTemplateColumns = '1fr 1fr'
        this.Box.style.margin = '3px'
        this.Box.style.maxWidth = '300px'
        return this.Box
    }
}

