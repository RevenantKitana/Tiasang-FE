<template>
  <div class="sponsor-block">
    <div class="sponsor-image bg-cover" :style="{ backgroundImage: `url('${sponsor.image}')` }" aria-label="Quảng cáo"></div>
    <div class="sponsor-content">
      <div class="sponsor-details">
        <h4 class="sponsor-title">{{ sponsor.title }}</h4>
        <div class="sponsor-text">
          <p v-for="(text, index) in sponsor.texts" :key="index">{{ text }}</p>
        </div>
      </div>
      <div class="sponsor-meta">
        <span class="sponsor-meta-icon" aria-hidden="true"></span>
        <span class="sponsor-meta-text">Ads • Được tài trợ</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SponsorBlock',
  props: {
    sponsor: {
      type: Object,
      required: true,
      default: () => ({
        image: '',
        title: '',
        texts: []
      })
    }
  }
}
</script>

<style scoped>
/* Styles handled by global styles.css */
</style>
