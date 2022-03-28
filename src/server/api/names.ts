import type { IncomingMessage, ServerResponse } from "http"
import { NameType } from "~~/src/types/name"
import { generateNames } from "../../utils/faker"

export default async (req: IncomingMessage, res: ServerResponse): Promise<NameType[]> => {
    const names = await generateNames()

    // res.end(names)

    // console.log(names)

    return names
}
