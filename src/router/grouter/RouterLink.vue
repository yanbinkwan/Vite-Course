<template>
  <div @click="router.push({ path: to })">
    <slot></slot>
  </div>
</template>

<script setup>
import { useRouter } from "./index.js"

const router = useRouter()

let props = defineProps({
  to: { type: String, required: true }
})

</script>