<template>
  <div id="detail-post-page">
    <Header @search="handleSearch" @login="handleLogin" />
    <Navigation @category-selected="handleCategorySelect" />

    <main class="dp-page-wrapper">
      <div class="dp-layout">

        <!-- ===================== MAIN ARTICLE ===================== -->
        <article class="dp-article">

          <!-- 1. REVIEW POST: breadcrumb/meta + title + lead + author -->
          <div class="dp-review-post">
            <!-- Meta row: breadcrumb (left) + timestamp (right) -->
            <div class="dp-meta-row">
              <nav class="dp-breadcrumb" aria-label="Breadcrumb">
                <router-link to="/" class="dp-breadcrumb-link">Trang chủ</router-link>
                <span class="dp-breadcrumb-sep"> &gt; </span>
                <router-link to="/category/nen-tang-kien-tao" class="dp-breadcrumb-link">Chuyên đề</router-link>
              </nav>
              <time class="dp-timestamp">{{ post.timestamp }}</time>
            </div>

            <!-- Content: title + shortDescription + author -->
            <div class="dp-post-content">
              <h1 class="dp-title">{{ post.title }}</h1>
              <div class="dp-more">
                <p class="dp-short-desc">{{ post.shortDescription }}</p>
                <p class="dp-author">{{ post.author }}</p>
              </div>
            </div>
          </div>

          <!-- 2. DETAILS POST: flexible article body -->
          <div class="dp-body">
            <template v-for="(block, idx) in post.body" :key="idx">

              <!-- Image block -->
              <figure v-if="block.type === 'image'" class="dp-image-block">
                <img :src="block.src" :alt="block.caption" class="dp-body-img" />
                <figcaption class="dp-img-caption">{{ block.caption }}</figcaption>
              </figure>

              <!-- Decorative separator line -->
              <div v-else-if="block.type === 'line'" class="dp-separator" role="separator"></div>

              <!-- Normal paragraph -->
              <p v-else-if="block.type === 'textP'" class="dp-paragraph">{{ block.text }}</p>

              <!-- Bold section heading -->
              <p v-else-if="block.type === 'textB'" class="dp-heading-text">{{ block.text }}</p>

            </template>

            <!-- Bottom navigation: back/bookmark (left) + social icons (right) -->
            <div class="dp-nav-bottom">
              <div class="dp-nav-actions">
                <button class="dp-nav-btn" title="Quay lại" @click="$router.back()" aria-label="Quay lại">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M12 5l-7 7 7 7" stroke="#101010" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <button class="dp-nav-btn" title="Lưu bài viết" aria-label="Lưu bài viết">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" stroke="#101010" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>

              <div class="dp-nav-social">
                <!-- Facebook -->
                <button class="dp-social-btn" title="Chia sẻ Facebook" aria-label="Chia sẻ Facebook">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="4" fill="#1877F2"/>
                    <path d="M17.5 11H20V8H17.5C15.0 8 13 10.0 13 12.5V14H11V17H13V26H16.5V17H19L19.5 14H16.5V12.5C16.5 11.7 16.7 11 17.5 11Z" fill="white"/>
                  </svg>
                </button>
                <!-- X / Twitter -->
                <button class="dp-social-btn" title="Chia sẻ X" aria-label="Chia sẻ X">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="4" fill="#0F0F0F"/>
                    <text x="7" y="23" font-size="18" font-family="Arial Black, Arial, sans-serif" fill="white" font-weight="900">X</text>
                  </svg>
                </button>
                <!-- Link copy -->
                <button class="dp-social-btn" title="Sao chép liên kết" aria-label="Sao chép liên kết" @click="copyLink">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="4" fill="#E0E0E0"/>
                    <path d="M13 17a5 5 0 0 0 7.0 .5l3-3a5 5 0 0 0-7-7l-1.5 1.5" stroke="#333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19 15a5 5 0 0 0-7-.5l-3 3a5 5 0 0 0 7 7l1.5-1.5" stroke="#333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- 3. COMMENT SECTION -->
          <section class="dp-comments" aria-label="Bình luận">
            <h3 class="dp-comments-title">Ý kiến/Bình luận ({{ comments.length }})</h3>

            <div class="dp-comment-input-wrap">
              <input
                type="text"
                v-model="newComment"
                placeholder="Chia sẻ ý kiến của bạn"
                class="dp-comment-input"
                aria-label="Nhập bình luận"
                @keyup.enter="submitComment"
              />
              <svg class="dp-comment-send-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" @click="submitComment" style="cursor:pointer">
                <path d="M22 2L11 13" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 2L15 22 11 13 2 9l20-7z" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <!-- Filter tabs -->
            <div class="dp-comment-filter">
              <button
                class="dp-filter-tab"
                :class="{ active: commentFilter === 'relevant' }"
                @click="commentFilter = 'relevant'"
              >Quan tâm nhất</button>
              <span class="dp-filter-sep">|</span>
              <button
                class="dp-filter-tab"
                :class="{ active: commentFilter === 'latest' }"
                @click="commentFilter = 'latest'"
              >Mới nhất</button>
            </div>

            <!-- Comment list -->
            <div class="dp-comment-list">
              <div v-for="(comment, ci) in sortedComments" :key="ci" class="dp-comment-main">
                <!-- Main comment -->
                <div class="dp-comment-row">
                  <div class="dp-avatar" :style="{ background: comment.avatarColor }">
                    {{ comment.initials }}
                  </div>
                  <div class="dp-comment-body">
                    <span class="dp-comment-username">{{ comment.username }}</span>
                    <p class="dp-comment-text">{{ comment.text }}</p>
                    <div class="dp-comment-options">
                      <span class="dp-comment-opt">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="vertical-align:middle;margin-right:3px">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#757575" stroke-width="2" stroke-linejoin="round"/>
                        </svg>
                        {{ comment.likes }}
                      </span>
                      <span class="dp-comment-opt">Trả lời</span>
                      <span class="dp-comment-opt">Chia sẻ</span>
                      <span class="dp-comment-opt dp-comment-time">{{ comment.time }}</span>
                    </div>
                  </div>
                </div>

                <!-- Replies -->
                <div v-if="comment.replies && comment.replies.length" class="dp-reply-list">
                  <div v-for="(reply, ri) in comment.replies" :key="ri" class="dp-reply-row">
                    <div class="dp-reply-line"></div>
                    <div class="dp-comment-row dp-reply-inner">
                      <div class="dp-avatar dp-avatar-sm" :style="{ background: reply.avatarColor }">
                        {{ reply.initials }}
                      </div>
                      <div class="dp-comment-body">
                        <span class="dp-comment-username">{{ reply.username }}</span>
                        <p class="dp-comment-text">{{ reply.text }}</p>
                        <div class="dp-comment-options">
                          <span class="dp-comment-opt">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="vertical-align:middle;margin-right:3px">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#757575" stroke-width="2" stroke-linejoin="round"/>
                            </svg>
                            {{ reply.likes }}
                          </span>
                          <span class="dp-comment-opt">Trả lời</span>
                          <span class="dp-comment-opt">Chia sẻ</span>
                          <span class="dp-comment-opt dp-comment-time">{{ reply.time }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Show more replies -->
                <div v-if="comment.moreReplies" class="dp-show-more-replies">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="#076DB6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>{{ comment.moreReplies }} trả lời</span>
                </div>
              </div>
            </div>

            <!-- Load more button -->
            <div class="dp-load-more-wrap">
              <button class="dp-load-more-btn">Xem thêm</button>
            </div>
          </section>

          <!-- 4. TAG SECTION -->
          <div class="dp-tags" aria-label="Tags bài viết">
            <span class="dp-tags-prefix">Tags:</span>
            <template v-for="(tag, ti) in post.tags" :key="ti">
              <a href="#" class="dp-tag-link">{{ tag }}</a>
              <span v-if="ti < post.tags.length - 1" class="dp-tag-sep"> / </span>
            </template>
          </div>

          <!-- 5. RELATED NEWS SECTION - Xem thêm list tin -->
          <div class="dp-page-divider"></div>
          
          <section class="dp-related-section">
            <h3 class="dp-related-title">Bài viết liên quan</h3>
            <div class="dp-related-list">
              <NewsCard v-for="(news, idx) in relatedNews" :key="idx" :news="news" />
            </div>
          </section>

        </article>

        <!-- ===================== SIDEBAR ===================== -->
        <Sidebar />

      </div>
    </main>

    <Footer @category-selected="handleCategorySelect" />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Navigation from '../components/Navigation.vue'
import Sidebar from '../components/Sidebar.vue'
import NewsCard from '../components/NewsCard.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'DetailPostPage',
  components: { Header, Navigation, Sidebar, NewsCard, Footer },
  data() {
    return {
      newComment: '',
      commentFilter: 'relevant',
      post: {
        timestamp: 'Thứ hai, 27/10/2025, 10:00 (GMT+7)',
        title: 'Hệ sinh thái đổi mới sáng tạo đang chuyển mình mạnh mẽ trên toàn cầu',
        shortDescription: 'Doanh nghiệp công nghệ nội đang tăng tốc đầu tư, tạo nên những sản phẩm vươn tầm khu vực và bền vững hơn trong xu thế chuyển đổi số toàn cầu.',
        author: 'Tác giả: Minh Quân – Ban Khoa học & Công nghệ',
        tags: ['Khoa học Công nghệ', 'Chuyển đổi số', 'Điện toán đám mây'],
        body: [
          {
            type: 'image',
            src: '/image_pack/image_feature_post.png',
            caption: 'Hình ảnh minh họa hệ sinh thái đổi mới sáng tạo tại Việt Nam'
          },
          {
            type: 'textP',
            text: 'Trong bối cảnh chuyển đổi số diễn ra mạnh mẽ, các doanh nghiệp công nghệ trong nước đang có những bước tiến đáng kể nhằm xây dựng nền tảng bền vững và phát triển sản phẩm mang tầm khu vực. Làn sóng đầu tư vào hạ tầng số, trí tuệ nhân tạo và điện toán đám mây đang thay đổi diện mạo nền kinh tế số Việt Nam.'
          },
          {
            type: 'textP',
            text: 'Theo báo cáo mới nhất từ các tổ chức nghiên cứu trong nước, tổng đầu tư vào công nghệ của khu vực doanh nghiệp tư nhân đã tăng hơn 40% trong năm qua, tập trung chủ yếu vào các lĩnh vực fintech, y tế kỹ thuật số và nông nghiệp thông minh.'
          },
          {
            type: 'line'
          },
          {
            type: 'textB',
            text: 'Vai trò của hệ sinh thái trong chuyển đổi số'
          },
          {
            type: 'textP',
            text: 'Các chuyên gia nhận định rằng việc xây dựng hệ sinh thái đổi mới cần sự tham gia đồng bộ của cả doanh nghiệp, viện nghiên cứu và cơ quan nhà nước. Điều này đòi hỏi một chiến lược dài hạn, bền vững, gắn kết chặt chẽ giữa đào tạo nguồn nhân lực và ứng dụng thực tiễn trong sản xuất, kinh doanh.'
          },
          {
            type: 'textP',
            text: 'Các nền tảng công nghệ mới như AI, điện toán đám mây và IoT đang tạo ra những cơ hội chưa từng có, giúp doanh nghiệp tối ưu quy trình và nâng cao năng lực cạnh tranh trên thị trường quốc tế. Nhiều startup Việt đã bước đầu ghi dấu ấn tại các thị trường Đông Nam Á và Nhật Bản.'
          },
          {
            type: 'image',
            src: '/image_pack/image_post_content_list.png',
            caption: 'Các chuyên gia thảo luận về chiến lược phát triển hệ sinh thái công nghệ quốc gia'
          },
          {
            type: 'textB',
            text: 'Chính sách hỗ trợ và định hướng đầu tư'
          },
          {
            type: 'textP',
            text: 'Chính phủ đã ban hành nhiều chính sách ưu đãi nhằm thu hút đầu tư vào lĩnh vực công nghệ cao, bao gồm các khoản hỗ trợ về thuế, tiếp cận vốn và phát triển nguồn nhân lực chất lượng cao. Đặc biệt, Chiến lược quốc gia về chuyển đổi số đến năm 2030 đặt ra mục tiêu đưa Việt Nam vào nhóm 50 nước dẫn đầu thế giới về chỉ số Chính phủ điện tử.'
          },
          {
            type: 'textP',
            text: 'Không gian sáng tạo mở, các vườn ươm khởi nghiệp và quỹ hỗ trợ đổi mới sáng tạo đang được nhân rộng tại nhiều địa phương, tạo điều kiện để các ý tưởng công nghệ được hiện thực hóa nhanh chóng và đưa ra thị trường.'
          },
          {
            type: 'line'
          }
        ]
      },
      comments: [
        {
          username: 'Nguyễn Văn An',
          initials: 'NA',
          avatarColor: '#9F224E',
          text: 'Bài viết rất hay và thông tin hữu ích. Cảm ơn tác giả đã chia sẻ những góc nhìn sâu sắc về hệ sinh thái đổi mới sáng tạo.',
          likes: 15,
          time: '2 giờ trước',
          replies: [
            {
              username: 'Trần Thị Mai',
              initials: 'TM',
              avatarColor: '#076DB6',
              text: 'Đồng ý với bạn! Tôi cũng thấy bài viết cung cấp nhiều thông tin có giá trị, đặc biệt là phần về chính sách hỗ trợ.',
              likes: 5,
              time: '1 giờ trước'
            }
          ],
          moreReplies: null
        },
        {
          username: 'Lê Hữu Phúc',
          initials: 'LP',
          avatarColor: '#F4A223',
          text: 'Rất mong chờ những chính sách cụ thể hơn để hỗ trợ các startup trong nước phát triển bền vững và tiếp cận thị trường quốc tế.',
          likes: 8,
          time: '5 giờ trước',
          replies: [],
          moreReplies: 3
        },
        {
          username: 'Phạm Thanh Hà',
          initials: 'PH',
          avatarColor: '#2E7D32',
          text: 'Chuyển đổi số là xu thế tất yếu. Điều quan trọng là doanh nghiệp cần có chiến lược rõ ràng và đội ngũ nhân sự phù hợp để thực thi hiệu quả.',
          likes: 12,
          time: '8 giờ trước',
          replies: [],
          moreReplies: null
        }
      ],
      relatedNews: [
        {
          date: '11/03/2026',
          priority: 'high',
          category: 'Nền tảng & Kiến tạo',
          image: '/image_pack/image_post_content_list.png',
          title: 'Hạ tầng 5G mở rộng đến vùng ven biển',
          text: 'Các trạm thu phát mới hỗ trợ dịch vụ IoT cho logistics và du lịch biển.',
          author: 'Hoàng Phúc',
          priorityText: 'Ưu tiên cao'
        },
        {
          date: '10/03/2026',
          priority: 'high',
          category: 'Nền tảng & Kiến tạo',
          image: '/image_pack/image_post_content_list.png',
          title: 'Phòng thí nghiệm vật liệu mới công bố hợp kim siêu nhẹ',
          text: 'Hợp kim magiê cải tiến chịu lực gấp đôi, mở ra ứng dụng cho hàng không.',
          author: 'Mai Hương',
          priorityText: 'Ưu tiên cao'
        },
        {
          date: '09/03/2026',
          priority: 'medium',
          category: 'Nền tảng & Kiến tạo',
          image: '/image_pack/image_post_content_list.png',
          title: 'Giải pháp an ninh mạng sử dụng học máy',
          text: 'Mô hình phát hiện bất thường theo thời gian thực giảm 35% rủi ro truy cập trái phép.',
          author: 'Trọng Hiếu',
          priorityText: 'Ưu tiên trung bình'
        },
        {
          date: '08/03/2026',
          priority: 'medium',
          category: 'Khoa học & Công nghệ',
          image: '/image_pack/image_post_content_list.png',
          title: 'Trung tâm dữ liệu xanh đạt chứng nhận quốc tế',
          text: 'Giải pháp làm mát bằng tuần hoàn nước giúp giảm 30% chi phí vận hành.',
          author: 'Bảo Châu',
          priorityText: 'Ưu tiên trung bình'
        },
        {
          date: '07/03/2026',
          priority: 'low',
          category: 'Du lịch',
          image: '/image_pack/image_post_content_list.png',
          title: 'Thành phố thử nghiệm xe buýt điện tự hành',
          text: 'Lộ trình khép kín trong khu đô thị mới với 12 điểm đón trả.',
          author: 'Minh Phát',
          priorityText: 'Ưu tiên thấp'
        },
        {
          date: '06/03/2026',
          priority: 'low',
          category: 'Sức khỏe',
          image: '/image_pack/image_post_content_list.png',
          title: 'Ứng dụng sức khỏe cá nhân hóa đạt 1 triệu người dùng',
          text: 'Thuật toán gợi ý dinh dưỡng dựa trên dữ liệu đeo tay.',
          author: 'Lan Hương',
          priorityText: 'Ưu tiên thấp'
        }
      ]
    }
  },
  computed: {
    sortedComments() {
      if (this.commentFilter === 'latest') {
        return [...this.comments].reverse()
      }
      return [...this.comments].sort((a, b) => b.likes - a.likes)
    }
  },
  methods: {
    handleSearch() {
      this.$emit('search')
    },
    handleLogin() {
      this.$emit('login')
    },
    handleCategorySelect(category) {
      this.$router.push('/category/' + category)
    },
    submitComment() {
      if (!this.newComment.trim()) return
      this.comments.unshift({
        username: 'Bạn',
        initials: 'B',
        avatarColor: '#9F224E',
        text: this.newComment.trim(),
        likes: 0,
        time: 'Vừa xong',
        replies: [],
        moreReplies: null
      })
      this.newComment = ''
    },
    copyLink() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href)
      }
    }
  }
}
</script>

