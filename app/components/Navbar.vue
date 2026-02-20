<script setup lang="ts">
const route = useRoute()

const isActive = (name: string): boolean => {
    console.log(route.name?.toString())
    return route.name?.toString().includes(name, 0) || false
}
</script>

<template>
    <div>
        <ul class="md:hidden fixed bottom-0 left-0 flex grow w-screen bg-base-100 shadow-top p-2 text-base-content">
            <li 
                class="flex-1 rounded-lg"
                :class="{'bg-primary text-primary-content' : isActive('index') }"
            >
                <NuxtLink class="flex flex-col items-center justify-center gap-2 py-3" to="/">
                    <IconHouse />
                    <span>Accueil</span>
                </NuxtLink>
            </li>
            <li 
                class="flex-1 rounded-lg"
                :class="{'bg-primary text-primary-content' : isActive('carte') }"
            >
                <NuxtLink class="flex flex-col items-center justify-center gap-2 py-3" to="/carte">
                    <IconMapPin />
                    <span>Carte</span>
                </NuxtLink>
            </li>
            <li class="flex-1 rounded-lg" :class="{'bg-primary text-primary-content' : isActive('ajouter') }">
                <NuxtLink class="flex flex-col items-center justify-center gap-2 py-3" to="/ajouter">
                    <IconPlus />
                    <span>Ajouter</span>
                </NuxtLink>
            </li>
            <li class="flex-1 rounded-lg" :class="{'bg-primary text-primary-content' : isActive('decouvrir') }">
                <NuxtLink class="flex flex-col items-center justify-center gap-2 py-3" to="/decouvrir">
                    <IconCompass />
                    <span>Découvrir</span>
                </NuxtLink>
            </li>
            <li class="flex-1 rounded-lg" :class="{'bg-primary text-primary-content' : isActive('menu') }">
                <NuxtLink class="flex flex-col items-center justify-center gap-2 py-3" to="/menu">
                    <IconMenu />
                    <span>Menu</span>
                </NuxtLink>
            </li>
        </ul>
        <div class="hidden md:flex fixed top-0 left-0 w-screen bg-primary text-primary-content items-center justify-between py-3 font-bold">
            <div>Cleanwalk</div>
            <ul class="flex">
                <li :class="{'bg-base-100 text-base-content' : isActive('index')}">
                    <NuxtLink class="px-10 py-3 rounded-lg" to="/">
                        Accueil
                    </NuxtLink>
                </li>
                <li :class="{'bg-base-100 text-base-content' : isActive('carte')}">
                    <NuxtLink class="px-10 py-3 rounded-lg" to="/carte">
                        Carte
                    </NuxtLink>
                </li>
                <li :class="{'bg-base-100 text-base-content' : isActive('ajouter')}">
                    <NuxtLink class="px-10 py-3 rounded-lg" to="/ajouter">
                        Ajouter cleanwalk
                    </NuxtLink>
                </li>
                <li :class="{'bg-base-100 text-base-content' : isActive('decouvrir')}">
                    <NuxtLink class="px-10 py-3 rounded-lg" to="/decouvrir">
                        Découvrir
                    </NuxtLink>
                </li>
                <li :class="{'bg-base-100 text-base-content' : isActive('menu')}">
                    <NuxtLink class="px-10 py-3 rounded-lg" to="/menu">
                        Menu
                    </NuxtLink>
                </li>
            </ul>
            <div>Mon Compte</div>
        </div>
    </div>
</template>