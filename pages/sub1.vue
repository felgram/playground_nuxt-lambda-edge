<template>
  <div>
    <h1>Sub1</h1>
    <nav>
      <h2>Navigation</h2>
      <ul>
        <li><NuxtLink to="/sub2">Sub2</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { NuxtLink } from '#components';

console.log('[sub1.vue] setup')

onMounted(() => {
  console.log('[sub1.vue] mounted')
})
</script>
