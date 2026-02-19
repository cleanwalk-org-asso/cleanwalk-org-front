<script setup lang="ts">

const inputValue = ref('')

const login = () => {
    // Implement login logic here
    console.log(inputValue.value);

}
</script>
<template>
    <div>
        <h1 class="bg-primary">Welcome to Cleanwalk!</h1>
        <p>Join us in making our communities cleaner and greener.</p>

        <BaseButton @click="login">
            <IconLogIn />
            Login
        </BaseButton>
        <BaseInput v-model="inputValue" label="super" type="number" placeholder="super mot de passe" />
        
    </div>
</template>