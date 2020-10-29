class Card {
    type: CARD_TYPE
    value: CARD_WEIGHT
    family: CARD_FAMILY
    color: Color
    visible: boolean

    constructor(type: abbreviated_type, value: CARD_WEIGHT, family: CARD_FAMILY, color: Color) {
        this.value = value
        this.color = color
        this.family = family
        this.visible = this.visible

        switch (type) {
            case "C": this.type = "CLUB"
            case 'H': this.type = "HEART"
            case "S": this.type = "SPADE"
            case "D": this.type = "DIAMOND"
                break;
        }
    }

    // put down the card on the table
    putDown(): void {

    }

    // get the card
    draw(): Card {

    }

    // reveal the card
    reveal(): Card {

    }
}