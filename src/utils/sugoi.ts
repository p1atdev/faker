// import { JSDOM } from "jsdom"
import { parse } from "node-html-parser"
import { NameType } from "../types/name"

export class SugoiNamae {
    getNames(html: string): NameType[] {
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

                const kanji = (() => {
                    const blocks = row
                        .querySelector("td.name-in-japanese")
                        .innerHTML.split(" ")
                        .filter((block) => {
                            return block.length > 0 && block !== "\n"
                        })

                    // console.log("ブロック:", blocks)

                    // "\n"で終了してるところまでが前半、残りが後半
                    const firstHalfLastIndex = blocks.findIndex((block) => block.endsWith("\n"))

                    const firstHalf = blocks.slice(0, firstHalfLastIndex + 1).join(" ")
                    const lastHalf = blocks.slice(firstHalfLastIndex + 1).join(" ")

                    // console.log("前半:", firstHalf)
                    // console.log("後半:", lastHalf)

                    // 前半と後半からそれぞれ正規表現で<span></span>で囲まれてる部分を排除
                    const lastName = firstHalf.replace(/<span.*?>/g, "").replace(/<\/span>/g, "")
                    const firstName = lastHalf.replace(/<span.*?>/g, "").replace(/<\/span>/g, "")

                    return [firstName, lastName]
                })()

                const hiragana = row.querySelector("td.pron a").innerHTML.split(" ")

                return {
                    kanji: {
                        first: kanji[0],
                        last: kanji[1],
                    },
                    kana: {
                        first: hiragana[0],
                        last: hiragana[1],
                    },
                    romaji: {
                        first: romaji[0],
                        last: romaji[1],
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
