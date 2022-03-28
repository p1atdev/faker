import { faker } from "@faker-js/faker"
import { NameType, Names } from "../types/name"
import { Name } from "../model/name"

import { toRomaji, toKana } from "wanakana"
import { SugoiNamae } from "./sugoi"

faker.setLocale("ja")

// export const generateName = (): NameType => {
//     const name = Gimei.name()
//     const kanjiName = name.kanji()
//     const kanaName = name.hiragana()
//     const romajiName = toRomaji(kanaName)

//     return {
//         kanji: {
//             first: kanjiName.split(" ")[0],
//             last: kanjiName.split(" ")[1],
//         },
//         kana: {
//             first: kanaName.split(" ")[0],
//             last: kanaName.split(" ")[1],
//         },
//         romaji: {
//             first: romajiName.split(" ")[0],
//             last: romajiName.split(" ")[1],
//         },
//     }
// }

export const generateNames = async (): Promise<NameType[]> => {
    const url = "https://namegen.jp/en?country=japan&firstname_cond=fukumu&lastname_cond=fukumu&sex="

    const maleHtml = await fetch(url + "male").then((res) => res.text())
    const femaleHtml = await fetch(url + "female").then((res) => res.text())

    const sugoi = new SugoiNamae()

    const maleNames = sugoi.getNames(maleHtml)
    const femaleNames = sugoi.getNames(femaleHtml)

    const names = [...maleNames, ...femaleNames]

    return names

    // shuffle names
    // const shuffledNames = names.sort(() => Math.random() - 0.5)

    // return shuffledNames
}
export const generateEmail = faker.internet.email
export const generatePassword = faker.internet.password
export const generatePhone = faker.phone.phoneNumber
export const generateAddress = faker.address.streetAddress

export const generateCreditCardNumber = faker.finance.creditCardNumber
export const generateCreditCardCVV = faker.finance.creditCardCVV
export const generateCreditCardExpiry = () => {
    const date = faker.date.future()
    // format to Mo/yo (ex. 01/20)
    return `${date.getMonth() + 1}/${date.getFullYear() % 100}`
}

export const generateFutureDate = faker.date.future
