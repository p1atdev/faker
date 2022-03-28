// import { JSDOM } from "jsdom"
import { parse } from "node-html-parser"
import { NameType } from "../types/name"

export class SugoiNamae {
    getNames(html: string): NameType[] {
        // const parser = new DOMParser()

        // console.log(html)

        // const doc = new JSDOM(html).window.document
        // const doc = parser.parseFromString(html, "text/html")
        const doc = parse(html)

        const rows = doc.getElementsByTagName("tr")

        const names: NameType[] = Array.from(rows)
            .map((row) => {
                // if row is header
                if (row.querySelectorAll("th").length > 0) {
                    return null
                }

                const romaji = row
                    .querySelector("td.name")
                    .innerHTML.split(" ")
                    .map((name) => this.fixRomaji(name))
                // console.log("ローマ字:", romaji)
                const kanji = (() => {
                    // console.log(row.innerHTML)
                    return ["未実装", "苗字"]
                    // const namae = row.innerHTML.split(" ")
                    // console.log("名前:", namae)
                    // // const lastNameDoc = new JSDOM(namae[0]).window.document
                    // // const firstNameDoc = new JSDOM(namae[1]).window.document
                    // // const lastNameDoc = parser.parseFromString(namae[0], "text/html")
                    // // const firstNameDoc = parser.parseFromString(namae[1], "text/html")
                    // const lastNameDoc = parse(namae[0])
                    // const firstNameDoc = parse(namae[1])

                    // const lastName = Array.from(lastNameDoc.querySelectorAll("span.kanji-with-meaning"))
                    //     .map((span) => span.innerHTML)
                    //     .join()
                    // const firstName = Array.from(firstNameDoc.querySelectorAll("span.kanji-with-meaning"))
                    //     .map((span) => span.innerHTML)
                    //     .join()

                    // return [lastName, firstName]
                })()
                // console.log("漢字:", kanji)
                const hiragana = row.querySelector("td.pron a").innerHTML.split(" ")

                // console.log("ひらがな:", hiragana)

                // console.log(kanji)

                return {
                    kanji: {
                        first: kanji[1],
                        last: kanji[0],
                    },
                    kana: {
                        first: hiragana[1],
                        last: hiragana[0],
                    },
                    romaji: {
                        first: romaji[1],
                        last: romaji[0],
                    },
                }
            })
            .filter((name): name is NameType => {
                return name !== null && name !== undefined
            })

        return names
    }

    fixRomaji(name: string): string {
        return name.replace("Ū", "U").replace("ū", "u").replace("Ō", "O").replace("ō", "o").replace("'", "n")
    }
}
