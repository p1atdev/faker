<script lang="ts" setup>
const showDropDown = ref(false)
</script>

<template>
    <div flex mb-6 gap-x-4 items-center>
        <NuxtLink to="/">
            <a p-2 text-xl font-semibold rounded hover="shadow -translate-y-1" transition="all"> 個人情報生成 </a>
        </NuxtLink>

        <div
            mx-8
            p-2
            text-lg
            relative
            cursor="pointer"
            @mouseenter="showDropDown = true"
            @mouseleave="showDropDown = false"
        >
            <div relative>一覧</div>

            <div v-if="showDropDown" absolute p-4 w-lg rounded shadow bg-white z-50>
                <div gap-y-4 gap-x-4 md="grid grid-cols-2">
                    <NuxtLink to="/address">
                        <a>住所</a>
                    </NuxtLink>
                    <NuxtLink to="/phone">
                        <a>電話番号</a>
                    </NuxtLink>
                    <NuxtLink to="/credit-card">
                        <div>クレジットカード番号</div>
                    </NuxtLink>
                    <NuxtLink to="/name">
                        <div>名前</div>
                    </NuxtLink>
                    <NuxtLink to="/advanced">
                        <div>高度な生成</div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
