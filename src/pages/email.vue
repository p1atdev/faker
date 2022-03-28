<script lang="ts" setup>
import { generateEmail } from "../utils/faker"

const emails = ref([])

emails.value = [...Array(10).keys()].map(() => {
    const email = generateEmail()
    return email
})
</script>

<template>
    <div>
        <div text-2xl font-semibold>メールアドレス生成</div>

        <div v-for="email of emails" :key="email">
            <div>
                {{ email }}
            </div>
        </div>
    </div>
</template>
