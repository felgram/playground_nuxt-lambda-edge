<template>
  <div>
    <h1>Top</h1>
    <nav>
      <h2>Navigation</h2>
      <p>Hosted by Edge function</p>
      <ul>
        <li><NuxtLink to="/sub1">Sub1</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { NuxtLink } from '#components';

console.log('[index.vue] setup')

onMounted(() => {
  console.log('[index.vue] mounted')
})
</script>
