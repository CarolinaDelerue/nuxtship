
<template>
  <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
    <div>
      <h2 class="font-medium text-2xl text-gray-800">Contact Astroship</h2>
      <p class="text-lg leading-relaxed text-slate-500 mt-3">
        Have something to say? We are here to help. Fill up the form or send
        email or call phone.
      </p>
      <div class="mt-5">
        <div class="flex items-center mt-2 space-x-2 text-gray-600">
          <span class="text-gray-400 w-4 h-4 i-uil-map-marker"> </span>
          <span>1734 Sanfransico, CA 93063</span>
        </div>
        <div class="flex items-center mt-2 space-x-2 text-gray-600">
          <span class="text-gray-400 w-4 h-4 i-uil-envelope"> </span>
          <NuxtLink to="delerue.carolina@gmail.com"> delerue.carolina@gmail.com </NuxtLink>
        </div>
        <div class="flex items-center mt-2 space-x-2 text-gray-600">
          <span class="text-gray-400 w-4 h-4 i-uil-phone"> </span>
          <NuxtLink to="tel:+1 (987) 4587 899"> +1 (987) 4587 899 </NuxtLink>
        </div>
      </div>
    </div>
    <div>
      <Contactform />
    </div>
  </div>
</template>
