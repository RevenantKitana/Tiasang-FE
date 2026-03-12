<template>
  <section class="hero-banner">
    <div class="header-background">
      <div class="banner-content">
        <h1 class="banner-title">{{ title }}</h1>
        <div class="banner-line"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroBanner',
  props: {
    title: {
      type: String,
      default: 'Nền tảng - Kiến tạo'
    }
  }
}
</script>

<style scoped>
/* Styles handled by global styles.css */
</style>
