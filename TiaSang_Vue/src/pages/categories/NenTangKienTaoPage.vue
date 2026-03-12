<template>
  <div id="app">
    <Header @search="handleSearch" @login="handleLogin" />
    <Navigation @category-selected="handleCategorySelect" />
    <CategoryBanner :title="bannerTitle" />
    
    <main class="page-body">
      <!-- Body 1: Featured News -->
      <section class="body-1">
        <div class="feature-wrap">
          <FeatureNews :news="featuredNews" />
        </div>
        <div class="body-divider"></div>
      </section>

      <!-- Body 2: Main Content + Sidebar -->
      <section class="body-2">
        <div class="main-list">
          <div class="content-pack">
            <NewsCard v-for="(news, index) in newsList.slice(0, 5)" :key="index" :news="news" />
            <div class="news-divider"></div>
            <SponsorBlock :sponsor="sponsors[0]" />
            <div class="news-divider"></div>
          </div>

          <div class="content-pack">
            <NewsCard v-for="(news, index) in newsList.slice(5, 11)" :key="index" :news="news" />
            <div class="news-divider"></div>
            <SponsorBlock :sponsor="sponsors[1]" />
            <div class="news-divider"></div>
          </div>
        </div>

        <SideBar />
      </section>

      <!-- Pagination -->
      <div class="pages-index" aria-label="Chuyển trang">
        <button 
          v-for="page in 4" 
          :key="page"
          class="page-unit"
          :class="{ active: currentPage === page }"
          @click="currentPage = page"
        >
          {{ page }}
        </button>
        <button class="page-unit next" aria-label="Trang tiếp theo" @click="nextPage">&gt;</button>
      </div>

      <!-- Body 3: Ad Banner -->
      <section class="body-3">
        <a href="https://example.com/ads" class="ads-banner-link" target="_blank" rel="noopener noreferrer">
          <div class="image-ads bg-cover" style="background-image: url('/image_pack/ads_at_last.png');" aria-label="Quảng cáo banner"></div>
        </a>
      </section>
    </main>

    <Footer @category-selected="handleCategorySelect" />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Navigation from '../../components/Navigation.vue'
import CategoryBanner from '../../components/CategoryBanner.vue'
import FeatureNews from '../../components/FeatureNews.vue'
import NewsCard from '../../components/NewsCard.vue'
import SponsorBlock from '../../components/SponsorBlock.vue'
import SideBar from '../../components/SideBar.vue'
import Footer from '../../components/Footer.vue'

