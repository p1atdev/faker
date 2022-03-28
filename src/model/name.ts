import { Names, NameType } from "../types/name"

export class Name {
    names: Names

    constructor(names: Names) {
        this.names = names
    }

    length(): number {
        return this.names.name.length
    }

    get(index: number): NameType {
        const kanji = this.names.name[index][0]
        const kana = this.names.name[index][1]
        const romaji = this.names.name[index][2]
        return {
            kanji: {
                first: kanji.split(" ")[0],
                last: kanji.split(" ")[1],
            },
            kana: {
                first: kana.split(" ")[0],
                last: kana.split(" ")[1],
            },
            romaji: {
                first: romaji.split(" ")[0],
                last: romaji.split(" ")[1],
            },
        }
    }

    getNames(): NameType[] {
        const names: NameType[] = []
        for (let i = 0; i < this.length(); i++) {
            names.push(this.get(i))
        }

        console.log(names)
        return names
    }
}
