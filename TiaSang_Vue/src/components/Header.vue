<template>
  <header class="header">
    <!-- Desktop/Tablet Layout -->
    <div class="header-top-frame">
      <div class="date-section">
        <span class="date-text">{{ currentDate }}</span>
      </div>

      <div class="logo-section">
        <img src="/image/Logo.png" alt="TiaSang" class="logo" loading="lazy">
      </div>

      <div class="search-login-frame">
        <div class="search-box">
          <input 
            type="text" 
            placeholder="Tìm kiếm" 
            class="search-input" 
            aria-label="Tìm kiếm"
            @keyup.enter="handleSearch"
          >
          <img src="/image/search line mong 1.png" alt="" class="search-icon" loading="lazy">
        </div>

        <div class="divider-line"></div>

        <div class="login-box">
          <div class="login-icon-container">
            <img src="/image/image-4.png" alt="" class="login-icon" loading="lazy">
          </div>
          <span class="login-text" @click="handleLogin">Đăng nhập</span>
          <img src="/image/image-5.png" alt="" class="alert-icon" loading="lazy">
        </div>
      </div>
    </div>

    <!-- Mobile Layout (414px - 720px+) -->
    <div class="header-mobile-bar-1">
      <div class="mobile-date-section">
        <span class="mobile-date-text">{{ currentDate }}</span>
      </div>
      <div class="mobile-user-section">
        <img src="/image/image-4.png" alt="User" class="mobile-user-icon" loading="lazy">
        <img src="/image/image-5.png" alt="Notification" class="mobile-bell-icon" loading="lazy">
      </div>
    </div>

    <div class="header-mobile-bar-2">
      <div class="mobile-logo-section">
        <img src="/image/Logo.png" alt="TiaSang" class="mobile-logo" loading="lazy">
      </div>
      <div class="mobile-search-icon" @click="handleMobileSearch">
        <img src="/image/search line mong 1.png" alt="Search" loading="lazy">
      </div>
    </div>
  </header>
</template>

<script>
import { formatCurrentDate } from '@/utils/dateFormatter'

export default {
  name: 'Header',
  data() {
    return {
      currentDate: ''
    }
  },
  mounted() {
    this.currentDate = formatCurrentDate();
  },
  methods: {
    handleSearch() {
      this.$emit('search');
    },
    handleLogin() {
      this.$emit('login');
    },
    handleMobileSearch() {
      this.$emit('search');
    }
  }
}
</script>

<style scoped>
/* Styles handled by global styles.css */
</style>
