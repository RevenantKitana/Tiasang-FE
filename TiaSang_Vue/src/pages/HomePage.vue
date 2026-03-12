<template>
  <div id="home-page">
    <Header @search="handleSearch" @login="handleLogin" />
    <Navigation @category-selected="handleCategorySelect" />
    
    <main class="page-body">
      <!-- SECTION TYPE 1: Featured Article Large + 2 Stories -->
      <section class="section-type-1">
        <div class="featured-article-large">
          <img :src="sectionType1.featuredArticle.image" :alt="sectionType1.featuredArticle.title" />
          <div class="article-text">
            <h3 class="article-title">{{ sectionType1.featuredArticle.title }}</h3>
            <p class="article-description">{{ sectionType1.featuredArticle.description }}</p>
            <div class="article-meta">
              <span class="author">{{ sectionType1.featuredArticle.author }}</span>
              <span class="date">{{ sectionType1.featuredArticle.date }}</span>
            </div>
          </div>
        </div>

        <div class="other-stories">
          <div 
            v-for="(story, index) in sectionType1.otherStories" 
            :key="index"
            class="story-unit"
          >
            <img :src="story.image" :alt="story.title" class="story-image" />
            <div class="story-text">
              <h4 class="story-title">{{ story.title }}</h4>
              <span class="story-author">{{ story.author }}</span>
              <span class="story-date">{{ story.date }}</span>
              <span class="comment-count">Bình luận: {{ story.comments }}</span>
            </div>
          </div>
        </div>

        <div class="feature-quote">
          <div class="quote-icon">
            <i class="quote-mark">"</i>
          </div>
          <div class="quote-content">
            <p class="quote-text">{{ sectionType1.quote.text }}</p>
            <p class="quote-author">— {{ sectionType1.quote.author }}</p>
            <a href="#" class="quote-nav">Xem chi tiết →</a>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- SECTION TYPE 2: Search + Main Content (Featured + Scroll List) + Sub Content (Carousel) -->
      <section class="section-type-2">
        <div class="section-header">
          <h2 class="section-title">{{ sectionType2.title }}</h2>
          <div class="search-bar">
            <input 
              type="text" 
              class="search-input" 
              placeholder="Tìm kiếm..."
              @input="handleSearchInput"
            />
            <button class="search-btn" @click="handleSearch">
              <i class="search-icon">🔍</i>
            </button>
          </div>
          <a href="#" class="read-more">Xem thêm →</a>
        </div>

        <div class="main-content">
          <!-- Featured Article -->
          <div class="featured-item">
            <img :src="sectionType2.featuredArticle.image" :alt="sectionType2.featuredArticle.title" />
            <div class="featured-text">
              <h3>{{ sectionType2.featuredArticle.title }}</h3>
              <p class="featured-author">{{ sectionType2.featuredArticle.author }}</p>
            </div>
          </div>

          <!-- Standard Article Scroll List -->
          <div class="article-scroll-list">
            <div 
              v-for="(article, index) in sectionType2.articleList" 
              :key="index"
              class="article-item"
            >
              <div class="article-info">
                <h4 class="article-title">{{ article.title }}</h4>
                <p class="article-author">{{ article.author }}</p>
              </div>
              <img :src="article.image" :alt="article.title" class="article-thumb" />
            </div>
          </div>
        </div>

        <div class="sub-content">
          <p class="sub-title">{{ sectionType2.subContentTitle }}</p>
          <div class="category-carousel">
            <div 
              v-for="(category, index) in sectionType2.categories" 
              :key="index"
              class="category-item"
            >
              <img :src="category.image" :alt="category.name" />
              <p class="category-name">{{ category.name }}</p>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- SECTION TYPE 3: Forum Main + Sub Lists -->
      <section class="section-type-3">
        <h2 class="section-title">{{ sectionType3.title }}</h2>
        
        <div class="forum-container">
          <div class="forum-main-list">
            <p class="list-title">Bài viết chính</p>
            <div 
              v-for="(post, index) in sectionType3.mainPosts" 
              :key="index"
              class="forum-item"
            >
              <img :src="post.image" :alt="post.title" class="post-image" />
              <div class="post-info">
                <h4>{{ post.title }}</h4>
                <div class="post-meta">
                  <span class="author">{{ post.author }}</span>
                  <span class="date">{{ post.date }}</span>
                  <span class="comments">💬 {{ post.comments }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="forum-sub-list">
            <p class="list-title">{{ sectionType3.subListTitle }}</p>
            <div 
              v-for="(post, index) in sectionType3.subPosts" 
              :key="index"
              class="sub-post-item"
            >
              <h5>{{ post.title }}</h5>
              <p class="comments">💬 {{ post.comments }} bình luận</p>
            </div>
            <button class="btn-create-post">+ Tạo bài viết mới</button>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- SECTION TYPE 4: Article List + Sub List with Author Info -->
      <section class="section-type-4">
        <h2 class="section-title">{{ sectionType4.title }}</h2>

        <div class="content-layout">
          <div class="main-articles">
            <div 
              v-for="(article, index) in sectionType4.articles" 
              :key="index"
              class="article-card"
            >
              <img :src="article.image" :alt="article.title" />
              <div class="card-info">
                <h4>{{ article.title }}</h4>
                <p class="description">{{ article.description }}</p>
                <p class="author">{{ article.author }}</p>
              </div>
            </div>
          </div>

          <div class="sub-section">
            <p class="sub-title">{{ sectionType4.subTitle }}</p>
            <a href="#" class="read-more-btn">Xem thêm</a>
            <div 
              v-for="(post, index) in sectionType4.subPosts" 
              :key="index"
              class="sub-post"
            >
              <h5>{{ post.title }}</h5>
              <p class="description">{{ post.description }}</p>
              <div class="author-info">
                <img :src="post.authorAvatar" :alt="post.author" class="author-avatar" />
                <div>
                  <p class="author-name">{{ post.author }}</p>
                  <p class="author-job">{{ post.job }}</p>
                </div>
              </div>
            </div>
            <div class="ads-banner">📢 Quảng cáo</div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- SECTION TYPE 5: Featured + 2 Others -->
      <section class="section-type-5">
        <h2 class="section-title">{{ sectionType5.title }}</h2>

        <div class="featured-article">
          <img :src="sectionType5.featured.image" :alt="sectionType5.featured.title" />
          <div class="featured-info">
            <h3>{{ sectionType5.featured.title }}</h3>
            <p>{{ sectionType5.featured.description }}</p>
            <p class="author">{{ sectionType5.featured.author }}</p>
          </div>
        </div>

        <div class="others-articles">
          <div 
            v-for="(article, index) in sectionType5.others" 
            :key="index"
            class="other-article"
          >
            <img :src="article.image" :alt="article.title" />
            <h4>{{ article.title }}</h4>
            <p class="author">{{ article.author }}</p>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- SECTION TYPE 6: Read More + Article List -->
      <section class="section-type-6">
        <h2 class="section-title">{{ sectionType6.title }}</h2>
        <a href="#" class="read-more-btn">Xem thêm</a>

        <div class="article-list">
          <div 
            v-for="(article, index) in sectionType6.articles" 
            :key="index"
            class="list-item"
          >
            <img :src="article.image" :alt="article.title" />
            <div class="item-info">
              <h4>{{ article.title }}</h4>
              <p class="author">{{ article.author }}</p>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- SECTION TYPE 7: Title + Navigation + Article List -->
      <section class="section-type-7">
        <div class="section-header">
          <h2 class="section-title">{{ sectionType7.title }}</h2>
          <a href="#" class="nav-button">→</a>
        </div>

        <div class="article-grid">
          <div 
            v-for="(article, index) in sectionType7.articles" 
            :key="index"
            class="grid-item"
          >
            <img :src="article.image" :alt="article.title" />
            <h5>{{ article.title }}</h5>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- SECTION TYPE 8: Multi-Category + Sidebar Ads -->
      <section class="section-type-8">
        <div class="categories-section">
          <!-- Category Type 1 -->
          <div class="category-block type-1">
            <div class="category-header">
              <h3>{{ sectionType8.category1.name }}</h3>
              <a href="#" class="read-more">Xem thêm</a>
            </div>
            <div class="category-articles">
              <div 
                v-for="(article, index) in sectionType8.category1.articles" 
                :key="index"
                class="category-article"
              >
                <img :src="article.image" :alt="article.title" />
                <div class="article-info">
                  <h5>{{ article.title }}</h5>
                  <p class="author">{{ article.author }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Category Type 2 -->
          <div class="category-block type-2">
            <div class="category-header">
              <h3>{{ sectionType8.category2.name }}</h3>
              <a href="#" class="read-more">Xem thêm</a>
            </div>
            <div class="category-articles">
              <div 
                v-for="(article, index) in sectionType8.category2.articles" 
                :key="index"
                class="category-article"
              >
                <img :src="article.image" :alt="article.title" />
                <div class="article-info">
                  <h5>{{ article.title }}</h5>
                  <p class="description">{{ article.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sidebar-ads">
          <div class="ads-banner">📢 Quảng cáo bên lề</div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    Navigation,
    Footer
  },
  data() {
    return {
      pageTitle: 'Trang Chủ TiaSang',
      
      // SECTION TYPE 1
      sectionType1: {
        featuredArticle: {
          title: 'Bài viết nổi bật',
          description: 'Mô tả chi tiết về bài viết nổi bật',
          author: 'Tác giả 1',
          date: '12/03/2026',
          image: '/image_pack/default.jpg'
        },
        otherStories: [
          {
            title: 'Câu chuyện 1',
            author: 'Tác giả A',
            date: '11/03/2026',
            comments: 15,
            image: '/image_pack/default.jpg'
          },
          {
            title: 'Câu chuyện 2',
            author: 'Tác giả B',
            date: '10/03/2026',
            comments: 8,
            image: '/image_pack/default.jpg'
          }
        ],
        quote: {
          text: 'Đây là một câu trích dẫn đặc biệt từ bài viết hoặc nhân vật nổi tiếng',
          author: 'Người trích dẫn'
        }
      },

      // SECTION TYPE 2
      sectionType2: {
        title: 'Tin nổi bật',
        featuredArticle: {
          title: 'Bài viết nổi bật chính',
          author: 'Tác giả chính',
          image: '/image_pack/default.jpg'
        },
        articleList: [
          { title: 'Bài 1', author: 'Tác giả 1', image: '/image_pack/default.jpg' },
          { title: 'Bài 2', author: 'Tác giả 2', image: '/image_pack/default.jpg' },
          { title: 'Bài 3', author: 'Tác giả 3', image: '/image_pack/default.jpg' },
          { title: 'Bài 4', author: 'Tác giả 4', image: '/image_pack/default.jpg' }
        ],
        subContentTitle: 'Chuyên đề khác',
        categories: [
          { name: 'Danh mục 1', image: '/image_pack/default.jpg' },
          { name: 'Danh mục 2', image: '/image_pack/default.jpg' },
          { name: 'Danh mục 3', image: '/image_pack/default.jpg' },
          { name: 'Danh mục 4', image: '/image_pack/default.jpg' }
        ]
      },

      // SECTION TYPE 3
      sectionType3: {
        title: 'Diễn đàn',
        mainPosts: [
          {
            title: 'Chủ đề thảo luận 1',
            author: 'Người dùng A',
            date: '12/03/2026',
            comments: 24,
            image: '/image_pack/default.jpg'
          },
          {
            title: 'Chủ đề thảo luận 2',
            author: 'Người dùng B',
            date: '11/03/2026',
            comments: 15,
            image: '/image_pack/default.jpg'
          }
        ],
        subListTitle: 'Bài viết nổi bật',
        subPosts: [
          { title: 'Chủ đề 1', comments: 8 },
          { title: 'Chủ đề 2', comments: 5 },
          { title: 'Chủ đề 3', comments: 12 }
        ]
      },

      // SECTION TYPE 4
      sectionType4: {
        title: 'Nội dung chính',
        articles: [
          {
            title: 'Bài viết 1',
            description: 'Mô tả ngắn về bài viết',
            author: 'Tác giả 1',
            image: '/image_pack/default.jpg'
          },
          {
            title: 'Bài viết 2',
            description: 'Mô tả ngắn về bài viết',
            author: 'Tác giả 2',
            image: '/image_pack/default.jpg'
          }
        ],
        subTitle: 'Bài viết khác',
        subPosts: [
          {
            title: 'Bài viết phụ 1',
            description: 'Mô tả',
            author: 'Tác giả',
            job: 'Vị trí công việc',
            authorAvatar: '/image_pack/default.jpg'
          },
          {
            title: 'Bài viết phụ 2',
            description: 'Mô tả',
            author: 'Tác giả',
            job: 'Vị trí công việc',
            authorAvatar: '/image_pack/default.jpg'
          }
        ]
      },

      // SECTION TYPE 5
      sectionType5: {
        title: 'Chuyên mục nỗi bật',
        featured: {
          title: 'Bài viết chính',
          description: 'Mô tả chi tiết',
          author: 'Tác giả',
          image: '/image_pack/default.jpg'
        },
        others: [
          { title: 'Bài viết khác 1', author: 'Tác giả A', image: '/image_pack/default.jpg' },
          { title: 'Bài viết khác 2', author: 'Tác giả B', image: '/image_pack/default.jpg' }
        ]
      },

      // SECTION TYPE 6
      sectionType6: {
        title: 'Tin tức mới nhất',
        articles: [
          { title: 'Tin 1', author: 'Tác giả 1', image: '/image_pack/default.jpg' },
          { title: 'Tin 2', author: 'Tác giả 2', image: '/image_pack/default.jpg' },
          { title: 'Tin 3', author: 'Tác giả 3', image: '/image_pack/default.jpg' }
        ]
      },

      // SECTION TYPE 7
      sectionType7: {
        title: 'Thư viện ảnh',
        articles: [
          { title: 'Ảnh 1', image: '/image_pack/default.jpg' },
          { title: 'Ảnh 2', image: '/image_pack/default.jpg' },
          { title: 'Ảnh 3', image: '/image_pack/default.jpg' },
          { title: 'Ảnh 4', image: '/image_pack/default.jpg' }
        ]
      },

      // SECTION TYPE 8
      sectionType8: {
        category1: {
          name: 'Danh mục 1',
          articles: [
            { title: 'Bài 1', author: 'Tác giả 1', image: '/image_pack/default.jpg' },
            { title: 'Bài 2', author: 'Tác giả 2', image: '/image_pack/default.jpg' }
          ]
        },
        category2: {
          name: 'Danh mục 2',
          articles: [
            {
              title: 'Bài viết',
              description: 'Mô tả ngắn',
              image: '/image_pack/default.jpg'
            }
          ]
        }
      }
    }
  },
  methods: {
    handleSearch(query) {
      console.log('Tìm kiếm:', query)
    },
    handleSearchInput(e) {
      console.log('Input:', e.target.value)
    },
    handleLogin() {
      console.log('Đăng nhập')
    },
    handleCategorySelect(category) {
      console.log('Danh mục được chọn:', category)
      
      // Map category names to routes
      const categoryRoutes = {
        'Nền tảng & Kiến tạo': '/category/nen-tang-kien-tao'
      }
      
      if (categoryRoutes[category]) {
        this.$router.push(categoryRoutes[category])
      }
    }
  }
}
</script>

<style scoped>
.page-body {
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 20px;
}

.divider {
  height: 1px;
  background-color: #ddd;
  margin: 40px 0;
}

/* SECTION TYPE 1 */
.section-type-1 {
  display: grid;
  grid-template-columns: 720px 1fr;
  grid-template-rows: auto auto;
  gap: 30px;
  width: 100%;
  max-width: 1100px;
}

.featured-article-large {
  display: flex;
  width: 100%;
  height: 720px;
  aspect-ratio: 1/1;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  grid-row: 1 / 3;
}

.featured-article-large img {
  width: 720px;
  height: 720px;
  object-fit: cover;
  aspect-ratio: 1/1;
}

.featured-article-large .article-text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  padding: 20px;
}

.article-title {
  font-family: Merriweather, serif;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 10px 0;
  line-height: 1.6;
}

.article-description {
  font-size: 14px;
  margin: 0 0 10px 0;
  line-height: 1.6;
}

.article-meta {
  display: flex;
  gap: 15px;
  font-size: 12px;
}

.other-stories {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
}

.story-unit {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #ddd;
}

.story-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.story-text {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.story-title {
  font-family: Merriweather, serif;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  line-height: 1.6;
}

.story-author,
.story-date,
.comment-count {
  font-size: 12px;
  color: #666;
}

.feature-quote {
  display: flex;
  width: 100%;
  height: auto;
  gap: 30px;
  align-items: center;
  padding: 40px 0;
  background-color: transparent;
  border-radius: 0;
  grid-column: 1 / 3;
}

.quote-icon {
  width: 163px;
  height: 163px;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  font-size: 100px;
  color: #F4C660;
  flex-shrink: 0;
}

.quote-content {
  flex: 1;
}

.quote-text {
  font-family: Merriweather, serif;
  font-size: 18px;
  font-style: italic;
  margin: 0 0 10px 0;
  line-height: 1.6;
}

.quote-author {
  margin: 0 0 10px 0;
  font-weight: 600;
}

.quote-nav {
  color: var(--3, #F4C660);
  text-decoration: none;
  font-size: 14px;
}

/* SECTION TYPE 2 */
.section-type-2 {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.section-title {
  color: var(--3, #F4C660);
  font-family: Merriweather, serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
  line-height: 160%;
}

.search-bar {
  display: flex;
  width: 1100px;
  height: 24px;
  align-items: center;
  gap: 10px;
  border: 1px solid #ddd;
  padding: 0;
  border-radius: 4px;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
}

.search-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.read-more {
  color: #fff;
  text-decoration: none;
  font-family: Archivo, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}

.main-content {
  display: flex;
  gap: 30px;
  align-items: stretch;
}

.featured-item {
  width: 670px;
  height: 461px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.featured-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  padding: 20px;
}

.featured-text h3 {
  margin: 0 0 10px 0;
  font-family: Merriweather, serif;
  font-size: 20px;
  font-weight: 700;
}

.featured-author {
  margin: 0;
  font-size: 14px;
}

.article-scroll-list {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 83px;
  gap: 20px;
  overflow-y: auto;
}

.article-item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.article-info {
  flex: 1;
}

.article-info .article-title {
  font-family: Merriweather, serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  margin: 0 0 5px 0;
  line-height: 160%;
  color: #fff;
  height: 57px;
  align-self: stretch;
  overflow: hidden;
}

.article-author {
  margin: 0;
  width: 260px;
  height: 20px;
  font-family: Merriweather, serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  color: #fff;
}

.article-thumb {
  width: 120px;
  height: 72px;
  flex-shrink: 0;
  aspect-ratio: 5/3;
  object-fit: cover;
  border-radius: 4px;
}

.sub-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.sub-title {
  font-family: Merriweather, serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
  color: #fff;
  line-height: 160%;
}

.category-carousel {
  display: flex;
  width: 1100px;
  height: 168px;
  gap: 30px;
  align-items: center;
  overflow-x: auto;
}

.category-item {
  width: 280px;
  height: 168px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.category-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-name {
  position: absolute;
  color: #fff;
  text-align: center;
  font-family: Merriweather, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

/* SECTION TYPE 3 */
.section-type-3 {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.forum-container {
  display: flex;
  gap: 30px;
}

.forum-main-list,
.forum-sub-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.list-title {
  font-weight: 700;
  margin: 0;
  color: #fff;
  font-size: 16px;
}

.forum-item {
  display: flex;
  gap: 15px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
}

.post-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
}

.post-info {
  flex: 1;
}

.post-info h4 {
  margin: 0 0 10px 0;
  color: #fff;
}

.post-meta {
  display: flex;
  gap: 15px;
  font-size: 12px;
  color: #ddd;
}

.sub-post-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.sub-post-item h5 {
  margin: 0;
  color: #fff;
}

.sub-post-item .comments {
  margin: 0;
  color: #ddd;
  font-size: 12px;
}

.btn-create-post {
  background-color: var(--3, #F4C660);
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 10px;
  width: 100%;
}

/* SECTION TYPE 4 */
.section-type-4 {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.content-layout {
  display: flex;
  gap: 30px;
}

.main-articles {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.article-card {
  display: flex;
  gap: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.article-card img {
  width: 200px;
  height: 150px;
  object-fit: cover;
}

.card-info {
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-info h4 {
  margin: 0;
  color: #fff;
  font-family: Merriweather, serif;
  font-size: 18px;
  font-weight: 700;
}

.card-info .description {
  margin: 0;
  color: #ddd;
  font-size: 14px;
  line-height: 1.6;
}

.card-info .author {
  margin: 0;
  color: #F4C660;
  font-size: 13px;
}

.sub-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.sub-section .sub-title {
  margin: 0;
  font-weight: 700;
  color: #fff;
}

.read-more-btn {
  background-color: var(--3, #F4C660);
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
}

.sub-post {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
}

.sub-post h5 {
  margin: 0 0 10px 0;
  color: #fff;
}

.sub-post .description {
  margin: 0 0 15px 0;
  color: #ddd;
  font-size: 13px;
  line-height: 1.6;
}

.author-info {
  display: flex;
  gap: 10px;
  align-items: center;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  margin: 0;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
}

.author-job {
  margin: 0;
  color: #ddd;
  font-size: 12px;
}

.ads-banner {
  background-color: #ddd;
  padding: 30px;
  text-align: center;
  border-radius: 8px;
  color: #000;
  font-weight: 600;
}

/* SECTION TYPE 5 */
.section-type-5 {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.featured-article {
  display: flex;
  gap: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.featured-article img {
  width: 400px;
  height: 300px;
  object-fit: cover;
}

.featured-info {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.featured-info h3 {
  margin: 0;
  color: #fff;
  font-family: Merriweather, serif;
  font-size: 20px;
  font-weight: 700;
}

.featured-info p:not(.author) {
  margin: 0;
  color: #ddd;
  font-size: 14px;
  line-height: 1.6;
}

.featured-info .author {
  margin: 0;
  color: #F4C660;
  font-size: 13px;
  font-weight: 600;
}

.others-articles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.other-article {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.other-article img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.other-article h4 {
  margin: 10px;
  color: #fff;
  font-family: Merriweather, serif;
  font-size: 16px;
  font-weight: 700;
}

.other-article .author {
  margin: 0 10px 10px 10px;
  color: #ddd;
  font-size: 12px;
}

/* SECTION TYPE 6 */
.section-type-6 {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.list-item {
  display: flex;
  gap: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
}

.list-item img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item-info h4 {
  margin: 0;
  color: #fff;
  font-family: Merriweather, serif;
  font-size: 16px;
  font-weight: 700;
}

.item-info .author {
  margin: 0;
  color: #ddd;
  font-size: 12px;
}

/* SECTION TYPE 7 */
.section-type-7 {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-type-7 .section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-button {
  background-color: var(--3, #F4C660);
  color: #000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.grid-item {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.grid-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.grid-item h5 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  margin: 0;
  padding: 15px 10px;
  font-size: 14px;
  font-weight: 600;
}

/* SECTION TYPE 8 */
.section-type-8 {
  display: flex;
  gap: 30px;
}

.categories-section {
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.category-block {
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category-header h3 {
  margin: 0;
  color: var(--3, #F4C660);
  font-family: Merriweather, serif;
  font-size: 20px;
  font-weight: 700;
}

.category-header .read-more {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
}

.category-articles {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.category-article {
  display: flex;
  gap: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
}

.category-article:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.category-article img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
}

.category-article .article-info h5 {
  margin: 0 0 5px 0;
  color: #fff;
  font-family: Merriweather, serif;
  font-size: 16px;
  font-weight: 700;
}

.category-article .article-info .author {
  margin: 0;
  color: #ddd;
  font-size: 12px;
}

.category-article .article-info .description {
  margin: 0;
  color: #ddd;
  font-size: 12px;
  line-height: 1.6;
}

.sidebar-ads {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-ads .ads-banner {
  min-height: 400px;
  background-color: #ddd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 1024px) {
  .section-type-1 {
    grid-template-columns: 1fr 1fr;
  }

  .featured-article-large {
    height: 400px;
    aspect-ratio: auto;
  }

  .story-unit {
    height: auto;
  }

  .story-image {
    height: 150px;
  }

  .quote-icon {
    width: 100px;
    height: 100px;
    font-size: 80px;
  }
}

@media (max-width: 768px) {
  .section-type-1 {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }

  .featured-article-large {
    grid-row: auto;
    height: 300px;
    aspect-ratio: auto;
  }

  .featured-article-large img {
    width: 100%;
    height: 100%;
  }

  .other-stories {
    flex-direction: column;
    grid-column: auto;
  }

  .story-unit {
    width: 100%;
  }

  .story-image {
    width: 100%;
    height: 150px;
  }

  .feature-quote {
    grid-column: auto;
    gap: 15px;
    padding: 20px 0;
  }

  .quote-icon {
    width: 100px;
    height: 100px;
    font-size: 80px;
  }

  .main-content {
    flex-direction: column;
  }

  .featured-item {
    height: 300px;
  }

  .article-scroll-list {
    width: 100%;
  }

  .forum-container {
    flex-direction: column;
  }

  .content-layout {
    flex-direction: column;
  }

  .featured-article {
    flex-direction: column;
  }

  .featured-article img {
    width: 100%;
    height: 250px;
  }

  .others-articles {
    grid-template-columns: 1fr;
  }

  .article-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .section-type-8 {
    flex-direction: column;
  }

  .sidebar-ads .ads-banner {
    min-height: 200px;
  }
}
</style>
