<template>
    <video autoplay="" loop="" muted="" width="100%">
        <source src="https://cdn.jsdelivr.net/gh/love-ziji/CDN/rainbow0.mp4" type="video/mp4">
    </video>
</template>

<script>
    export default {
        name: "BgVideo"
    }
</script>

<style scoped>
    video{
        position: absolute;
        top: 1px;
        z-index: -1;
    }
</style>