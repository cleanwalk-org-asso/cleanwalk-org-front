<script setup lang="ts">
import type { PointExpression } from 'leaflet'

const { isMobile } = useDevice()
const cleanwalkStore = useCleanwalkStore()
const { cleanwalksTab } = storeToRefs(cleanwalkStore)

const zoom = ref(6)
const center = ref<PointExpression>([47.5, 2.333333])

watch(
  isMobile,
  () => {
    zoom.value = isMobile.value ? 5 : 6
  },
  { immediate: true },
)

onMounted(() => {
  cleanwalkStore.getAllCleanwalks()
})
</script>

<template>
  <LMap
    v-model:zoom="zoom"
    v-model:center="center"
    :min-zoom="isMobile ? 5 : 6"
    :max-zoom="isMobile ? 5 : 6"
    :use-global-leaflet="false"
  >
    <LTileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" />
    <MapCleanwalkMarker v-for="cleanwalk in cleanwalksTab" :key="cleanwalk.id" :cleanwalk="cleanwalk" />
  </LMap>
</template>
