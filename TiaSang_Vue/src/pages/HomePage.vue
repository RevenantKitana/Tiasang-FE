<template>
  <div id="home-page">
    <Header @search="handleSearch" @login="handleLogin" />
    <Navigation @category-selected="handleCategorySelect" />

    <!--  SECTION TYPE 1: Featured 720×720 + 2 Stories 345×306 + Feature Quote  -->
    <div class="page-body">
      <section class="section-type-1">
        <!-- Featured Article Large 720×720 -->
        <router-link :to="`/post/${s1.featured.id}`" class="s1-featured-link">
          <div class="s1-featured">
            <img :src="s1.featured.image" :alt="s1.featured.title" class="s1-featured-img" />
            <div class="s1-featured-overlay">
              <h2 class="s1-featured-title">{{ s1.featured.title }}</h2>
              <p class="s1-featured-desc">{{ s1.featured.description }}</p>
              <div class="s1-featured-meta">
                <span>{{ s1.featured.author }}</span>
                <span>{{ s1.featured.date }}</span>
              </div>
            </div>
          </div>
        </router-link>

        <!-- 2 Other Stories 345×306 -->
        <div class="s1-stories">
          <div v-for="(story, i) in s1.stories" :key="i" class="s1-story-unit">
            <img :src="story.image" :alt="story.title" class="s1-story-img" />
            <div class="s1-story-info">
              <h4 class="s1-story-title">{{ story.title }}</h4>
              <div class="s1-story-meta">
                <span class="s1-story-author">{{ story.author }}</span>
                <span class="s1-story-date">{{ story.date }}</span>
                <span class="s1-story-comments">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="vertical-align:middle;margin-right:3px"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
                  {{ story.comments }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature Quote 1100×169 -->
        <div class="s1-quote">
          <div class="s1-quote-icon">
            <svg width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="140" font-size="160" font-family="Georgia, serif" fill="#F4C660" opacity="0.85">"</text>
            </svg>
          </div>
          <div class="s1-quote-body">
            <p class="s1-quote-text">{{ s1.quote.text }}</p>
            <p class="s1-quote-author">{{ s1.quote.author }}</p>
            <a href="#" class="s1-quote-nav">Xem chi tiết →</a>
          </div>
        </div>
      </section>

      <div class="page-divider"></div>
    </div>

    <!--  SECTION TYPE 2: Màu tím than, full-width  -->
    <div class="s2-outer">
      <div class="s2-inner">
        <section class="section-type-2">
          <!-- Header: Title (trái) + Xem thêm (phải) -->
          <div class="s2-header">
            <h2 class="s2-section-title">{{ s2.title }}</h2>
            <a href="#" class="s2-readmore">Xem thêm</a>
          </div>

          <!-- Search Bar 1100×24 -->
          <div class="s2-search-bar">
            <input type="text" class="s2-search-input" :placeholder="'Tìm kiếm trong ' + s2.title + '...'" />
            <button class="s2-search-btn" aria-label="Tìm kiếm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="#fff" stroke-width="2"/>
                <path d="m21 21-4.35-4.35" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>

          <!-- Main Content: Featured (trái 670×461) + Scroll List (phải 400px) -->
          <div class="s2-main">
            <!-- Featured Article LEFT 670×461 -->
            <div class="s2-featured">
              <img :src="s2.featured.image" :alt="s2.featured.title" class="s2-featured-img" />
              <div class="s2-featured-overlay">
                <h3 class="s2-featured-title">{{ s2.featured.title }}</h3>
                <p class="s2-featured-author">{{ s2.featured.author }}</p>
              </div>
            </div>

            <!-- Scroll List RIGHT 400px + fade bottom -->
            <div class="s2-scroll-wrapper">
              <div class="s2-scroll-list">
                <div v-for="(art, i) in s2.articleList" :key="i" class="s2-list-item">
                  <div class="s2-item-text">
                    <h4 class="s2-item-title">{{ art.title }}</h4>
                    <p class="s2-item-author">{{ art.author }}</p>
                  </div>
                  <img :src="art.image" :alt="art.title" class="s2-item-thumb" />
                </div>
              </div>
            </div>
          </div>

          <!-- Sub Content: "Chuyên đề khác" + Carousel 1100×168 -->
          <div class="s2-sub">
            <p class="s2-sub-label">{{ s2.subLabel }}</p>
            <div class="s2-carousel">
              <div v-for="(cat, i) in s2.categories" :key="i" class="s2-cat-item">
                <img :src="cat.image" :alt="cat.name" class="s2-cat-img" />
                <span class="s2-cat-name">{{ cat.name }}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!--  SECTIONS 3–8: nền trắng  -->
    <div class="page-body page-body-light">

      <div class="page-divider"></div>

      <!--  SECTION TYPE 3: Diễn đàn — Main 720px + Sub 345px  -->
      <section class="section-type-3">
        <!-- Main List 720px -->
        <div class="s3-main">
          <p class="s3-main-label">Diễn đàn</p>
          <div
            v-for="(post, i) in s3.mainPosts"
            :key="i"
            class="s3-forum-item"
          >
            <img :src="post.image" :alt="post.title" class="s3-post-img" />
            <div class="s3-post-info">
              <h3 class="s3-post-title">{{ post.title }}</h3>
              <div class="s3-post-meta">
                <img :src="post.authorAvatar" class="s3-avatar" alt="avatar" />
                <span class="s3-author-text">{{ post.author }}</span>
                <span class="s3-meta-sep">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="vertical-align:middle"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#222" stroke-width="2" stroke-linejoin="round"/></svg>
                  {{ post.comments }}
                </span>
                <span class="s3-date">{{ post.date }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Sub List 345px -->
        <div class="s3-sub">
          <h3 class="s3-sub-title">Thảo luận</h3>
          <div
            v-for="(post, i) in s3.subPosts"
            :key="i"
            class="s3-sub-item"
          >
            <h4 class="s3-sub-post-title">{{ post.title }}</h4>
            <p class="s3-sub-comments">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="vertical-align:middle;margin-right:3px"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#7F7F7F" stroke-width="2" stroke-linejoin="round"/></svg>
              {{ post.comments }} bình luận
            </p>
          </div>
          <button class="s3-btn-create">+ Tạo bài viết mới</button>
        </div>
      </section>

      <div class="page-divider"></div>

      <!--  SECTION TYPE 4: News List + Sub Content 345px + Ads 970×223  -->
      <section class="section-type-4">
        <div class="s4-layout">
          <!-- Main List 720px — dùng NewsCard giống NenTangKienTao -->
          <div class="s4-main-list">
            <NewsCard
              v-for="(news, i) in s4.newsList"
              :key="i"
              :news="news"
            />
          </div>

          <!-- Sub Content 345px -->
          <div class="s4-sub">
            <div class="s4-sub-header">
              <h3 class="s4-sub-title">{{ s4.subTitle }}</h3>
              <a href="#" class="s4-sub-readmore">Xem thêm</a>
            </div>

            <div
              v-for="(post, i) in s4.subPosts"
              :key="i"
              class="s4-sub-post"
            >
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
        </div>

        <!-- Ads Banner 970×223 -->
        <div class="s4-ads-wrap">
          <div class="s4-ads-banner bg-cover" style="background-image: url('/image_pack/ads_at_last.png');" aria-label="Quảng cáo banner"></div>
        </div>
      </section>

      <div class="page-divider"></div>

      <!--  SECTION TYPE 5: Khoa học & Công nghệ — Featured 720px + 2 Others 345px  -->
      <section class="section-type-5">
        <div class="s5-header">
          <h2 class="s5-section-title">{{ s5.title }}</h2>
          <a href="#" class="s5-readmore">Xem thêm</a>
        </div>

        <div class="s5-content">
          <!-- Featured LEFT 720px -->
          <div class="s5-featured">
            <img :src="s5.featured.image" :alt="s5.featured.title" class="s5-featured-img" />
            <div class="s5-featured-text">
              <h3 class="s5-featured-title">{{ s5.featured.title }}</h3>
              <p class="s5-featured-desc">{{ s5.featured.description }}</p>
              <p class="s5-featured-author">{{ s5.featured.author }}</p>
            </div>
          </div>

          <!-- 2 Others stacked RIGHT, each 345px -->
          <div class="s5-others">
            <div v-for="(art, i) in s5.others" :key="i" class="s5-other-item">
              <img :src="art.image" :alt="art.title" class="s5-other-img" />
              <div class="s5-other-text">
                <h4 class="s5-other-title">{{ art.title }}</h4>
                <p class="s5-other-author">{{ art.author }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="page-divider"></div>

      <!--  SECTION TYPE 6: 3 Articles 345px — flex row  -->
      <section class="section-type-6">
        <div class="s6-header">
          <h2 class="s6-section-title">{{ s6.title }}</h2>
          <a href="#" class="s6-readmore">Xem thêm</a>
        </div>

        <div class="s6-article-list">
          <div v-for="(art, i) in s6.articles" :key="i" class="s6-article-item">
            <img :src="art.image" :alt="art.title" class="s6-article-img" />
            <div class="s6-article-text">
              <h4 class="s6-article-title">{{ art.title }}</h4>
              <p class="s6-article-author">{{ art.author }}</p>
            </div>
          </div>
        </div>
      </section>

      <div class="page-divider"></div>

      <!--  SECTION TYPE 7: Title + Nav buttons + Carousel 250×269  -->
      <section class="section-type-7">
        <div class="s7-header">
          <h2 class="s7-section-title">{{ s7.title }}</h2>
          <div class="s7-nav-btns">
            <button class="s7-nav-btn" aria-label="Trước">‹</button>
            <button class="s7-nav-btn" aria-label="Tiếp">›</button>
          </div>
        </div>

        <div class="s7-article-list">
          <div v-for="(art, i) in s7.articles" :key="i" class="s7-article-item">
            <img :src="art.image" :alt="art.title" class="s7-article-img" />
            <div class="s7-title-overlay">
              <span>{{ art.title }}</span>
            </div>
          </div>
        </div>
      </section>

      <div class="page-divider"></div>

      <!--  SECTION TYPE 8: Left 720px (Cat1+Cat2) + Sidebar Ads 320px  -->
      <section class="section-type-8">
        <!-- LEFT column 720px: Cat1 + Cat2 stacked -->
        <div class="s8-left">
          <!-- Category 1: "Hồ sơ và nhân vật" — 2 articles 345px side by side -->
          <div class="s8-cat-block">
            <div class="s8-cat-header">
              <h2 class="s8-cat-title">{{ s8.cat1.name }}</h2>
              <a href="#" class="s8-cat-readmore">Xem thêm</a>
            </div>
            <div class="s8-cat1-articles">
              <div v-for="(art, i) in s8.cat1.articles" :key="i" class="s8-cat1-item">
                <img :src="art.image" :alt="art.title" class="s8-cat1-img" />
                <div class="s8-cat1-text">
                  <h4 class="s8-art-title">{{ art.title }}</h4>
                  <p class="s8-art-author">{{ art.author }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Category 2 — 1 article horizontal: image 347×208 + text 350px -->
          <div class="s8-cat-block">
            <div class="s8-cat-header">
              <h2 class="s8-cat-title">{{ s8.cat2.name }}</h2>
              <a href="#" class="s8-cat-readmore">Xem thêm</a>
            </div>
            <div
              v-for="(art, i) in s8.cat2.articles"
              :key="i"
              class="s8-cat2-item"
            >
              <img :src="art.image" :alt="art.title" class="s8-cat2-img" />
              <div class="s8-cat2-text">
                <h4 class="s8-art-title">{{ art.title }}</h4>
                <p class="s8-art-desc">{{ art.description }}</p>
                <p class="s8-art-author">{{ art.author }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT sidebar 320px: Ads Banner -->
        <div class="s8-sidebar">
          <div class="s8-ads-banner bg-cover" style="background-image: url('/image_pack/ads_side_bar.png');" aria-label="Quảng cáo"></div>
        </div>
      </section>

    </div><!-- end page-body-light -->

    <Footer @category-selected="handleCategorySelect" />
  </div>
</template>

<!-- 
     SCRIPT
      -->
<script>
import Header from '../components/Header.vue'
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'
import NewsCard from '../components/NewsCard.vue'
import { pageEventMethods } from '@/composables/usePageEvents'

export default {
  name: 'HomePage',
  components: { Header, Navigation, Footer, NewsCard },
  data() {
    return {
      // ── SECTION 1 ──────────────────────────────────────────────────────────
      s1: {
        featured: {
          id: 1,
          image: '/image_pack/image_feature_post.png',
          title: 'Hệ sinh thái đổi mới sáng tạo đang chuyển mình mạnh mẽ',
          description: 'Doanh nghiệp công nghệ nội đang tăng tốc đầu tư, tạo nên những sản phẩm vươn tầm khu vực và bền vững hơn.',
          author: 'Minh Quân',
          date: '12/03/2026'
        },
        stories: [
          {
            image: '/image_pack/image_post_content_list.png',
            title: 'Nhà máy thông minh giảm 20% tiêu hao năng lượng',
            author: 'Khánh Ly',
            date: '11/03/2026',
            comments: 24
          },
          {
            image: '/image_pack/image_post_content_list.png',
            title: 'Start-up AI Việt gọi vốn vòng Series A thành công',
            author: 'Bảo Châu',
            date: '10/03/2026',
            comments: 15
          }
        ],
        quote: {
          text: 'Đổi mới không phải là đặc quyền của số ít — đó là con đường duy nhất để cả dân tộc vươn tới thịnh vượng bền vững.',
          author: 'GS. Nguyễn Văn An'
        }
      },

      // ── SECTION 2 ──────────────────────────────────────────────────────────
      s2: {
        title: 'Nền tảng & Kiến tạo',
        featured: {
          image: '/image_pack/image_feature_post.png',
          title: 'Chuyển đổi số nông nghiệp: từ mô hình thử nghiệm đến nhân rộng toàn quốc',
          author: 'Lan Hương'
        },
        articleList: [
          { title: 'Hạ tầng 5G mở rộng đến vùng ven biển', author: 'Hoàng Phúc', image: '/image_pack/image_post_content_list.png' },
          { title: 'Phòng sạch mới cho nghiên cứu vi mạch trong nước', author: 'Tuấn Nghĩa', image: '/image_pack/image_post_content_list.png' },
          { title: 'Trung tâm dữ liệu xanh đạt chứng nhận quốc tế đầu tiên', author: 'Mai Hương', image: '/image_pack/image_post_content_list.png' },
          { title: 'Giải pháp an ninh mạng sử dụng học máy nội địa', author: 'Trọng Hiếu', image: '/image_pack/image_post_content_list.png' },
          { title: 'Hợp kim siêu nhẹ mở ra ứng dụng hàng không mới', author: 'Gia Hân', image: '/image_pack/image_post_content_list.png' }
        ],
        subLabel: 'Chuyên đề khác',
        categories: [
          { name: 'Khoa học & Công nghệ', image: '/image_pack/image_post_content_list.png' },
          { name: 'Hồ sơ & Nhân vật', image: '/image_pack/image_post_content_list.png' },
          { name: 'Sáng tạo & Thiết kế', image: '/image_pack/image_post_content_list.png' },
          { name: 'Kinh tế số', image: '/image_pack/image_post_content_list.png' },
          { name: 'Giáo dục & Kỹ năng', image: '/image_pack/image_post_content_list.png' }
        ]
      },

      // ── SECTION 3: Diễn đàn ────────────────────────────────────────────────
      s3: {
        mainPosts: [
          {
            image: '/image_pack/image_post_content_list.png',
            authorAvatar: '/image_pack/image_mini_post_side_bar.png',
            title: 'Làm thế nào để doanh nghiệp nhỏ tiếp cận công nghệ AI mà không cần ngân sách lớn?',
            author: 'Nhật Minh',
            comments: 42,
            date: '12/03/2026'
          },
          {
            image: '/image_pack/image_post_content_list.png',
            authorAvatar: '/image_pack/image_mini_post_side_bar.png',
            title: 'Chiến lược đào tạo kỹ năng số cho thế hệ lao động mới',
            author: 'Phương Linh',
            comments: 28,
            date: '11/03/2026'
          },
          {
            image: '/image_pack/image_post_content_list.png',
            authorAvatar: '/image_pack/image_mini_post_side_bar.png',
            title: 'Open source vs. Closed source: Bài toán lớn cho hệ sinh thái công nghệ Việt',
            author: 'Thanh Tùng',
            comments: 37,
            date: '10/03/2026'
          }
        ],
        subPosts: [
          { title: 'Vai trò của startup trong hệ sinh thái đổi mới quốc gia', comments: 18 },
          { title: 'Tương lai của việc làm khi AI thay thế lao động phổ thông', comments: 51 },
          { title: 'Chính sách dữ liệu xuyên biên giới: Việt Nam đang ở đâu?', comments: 29 }
        ]
      },

      // ── SECTION 4 ──────────────────────────────────────────────────────────
      s4: {
        newsList: [
          {
            date: '12/03/2026', priority: 'high', category: 'Văn hóa',
            image: 'image_pack/image_post_content_list.png',
            title: 'Di sản văn hoá phi vật thể được số hoá và lưu trữ lâu dài',
            text: 'Dự án số hoá quy mô lớn giúp bảo tồn hàng nghìn bài dân ca, điệu múa truyền thống đang có nguy cơ mai một.',
            author: 'Phương Nam', priorityText: 'Văn hoá & Xã hội'
          },
          {
            date: '11/03/2026', priority: 'high', category: 'Giáo dục',
            image: 'image_pack/image_post_content_list.png',
            title: 'Mô hình trường học thông minh lan rộng ra các tỉnh thành',
            text: 'Công nghệ thực tế tăng cường và bảng tương tác thay đổi hoàn toàn trải nghiệm học tập.',
            author: 'Lệ Hằng', priorityText: 'Giáo dục'
          },
          {
            date: '10/03/2026', priority: 'medium', category: 'Sức khoẻ',
            image: 'image_pack/image_post_content_list.png',
            title: 'Ứng dụng sức khỏe cá nhân hóa đạt 1 triệu người dùng',
            text: 'Thuật toán gợi ý dinh dưỡng và lộ trình luyện tập dựa trên hồ sơ sức khỏe cá nhân.',
            author: 'Lan Hương', priorityText: 'Sức khoẻ'
          }
        ],
        subTitle: 'Tác giả nổi bật',
        subPosts: [
          {
            title: 'Xây dựng thương hiệu cá nhân trong kỷ nguyên số',
            description: 'Mạng xã hội, nội dung chất lượng và sự nhất quán là ba trụ cột tạo nên một thương hiệu cá nhân bền vững.',
            author: 'TS. Nguyễn Minh Tâm',
            job: 'Chuyên gia truyền thông số',
            authorAvatar: '/image_pack/image_mini_post_side_bar.png'
          },
          {
            title: 'Tư duy hệ thống — chìa khóa giải quyết vấn đề phức tạp',
            description: 'Nhìn toàn cảnh, hiểu vòng phản hồi và nhận ra điểm kích hoạt là kỹ năng không thể thiếu trong thế giới VUCA.',
            author: 'PGS. Lê Thanh Hải',
            job: 'Giảng viên Đại học Quốc gia',
            authorAvatar: '/image_pack/image_mini_post_side_bar.png'
          },
          {
            title: 'Kinh tế sáng tạo: Góc nhìn từ thực tiễn Đông Nam Á',
            description: 'Các quốc gia ASEAN đang cạnh tranh quyết liệt để thu hút vốn đầu tư vào ngành công nghiệp sáng tạo.',
            author: 'GS. Trần Văn Bình',
            job: 'Cố vấn chính sách kinh tế',
            authorAvatar: '/image_pack/image_mini_post_side_bar.png'
          }
        ]
      },

      // ── SECTION 5: Khoa học & Công nghệ ────────────────────────────────────
      s5: {
        title: 'Khoa học và Công nghệ',
        featured: {
          image: '/image_pack/image_feature_post.png',
          title: 'Vệ tinh quan sát Trái đất bước vào giai đoạn hiệu chuẩn cuối cùng',
          description: 'Dữ liệu hình ảnh độ phân giải cao từ vệ tinh sẽ hỗ trợ dự báo thiên tai, quản lý tài nguyên biển và giám sát nông nghiệp.',
          author: 'Lệ Hằng'
        },
        others: [
          {
            image: '/image_pack/image_post_content_list.png',
            title: 'Nông nghiệp chính xác giảm 25% lượng nước tưới nhờ cảm biến IoT',
            author: 'Gia Hân'
          },
          {
            image: '/image_pack/image_post_content_list.png',
            title: 'Thiết bị đo chất lượng không khí cầm tay đầu tiên sản xuất nội địa',
            author: 'Minh Phát'
          }
        ]
      },

      // ── SECTION 6 ──────────────────────────────────────────────────────────
      s6: {
        title: 'Sáng tạo & Thiết kế',
        articles: [
          {
            image: '/image_pack/image_post_content_list.png',
            title: 'Kiến trúc xanh — xu hướng thiết kế bền vững dẫn dắt thập kỷ mới',
            author: 'Hoàng Dung'
          },
          {
            image: '/image_pack/image_post_content_list.png',
            title: 'Đồ hoạ sinh thành AI: ranh giới mới giữa sáng tạo và bản quyền',
            author: 'Trà My'
          },
          {
            image: '/image_pack/image_post_content_list.png',
            title: 'Thiết kế bao bì tái chế: từ ý tưởng đến thực tiễn sản xuất',
            author: 'Quốc Bảo'
          }
        ]
      },

      // ── SECTION 7 ──────────────────────────────────────────────────────────
      s7: {
        title: 'Thư viện ảnh',
        articles: [
          { image: '/image_pack/image_post_content_list.png', title: 'Lễ hội ánh sáng thành phố 2026' },
          { image: '/image_pack/image_post_content_list.png', title: 'Triển lãm công nghệ quốc tế Hà Nội' },
          { image: '/image_pack/image_post_content_list.png', title: 'Không gian sáng tạo làng nghề truyền thống' },
          { image: '/image_pack/image_post_content_list.png', title: 'Hành trình khởi nghiệp từ vùng nông thôn' }
        ]
      },

      // ── SECTION 8 ──────────────────────────────────────────────────────────
      s8: {
        cat1: {
          name: 'Hồ sơ và Nhân vật',
          articles: [
            {
              image: '/image_pack/image_post_content_list.png',
              title: 'Người kỹ sư trẻ biến giấc mơ chip nội địa thành hiện thực',
              author: 'Phương Linh'
            },
            {
              image: '/image_pack/image_post_content_list.png',
              title: 'Nhà sáng lập startup xanh chinh phục thị trường ASEAN',
              author: 'Thanh Bình'
            }
          ]
        },
        cat2: {
          name: 'Kinh tế số',
          articles: [
            {
              image: '/image_pack/image_post_content_list.png',
              title: 'Fintech Việt Nam bứt phá: Từ ví điện tử đến ngân hàng số toàn diện',
              description: 'Cuộc đua số hoá dịch vụ tài chính đang tái định hình cách người dân Việt tiếp cận tín dụng, thanh toán và đầu tư.',
              author: 'Văn Khoa'
            }
          ]
        }
      }
    }
  },
  methods: {
    ...pageEventMethods()
  }
}
</script>

<!-- 
     STYLES
      -->
<style scoped>

/* ── Page layout ─────────────────────────────────────────────────────────── */
.page-body {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-body-light {
  background: #fff;
}

.page-divider {
  width: 100%;
  max-width: 1100px;
  height: 1px;
  background: #D6D6D6;
  margin: 30px auto;
}

/* ── DÙNG CHUNG: section header (tiêu đề trái + xem thêm phải) ───────────── */
.s2-header,
.s4-sub-header,
.s5-header,
.s6-header,
.s7-header,
.s8-cat-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

/* ── DÙNG CHUNG: tiêu đề chuyên mục nền trắng (vàng đậm) ────────────────── */
.s4-sub-title,
.s5-section-title,
.s6-section-title,
.s7-section-title,
.s8-cat-title {
  color: #AD7701;
  font-family: Merriweather, serif;
  font-size: clamp(18px, 4vw, 22px);
  font-weight: 700;
  line-height: 160%;
  margin: 0;
}

/* ── DÙNG CHUNG: link "Xem thêm" màu tối ────────────────────────────────── */
.s4-sub-readmore,
.s5-readmore,
.s8-cat-readmore {
  color: #101010;
  font-family: Archivo, sans-serif;
  font-size: clamp(13px, 3vw, 15px);
  font-weight: 400;
  line-height: 160%;
  text-decoration: none;
}

/* ── DÙNG CHUNG: tiêu đề bài nhỏ 18px, 2 dòng ───────────────────────────── */
.s5-other-title,
.s6-article-title {
  color: #101010;
  font-family: Merriweather, serif;
  font-size: clamp(16px, 3.5vw, 18px);
  font-weight: 700;
  line-height: 160%;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* ── DÙNG CHUNG: tên tác giả bài nhỏ ────────────────────────────────────── */
.s5-other-author,
.s6-article-author,
.s8-art-author {
  color: #5F5F5F;
  font-family: Archivo, sans-serif;
  font-size: clamp(13px, 3vw, 15px);
  font-weight: 400;
  line-height: 140%;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* ── SECTION TYPE 1 ──────────────────────────────────────────────────────── */

.section-type-1 {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  column-gap: 35px;
  row-gap: 30px;
  width: 100%;
  padding-bottom: 15px;
}

/* Featured Article Large — spans rows 1+2 on left */
.s1-featured {
  grid-column: 1;
  grid-row: 1 / 3;
  position: relative;
  overflow: hidden;
}

.s1-featured-img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
}

.s1-featured-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.85));
  padding: 24px 20px 20px;
  color: #fff;
}

.s1-featured-title {
  font-family: Merriweather, serif;
  font-size: clamp(20px, 4.5vw, 26px);
  font-weight: 700;
  line-height: 160%;
  margin: 0 0 8px;
  color: #fff;
}

.s1-featured-desc {
  font-family: Archivo, sans-serif;
  font-size: clamp(14px, 3.5vw, 17px);
  font-weight: 400;
  line-height: 160%;
  margin: 0 0 10px;
  color: #fff;
}

.s1-featured-meta {
  display: flex;
  gap: 15px;
  font-family: Archivo, sans-serif;
  font-size: clamp(12px, 3vw, 14px);
  color: rgba(255,255,255,0.85);
}

/* 2 Other Stories — chia đều không gian còn lại bên phải featured */
.s1-stories {
  grid-column: 2;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-self: stretch;
}

.s1-story-unit {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 0;
}

.s1-story-img {
  flex: 1;
  width: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  min-height: 0;
}

.s1-story-info {
  padding: 10px 0 0;
  flex-shrink: 0;
}

.s1-story-title {
  font-family: Merriweather, serif;
  font-size: clamp(15px, 3.5vw, 18px);
  font-weight: 700;
  line-height: 160%;
  color: #101010;
  margin: 0 0 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.s1-story-meta {
  display: flex;
  gap: 12px;
  font-family: Archivo, sans-serif;
  font-size: clamp(12px, 3vw, 14px);
  color: #7F7F7F;
  align-items: center;
}

/* Feature Quote — spans both columns */
.s1-quote {
  grid-column: 1 / 3;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
}

.s1-quote-icon {
  width: 163px;
  height: 163px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
}

.s1-quote-body {
  flex: 1;
  min-width: 0;
}

.s1-quote-text {
  font-family: Merriweather, serif;
  font-size: clamp(18px, 4.5vw, 21px);
  font-style: italic;
  font-weight: 700;
  line-height: 160%;
  color: #101010;
  margin: 0 0 8px;
}

.s1-quote-author {
  font-family: Archivo, sans-serif;
  font-size: clamp(14px, 3.5vw, 16px);
  font-weight: 400;
  color: #5F5F5F;
  margin: 0 0 6px;
}

.s1-quote-nav {
  color: #F4C660;
  font-family: Archivo, sans-serif;
  font-size: clamp(14px, 3.5vw, 16px);
  font-weight: 400;
  text-decoration: none;
}

/* ── SECTION TYPE 2: màu tím than (full-width) ───────────────────────────── */

.s2-outer {
  width: 100%;
  background: #1A1040;
  padding: 40px 0;
}

.s2-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-type-2 {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 15px;
}

.s2-section-title {
  color: #F4C660;
  font-family: Merriweather, serif;
  font-size: clamp(18px, 4vw, 22px);
  font-weight: 700;
  line-height: 160%;
  margin: 0;
}

.s2-readmore {
  color: #fff;
  font-family: Archivo, sans-serif;
  font-size: clamp(13px, 3vw, 15px);
  font-weight: 400;
  line-height: 160%;
  text-decoration: none;
}

.s2-search-bar {
  display: flex;
  width: 100%;
  height: 24px;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.25);
  padding-bottom: 4px;
}

.s2-search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-family: Archivo, sans-serif;
  font-size: clamp(13px, 3vw, 15px);
  line-height: 160%;
}

.s2-search-input::placeholder {
  color: rgba(255,255,255,0.45);
}

.s2-search-btn {
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.s2-main {
  display: flex;
  align-items: flex-start;
  gap: 30px;
}

/* Featured LEFT */
.s2-featured {
  flex: 1;
  min-height: 300px;
  position: relative;
  overflow: hidden;
}

/* Scroll wrapper phải — chứa scroll list + fade */
.s2-scroll-wrapper {
  position: relative;
  width: 400px;
  flex-shrink: 0;
  overflow: hidden;
}

.s2-scroll-wrapper::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, transparent, #1A1040);
  pointer-events: none;
  z-index: 1;
}

/* Scroll List RIGHT */
.s2-scroll-list {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  max-height: 461px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  flex-shrink: 0;
}

.s2-scroll-list::-webkit-scrollbar {
  display: none;
}

.s2-list-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
}

.s2-item-text {
  flex: 1;
  overflow: hidden;
}

.s2-item-title {
  color: #fff;
  font-family: Merriweather, serif;
  font-size: clamp(16px, 4vw, 18px);
  font-weight: 700;
  line-height: 160%;
  margin: 0 0 4px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.s2-item-author {
  color: #fff;
  font-family: Merriweather, serif;
  font-size: clamp(12px, 3vw, 14px);
  font-weight: 700;
  line-height: 160%;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.s2-item-thumb {
  width: 120px;
  height: 72px;
  flex-shrink: 0;
  object-fit: cover;
  aspect-ratio: 5 / 3;
}

.s2-featured-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.s2-featured-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.85));
  padding: 24px 20px 18px;
}

.s2-featured-title {
  font-family: Merriweather, serif;
  font-size: clamp(18px, 4vw, 22px);
  font-weight: 700;
  line-height: 160%;
  color: #fff;
  margin: 0 0 8px;
}

.s2-featured-author {
  font-family: Archivo, sans-serif;
  font-size: clamp(13px, 3vw, 15px);
  color: rgba(255,255,255,0.85);
  margin: 0;
}

/* Sub Content */
.s2-sub {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.s2-sub-label {
  color: #fff;
  font-family: Merriweather, serif;
  font-size: clamp(14px, 3.5vw, 16px);
  font-weight: 700;
  margin: 0;
  line-height: 160%;
}

.s2-carousel {
  display: flex;
  width: 100%;
  height: 168px;
  align-items: center;
  gap: 30px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
}

.s2-carousel::-webkit-scrollbar {
  display: none;
}

.s2-cat-item {
  width: 280px;
  height: 168px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.s2-cat-img {
  width: 280px;
  height: 168px;
  object-fit: cover;
  display: block;
}

.s2-cat-name {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.35);
  color: #fff;
  text-align: center;
  font-family: Merriweather, serif;
  font-size: clamp(14px, 3.5vw, 16px);
  font-weight: 700;
  line-height: 160%;
  padding: 8px;
}

/* ── SECTION TYPE 3: Forum ───────────────────────────────────────────────── */

.section-type-3 {
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 35px;
  padding-bottom: 15px;
}

/* Main list – chiếm phần lớn chiều rộng */
.s3-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
}

.s3-main-label {
  font-family: Merriweather, serif;
  font-size: clamp(18px, 4vw, 22px);
  font-weight: 700;
  line-height: 160%;
  color: #101010;
  margin: 0;
}

.s3-forum-item {
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 20px;
}

.s3-post-img {
  width: 140px;
  height: 140px;
  flex-shrink: 0;
  object-fit: cover;
  aspect-ratio: 1 / 1;
}

.s3-post-info {
  flex: 1;
  min-width: 0;
}

.s3-post-title {
  color: #101010;
  font-family: Merriweather, serif;
  font-size: clamp(18px, 4vw, 22px);
  font-weight: 700;
  line-height: 160%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0 0 10px;
}

.s3-post-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 24px;
}

