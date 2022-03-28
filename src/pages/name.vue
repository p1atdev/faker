<script lang="ts" setup>
import { NameType } from "../types/name"
// import { generateNames } from "../utils/faker"

const names = ref<NameType[]>([])

// generate 10 names
// for (let i = 0; i < 10; i++) {
//     names.value.push(await generateName())
// }

const { data } = await useFetch("/api/names")

names.value = data.value
</script>

<template>
    <div>
        <div text-2xl font-semibold>名前生成</div>

        <div v-for="name of names" :key="name.kana.first + name.kana.last">
            <div>{{ name.kanji.first }} {{ name.kanji.last }}</div>
        </div>
    </div>
</template>
