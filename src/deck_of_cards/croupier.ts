class Croupier {
    name: string
    deck: Card[]
    bet: number
    hand: number

    constructor(name: string, deck: Card[]) {
        this.name = name
        this.deck = deck
    }

    // distribute cards
    distribute(nb?: number): Card[] {

    }

    // reveal croupier cards
    revealSelf(): Card[] {

    }

    // distribute cards to the croupier
    distributeSelf(): Card[] {

    }
}