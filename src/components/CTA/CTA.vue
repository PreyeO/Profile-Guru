<template>
  <a href ={CV} download target="_blank" rel="noreferrer">Download CV</a>
</template>

<script setup>
import { ref } from 'vue';

const CV = ref('src/assets/Images/preye.pdf');
</script>