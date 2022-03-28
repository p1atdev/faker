export interface Names {
    err?: number
    name: Array<string[]>
}

export interface NameType {
    kanji: {
        first: string // 太郎
        last: string // 田中
    }
    kana: {
        first: string // たろう
        last: string // たなか
    }
    romaji: {
        first: string // Tarou
        last: string // Tanaka
    }
}
