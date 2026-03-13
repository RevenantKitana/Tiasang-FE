<template>
  <footer class="footer">
    <div class="footer-line-top"></div>

    <nav class="footer-categories">
      <img src="/image/image-6.png" alt="Home Icon" class="footer-home-icon">
      <span 
        v-for="(category, index) in categories" 
        :key="index"
        class="footer-category-item"
        @click="selectCategory(category)"
      >
        {{ category }}
      </span>
    </nav>

    <div class="footer-content">
      <div class="footer-line"></div>

      <div class="footer-nav-section">
        <div class="footer-logo-wrapper">
          <img src="/image/Logo.png" alt="TiaSang Logo" class="footer-logo">
        </div>

        <div class="footer-navigation">
          <a href="https://vnexpress.net" class="footer-nav-link">Trở lại Vnexpress</a>
          <div class="footer-nav-divider"></div>
          <a href="/about" class="footer-nav-link">Giới thiệu Tia Sáng</a>
          <div class="footer-nav-divider"></div>
          <a href="/rss" class="footer-nav-link">Tia Sáng RSS</a>
          <div class="footer-nav-divider"></div>

          <div class="footer-social">
            <span class="footer-social-label">Social</span>
            <div class="footer-social-icons">
              <a href="https://facebook.com/tiasang" class="social-icon" aria-label="Facebook">
                <div class="social-icon-bg"></div>
              </a>
              <a href="https://youtube.com/tiasang" class="social-icon" aria-label="Youtube">
                <div class="social-icon-bg"></div>
              </a>
              <a href="https://tiasang.vnexpress.net" class="social-icon" aria-label="Link">
                <div class="social-icon-bg"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-line"></div>

      <div class="footer-info">
        <div class="footer-info-col1">
          <div class="footer-info-text">
            <p class="footer-brand">Tia Sáng</p>
            <p class="footer-tagline">Chuyên trang tri thức của VnExpress</p>
          </div>
          <p class="footer-editor">Tổng biên tập: {{ editor }}</p>
        </div>

        <div class="footer-info-col2">
          <p v-for="(info, index) in contactInfo" :key="index">{{ info }}</p>
        </div>

        <div class="footer-info-col3">
          <p>{{ copyright }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { FOOTER_CATEGORIES } from '@/config/categories'

export default {
  name: 'Footer',
  data() {
    return {
      categories: FOOTER_CATEGORIES,
      editor: 'Phạm Văn Hiếu',
      contactInfo: [
        'Địa chỉ: Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, phường Cầu Giấy, Hà Nội',
        'Điện thoại: (024) 39428445',
        'Email: tiasang@vnexpress.net'
      ],
      copyright: '© 2025. Toàn bộ bản quyền thuộc về Tia Sáng'
    }
  },
  methods: {
    selectCategory(category) {
      this.$emit('category-selected', category);
    }
  }
}
</script>

<style scoped>
/* Styles handled by global styles.css */
</style>
