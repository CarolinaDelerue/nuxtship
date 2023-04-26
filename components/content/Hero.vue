<!-- ---
import { Picture } from "@astrojs/image/components";
import heroImage from "assets/hero.png";
import Link from "@components/ui/link.astro";
import { Icon } from "astro-icon";
--- -->
<template>
    <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
        <div class="py-6 md:order-1 hidden md:block">
            <img src="/assets/hero.png" alt="Astronaut in the air" class="w-full h-full" />
        </div>
        <div>
            <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
                Marketing website done with Astro
            </h1>
            <p class="text-lg mt-4 text-slate-600 max-w-xl">
                Astroship is a starter template for startups, marketing websites & landing
                pages.<wbr /> Built with Astro.build and TailwindCSS. You can quickly create
          any website with this starter.
            </p>
            <div class="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="https://web3templates.com/templates/astroship-starter-website-template-for-astro" target="_blank"
                    class="flex gap-1 items-center justify-center px-5 py-2.5 rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200  bg-black text-white hover:bg-gray-800 border-transparent"
                    rel="noopener">
                    <Icon class="text-white w-5 h-5" name="bx:bxs-cloud-download" />

                    Download for Free
                </a>
                <a size="lg" rel="noopener" href="https://github.com/surjithctly/astroship"
                    class="flex gap-1 items-center justify-center bg-white border-2 border-black hover:bg-gray-100 text-black px-5 py-2.5 rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 "
                    target="_blank">
                    <Icon class="text-black w-4 h-4" name="bx:bxl-github" />
                    GitHub Repo
                </a>
            </div>
        </div>
    </main>
</template>