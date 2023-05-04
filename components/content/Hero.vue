<template>
    <main class="container grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
        <div class="py-6 md:order-1 hidden md:block">
            <img src="/assets/hero.png" alt="Astronaut in the air" class="w-full h-full" />
        </div>
        <div>
            <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
              <ContentSlot :use="$slots.title" unwrap="p" />
            </h1>
            <p class="text-lg mt-4 text-slate-600 max-w-xl">
              <ContentSlot :use="$slots.description" unwrap="p" />
            </p>
            <div class="mt-6 flex flex-col sm:flex-row gap-3">
                <AppLink to="https://web3templates.com/templates/astroship-starter-website-template-for-astro"
                    target="_blank"
                    class="flex gap-1 items-center justify-center"
                    rel="noopener">
                    <Icon class="h-5 w-5 text-white" name="download" />
                    Download for Free
                </AppLink>
                <AppLink sizes="lg" rel="noopener" to="https://github.com/surjithctly/astroship"
                    class="flex gap-1 items-center justify-center "
                    target="_blank">
                    <Icon class="h-5 w-5 text-white" name="github" />
                    GitHub Repo
                </AppLink>
            </div>
        </div>
    </main>
</template>
