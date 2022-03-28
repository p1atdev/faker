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
            ["linkybtn", "border-b-2 border-transparent hover:border-slate-900 active:translate-y-1 transition-all"],
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