export default {
  name: 'NenTangKienTaoPage',
  components: {
    Header,
    Navigation,
    CategoryBanner,
    FeatureNews,
    NewsCard,
    SponsorBlock,
    SideBar,
    Footer
  },
  data() {
    return {
      currentPage: 1,
      bannerTitle: 'Nền tảng - Kiến tạo',
      featuredNews: {
        date: '19/01/2026',
        priority: 'high',
        category: 'Nền tảng & Kiến tạo',
        image: 'image_pack/image_feature_post.png',
        title: 'Hệ sinh thái đổi mới sáng tạo đang chuyển mình mạnh mẽ',
        lead: 'Doanh nghiệp công nghệ nội đang tăng tốc đầu tư, tạo nên những sản phẩm vươn tầm khu vực và bền vững hơn.'
      },
      newsList: [
        {
          date: '18/01/2026',
          priority: 'high',
          category: 'Nền tảng & Kiến tạo',
          image: 'image_pack/image_post_content_list.png',
          title: 'Nhà máy thông minh giảm 20% tiêu hao năng lượng',
          text: 'Ứng dụng hệ thống điều khiển chủ động và phân tích dữ liệu thời gian thực giúp tối ưu dây chuyền sản xuất.',
          author: 'Minh Quân',
          priorityText: 'Ưu tiên cao'
        },
        {
          date: '17/01/2026',
          priority: 'high',
          category: 'Nền tảng & Kiến tạo',
          image: 'image_pack/image_post_content_list.png',
          title: 'Start-up AI Việt gọi vốn vòng Series A',
          text: 'Nền tảng mô phỏng ngôn ngữ chuyên biệt cho chăm sóc khách hàng đã thu hút các quỹ khu vực Đông Nam Á.',
          author: 'Khánh Ly',
          priorityText: 'Ưu tiên cao'
        },
        {
          date: '16/01/2026',
          priority: 'medium',
          category: 'Nền tảng & Kiến tạo',
          image: 'image_pack/image_post_content_list.png',
          title: 'Trung tâm dữ liệu xanh đạt chứng nhận quốc tế',
          text: 'Giải pháp làm mát bằng tuần hoàn nước và tái sử dụng nhiệt thải giúp giảm 30% chi phí vận hành.',
          author: 'Bảo Châu',
          priorityText: 'Ưu tiên trung bình'
        },
        {
          date: '15/01/2026',
          priority: 'medium',
          category: 'Nền tảng & Kiến tạo',
          image: 'image_pack/image_post_content_list.png',
          title: 'Thị trường bán dẫn mở thêm cơ hội hợp tác',
          text: 'Các trường đại học liên kết doanh nghiệp để đào tạo kỹ sư thiết kế chip, đáp ứng nhu cầu nhân lực.',
          author: 'Tuấn Nghĩa',
          priorityText: 'Ưu tiên trung bình'
        },
        {
          date: '14/01/2026',
          priority: 'low',
          category: 'Sức khỏe',
          image: 'image_pack/image_post_content_list.png',
          title: 'Ứng dụng sức khỏe cá nhân hóa đạt 1 triệu người dùng',
          text: 'Thuật toán gợi ý dinh dưỡng và lộ trình luyện tập dựa trên dữ liệu đeo tay và hồ sơ sức khỏe.',
          author: 'Lan Hương',
          priorityText: 'Ưu tiên thấp'
        },
        {
          date: '13/01/2026',
          priority: 'high',
          category: 'Du lịch',
          image: 'image_pack/image_post_content_list.png',
          title: 'Thành phố thử nghiệm xe buýt điện tự hành',
          text: 'Lộ trình khép kín trong khu đô thị mới với 12 điểm đón trả và hệ thống cảm biến 360 độ.',
          author: 'Minh Phát',
          priorityText: 'Ưu tiên cao'
        },
        {
          date: '12/01/2026',
          priority: 'medium',
          category: 'Nền tảng & Kiến tạo',
          image: 'image_pack/image_post_content_list.png',
          title: 'Phòng thí nghiệm vật liệu mới công bố hợp kim siêu nhẹ',
          text: 'Hợp kim magiê cải tiến chịu lực gấp đôi, mở ra ứng dụng cho hàng không và thiết bị di động.',
          author: 'Mai Hương',
          priorityText: 'Ưu tiên trung bình'
        },
        {
          date: '11/01/2026',
          priority: 'high',
          category: 'Nền tảng & Kiến tạo',
          image: 'image_pack/image_post_content_list.png',
          title: 'Giải pháp an ninh mạng sử dụng học máy',
          text: 'Mô hình phát hiện bất thường theo thời gian thực giảm 35% rủi ro truy cập trái phép.',
          author: 'Trọng Hiếu',
          priorityText: 'Ưu tiên cao'
        },
        {
          date: '10/01/2026',
          priority: 'low',
          category: 'Nền tảng & Kiến tạo',
          image: 'image_pack/image_post_content_list.png',
          title: 'Nông nghiệp chính xác giảm 25% lượng nước tưới',
          text: 'Cảm biến độ ẩm đất kết hợp dữ liệu thời tiết giúp tối ưu lịch tưới cho từng thửa ruộng.',
          author: 'Gia Hân',
          priorityText: 'Ưu tiên thấp'
        },
        {
          date: '09/01/2026',
          priority: 'high',
          category: 'Khoa học & Công nghệ',
          image: 'image_pack/image_post_content_list.png',
          title: 'Hạ tầng 5G mở rộng đến vùng ven biển',
          text: 'Các trạm thu phát mới hỗ trợ dịch vụ IoT cho logistics và du lịch biển.',
          author: 'Hoàng Phúc',
          priorityText: 'Ưu tiên cao'
        }
      ],
      sponsors: [
        {
          image: 'image_pack/ads_content_list.png',
          title: 'Nền tảng quản trị dự án miễn phí 3 tháng',
          texts: [
            'Đồng bộ tiến độ, tài nguyên và báo cáo tự động cho nhóm từ 5-50 người.',
            'Áp dụng cho khách hàng đăng ký trước 31/01.'
          ]
        },
        {
          image: 'image_pack/ads_content_list.png',
          title: 'Khoá học thiết kế sản phẩm giảm 50%',
          texts: [
            '20 buổi trực tuyến với mentor quốc tế, kèm bộ công cụ Figma nâng cao.',
            'Đăng ký sớm để nhận thêm tài liệu độc quyền.'
          ]
        }
      ]
    }
  },
  methods: {
    handleSearch() {
      console.log('Search triggered');
    },
    handleLogin() {
      console.log('Login triggered');
    },
    handleCategorySelect(category) {
      console.log('Category selected:', category);
    },
    nextPage() {
      if (this.currentPage < 4) {
        this.currentPage++;
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700&family=Merriweather:wght@700&display=swap');
@import '../../assets/styles/styles.css';

#app {
  width: 100%;
  background: #fff;
}
</style>