<style scoped>
/* ── Detail Post Page Layout ── */
#detail-post-page {
  width: 100%;
  background: #fff;
}

.dp-page-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(40px, 5vw, 60px) clamp(1rem, 5vw, 2rem);
}

.dp-layout {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.dp-article {
  flex: 1;
  min-width: 0;
}

/* ── Review Post Section ── */
.dp-review-post {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.dp-meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.dp-breadcrumb {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

.dp-breadcrumb-link {
  color: #0590DE;
  text-decoration: none;
  font-size: 14px;
  transition: opacity 0.2s;
}

.dp-breadcrumb-link:hover {
  opacity: 0.7;
}

.dp-breadcrumb-sep {
  color: #999;
  font-size: 12px;
}

.dp-timestamp {
  color: #999;
  font-size: clamp(12px, 3vw, 14px);
  white-space: nowrap;
}

.dp-post-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dp-title {
  color: #101010;
  font-family: Merriweather, serif;
  font-size: clamp(28px, 6vw, 36px);
  font-weight: 700;
  line-height: 140%;
  margin: 0;
}

.dp-more {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dp-short-desc {
  color: #5F5F5F;
  font-family: Archivo, sans-serif;
  font-size: clamp(15px, 4vw, 18px);
  font-weight: 400;
  line-height: 160%;
  margin: 0;
}

.dp-author {
  color: #999;
  font-family: Archivo, sans-serif;
  font-size: clamp(13px, 3vw, 15px);
  font-weight: 400;
  line-height: 160%;
  margin: 0;
}

/* ── Body Section ── */
.dp-body {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 32px;
  border-bottom: 1px solid #D6D6D6;
}

.dp-paragraph,
.dp-heading-text {
  color: #202020;
  font-family: Archivo, sans-serif;
  font-size: clamp(15px, 3.5vw, 17px);
  font-weight: 400;
  line-height: 170%;
  margin: 0;
}

.dp-heading-text {
  font-weight: 700;
  color: #101010;
}

.dp-image-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
}

.dp-body-img {
  width: 100%;
  height: auto;
  border-radius: 6px;
}

.dp-img-caption {
  color: #999;
  font-family: Archivo, sans-serif;
  font-size: clamp(12px, 3vw, 14px);
  font-weight: 400;
  font-style: italic;
  text-align: center;
  margin: 0;
}

.dp-separator {
  height: 1px;
  background: #D6D6D6;
  margin: 8px 0;
}

/* ── Navigation Bottom ── */
.dp-nav-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 20px 0;
  margin: 24px 0;
}

.dp-nav-actions,
.dp-nav-social {
  display: flex;
  gap: 12px;
}

.dp-nav-btn,
.dp-social-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background 0.2s;
}

.dp-nav-btn:hover {
  background: #f5f5f5;
}

.dp-social-btn {
  width: 40px;
  height: 40px;
}

/* ── Comments Section ── */
.dp-comments {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
}

.dp-comments-title {
  color: #101010;
  font-family: Merriweather, serif;
  font-size: clamp(18px, 4vw, 22px);
  font-weight: 700;
  margin: 0;
}

.dp-comment-input-wrap {
  display: flex;
  gap: 12px;
  padding: 12px 16px;
  border: 1px solid #D6D6D6;
  border-radius: 4px;
  align-items: center;
}

.dp-comment-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: #202020;
  font-family: Archivo, sans-serif;
  font-size: 14px;
}

