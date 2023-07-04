<script setup lang="ts">
const form: any = ref()
const result: any = ref()
</script>

<template>
  <form
    ref="form"
    action="#"
    method="POST"
    class="needs-validation"
    novalidate
  >
    <UInput
      type="hidden"
      name="access_key"
      value="YOUR_ACCESS_KEY_HERE"
    >
      <UInput
        type="checkbox"
        class="hidden"
        style="display:none"
        name="botcheck"
      />
      <div class="mb-5">
        <UInput
          type="text"
          placeholder="Full Name"
          required
          class="w-full px-4 py-3 placeholder:text-gray-800 dark:placeholder:text-gray-200 rounded-md outline-none focus:ring-2 border-gray-300 focus:border-gray-600 ring-gray-100 focus:ring-gray-500 dark:focus:ring-gray-200"
          name="name"
        >
          <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
            Please provide your full name.
          </div>
        </UInput>
      </div>
      <div class="mb-5">
        <label
          for="email_address"
          class="sr-only"
        >Email Address</label>
        <UInput
          id="email_address"
          type="email"
          placeholder="Email Address"
          name="email"
          required
          class="w-full px-4 py-3 placeholder:text-gray-800 dark:placeholder:text-gray-200 rounded-md outline-none focus:ring-2 border-gray-300 focus:border-gray-600 ring-gray-100 focus:ring-gray-500 dark:focus:ring-gray-200"
        >
          <div class="empty-feedback text-red-400 text-sm mt-1">
            Please provide your email address.
          </div>
          <div class="invalid-feedback text-red-400 text-sm mt-1">
            Please provide a valid email address.
          </div>
        </UInput>
      </div>
      <div class="mb-5">
        <UTextarea
          name="message"
          required
          placeholder="Your Message"
          class="w-full px-4 mb-6 py-3 placeholder:text-gray-800 dark:placeholder:text-gray-200 rounded-md outline-none h-36 focus:ring-2 border-gray-300 focus:border-gray-600 ring-gray-100 focus:ring-gray-500 dark:focus:ring-gray-200"
        />
        <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
          Please enter your message.
        </div>
      </div>
      <UButton
        type="submit"
        size="lg"
        block
        color="black"
      >
        Send Message
      </UButton>
      <div
        ref="result"
        class="mt-3 text-center"
      />
    </UInput>
  </form>
</template>

<style lang="postcss">
.invalid-feedback,
.empty-feedback {
  display: none;
}

.was-validated :placeholder-shown:invalid~.empty-feedback {
  display: block;
}

.was-validated :not(:placeholder-shown):invalid~.invalid-feedback {
  display: block;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}
</style>
