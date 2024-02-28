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
                <NuxtLink
                    class="bg-primary grid place-items-center relative w-max border-t-2 border-t-white/25 text-white font-semibold py-2 px-3 text-xs rounded-md"
                    to="/">
                    Together We Thrive</NuxtLink>
                <button
                    class="flex items-center gap-2 px-3 py-2 text-xs border-t-2 border-t-white/10 text-white bg-slate-600 rounded-md"
                    type="button">
                    <UIcon name="i-heroicons-magnifying-glass-20-solid" class="w-4 h-4" dynamic />
                    <span class="flex-auto mr-5">Quick search...</span>
                    <span class="font-semibold opacity-50">
                        <UKbd size="sm">Ctrl</UKbd>
                        <UKbd size="sm">K</UKbd>
                    </span>
                </button>
            </div>
        </main>
        <div class="w-full h-screen">
            <span class="bg-primary text-white dark:text-white block w-max p-3 font-bold rounded-tl-2xl rounded-br-2xl">About Us</span>
            <div class="mt-5 flex items-start gap-10">
                <div class="relative w-max">
                    <div class="absolute inset-1 rounded-lg bg-primary opacity-75 blur"></div>
                    <div
                        class="w-60 h-60 relative grid place-items-center bg-white dark:bg-gray-900 border-2 rounded-md border-primary">
                        <UIcon name="i-simple-icons-linux" class="w-40 h-40 hover:text-primary" dynamic />
                    </div>
                </div>
                <div class="space-y-3">
                    <span class="relative flex h-6 w-6">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-6 w-6 bg-primary"></span>
                    </span>
                    <h3 class="text-2xl font-bold mb-2">What is JiFOSS?</h3>
                    <p>JiFOSS (Jinggo Free Open Source Software) is a vibrant community passionate about open-source
                        software, IT careers, and programming. Join us, whether you're new to IT or an experienced
                        developer, and unlock the power of open source through collaboration and growth!</p>
                        <div class="flex items-center gap-3">
                            <UIcon name="i-simple-icons-linuxmint" class="w-5 h-5" dynamic/>
                            <UIcon name="i-simple-icons-archlinux" class="w-5 h-5" dynamic/>
                            <UIcon name="i-cib-mxlinux" class="w-5 h-5" dynamic/>
                            <UIcon name="i-mdi-manjaro" class="w-5 h-5" dynamic/>
                            <UIcon name="i-cib-fedora" class="w-5 h-5" dynamic/>
                        </div>
                </div>
            </div>
    </div>
</Container></template>
