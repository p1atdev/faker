<script lang="ts" setup>
import { CreditCard } from "../model/credt-card"
import { useParallax } from "@vueuse/core"
import { CSSProperties } from "vue"

type Props = {
    card: CreditCard
}

defineProps<Props>()

const showFront = ref(true)

const target = ref(null)
</script>

<template>
    <div
        relative
        my-6
        w-90
        h-56
        scale-105
        hover="scale-110"
        transition="all duration-150 ease-in-out"
        inline-block
        font="credit semibold"
    >
        <Transition name="card">
            <div
                v-if="showFront"
                absolute
                py-4
                px-2
                w-full
                h-full
                rounded-lg
                bg-gradient-to-r
                from-sky-500
                to-cyan-500
                shadow="lg hover:xl"
            >
                <div relative w-full h-full class="text-slate-200">
                    <div px-2 flex items-center>
                        <div w-full></div>
                        <button @click="showFront = false">
                            <div i-akar-icons-arrow-counter-clockwise />
                        </button>
                    </div>

                    <div px-2 absolute inset-x-0 bottom-0>
                        <!-- カード番号 -->
                        <div flex>
                            <div
                                py-1
                                px-2
                                my-2
                                text-2xl
                                rounded-md
                                hover="bg-white bg-opacity-25"
                                transition="colors opacity duration-150 ease-in-out"
                                cursor="pointer"
                                select="all"
                                flex
                                whitespace-nowrap
                                @click="() => {}"
                            >
                                <!-- 4桁ごとに区切るけど謎に-があったらそれで区切る -->
                                <div v-if="card.number.split('-').length > 1" flex gap-x-3>
                                    <div v-for="block in card.number.split('-')">
                                        <span>
                                            {{ block }}
                                        </span>
                                    </div>
                                </div>

                                <div v-else flex gap-x-3>
                                    <!-- 4桁ごとに区切る -->
                                    <div v-for="number of card.number.match(/.{4}/g)">
                                        <span>{{ number }}</span>
                                    </div>
                                </div>
                            </div>
                            <div w-full />
                        </div>

                        <!-- 期限 -->
                        <div flex px-2>
                            <div mt-2 mr-1 w-6 text-xs>
                                <div>GOOD</div>
                                <div>THRU</div>
                            </div>
                            <div>
                                <div flex text-xs>
                                    <div w="8" text="right">MONTH</div>
                                    <div mx-1 w="2" select="none">/</div>
                                    <div w="8" text="left">YEAR</div>
                                </div>
                                <div
                                    flex
                                    text-lg
                                    rounded
                                    hover="bg-white bg-opacity-25"
                                    transition="colors opacity duration-150 ease-in-out"
                                >
                                    <div w="8" text="right">
                                        {{ card.expiry.month }}
                                    </div>
                                    <div mx-1 w="2" select="none">/</div>
                                    <div w="8" text="left">
                                        {{ card.expiry.year }}
                                    </div>
                                </div>
                            </div>
                            <div w-full></div>
                        </div>

                        <div flex>
                            <!-- 名前 -->
                            <div mt-2 text-lg>
                                <div px-2 text-xs>NAME</div>
                                <div flex>
                                    <p
                                        alt="Name"
                                        px-2
                                        select="all"
                                        rounded
                                        hover="bg-white bg-opacity-25"
                                        transition="colors opacity duration-150 ease-in-out"
                                        whitespace-nowrap
                                    >
                                        {{ card.name.toUpperCase() }}
                                    </p>
                                    <div w-full />
                                </div>
                            </div>
                            <div w-full />
                            <div px-2 text-5xl>
                                <!-- プロバイダロゴ -->
                                <div v-if="card.provider == 'VISA'">
                                    <div i-logos-visa />
                                </div>
                                <div v-else-if="card.provider == 'MASTERCARD'">
                                    <div i-logos-mastercard />
                                </div>
                                <div v-else-if="card.provider == 'AMEX'">
                                    <div i-logos-amex />
                                </div>
                                <div v-else-if="card.provider == 'DISCOVER'">
                                    <div i-logos-discover />
                                </div>
                                <div v-else-if="card.provider == 'JCB'">
                                    <div i-logos-jcb />
                                </div>
                                <div v-else-if="card.provider == 'UNIONPAY'">
                                    <div i-logos-unionpay />
                                </div>
                                <div v-else-if="card.provider == 'MAESTRO'">
                                    <div i-logos-maestro />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                v-else
                absolute
                w-full
                h-full
                rounded-lg
                text-xl
                bg-gradient-to-r
                from-sky-500
                to-cyan-500
                shadow="lg hover:xl"
                cursor="pointer"
                @click="showFront = true"
            >
                <div mt-5 h-7 bg-black></div>
                <div px-4 mt-7 h-10 flex>
                    <div w-24></div>
                    <div w-full h-full>
                        <div text-sm opacity-50>CVV</div>
                        <div w-full h-full bg-gray-100>
                            <div p-1 flex>
                                <div w-full />
                                <div p-1 px-2 text-black font-italic rounded hover="bg-slate-200">
                                    {{ card.cvv }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.card-enter-active,
.card-leave-active {
    transition: all 0.3s ease-out;
}

.card-enter-from {
    @apply opacity-0 rotate-x-180;
}
.card-leave-to {
    @apply opacity-0 rotate-x-180;
}
</style>
