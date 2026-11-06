<script setup lang="ts">
import type { Cleanwalk, SingleCleanwalk } from '@/interfaces/cleanwalkInterface'
import blueMapIcon from '~/assets/blue-map.svg'
import greenMapIcon from '~/assets/green-map.svg'

// N'est utilisé que dans des cartes rendues côté navigateur.
defineProps<{ cleanwalk: Cleanwalk | SingleCleanwalk }>()
const emit = defineEmits<{ select: [] }>()
</script>

<template>
  <LMarker :lat-lng="[cleanwalk.pos_lat, cleanwalk.pos_long]" @click="emit('select')">
    <LIcon
      :icon-size="[25, 41]"
      :icon-anchor="[12, 41]"
      :icon-url="cleanwalk.host?.role === 'ASSOCIATION' ? greenMapIcon : blueMapIcon"
    />
  </LMarker>
</template>
