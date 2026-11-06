import type { Map as LeafletMap } from 'leaflet'
import type { Cleanwalk } from '@/interfaces/cleanwalkInterface'

export function useCleanwalkMap() {
  const cleanwalkStore = useCleanwalkStore()
  const mapInstance = shallowRef<LeafletMap | null>(null)
  const selectedCleanwalk = ref<Cleanwalk | null>(null)
  const searchInput = ref('')

  const filteredCleanwalks = computed(() => {
    const search = searchInput.value.toLowerCase()
    if (!search) {
      return cleanwalkStore.cleanwalksTab
    }
    return cleanwalkStore.cleanwalksTab.filter(
      (cleanwalk) => cleanwalk.name.toLowerCase().includes(search) || cleanwalk.address.toLowerCase().includes(search),
    )
  })

  const setMapEvents = (map: LeafletMap) => {
    mapInstance.value = map
  }

  const setSelectedCleanwalk = (cleanwalkId: number) => {
    const cleanwalk = cleanwalkStore.cleanwalksTab.find((item) => item.id === cleanwalkId)
    if (cleanwalk) {
      selectedCleanwalk.value = cleanwalk
    }
  }

  const isPointVisible = (lat: number, lng: number) => mapInstance.value?.getBounds().contains([lat, lng]) ?? false

  const mapClick = () => {
    selectedCleanwalk.value = null
  }

  return {
    mapInstance,
    filteredCleanwalks,
    selectedCleanwalk,
    searchInput,
    setMapEvents,
    setSelectedCleanwalk,
    isPointVisible,
    mapClick,
  }
}
