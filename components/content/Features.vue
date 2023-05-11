<script setup lang="ts">

const items = [
  {
    title: 'Bring Your Own Framework',
    description:
      'Build your site using React, Svelte, Vue, Preact, web components, or just plain ol\' HTML + JavaScript.',
    icon: 'bx:bxs-briefcase',
  },
  {
    title: '100% Static HTML, No JS',
    description:
      'Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.',
    icon: 'bx:bxs-window-alt',
  },
  {
    title: 'On-Demand Components',
    description:
      'Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.  ',
    icon: 'bx:bxs-data',
  },
  {
    title: 'Broad Integration',
    description:
      'Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.',
    icon: 'bx:bxs-bot',
  },
  {
    title: 'SEO Enabled',
    description:
      'Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!',
    icon: 'bx:bxs-file-find',
  },
  {
    title: 'Community',
    description:
      'Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.',
    icon: 'bx:bxs-user',
  },
]
</script>

<template>
  <div class="container">
    <div class="mt-16 md:mt-0">
      <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        <ContentSlot
          :use="$slots.title"
          unwrap="p"
        />
      </h2>
      <p class="text-lg mt-4 text-slate-600">
        <ContentSlot
          :use="$slots.description"
          unwrap="p"
        />
      </p>
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
      <ContentSlot
        :use="$slots.extra"
        unwrap="p"
      />
    </div>
  </div>
</template>
