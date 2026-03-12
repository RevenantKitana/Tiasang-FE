<template>
  <nav class="categories-frame sticky-nav" :class="{ 'sticky-hidden': isHidden }" aria-label="Menu chính">
    <a href="/" aria-label="Trang chủ">
      <img src="/image/image-6.png" alt="" class="home-icon" loading="lazy">
    </a>
    
    <span 
      v-for="(category, index) in categories" 
      :key="index"
      class="category-item"
      @click="selectCategory(category)"
    >
      {{ category }}
    </span>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isHidden: false,
      categories: [
        'Chuyên đề',
        'Khoa học - Công nghệ',
        'Giáo dục',
        'Sức khỏe',
        'Du lịch',
        'Giải trí',
        'Nền tảng & Kiến tạo'
      ]
    }
  },
  mounted() {
    this.setupIntersectionObserver();
  },
  methods: {
    setupIntersectionObserver() {
      const footerCategories = document.querySelector('.footer-categories');
      
      if (footerCategories) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            this.isHidden = entry.isIntersecting;
          });
        }, {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        });
        
        observer.observe(footerCategories);
      }
    },
    selectCategory(category) {
      this.$emit('category-selected', category);
    }
  }
}
</script>

<style scoped>
/* Styles handled by global styles.css */
</style>
