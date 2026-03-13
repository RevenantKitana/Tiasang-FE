<template>
  <div id="forum-page">
    <Header @search="handleSearch" @login="handleLogin" />
    <Navigation @category-selected="handleCategorySelect" />
    <CategoryBanner :title="bannerTitle" />

    <main class="forum-layout">
      <!-- ── LEFT: Main Content 720px ── -->
      <div class="forum-main">

        <!-- Action Box: Search + "Gửi bài viết" -->
        <div class="forum-action-box">
          <div class="forum-search-box">
            <svg class="forum-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#9F9F9F" stroke-width="2"/>
              <path d="m21 21-4.35-4.35" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              class="forum-search-input"
              placeholder="Tìm kiếm bài viết..."
              aria-label="Tìm kiếm bài viết"
            />
          </div>
          <button class="forum-submit-btn" @click="handleSubmitPost">Gửi bài viết</button>
        </div>

        <!-- List Post -->
        <div class="forum-list">
          <article
            v-for="(post, pi) in forumPosts"
            :key="pi"
            class="forum-unit"
          >
            <!-- Post Content -->
            <div class="forum-post-content">
              <h2 class="forum-post-title">{{ post.title }}</h2>
              <p class="forum-post-desc">{{ post.shortDescription }}</p>
              <div class="forum-post-info">
                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" aria-hidden="true">
                  <path d="M6 0C3.79 0 2 1.79 2 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#222"/>
                </svg>
                <span class="forum-post-author">{{ post.author }}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#222" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                <span class="forum-post-comment-count">{{ post.commentCount }}</span>
                <span class="forum-post-time">{{ post.time }}</span>
              </div>
            </div>

            <!-- Comment List -->
            <div class="forum-comment-list">
              <div
                v-for="(comment, ci) in post.comments"
                :key="ci"
                class="forum-comment-unit"
              >
                <div
                  class="forum-comment-avatar"
                  :style="{ background: comment.avatarColor }"
                  aria-hidden="true"
                >
                  {{ comment.userName.charAt(0).toUpperCase() }}
                </div>
                <div class="forum-comment-body">
                  <span class="forum-comment-username">{{ comment.userName }}</span>
                  <span>{{ space }}</span>
                  <span class="forum-comment-text">{{ comment.text }}</span>
                </div>
              </div>

              <!-- Input Comment -->
              <div class="forum-input-comment">
                <input
                  v-model="post.newComment"
                  type="text"
                  class="forum-input-comment-field"
                  placeholder="Viết bình luận..."
                  aria-label="Viết bình luận"
                  @keyup.enter="submitComment(pi)"
                />
                <button class="forum-input-send-btn" @click="submitComment(pi)" aria-label="Gửi bình luận">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2 11 13" stroke="#0590DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="m22 2-7 20-4-9-9-4 20-7z" stroke="#0590DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- ── RIGHT: Sidebar 299px ── -->
      <aside class="forum-sidebar">
        <!-- Category Box: tái sử dụng CategoryBox styles -->
        <div v-for="box in sidebarCategoryBoxes" :key="box.title" class="category-box">
          <h3 class="box-title">{{ box.title }}</h3>
          <div class="box-content">
            <article class="box-feature">
              <div
                class="box-feature-image bg-cover"
                :style="{ backgroundImage: `url('${box.feature.image}')` }"
                aria-label="Ảnh tin nổi bật"
              ></div>
              <div class="box-feature-text">
                <h4 class="box-feature-title">{{ box.feature.title }}</h4>
                <p class="box-feature-author">Tác giả: {{ box.feature.author }}</p>
                <p class="box-feature-lead">{{ box.feature.lead }}</p>
              </div>
              <div class="box-divider"></div>
            </article>
            <div class="other-news-list">
              <div v-for="(item, i) in box.otherNews" :key="i" class="other-news-item">
                <div class="other-media">
                  <div
                    class="other-image bg-cover"
                    :style="{ backgroundImage: `url('${item.image}')` }"
                    aria-label="Ảnh tin"
                  ></div>
                </div>
                <p class="other-title">{{ item.title }}</p>
              </div>
              <div v-if="box.otherNews.length > 0" class="box-divider"></div>
            </div>
            <div class="read-more">
              <span class="read-more-text">Xem thêm</span>
            </div>
          </div>
        </div>

        <!-- Ads Sidebar -->
        <div class="forum-sidebar-ads">
          <div
            class="side-ad-image bg-cover"
            style="background-image: url('/image_pack/ads_side_bar.png');"
            aria-label="Quảng cáo bên phải"
          ></div>
        </div>

        <!-- Sub Posts "Tác giả nổi bật" — tái sử dụng s4-sub từ trang chủ -->
        <div class="forum-sub-posts">
          <div class="forum-sub-header">
            <h3 class="forum-sub-title">{{ subSection.title }}</h3>
            <a href="#" class="forum-sub-readmore">Xem thêm</a>
          </div>
          <div v-for="(post, i) in subSection.posts" :key="i" class="forum-sub-post">
            <div class="s4-sub-divider"></div>
            <div class="s4-sub-content">
              <div class="s4-sub-texts">
                <h4 class="s4-sub-post-title">{{ post.title }}</h4>
                <p class="s4-sub-post-desc">{{ post.description }}</p>
              </div>
              <div class="s4-sub-author">
                <img :src="post.authorAvatar" :alt="post.author" class="s4-author-avatar" />
                <div class="s4-author-info">
                  <p class="s4-author-name">{{ post.author }}</p>
                  <p class="s4-author-job">{{ post.job }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </main>

    <Footer @category-selected="handleCategorySelect" />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Navigation from '../components/Navigation.vue'
import CategoryBanner from '../components/CategoryBanner.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'ForumPage',
  components: {
    Header,
    Navigation,
    CategoryBanner,
    Footer
  },
  data() {
    return {
      bannerTitle: 'Diễn đàn',
      searchQuery: '',
      space: ' ',
      forumPosts: [
        {
          title: 'Hệ sinh thái khởi nghiệp Việt Nam đang ở đâu so với khu vực?',
          shortDescription: 'Nhìn lại hành trình 5 năm của các startup công nghệ Việt - những thành công, thất bại và bài học cần rút ra để bứt phá trong giai đoạn tiếp theo.',
          author: 'Minh Quân',
          commentCount: 24,
          time: '2 giờ trước',
          newComment: '',
          comments: [
            {
              userName: 'Khánh Ly',
              text: 'Bài viết rất sâu sắc! Mình nghĩ điểm mấu chốt là khả năng tiếp cận vốn còn hạn chế so với Singapore hay Indonesia.',
              avatarColor: '#0590DE'
            },
            {
              userName: 'Bảo Châu',
              text: 'Đồng ý, ngoài vốn còn cần xây dựng hệ thống mentor chất lượng hơn nữa.',
              avatarColor: '#E21939'
            }
          ]
        },
        {
          title: 'AI trong giáo dục: Cơ hội hay thách thức cho giáo viên Việt?',
          shortDescription: 'Trí tuệ nhân tạo đang len lỏi vào từng lớp học. Câu hỏi đặt ra là liệu chúng ta đang chuẩn bị đủ cho cả giáo viên lẫn học sinh để thích nghi với làn sóng này?',
          author: 'Lan Hương',
          commentCount: 17,
          time: '5 giờ trước',
          newComment: '',
          comments: [
            {
              userName: 'Tuấn Nghĩa',
              text: 'Câu hỏi này rất quan trọng. Mình thấy nhiều giáo viên lo ngại AI sẽ thay thế họ nhưng thực ra đây là công cụ hỗ trợ.',
              avatarColor: '#F4C660'
            }
          ]
        },
        {
          title: 'Năng lượng tái tạo và bài toán lưới điện quốc gia',
          shortDescription: 'Việt Nam đặt mục tiêu 50% năng lượng tái tạo vào 2030. Nhưng bài toán cân bằng lưới điện khi tích hợp điện mặt trời, gió vẫn còn nhiều thách thức kỹ thuật cần giải quyết.',
          author: 'Trọng Hiếu',
          commentCount: 31,
          time: '1 ngày trước',
          newComment: '',
          comments: [
            {
              userName: 'Mai Hương',
              text: 'Hệ thống lưu trữ điện (BESS) là chìa khóa, nhưng chi phí vẫn còn cao quá.',
              avatarColor: '#4CAF50'
            },
            {
              userName: 'Gia Hân',
              text: 'Ngoài lưu trữ, cần cả nâng cấp hạ tầng truyền tải từ miền Trung vào miền Nam.',
              avatarColor: '#9C27B0'
            }
          ]
        }
      ],

      sidebarCategoryBoxes: [
        {
          title: 'Khoa học và Công nghệ',
          feature: {
            image: '/image_pack/image_feature_post_side_bar.png',
            title: 'Vệ tinh quan sát Trái đất bước vào giai đoạn hiệu chuẩn',
            author: 'Lệ Hằng',
            lead: 'Dữ liệu hình ảnh giúp dự báo thiên tai và quản lý tài nguyên biển.'
          },
          otherNews: [
            {
              image: '/image_pack/image_mini_post_side_bar.png',
              title: 'Phòng sạch mới cho nghiên cứu vi mạch'
            },
            {
              image: '/image_pack/image_mini_post_side_bar.png',
              title: 'Thiết bị đo chất lượng không khí cầm tay'
            }
          ]
        }
      ],

      subSection: {
        title: 'Tác giả nổi bật',
        posts: [
          {
            title: 'Đổi mới sáng tạo cần bắt đầu từ tư duy hệ thống',
            description: 'Không có hệ sinh thái thì đổi mới chỉ là những cố gắng lẻ tẻ, thiếu bền vững.',
            author: 'GS. Nguyễn Văn An',
            job: 'Chuyên gia kinh tế đổi mới',
            authorAvatar: '/image_pack/image_mini_post_side_bar.png'
          },
          {
            title: 'Công nghệ xanh: Từ xu hướng đến hành động thiết thực',
            description: 'Doanh nghiệp cần định lượng tác động môi trường ngay từ giai đoạn thiết kế sản phẩm.',
            author: 'GS. Trần Văn Bình',
            job: 'Cố vấn chính sách kinh tế',
            authorAvatar: '/image_pack/image_mini_post_side_bar.png'
          }
        ]
      }
    }
  },
  methods: {
    handleSearch() {},
    handleLogin() {},
    handleCategorySelect(category) {
      const routes = {
        'Nền tảng & Kiến tạo': '/category/nen-tang-kien-tao',
        'Diễn đàn': '/forum'
      }
      if (routes[category]) this.$router.push(routes[category])
    },
    handleSubmitPost() {
      // TODO: mở modal/form tạo bài viết mới
    },
    submitComment(postIndex) {
      const post = this.forumPosts[postIndex]
      if (!post.newComment.trim()) return
      post.comments.push({
        userName: 'Bạn',
        text: post.newComment.trim(),
        avatarColor: '#0590DE'
      })
      post.commentCount++
      post.newComment = ''
    }
  }
}
</script>

