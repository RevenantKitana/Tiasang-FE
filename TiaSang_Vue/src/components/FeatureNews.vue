<template>
  <article class="feature-news" :data-date="news.date" :data-priority="news.priority" :data-category="news.category">
    <div class="feature-image bg-cover" :style="{ backgroundImage: `url('${news.image}')` }" aria-label="Ảnh nổi bật"></div>
    <div class="feature-copy">
      <h2 class="feature-title">{{ news.title }}</h2>
      <div class="feature-text">
        <p class="feature-lead">{{ news.lead }}</p>
        <p class="feature-info">{{ news.category }} • {{ news.date }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'FeatureNews',
  props: {
    news: {
      type: Object,
      required: true,
      default: () => ({
        date: '',
        priority: '',
        category: '',
        image: '',
        title: '',
        lead: ''
      })
    }
  }
}
</script>

<style scoped>
/* Styles handled by global styles.css */
</style>
