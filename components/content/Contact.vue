
<template>
  <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
    <div>
      <h2 class="font-medium text-2xl text-gray-800">
        <ContentSlot
          :use="$slots.title"
          unwrap="p"
        />
      </h2>
      <p class="text-lg leading-relaxed text-slate-500 mt-3">
        <ContentSlot
          :use="$slots.description"
          unwrap="p"
        />
      </p>
      <div class="mt-5">
        <div class="flex items-center mt-2 space-x-2 text-gray-600">
          <Icon
            class="text-gray-400 w-4 h-4"
            name="uil:map-marker"
          />
          <p class="text-lg justify leading-relaxed text-slate-500">
            <ContentSlot
              :use="$slots.address"
              unwrap="p"
            />
          </p>
        </div>
        <div class="flex items-center mt-2 space-x-2 text-gray-600">
          <Icon
            class="text-gray-400 w-4 h-4"
            name="uil:envelope"
          />
          <ContentSlot
            v-if="$slots.mail"
            :use="$slots.mail"
            unwrap="p"
          />
        </div>
        <div class="flex items-center mt-2 space-x-2 text-gray-600">
          <Icon
            class="text-gray-400 w-4 h-4"
            name="uil:phone"
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
