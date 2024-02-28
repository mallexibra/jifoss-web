<template>
    <Container>
        <main class="min-h-screen flex items-center justify-center text-center flex-col gap-5 relative">
            <div class="w-52 h-52 bg-gray-300 opacity-10 blur-3xl absolute top-16 left-16 rounded-full"></div>
            <div class="w-52 h-52 bg-primary z-10 opacity-50 blur-3xl absolute bottom-16 right-16 rounded-full"></div>
            <h1 class="text-4xl font-bold">Embrace Open Source, Empower IT: Your Community for Collaboration and Growth!
            </h1>
            <p>Join our community to explore the world of open source, IT careers, and programming. Whether you're a
                beginner or an expert, collaborate with us to excel in IT. Get involved now!</p>
                <div class="flex gap-3 justify-center">
                    <NuxtLink class="bg-primary grid place-items-center relative w-max border-t-2 border-t-white/25 text-white font-semibold py-2 px-3 text-xs rounded-md" to="/">
                        Together We Thrive</NuxtLink>
                        <button class="flex items-center gap-2 px-3 py-2 text-xs border-t-2 border-t-white/10 text-white bg-slate-600 rounded-md" type="button">
                            <UIcon name="i-heroicons-magnifying-glass-20-solid" class="w-4 h-4" dynamic/>
                            <span class="flex-auto mr-5">Quick search...</span>
                            <span class="font-semibold opacity-50">Ctrl + K</span>
                        </button>
                </div>
        </main>
        <div class="w-full h-screen"></div>
    </Container></template>
