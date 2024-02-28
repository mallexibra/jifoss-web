<template>
    <div class="max-w-4xl mx-auto" :class="myClass">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
    defineProps({
        myClass: {
            type: String,
            required: false
        }
    });
</script>