<style scoped>
/* ── Forum Layout ── */
.forum-layout {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
  padding: clamp(30px, 5vw, 60px) clamp(1rem, 5vw, 2rem);
  width: 100%;
}

/* ── Forum Main (720px) ── */
.forum-main {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 720px;
  flex-shrink: 0;
}

/* ── Action Box ── */
.forum-action-box {
  display: flex;
  width: 720px;
  align-items: center;
  gap: 20px;
}

.forum-search-box {
  display: flex;
  width: 530px;
  height: 48px;
  padding: 0 15px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid var(--border-subdued, #D6D6D6);
  background: #FFF;
  transition: border-color .2s ease;
}

.forum-search-box:focus-within {
  border-color: #0590DE;
  box-shadow: 0 0 0 2px rgba(5, 144, 222, 0.1);
}

.forum-search-icon {
  flex-shrink: 0;
}

.forum-search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-regular, #202020);
  font-family: Archivo, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 160%;
}

.forum-search-input::placeholder {
  color: var(--text-subdued-lighter, #9F9F9F);
}

.forum-submit-btn {
  width: 170px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid var(--border-subdued, #D6D6D6);
  background: #FFF;
  cursor: pointer;
  color: #0590DE;
  font-family: Merriweather, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  transition: background .2s ease, border-color .2s ease;
}

.forum-submit-btn:hover {
  background: #f0f8ff;
  border-color: #0590DE;
}

/* ── Forum List ── */
.forum-list {
  display: flex;
  width: 720px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

/* ── Forum Unit (single post) ── */
.forum-unit {
  display: flex;
  width: 720px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 24px 20px;
  border: 1px solid var(--border-subdued, #D6D6D6);
  border-radius: 6px;
  background: #FFF;
  transition: box-shadow .2s ease;
}

.forum-unit:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.forum-unit:last-child {
  padding: 24px 20px;
}

/* ── Post Content ── */
.forum-post-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
}

.forum-post-title {
  color: var(--title, #101010);
  font-family: Merriweather, serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  margin: 0;
  cursor: pointer;
  transition: color .2s ease;
}

.forum-post-title:hover {
  color: #0590DE;
}

.forum-post-desc {
  color: var(--text-article-lead, #5F5F5F);
  font-family: Archivo, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin: 0;
}

.forum-post-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.forum-post-author,
.forum-post-comment-count {
  color: var(--Gray-222222, #222);
  font-family: Archivo, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.forum-post-time {
  color: #5F5F5F;
  font-family: Archivo, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
}

/* ── Comment List ── */
.forum-comment-list {
  display: flex;
  width: 680px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border-subdued, #D6D6D6);
}

.forum-comment-unit {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 679px;
}

.forum-comment-avatar {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-family: Archivo, sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  aspect-ratio: 1/1;
}

.forum-comment-body {
  flex: 1;
  min-width: 0;
  color: var(--text-article-lead, #5F5F5F);
  font-family: Archivo, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
}

.forum-comment-username {
  color: var(--text-article-title, #202020);
  font-family: Archivo, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
}

.forum-comment-text {
  color: var(--text-article-lead, #5F5F5F);
  font-family: Archivo, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}

/* ── Input Comment ── */
.forum-input-comment {
  display: flex;
  height: 54px;
  padding: 0 14px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
  border-radius: 3px;
  border: 1px solid var(--border-subdued, #D6D6D6);
  background: var(--General-White, #FFF);
  transition: border-color .2s ease;
}

.forum-input-comment:focus-within {
  border-color: #0590DE;
  box-shadow: 0 0 0 2px rgba(5, 144, 222, 0.08);
}

.forum-input-comment-field {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-regular, #202020);
  font-family: Archivo, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 160%;
}

.forum-input-comment-field::placeholder {
  color: var(--text-subdued-lighter, #9F9F9F);
}

.forum-input-send-btn {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: opacity .2s ease;
}

.forum-input-send-btn:hover {
  opacity: 0.75;
}

/* ── Forum Sidebar (299.456px) ── */
.forum-sidebar {
  display: flex;
  width: 299.456px;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  flex-shrink: 0;
}

.forum-sidebar-ads {
  width: 100%;
  display: flex;
  justify-content: center;
}

.forum-sidebar-ads .side-ad-image {
  width: 100%;
  aspect-ratio: 3/4;
}

/* ── Sub Posts in Sidebar ── */
.forum-sub-posts {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.forum-sub-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.forum-sub-title {
  color: var(--text-regular, #202020);
  font-family: Merriweather, serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 160%;
  margin: 0;
}

.forum-sub-readmore {
  color: var(--text-subdued-lighter, #9F9F9F);
  font-family: Archivo, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 160%;
  text-decoration: none;
  transition: color .2s ease;
}

.forum-sub-readmore:hover {
  color: var(--primary-accent, #E21939);
}

.forum-sub-post {
  width: 100%;
}

/* ── S4 Sub Post Classes (from HomePage) ── */
.s4-sub-divider {
  height: 1px;
  background: #D6D6D6;
  width: 100%;
}

.s4-sub-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.s4-sub-texts {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.s4-sub-post-title {
  color: #101010;
  font-family: Merriweather, serif;
  font-size: clamp(16px, 4vw, 18px);
  font-weight: 700;
  line-height: 160%;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.s4-sub-post-desc {
  color: #5F5F5F;
  font-family: Archivo, sans-serif;
  font-size: clamp(13px, 3vw, 15px);
  font-weight: 400;
  line-height: 160%;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.s4-sub-author {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.s4-author-avatar {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 48px;
  object-fit: cover;
  aspect-ratio: 1 / 1;
}

.s4-author-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
}

.s4-author-name {
  color: #101010;
  font-family: Merriweather, serif;
  font-size: clamp(14px, 3.5vw, 16px);
  font-weight: 700;
  line-height: 160%;
  margin: 0;
}

.s4-author-job {
  color: #5F5F5F;
  font-family: Archivo, sans-serif;
  font-size: clamp(13px, 3vw, 15px);
  font-weight: 400;
  line-height: 140%;
  margin: 0;
}

/* ── Responsive ── */
/* ── Desktop Large (≤ 1200px) ────────────────────────────────────── */
@media (max-width: 1200px) {
  .forum-layout {
    gap: 32px;
    max-width: 100%;
    padding: clamp(30px, 5vw, 60px) clamp(1rem, 4vw, 2rem);
  }

  .forum-main {
    width: 100%;
    max-width: 720px;
  }

  .forum-sidebar {
    width: 100%;
    max-width: 300px;
  }

  .forum-search-box {
    width: 100%;
  }
}

/* ── Tablet (≤ 960px) ────────────────────────────────────────────── */
@media (max-width: 960px) {
  .forum-layout {
    flex-direction: column;
    gap: 30px;
    padding: clamp(20px, 4vw, 40px) clamp(1rem, 4vw, 2rem);
  }

  .forum-main {
    width: 100%;
    max-width: 100%;
    gap: 24px;
  }

  .forum-action-box {
    width: 100%;
    flex-wrap: wrap;
    gap: 16px;
  }

  .forum-search-box {
    flex: 1;
    min-width: 200px;
  }

  .forum-submit-btn {
    flex: 1;
    min-width: 140px;
  }

  .forum-list,
  .forum-unit,
  .forum-comment-list {
    width: 100%;
  }

  .forum-comment-unit {
    width: 100%;
  }

  .forum-sidebar {
    width: 100%;
    max-width: 100%;
    gap: 24px;
  }

  .forum-post-title {
    font-size: clamp(18px, 5vw, 22px);
  }

  .forum-post-desc {
    font-size: clamp(14px, 4vw, 18px);
  }

  .s4-sub-post-title {
    font-size: clamp(15px, 4vw, 18px);
  }

  .s4-sub-post-desc {
    font-size: clamp(12px, 3vw, 15px);
  }
}

/* ── Mobile Landscape (≤ 768px) ──────────────────────────────────── */
@media (max-width: 768px) {
  .forum-layout {
    padding: clamp(20px, 3vw, 30px) clamp(0.75rem, 3vw, 1.5rem);
    max-width: 100%;
  }

  .forum-main {
    gap: 20px;
  }

  .forum-action-box {
    gap: 12px;
  }

  .forum-search-box {
    height: 44px;
    font-size: 14px;
  }

  .forum-submit-btn {
    height: 44px;
    font-size: clamp(13px, 3vw, 16px);
    width: 100%;
  }

  .forum-unit {
    padding: clamp(12px, 3vw, 20px);
    gap: 16px;
    border-radius: 4px;
  }

  .forum-post-title {
    font-size: clamp(16px, 4vw, 20px);
    line-height: 140%;
  }

  .forum-post-desc {
    font-size: clamp(13px, 3.5vw, 16px);
    line-height: 150%;
  }

  .forum-post-info {
    font-size: clamp(12px, 3vw, 15px);
  }

  .forum-comment-avatar {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }

  .forum-comment-list {
    gap: 12px;
    margin-top: 12px;
    padding-top: 12px;
  }

  .forum-comment-unit {
    gap: 8px;
  }

  .forum-comment-body {
    font-size: clamp(13px, 3vw, 16px);
  }

  .forum-input-comment {
    height: 48px;
    padding: 0 12px;
  }

  .forum-input-comment-field {
    font-size: clamp(13px, 3vw, 15px);
  }

  .forum-sidebar {
    gap: 20px;
  }

  .s4-sub-post-title {
    font-size: clamp(14px, 3.5vw, 18px);
  }

  .s4-sub-post-desc {
    font-size: clamp(11px, 3vw, 15px);
  }

  .s4-author-avatar {
    width: 40px;
    height: 40px;
  }

  .s4-author-name {
    font-size: clamp(13px, 3vw, 16px);
  }

  .s4-author-job {
    font-size: clamp(11px, 2.5vw, 15px);
  }
}

/* ── Mobile Phone (≤ 480px) ──────────────────────────────────────── */
@media (max-width: 480px) {
  .forum-layout {
    padding: 16px 12px;
    gap: 20px;
  }

  .forum-main {
    gap: 16px;
  }

  .forum-action-box {
    gap: 10px;
  }

  .forum-search-box {
    height: 40px;
    padding: 0 12px;
    gap: 6px;
  }

  .forum-search-icon {
    width: 14px;
    height: 14px;
  }

  .forum-search-input {
    font-size: 13px;
  }

  .forum-submit-btn {
    height: 40px;
    font-size: 13px;
    padding: 0 12px;
  }

  .forum-list {
    gap: 16px;
  }

  .forum-unit {
    padding: 12px;
    gap: 12px;
  }

  .forum-post-title {
    font-size: 16px;
  }

  .forum-post-desc {
    font-size: 13px;
  }

  .forum-post-info {
    font-size: 12px;
    flex-wrap: wrap;
  }

  .forum-comment-avatar {
    width: 36px;
    height: 36px;
    font-size: 12px;
  }

  .forum-comment-body {
    font-size: 13px;
  }

  .forum-comment-username {
    font-size: 13px;
  }

  .forum-comment-list {
    gap: 10px;
    margin-top: 10px;
    padding-top: 10px;
  }

  .forum-comment-unit {
    gap: 8px;
  }

  .forum-input-comment {
    height: 44px;
    padding: 0 10px;
    gap: 6px;
  }

  .forum-input-comment-field {
    font-size: 13px;
  }

  .forum-sidebar {
    gap: 16px;
  }

  .forum-sub-header {
    gap: 12px;
  }

  .forum-sub-title {
    font-size: 14px;
  }

  .s4-sub-divider {
    margin: 12px 0;
  }

  .s4-sub-content {
    gap: 12px;
  }

  .s4-sub-texts {
    gap: 4px;
  }

  .s4-sub-post-title {
    font-size: 14px;
  }

  .s4-sub-post-desc {
    font-size: 12px;
  }

  .s4-sub-author {
    gap: 8px;
  }

  .s4-author-avatar {
    width: 36px;
    height: 36px;
  }

  .s4-author-name {
    font-size: 13px;
  }

  .s4-author-job {
    font-size: 11px;
  }
}

/* ── Extra Small Phones (≤ 360px) ────────────────────────────────── */
@media (max-width: 360px) {
  .forum-layout {
    padding: 12px 10px;
  }

  .forum-post-title {
    font-size: 15px;
  }

  .forum-post-desc {
    font-size: 12px;
  }

  .forum-submit-btn {
    font-size: 12px;
  }
}
</style>
