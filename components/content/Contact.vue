<template>
  <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
    <div>
      <h2 class="font-medium text-2xl text-gray-800 dark:text-gray-300">
        <ContentSlot
          :use="$slots.title"
          unwrap="p"
        >
          Missing Title
        </ContentSlot>
      </h2>
      <p class="text-lg leading-relaxed text-gray-500 dark:text-gray-400 mt-3">
        <ContentSlot
          :use="$slots.description"
          unwrap="p"
        >
          Missing #description slot
        </ContentSlot>
      </p>
      <div class="mt-5">
        <div class="flex items-center mt-2 space-x-2 text-gray-600 dark:text-gray-400">
          <UIcon
            v-if="$slots.address"
            class="text-gray-400 w-4 h-4"
            name="i-uil-map-marker"
          />
          <p class="text-lg leading-relaxed text-gray-500 dark:text-gray-300">
            <ContentSlot
              v-if="$slots.address"
              :use="$slots.address"
              unwrap="p"
            />
          </p>
        </div>
        <div class="flex items-center mt-2 space-x-2 text-gray-600">
          <UIcon
            v-if="$slots.mail"
            class="text-gray-400 w-4 h-4"
            name="i-uil-envelope"
          />
          <ContentSlot
            :use="$slots.mail"
            unwrap="p"
          >
            Missing #mail slot
          </ContentSlot>
        </div>
        <div class="flex items-center mt-2 space-x-2 text-gray-600">
          <UIcon
            v-if="$slots.contact"
            class="text-gray-400 w-4 h-4"
            name="i-uil-phone"
          />
          <ContentSlot
            v-if="$slots.contact"
            :use="$slots.contact"
            unwrap="p"
          />
        </div>
      </div>
    </div>
    <div>
      <Contactform />
    </div>
  </div>
</template>
