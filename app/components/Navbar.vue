<script setup lang="ts">
const route = useRoute()

const isActive = (name: string): boolean => {
    console.log(route.name?.toString())
    return route.name?.toString().includes(name, 0) || false
}
</script>

<template>
    <div class="z-500 fixed">
        <ul class="lg:hidden fixed bottom-0 left-0 flex grow w-screen bg-base-100 shadow-top p-2 text-base-content">
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
        <div class="fixed w-screen hidden lg:flex items-center justify-between px-8 py-4 bg-primary text-primary-content font-bold">
            <NuxtLink to="/">
                <img src="../assets/logo.svg" alt="logo cleanwalk.org">
            </NuxtLink>
            <ul class="flex items-center gap-3">
                <li class="rounded-lg" :class="{'bg-base-100 text-base-content' : isActive('index')}">
                    <NuxtLink class="block px-5 py-3" to="/">
                        Accueil
                    </NuxtLink>
                </li>
                <li class="rounded-lg" :class="{'bg-base-100 text-base-content' : isActive('carte')}">
                    <NuxtLink class="block px-5 py-3" to="/carte">
                        Carte
                    </NuxtLink>
                </li>
                <li class="rounded-lg" :class="{'bg-base-100 text-base-content' : isActive('ajouter')}">
                    <NuxtLink class="block px-5 py-3" to="/ajouter">
                        Ajouter cleanwalk
                    </NuxtLink>
                </li>
                <li class="rounded-lg" :class="{'bg-base-100 text-base-content' : isActive('decouvrir')}">
                    <NuxtLink class="block px-5 py-3" to="/decouvrir">
                        Découvrir
                    </NuxtLink>
                </li>
                <li class="rounded-lg" :class="{'bg-base-100 text-base-content' : isActive('menu')}">
                    <NuxtLink class="block px-5 py-3" to="/menu">
                        Menu
                    </NuxtLink>
                </li>
            </ul>

            <div class="flex gap-8">
                <NuxtLink to="/">Se connecter</NuxtLink>
                <NuxtLink to="/">S'inscrire</NuxtLink>
            </div>
        </div>
    </div>
</template>