class Player {
    name: string
    deck: Card[]
    bet: number
    hand: number

    constructor(name: string, deck: Card[]) {
        this.name = name
        this.deck = deck
    }

    // put the player's bet
    put(bet: number) {

    }

    // double player's bet
    doubleBet() {

    }

    // ask cards
    askCards(): void {

    }

    // get cards
    getCards(): void {

    }

    // stop cards distribution
    stop(): void {

    }

    // get out of the game if the hand is > 21
    kick(): void {

    }

    // pay the player
    pay(): void {

    }

    // collect player cards
    collectCards(): Card[] {

    }
}