.s3-avatar {
  width: 12px;
  height: 16px;
  object-fit: cover;
  border-radius: 2px;
  flex-shrink: 0;
}

.s3-author-text,
.s3-meta-sep {
  color: #222;
  font-family: Archivo, sans-serif;
  font-size: clamp(13px, 3vw, 15px);
  font-weight: 400;
  line-height: 140%;
}

.s3-date {
  color: #7F7F7F;
  font-family: Archivo, sans-serif;
  font-size: clamp(13px, 3vw, 15px);
  font-weight: 400;
  line-height: 100%;
}

/* Sub list */
.s3-sub {
  width: 345px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.s3-sub-title {
  color: #101010;
  font-family: Merriweather, serif;
  font-size: clamp(18px, 4vw, 22px);
  font-weight: 700;
  line-height: 160%;
  margin: 0;
}

.s3-sub-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.s3-sub-post-title {
  color: #101010;
  font-family: Merriweather, serif;
  font-size: clamp(16px, 4vw, 18px);
  font-weight: 700;
  line-height: 160%;
  margin: 0;
}

.s3-sub-comments {
  color: #7F7F7F;
  font-family: Archivo, sans-serif;
  font-size: clamp(13px, 3vw, 15px);
  font-weight: 400;
  margin: 0;
  display: flex;
  align-items: center;
}

.s3-btn-create {
  background: var(--3, #F4C660);
  color: #101010;
  border: none;
  padding: 10px 20px;
  font-family: Archivo, sans-serif;
  font-size: clamp(13px, 3vw, 15px);
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  text-align: center;
}

/* ── SECTION TYPE 4 ──────────────────────────────────────────────────────── */

.section-type-4 {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 15px;
}

.s4-layout {
  display: flex;
  align-items: stretch;
  gap: 35px;
}

/* Main List – fluid */
.s4-main-list {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

/* Sub content */
.s4-sub {
  width: 345px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.s4-sub-post {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

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

/* Ads Banner */
.s4-ads-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
}

.s4-ads-banner {
  width: 100%;
  max-width: 970px;
  height: 223px;
  background: #e8e8e8;
}

/* ── SECTION TYPE 5 ──────────────────────────────────────────────────────── */

.section-type-5 {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 15px;
}

.s5-content {
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 30px;
}

/* Featured LEFT – fluid */
.s5-featured {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 0;
}

.s5-featured-img {
  width: 100%;
  aspect-ratio: 5 / 3;
  object-fit: cover;
  display: block;
}

.s5-featured-title {
  color: #101010;
  font-family: Merriweather, serif;
  font-size: clamp(18px, 4vw, 22px);
  font-weight: 700;
  line-height: 160%;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.s5-featured-desc {
  color: #5F5F5F;
  font-family: Archivo, sans-serif;
  font-size: clamp(13px, 3vw, 15px);
  font-weight: 400;
  line-height: 140%;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.s5-featured-author {
  color: #5F5F5F;
  font-family: Archivo, sans-serif;
  font-size: clamp(13px, 3vw, 15px);
  font-weight: 400;
  line-height: 140%;
  margin: 0;
}

/* 2 Others stacked RIGHT */
.s5-others {
  width: 345px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.s5-other-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.s5-other-img {
  width: 100%;
  aspect-ratio: 5 / 3;
  object-fit: cover;
  display: block;
}

.s5-other-text {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* ── SECTION TYPE 6 ──────────────────────────────────────────────────────── */

.section-type-6 {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;
}

.s6-readmore {
  color: #0590DE;
  font-family: Archivo, sans-serif;
  font-size: clamp(13px, 3vw, 15px);
  font-weight: 400;
  line-height: 160%;
  text-decoration: none;
}

.s6-article-list {
  display: flex;
  width: 100%;
  gap: 30px;
  align-items: flex-start;
}

.s6-article-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 0;
}

.s6-article-img {
  width: 100%;
  aspect-ratio: 5 / 3;
  object-fit: cover;
  display: block;
}

.s6-article-text {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* ── SECTION TYPE 7 ──────────────────────────────────────────────────────── */

.section-type-7 {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.s7-nav-btns {
  display: flex;
  gap: 8px;
}

.s7-nav-btn {
  width: 36px;
  height: 36px;
  border: 1.5px solid #D6D6D6;
  background: #fff;
  border-radius: 50%;
  font-size: clamp(18px, 4vw, 20px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #101010;
  line-height: 1;
}

.s7-nav-btn:hover {
  background: #f0f0f0;
}

.s7-article-list {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scrollbar-width: none;
  width: 100%;
}

.s7-article-list::-webkit-scrollbar {
  display: none;
}

.s7-article-item {
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 269px;
  flex-shrink: 0;
}

.s7-article-img {
  width: 250px;
  height: 269px;
  object-fit: cover;
  display: block;
}

.s7-title-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.82));
  padding: 20px 16px 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.s7-title-overlay span {
  color: #fff;
  font-family: Merriweather, serif;
  font-size: clamp(13px, 3vw, 15px);
  font-weight: 700;
  line-height: 160%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── SECTION TYPE 8 ──────────────────────────────────────────────────────── */

.section-type-8 {
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 60px;
  padding-bottom: 15px;
}

/* Left column – fluid */
.s8-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 0;
}

.s8-cat-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Category 1: 2 articles side by side */
.s8-cat1-articles {
  display: flex;
  width: 100%;
  gap: 30px;
  align-items: flex-start;
}

.s8-cat1-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.s8-cat1-img {
  width: 100%;
  aspect-ratio: 5 / 3;
  object-fit: cover;
  display: block;
}

.s8-cat1-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Category 2: 1 horizontal article */
.s8-cat2-item {
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 20px;
}

.s8-cat2-img {
  width: 47%;
  flex-shrink: 0;
  object-fit: cover;
  aspect-ratio: 5 / 3;
  display: block;
}

.s8-cat2-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
  align-self: stretch;
  justify-content: center;
}

/* Shared article text */
.s8-art-title {
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

.s8-art-desc {
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

/* Right Sidebar */
.s8-sidebar {
  width: 320px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}

.s8-ads-banner {
  width: 100%;
  min-height: 450px;
  background: #e8e8e8;
}

/* ═══════════════════════════════════════════════════════════════════════════
   RESPONSIVE  –  cùng breakpoint với NenTangKienTaoPage / styles.css
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Desktop nhỏ / tablet lớn (≤ 1200px) ────────────────────────────────── */
@media (max-width: 1200px) {
  .s2-scroll-wrapper { width: 320px; }
  .s4-ads-banner  { height: auto; aspect-ratio: 970 / 223; }
}

/* ── Tablet (≤ 960px) ────────────────────────────────────────────────────── */
@media (max-width: 960px) {
  .page-body { 
    padding: 30px 16px; 
    max-width: 100%;
  }

  .page-divider { 
    margin: 25px auto; 
    max-width: calc(100% - 2rem);
  }

  /* Section 1 */
  .section-type-1 {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .s1-featured { grid-column: unset; grid-row: unset; }
  .s1-stories { 
    flex-direction: row; 
    flex-wrap: wrap; 
    gap: 20px; 
    align-self: auto; 
  }
  .s1-story-unit { flex: 1 1 260px; min-height: unset; }
  .s1-story-img { flex: unset; min-height: unset; aspect-ratio: 5 / 3; }
  .s1-featured-title { 
    font-size: clamp(20px, 4.5vw, 24px); 
    line-height: 140%;
  }
  .s1-quote { gap: 12px; }
  .s1-quote-icon { width: 80px; height: 80px; }
  .s1-quote-text { 
    font-size: clamp(16px, 4vw, 18px); 
    line-height: 150%;
  }

  /* Section 2 */
  .s2-main { flex-direction: column; }
  .s2-scroll-wrapper { width: 100%; }
  .s2-scroll-list { max-height: min(60vh, 461px); overflow-y: auto; }
  .s2-featured { width: 100%; }
  .s2-section-title { 
    font-size: clamp(18px, 4.5vw, 21px); 
  }

  /* Section 3 */
  .section-type-3 { flex-direction: column; }
  .s3-sub { width: 100%; flex-direction: row; flex-wrap: wrap; }
  .s3-sub-item { flex: 1 1 220px; }
  .s3-post-title { 
    font-size: clamp(17px, 4.5vw, 20px); 
    line-height: 150%;
  }

  /* Section 4 */
  .s4-layout { flex-direction: column; }
  .s4-sub { width: 100%; flex-direction: row; flex-wrap: wrap; gap: 24px; }
  .s4-sub-post { flex: 1 1 240px; }
  .s4-sub-title { 
    font-size: clamp(17px, 4.5vw, 20px); 
  }

  /* Section 5 */
  .s5-content { flex-direction: column; }
  .s5-others { width: 100%; flex-direction: row; gap: 20px; }
  .s5-other-item { flex: 1 1 240px; }
  .s5-section-title { 
    font-size: clamp(17px, 4.5vw, 20px); 
  }

  /* Section 6 */
  .s6-article-list { flex-wrap: wrap; }
  .s6-article-item { flex: 1 1 calc(50% - 20px); }
  .s6-section-title { 
    font-size: clamp(17px, 4.5vw, 20px); 
  }

  /* Section 7 */
  .s7-section-title { 
    font-size: clamp(17px, 4.5vw, 20px); 
  }

  /* Section 8 */
  .s8-cat-title { 
    font-size: clamp(17px, 4.5vw, 20px); 
  }
  .section-type-8 { flex-direction: column; gap: 30px; }
  .s8-left { width: 100%; }
  .s8-sidebar { width: 100%; }
  .s8-ads-banner { min-height: 300px; }
}

/* ── Mobile landscape (≤ 768px) ──────────────────────────────────────────── */
@media (max-width: 768px) {
  .page-body { 
    padding: 24px 16px; 
    max-width: 100%;
  }

  .page-divider { 
    margin: 20px auto; 
    max-width: calc(100% - 2rem);
  }

  /* Section 1 */
  .s1-stories { flex-direction: column; align-self: auto; gap: 20px; }
  .s1-story-unit { flex: unset; min-height: unset; width: 100%; }
  .s1-story-img { flex: unset; min-height: unset; aspect-ratio: 5 / 3; }
  .s1-featured-title { 
    font-size: clamp(18px, 4.5vw, 22px); 
    line-height: 140%;
  }
  .s1-featured-desc { 
    font-size: clamp(13px, 3vw, 15px); 
  }
  .s1-story-title { 
    font-size: clamp(15px, 3.5vw, 17px); 
  }
  .s1-quote { flex-direction: column; align-items: flex-start; gap: 10px; }
  .s1-quote-icon { width: 60px; height: 60px; }
  .s1-quote-text { 
    font-size: clamp(14px, 3vw, 16px); 
    line-height: 150%;
  }

  /* Section 2 */
  .s2-featured { min-height: 220px; }
  .s2-section-title { 
    font-size: clamp(18px, 4.5vw, 21px); 
  }
  .s2-featured-title { 
    font-size: clamp(15px, 4vw, 18px); 
  }

  /* Section 3 */
  .section-type-3 { flex-direction: column; }
  .s3-sub { width: 100%; flex-direction: row; flex-wrap: wrap; }
  .s3-sub-item { flex: 1 1 220px; }
  .s3-post-title { 
    font-size: clamp(16px, 4vw, 19px); 
    line-height: 150%;
  }

  /* Section 4 */
  .s4-layout { flex-direction: column; }
  .s4-sub { width: 100%; flex-direction: row; flex-wrap: wrap; gap: 24px; }
  .s4-sub-post { flex: 1 1 240px; }
  .s4-sub-title { 
    font-size: clamp(16px, 4.5vw, 19px); 
  }
  .s4-ads-banner { height: auto; min-height: 120px; }

  /* Section 5 */
  .s5-content { flex-direction: column; }
  .s5-others { width: 100%; flex-direction: row; gap: 20px; }
  .s5-other-item { flex: 1 1 240px; }
  .s5-section-title { 
    font-size: clamp(16px, 4.5vw, 19px); 
  }
  .s5-featured-title { 
    font-size: clamp(15px, 4vw, 18px); 
    white-space: normal; 
  }

  /* Section 6 */
  .s6-article-list { flex-wrap: wrap; }
  .s6-article-item { flex: 1 1 calc(50% - 20px); }
  .s6-section-title { 
    font-size: clamp(16px, 4.5vw, 19px); 
  }

  /* Section 7 */
  .s7-section-title { 
    font-size: clamp(16px, 4.5vw, 19px); 
  }
  .s7-article-item { width: 200px; height: 200px; }
  .s7-article-img { width: 200px; height: 200px; }

  /* Section 8 */
  .section-type-8 { flex-direction: column; }
  .s8-cat-title { 
    font-size: clamp(16px, 4.5vw, 19px); 
  }
  .s8-left { width: 100%; }
  .s8-sidebar { width: 100%; }
  .s8-ads-banner { min-height: 300px; }
}

/* ── Mobile nhỏ (≤ 480px) ────────────────────────────────────────────────── */
@media (max-width: 480px) {
  .page-body { 
    padding: 20px 0.75rem; 
    max-width: 100%;
  }

  .page-divider { 
    margin: 16px auto; 
    max-width: calc(100% - 1.5rem);
  }

  .s2-outer  { 
    padding: 20px 0; 
  }

  .s2-inner  { 
    padding: 0 0.75rem; 
  }

  /* Section 1 */
  .s1-featured-title  { 
    font-size: clamp(17px, 4vw, 19px); 
    line-height: 140%;
  }

  .s1-featured-desc { 
    font-size: clamp(13px, 3vw, 15px); 
  }

  .s1-story-title { 
    font-size: clamp(15px, 3.5vw, 16px); 
  }

  .s1-quote-text { 
    font-size: clamp(14px, 3vw, 16px); 
  }

  /* Section 2 */
  .s2-section-title { 
    font-size: clamp(18px, 4.5vw, 20px); 
  }

  .s2-item-title    { font-size: clamp(14px, 3.5vw, 15px); }
  .s2-featured-title  { font-size: clamp(15px, 4vw, 16px); }
  .s2-sub-label       { font-size: clamp(12px, 3vw, 14px); }

  /* Section 3 */
  .s3-post-title  { 
    font-size: clamp(15px, 4vw, 16px); 
  }

  .s3-sub-title { 
    font-size: clamp(14px, 3.5vw, 16px); 
  }

  /* Section 4-8 tiêu đề chuyên mục vàng */
  .s4-sub-title,
  .s5-section-title,
  .s6-section-title,
  .s7-section-title,
  .s8-cat-title { 
    font-size: clamp(16px, 4.5vw, 18px); 
  }

  /* Section 5 */
  .s5-featured-title { 
    font-size: clamp(15px, 4vw, 16px); 
    white-space: normal; 
  }

  /* Section 7: Carousel items */
  .s7-article-item { 
    width: clamp(140px, 30vw, 180px); 
    height: clamp(140px, 30vw, 180px); 
  }

  .s7-article-img { 
    width: 100%; 
    height: 100%; 
  }

  .s3-btn-create { 
    font-size: clamp(11px, 2.5vw, 13px); 
    padding: 8px 16px; 
  }

  /* Image aspect ratio adjustments */
  .s1-featured-img { 
    aspect-ratio: 4 / 3; 
  }

  .s2-featured-img { 
    aspect-ratio: 4 / 3; 
  }
}
</style>