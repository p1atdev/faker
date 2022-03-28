import CreditCardType from "credit-card-type"

export class CreditCard {
    name: string
    number: string
    expiry: {
        month: string
        year: string
    }
    cvv: string
    provider: string

    constructor(name: string, number: string, expiry: Date, cvv: string) {
        this.name = name
        this.number = number
        this.expiry = {
            month: (expiry.getMonth() + 1).toString().padStart(2, "0"),
            year: expiry.getFullYear().toString().slice(-2),
        }
        this.cvv = cvv
        this.provider = CreditCardType(number.substring(0, 4)).pop()?.type
    }
}
