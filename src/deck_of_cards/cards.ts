

class Card {
    type: CARD_TYPE 
    value: CARD_NUMBER
    family: CARD_FAMILY
    color: Color
  
    constructor(type: abbreviated_type, value: CARD_NUMBER, family: CARD_FAMILY, color: Color) {
        this.value = value
        this.color = color
        this.family = family

        switch(type){
            case "C": this.type = "CLUB"
            case 'H': this.type = "HEART"
            case "S": this.type = "SPADE"
            case "D": this.type = "DIAMOND"
            break;
        }
    }
  
    putDown() {

    }

    draw() {

    }

    reveal() {

    }
}