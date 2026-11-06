<script setup lang="ts">
import type { PointExpression } from 'leaflet'
import type { SingleCleanwalk } from '@/interfaces/cleanwalkInterface'

const props = defineProps<{ cleanwalk: SingleCleanwalk }>()

const center = ref<PointExpression>([props.cleanwalk.pos_lat, props.cleanwalk.pos_long])
const zoom = ref(13)
</script>

<template>
  <LMap v-model:zoom="zoom" v-model:center="center" :min-zoom="5" :use-global-leaflet="false">
    <LTileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" />
    <MapCleanwalkMarker :cleanwalk="cleanwalk" />
  </LMap>
</template>
