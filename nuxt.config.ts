import { defineNuxtConfig } from "nuxt3"
import transformerDirective from "@unocss/transformer-directives"

export default defineNuxtConfig({
    meta: {
        title: "Vitesse Nuxt 3",
        link: [
            {
                rel: "icon",
                type: "image/png",
                href: "/nuxt.png",
            },
        ],
    },
    buildModules: ["@vueuse/nuxt", "@unocss/nuxt", "@pinia/nuxt"],
    vueuse: {
        ssrHandlers: true,
    },
    unocss: {
        uno: true,
        attributify: true,
        preflight: true,
        icons: {
            scale: 1.2,
        },
        shortcuts: [
            [
                "btn",
                "px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50",
            ],
        ],
        webFonts: {
            provider: "google",
            fonts: {
                credit: ["Inconsolata", "Inconsolata:400,600"],
            },
        },
        transformers: [transformerDirective({})],
    },
    srcDir: "./src",
})
