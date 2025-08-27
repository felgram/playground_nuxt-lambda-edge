<template>
  <div>
    <h1>Sub2</h1>
    <nav>
      <h2>Navigation</h2>
      <ul>
        <li><NuxtLink to="/">Top</NuxtLink></li>
      </ul>
    </nav>
    <MyFirstComponent />
  </div>
</template>

<script lang="ts" setup>
import MyFirstComponent from '~/components/MyFirstComponent.vue';
import { NuxtLink } from '#components';

console.log('[sub2.vue] setup')

onMounted(() => {
  console.log('[sub2.vue] mounted')
})
</script>
