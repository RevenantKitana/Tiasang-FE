<template>
  <section class="category-banner">
    <div class="category-background">
      <div class="category-content">
        <h2 class="category-title">{{ title }}</h2>
        <div class="category-line"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CategoryBanner',
  props: {
    title: {
      type: String,
      default: 'Nền tảng - Kiến tạo'
    }
  }
}
</script>

<style scoped>
/* Category Banner Section */
.category-banner {
  width: 100%;
  position: relative;
}

.category-background {
  width: 100%;
  max-width: 1920px;
  height: clamp(200px, 40vw, 300px);
  margin: 0 auto;
  background: url('/image/BG.png') lightgray 50% / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.category-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(8px, 2vw, 15px);
  padding: clamp(1rem, 5vw, 2rem);
}

.category-title {
  color: #FFF;
  font-family: 'Merriweather', serif;
  font-size: clamp(28px, 5vw, 33px);
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  margin: 0;
  text-align: center;
}

.category-line {
  width: clamp(80px, 15vw, 120px);
  height: 2px;
  background: #E21939;
}

/* Responsive Design */
@media (max-width: 768px) {
  .category-background {
    height: auto;
    padding: 8px 0;
    background: url('/image/BG.png') lightgray 50% / cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .category-content {
    padding: 4px clamp(1rem, 5vw, 2rem);
    gap: 4px;
  }

  .category-title {
    font-size: clamp(14px, 3.5vw, 18px);
    line-height: 120%;
    margin: 0;
    padding: 0;
    color: #FFF;
  }

  .category-line {
    width: clamp(50px, 10vw, 80px);
    height: 1px;
    background: #E21939;
  }
}
</style>
