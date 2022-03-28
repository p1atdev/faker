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
            month: expiry.getMonth().toString().padStart(2, "0"),
            year: expiry.getFullYear().toString().slice(-2),
        }
        this.cvv = cvv
        this.provider = "VISA"
    }
}
