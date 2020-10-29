class Croupier {
    name: string
    bet: number
    hand: Card[]

    constructor(name: string) {
        this.name = name
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

    draw(): Card {

    }
}