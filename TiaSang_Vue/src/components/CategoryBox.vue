<template>
  <div class="category-box">
    <h3 class="box-title">{{ title }}</h3>
    <div class="box-content">
      <article class="box-feature">
        <div class="box-feature-image bg-cover" :style="{ backgroundImage: `url('${feature.image}')` }" aria-label="Ảnh tin nổi bật"></div>
        <div class="box-feature-text">
          <h4 class="box-feature-title">{{ feature.title }}</h4>
          <p class="box-feature-author">Tác giả: {{ feature.author }}</p>
          <p class="box-feature-lead">{{ feature.lead }}</p>
        </div>
        <div class="box-divider"></div>
      </article>

      <div class="other-news-list">
        <div v-for="(item, index) in otherNews" :key="index" class="other-news-item">
          <div class="other-media">
            <div class="other-image bg-cover" :style="{ backgroundImage: `url('${item.image}')` }" aria-label="Ảnh tin"></div>
          </div>
          <p class="other-title">{{ item.title }}</p>
        </div>
        <div v-if="otherNews.length > 0" class="box-divider"></div>
      </div>

      <div class="read-more">
        <span class="read-more-text">Xem thêm</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryBox',
  props: {
    title: {
      type: String,
      required: true
    },
    feature: {
      type: Object,
      required: true,
      default: () => ({
        image: '',
        title: '',
        author: '',
        lead: ''
      })
    },
    otherNews: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
/* Styles handled by global styles.css */
</style>
