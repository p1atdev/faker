<script lang="ts" setup>
import { NameType } from "../types/name"
// import { generateNames } from "../utils/faker"

const names = ref<NameType[]>([])

// generate 10 names
// for (let i = 0; i < 10; i++) {
//     names.value.push(await generateName())
// }

const generateNames = async () => {
    const { data } = await useFetch("/api/names")

    names.value = data.value
}

await generateNames()
</script>

<template>
    <div>
        <div text-2xl font-semibold>名前生成</div>

        <div my-4>
            <!-- オプション -->
            <button
                btn
                @click="
                    () => {
                        generateNames()
                    }
                "
            >
                <div>再生成</div>
            </button>
        </div>

        <div my-4 w-full h-full text-lg>
            <table table-auto w-full divide-y>
                <thead>
                    <tr divide-x>
                        <th>番号</th>
                        <th>漢字</th>
                        <th>ひらがな</th>
                        <th>ローマ字</th>
                    </tr>
                </thead>

                <tbody v-for="(name, index) of names" :key="name.kana.first + name.kana.last">
                    <tr text-center divide-x>
                        <td>
                            {{ index }}
                        </td>
                        <td>
                            <span>{{ name.kanji.last }}</span>
                            &nbsp;
                            <span>{{ name.kanji.first }}</span>
                        </td>
                        <td>
                            <span>{{ name.kana.last }}</span>
                            &nbsp;
                            <span>{{ name.kana.first }}</span>
                        </td>
                        <td>
                            <span>{{ name.romaji.last }}</span>
                            &nbsp;
                            <span>{{ name.romaji.first }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
