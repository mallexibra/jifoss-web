<template>
    <nav class="dark:bg-slate-900 dark:text-white dark:bg-slate-900/30 bg-white/30 z-50 backdrop-blur-sm font-poppins p-5 fixed top-0 left-0 right-0">
        <Container my-class="flex items-center justify-between">
            <div class="nav-brand">
                <h1 class="font-bold text-xl">JiFOSS</h1>
            </div>
            <div class="flex items-center gap-2">
                <ul class="flex items-center gap-3">
                    <li>
                        <NuxtLink class="block after:block after:bg-white after:w-0 after:h-[2px] after:rounded-md after:hover:w-full after:transition-[width] after:ease-in-out after:duration-300 px-2" to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="block after:block after:bg-white after:w-0 after:h-[2px] after:rounded-md after:hover:w-full after:transition-[width] after:ease-in-out after:duration-300 px-2" to="/">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="block after:block after:bg-white after:w-0 after:h-[2px] after:rounded-md after:hover:w-full after:transition-[width] after:ease-in-out after:duration-300 px-2" to="/">Our Team</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="block after:block after:bg-white after:w-0 after:h-[2px] after:rounded-md after:hover:w-full after:transition-[width] after:ease-in-out after:duration-300 px-2" to="/">Contact</NuxtLink>
                    </li>
                </ul>
                <span class="block w-[1px] h-7 rounded-md bg-white/30"></span>
                <UIcon :name="isDark ? 'i-material-symbols-sunny-rounded' : 'i-material-symbols-light-dark-mode'" @click="darkMode" class="w-5 h-5 cursor-pointer" dynamic/>
            </div>
        </Container>
    </nav>
</template>

<script lang="ts" setup>
    const isDark = ref(false)
    const colorMode = useColorMode()
    const darkMode = ()=>{
        isDark.value = !isDark.value;
        colorMode.preference = colorMode.value == "light" ? "dark" : "light";
    }
</script>