.dp-comment-input::placeholder {
  color: #999;
}

.dp-comment-send-icon {
  cursor: pointer;
  transition: opacity 0.2s;
}

.dp-comment-send-icon:hover {
  opacity: 0.7;
}

.dp-comment-filter {
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 12px 0;
}

.dp-filter-tab {
  background: transparent;
  border: none;
  color: #999;
  font-family: Archivo, sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s;
}

.dp-filter-tab.active {
  color: #0590DE;
  font-weight: 700;
}

.dp-filter-tab:hover {
  color: #0590DE;
}

.dp-filter-sep {
  color: #D6D6D6;
}

.dp-comment-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.dp-comment-main {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dp-comment-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.dp-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
}

.dp-avatar-sm {
  width: 36px;
  height: 36px;
  font-size: 14px;
}

.dp-comment-body {
  flex: 1;
  min-width: 0;
}

.dp-comment-username {
  color: #101010;
  font-family: Archivo, sans-serif;
  font-weight: 700;
  font-size: 14px;
}

.dp-comment-text {
  color: #5F5F5F;
  font-family: Archivo, sans-serif;
  font-size: 14px;
  line-height: 160%;
  margin: 6px 0 0;
}

.dp-comment-options {
  display: flex;
  gap: 16px;
  margin-top: 8px;
  flex-wrap: wrap;
}

