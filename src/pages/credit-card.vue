<script lang="ts" setup>
import { CreditCard } from "../model/credt-card"
import {
    generateCreditCardNumber,
    generateCreditCardCVV,
    generateFutureDate,
    // generateNames,
} from "../utils/faker"

const cards = ref<CreditCard[]>([])

// for (let i = 0; i < 10; i++) {
//     const number = generateCreditCardNumber()
//     const cvv = generateCreditCardCVV()
//     const expiry = generateCreditCardExpiry()
//     const name = generateName()

//     console.log(name)

//     cards.value.push(new CreditCard(`${name.romaji.last} ${name.romaji.first}`, number, expiry, cvv))
// }

const generateCredtCards = async () => {
    const { data: names } = await useFetch("/api/names")

    cards.value = names.value.map((name) => {
        const number = generateCreditCardNumber()
        const cvv = generateCreditCardCVV()
        const expiry = generateFutureDate()

        return new CreditCard(`${name.romaji.last} ${name.romaji.first}`, number, expiry, cvv)
    })
}

await generateCredtCards()
</script>

<template>
    <div>
        <div text-2xl font-semibold>クレジットカード番号生成</div>

        <div my-4>
            <button
                px-4
                py-2
                border-2
                border-slate-800
                hover="rounded-md bg-slate-800 text-slate-100"
                transition="all duration-100 ease-in-out"
                active="translate-y-1"
                @click="
                    () => {
                        generateCredtCards()
                    }
                "
            >
                <div flex>再生成</div>
            </button>
            <!-- オプション欄 -->
        </div>

        <div py-8 w-full>
            <div grid="~ cols-1 md:cols-2 xl:cols-3">
                <div v-for="card of cards" :key="card.number">
                    <div>
                        <CreditCardView :card="card" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
