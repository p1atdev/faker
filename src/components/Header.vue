<script lang="ts" setup>
const showDropDown = ref(false)
</script>

<template>
    <div mt-4 flex mb-6 gap-x-4 items-center>
        <NuxtLink to="/">
            <a>
                <div text-xl font-semibold linkybtn>個人情報生成</div>
            </a>
        </NuxtLink>

        <div
            mx-8
            text-lg
            relative
            cursor="pointer"
            group
            @mouseenter="showDropDown = true"
            @mouseleave="showDropDown = false"
        >
            <div relative>一覧</div>

            <div v-if="showDropDown" absolute p-4 w-lg border="b-2 x-2" bg-white z-50 class="-translate-x-6">
                <div gap-y-4 gap-x-4 class="flex flex-col" lg="grid grid-cols-2 p-2">
                    <NuxtLink to="/address">
                        <a><div linkybtn>住所</div></a>
                    </NuxtLink>
                    <NuxtLink to="/phone">
                        <a><div linkybtn>電話番号</div></a>
                    </NuxtLink>
                    <NuxtLink to="/email">
                        <a> <div linkybtn>メールアドレス</div></a>
                    </NuxtLink>
                    <NuxtLink to="/credit-card">
                        <a><div linkybtn>クレジットカード番号</div></a>
                    </NuxtLink>
                    <NuxtLink to="/name">
                        <a><div linkybtn>名前</div></a>
                    </NuxtLink>
                    <NuxtLink to="/advanced">
                        <a><div linkybtn>高度な生成</div></a>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