.dp-comment-opt {
  color: #999;
  font-family: Archivo, sans-serif;
  font-size: 12px;
  cursor: pointer;
  transition: color 0.2s;
}

.dp-comment-opt:hover {
  color: #0590DE;
}

.dp-comment-time {
  cursor: default;
}

.dp-reply-list {
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dp-reply-row {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.dp-reply-line {
  width: 2px;
  background: #D6D6D6;
  margin-right: 12px;
  min-height: 40px;
}

.dp-reply-inner {
  gap: 12px;
}

.dp-show-more-replies {
  margin-left: 24px;
  display: flex;
  gap: 6px;
  align-items: center;
  cursor: pointer;
  color: #076DB6;
  font-size: 12px;
  padding: 8px 0;
}

.dp-load-more-wrap {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.dp-load-more-btn {
  padding: 12px 32px;
  border: 1px solid #D6D6D6;
  border-radius: 4px;
  background: white;
  color: #0590DE;
  font-family: Merriweather, serif;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.dp-load-more-btn:hover {
  background: #f0f8ff;
  border-color: #0590DE;
}

/* ── Tags Section ── */
.dp-tags {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  margin: 24px 0;
  font-family: Archivo, sans-serif;
  font-size: 14px;
}

.dp-tags-prefix {
  color: #999;
  font-weight: 700;
}

.dp-tag-link {
  color: #0590DE;
  text-decoration: none;
  transition: opacity 0.2s;
}

.dp-tag-link:hover {
  opacity: 0.7;
}

.dp-tag-sep {
  color: #D6D6D6;
}

/* ── Related News ── */
.dp-page-divider {
  height: 1px;
  background: #D6D6D6;
  margin: 32px 0;
}

.dp-related-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.dp-related-title {
  color: #101010;
  font-family: Merriweather, serif;
  font-size: clamp(18px, 4vw, 22px);
  font-weight: 700;
  margin: 0;
}

.dp-related-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

/* ── Responsive ── */
/* ── Desktop Large (≤ 1200px) ────────────────────────────────────── */
@media (max-width: 1200px) {
  .dp-page-wrapper {
    padding: clamp(30px, 4vw, 50px) clamp(1rem, 4vw, 2rem);
  }

  .dp-layout {
    gap: 32px;
  }

  .dp-related-list {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

/* ── Tablet (≤ 960px) ────────────────────────────────────────────── */
@media (max-width: 960px) {
  .dp-page-wrapper {
    padding: clamp(24px, 4vw, 40px) clamp(1rem, 3vw, 1.5rem);
  }

  .dp-layout {
    flex-direction: column;
    gap: 24px;
  }

  .dp-title {
    font-size: clamp(24px, 5vw, 32px);
  }

  .dp-meta-row {
    flex-wrap: wrap;
  }

  .dp-breadcrumb {
    flex: 1;
  }

  .dp-timestamp {
    width: 100%;
    order: 3;
  }

  .dp-nav-bottom {
    flex-direction: column;
    gap: 16px;
  }

  .dp-nav-actions,
  .dp-nav-social {
    width: 100%;
  }

  .dp-related-list {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  .dp-comment-body {
    font-size: clamp(13px, 3vw, 14px);
  }

  .dp-reply-list {
    margin-left: 16px;
  }

  .dp-reply-row {
    gap: 12px;
  }
}

/* ── Mobile Landscape (≤ 768px) ──────────────────────────────────── */
@media (max-width: 768px) {
  .dp-page-wrapper {
    padding: 20px clamp(12px, 3vw, 20px);
  }

  .dp-title {
    font-size: clamp(20px, 4.5vw, 28px);
    line-height: 130%;
  }

  .dp-short-desc {
    font-size: clamp(13px, 3.5vw, 16px);
  }

  .dp-author {
    font-size: clamp(12px, 3vw, 14px);
  }

  .dp-meta-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .dp-timestamp {
    width: 100%;
  }

  .dp-paragraph,
  .dp-heading-text {
    font-size: clamp(14px, 3.5vw, 16px);
  }

  .dp-nav-bottom {
    gap: 12px;
  }

  .dp-nav-btn {
    width: 36px;
    height: 36px;
  }

  .dp-nav-btn svg {
    width: 18px;
    height: 18px;
  }

  .dp-social-btn {
    width: 36px;
    height: 36px;
  }

  .dp-social-btn svg {
    width: 28px;
    height: 28px;
  }

  .dp-comment-input-wrap {
    padding: 10px 12px;
    gap: 8px;
  }

  .dp-comment-input {
    font-size: 13px;
  }

  .dp-comment-send-icon {
    width: 16px;
    height: 16px;
  }

  .dp-avatar {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  .dp-avatar-sm {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }

  .dp-comment-username {
    font-size: 13px;
  }

  .dp-comment-text {
    font-size: 13px;
  }

  .dp-reply-list {
    margin-left: 12px;
  }

  .dp-related-list {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }

  .dp-comments-title,
  .dp-related-title {
    font-size: clamp(16px, 4vw, 20px);
  }

  .dp-tags {
    font-size: 12px;
  }

  .dp-page-divider {
    margin: 24px 0;
  }
}

/* ── Mobile Phone (≤ 480px) ──────────────────────────────────────── */
@media (max-width: 480px) {
  .dp-page-wrapper {
    padding: 16px 12px;
  }

  .dp-title {
    font-size: 20px;
  }

  .dp-short-desc {
    font-size: 13px;
  }

  .dp-author {
    font-size: 12px;
  }

  .dp-breadcrumb-sep {
    display: none;
  }

  .dp-breadcrumb-link {
    font-size: 12px;
  }

  .dp-breadcrumb-link:not(:last-of-type)::after {
    content: ' / ';
    color: #999;
  }

  .dp-timestamp {
    font-size: 11px;
  }

  .dp-review-post {
    gap: 16px;
    margin-bottom: 24px;
  }

  .dp-post-content {
    gap: 12px;
  }

  .dp-body {
    gap: 16px;
    padding-bottom: 24px;
  }

  .dp-paragraph,
  .dp-heading-text {
    font-size: 13px;
  }

  .dp-img-caption {
    font-size: 11px;
  }

  .dp-nav-bottom {
    padding: 12px 0;
    margin: 16px 0;
  }

  .dp-nav-actions,
  .dp-nav-social {
    justify-content: flex-start;
  }

  .dp-nav-btn {
    width: 32px;
    height: 32px;
  }

  .dp-nav-btn svg {
    width: 16px;
    height: 16px;
  }

  .dp-social-btn {
    width: 32px;
    height: 32px;
  }

  .dp-social-btn svg {
    width: 24px;
    height: 24px;
  }

  .dp-comments {
    gap: 16px;
    margin-top: 24px;
  }

  .dp-comments-title {
    font-size: 16px;
  }

  .dp-comment-input-wrap {
    padding: 10px;
    gap: 8px;
  }

  .dp-comment-input {
    font-size: 12px;
  }

  .dp-comment-filter {
    gap: 8px;
    font-size: 12px;
  }

  .dp-filter-tab {
    font-size: 12px;
  }

  .dp-comment-list {
    gap: 16px;
  }

  .dp-avatar {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }

  .dp-avatar-sm {
    width: 28px;
    height: 28px;
    font-size: 10px;
  }

  .dp-comment-username {
    font-size: 12px;
  }

  .dp-comment-text {
    font-size: 12px;
  }

  .dp-comment-options {
    gap: 12px;
  }

  .dp-comment-opt {
    font-size: 11px;
  }

  .dp-reply-list {
    margin-left: 8px;
    gap: 12px;
  }

  .dp-reply-row {
    gap: 8px;
  }

  .dp-reply-line {
    width: 1.5px;
    min-height: 32px;
  }

  .dp-load-more-btn {
    padding: 10px 20px;
    font-size: 12px;
  }

  .dp-tags {
    font-size: 11px;
    gap: 4px;
  }

  .dp-related-section {
    gap: 16px;
  }

  .dp-related-list {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .dp-page-divider {
    margin: 20px 0;
  }
}

/* ── Extra Small Phones (≤ 360px) ────────────────────────────────── */
@media (max-width: 360px) {
  .dp-page-wrapper {
    padding: 12px 10px;
  }

  .dp-title {
    font-size: 18px;
  }

  .dp-short-desc {
    font-size: 12px;
  }

  .dp-paragraph,
  .dp-heading-text {
    font-size: 12px;
  }

  .dp-comments-title,
  .dp-related-title {
    font-size: 14px;
  }
}
</style>
