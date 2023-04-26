
<script setup lang="ts">
const pricing = [
  {
    name: "Personal",
    price: "Free",
    popular: false,
    features: [
      "Lifetime free",
      "Up to 3 users",
      "Unlimited Pages",
      "Astro Sub domain",
      "Basic Integrations",
      "Community Support",
    ],
    button: {
      text: "Get Started",
      link: "/",
    },
  },
  {
    name: "Startup",
    price: {
      monthly: "$19",
      annual: "$16",
      discount: "10%",
      original: "$24",
    },
    popular: true,
    features: [
      "All Free Features",
      "Up to 20 users",
      "20 Custom domains",
      "Unlimited Collaborators",
      "Advanced Integrations",
      "Priority Support",
    ],
    button: {
      text: "Get Started",
      link: "#",
    },
  },
  {
    name: "Enterprise",
    price: "Custom",
    popular: false,
    features: [
      "All Pro Features",
      "Unlimited Custom domains",
      "99.99% Uptime SLA",
      "SAML & SSO Integration",
      "Dedicated Account Manager",
      "24/7 Phone Support",
    ],
    button: {
      text: "Contact us",
      link: "/contact",
    },
  },
];
</script>

<template>
<!-- <Layout title="Pricing">
  <Container> -->
    <SectionHead>
      <Fragment slot="title">Pricing</Fragment>
      <Fragment slot="desc"
        >Simple & Predictable pricing. No Surprises.</Fragment
      >
    </SectionHead>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
    <!-- <Pricing v-for="item in pricing" :key="item.name" :plan="item" /> -->
    <div v-for="item in pricing" :key="item.name">
        <div
            class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md">
            <div class="text-center">
                <h4 class="text-lg font-medium text-gray-400">{{ item.name }} </h4>
                <p class="mt-3 text-4xl font-bold text-black md:text-4xl">
                    {{
                    item.price && typeof item.price === "object"
                    ? item.price.monthly
                    : item.price
                    }}
                </p>
            </div>
            <ul class="grid mt-8 text-left gap-y-4">
                <li v-for="feature in item.features" :key="feature" class="flex items-start gap-3 text-gray-800">
                    <Tick class="w-6 h-6" />
                    <span> {{ feature }} </span>
                </li>
            </ul>
            <div class="flex mt-8">
                <AppLink to="/"> Applink
                </AppLink>
            </div>
        </div>
    </div>
  </div>
  <!-- </Container>
</Layout> -->

</template>