<script setup lang="ts">

const inputValue = ref('')

const login = () => {
    // Implement login logic here
    console.log(inputValue.value);
}
</script>

<template>
    <div>
        <h1 class="bg-primary">{{ $t('greeting') }}</h1>
        <p>{{ $t('join-us') }}</p>

        <BaseButton @click="login">
            <IconLogIn />
            {{ $t('login') }}
        </BaseButton>
        <BaseInput v-model="inputValue" :label="$t('password-label')" type="number" :placeholder="$t('password-placeholder')" />
        <LangSwitcher />
    </div>
</template>