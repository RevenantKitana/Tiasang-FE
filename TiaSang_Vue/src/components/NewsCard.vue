<template>
  <div class="news-unit" :data-date="news.date" :data-priority="news.priority" :data-category="news.category">
    <div class="news-image bg-cover" :style="{ backgroundImage: `url('${news.image}')` }" aria-label="Ảnh bài viết"></div>
    <div class="news-details">
      <div class="news-content">
        <h3 class="news-title">{{ news.title }}</h3>
        <p class="news-text">{{ news.text }}</p>
        <p class="news-author">Tác giả: {{ news.author }}</p>
        <p class="news-meta">
          <span class="meta-date">{{ news.date }}</span> • 
          <span class="meta-priority">{{ news.priorityText }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
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
        text: '',
        author: '',
        priorityText: ''
      })
    }
  }
}
</script>

<style scoped>
/* Styles handled by global styles.css */
</style>
