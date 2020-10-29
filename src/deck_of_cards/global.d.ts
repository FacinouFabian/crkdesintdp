type Global_Deck = {
    length: number
    cards_types: DECK_TYPES
    cards_values: CARDS_NUMBERS[]
    families: DECK_FAMILIES
    colors: Color
}

type CARDS_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
type CARD_WEIGHT = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type abbreviated_type = "C" | "H" | "S" | "D"
type Color = "red" | "black"
type CARD_TYPE = "CLUB" | "HEART" | "SPADE" | "DIAMOND"
type CARD_FAMILY = "ACE" | "JOKER" | "KING" | "KNAVE" | "LADY" | "NONE"

declare enum DECK_TYPES {
    CLUB,
    HEART,
    SPADE,
    DIAMOND
}

declare enum DECK_FAMILIES {
    ACE,
    JOKER,
    KING,
    KNAVE,
    LADY,
    NONE
}