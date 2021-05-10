function randMax(max) { 
    return Math.trunc(1E9 * Math.random()) % max; 
}

var reel = {
    symbols: [ "X", "Y", "Z", "W", "$", "*", "<", "@" ],
    spine(){
        if (this.position == null){
            this.position = randMax(this.symbols.length - 1);
        }
        this.position = randMax(this.position.length -1 )
    },display(){
        if (this.position == null){
            this.position = randMax(this.symbols.length - 1);
        }return this.symbols[this.position];
    }
}

var slotmachine = {
    reels :[
        Object.create(reel),
        Object.create(reel),
        Object.create(reel)
    ],
    sping(){
        this.reels.forEach(function spinReel(reel){
            reel.spin();
            }
        );
    },
    display(){
        var lines =[]
        for(let linepos = -1;linepos<1;linepos++){
            function getSlot(reel){
                var slot = Object.create(reel);
                slot.positon = randMax(this.symbols.length - 1);
                return reel.display.call(slot);
            }
        }
    }
}