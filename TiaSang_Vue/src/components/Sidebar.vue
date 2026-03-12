<template>
  <aside class="side-bar">
    <div class="side-ad">
      <div class="side-ad-image bg-cover" style="background-image: url('/image_pack/ads_side_bar.png');" aria-label="Quảng cáo bên phải"></div>
    </div>

    <CategoryBox
      v-for="box in categoryBoxes"
      :key="box.title"
      :title="box.title"
      :feature="box.feature"
      :other-news="box.otherNews"
    />
  </aside>
</template>

<script>
import CategoryBox from './CategoryBox.vue'

export default {
  name: 'SideBar',
  components: {
    CategoryBox
  },
  data() {
    return {
      categoryBoxes: [
        {
          title: 'Khoa học và Công nghệ',
          feature: {
            image: 'image_pack/image_feature_post_side_bar.png',
            title: 'Vệ tinh quan sát Trái đất bước vào giai đoạn hiệu chuẩn',
            author: 'Lệ Hằng',
            lead: 'Dữ liệu hình ảnh giúp dự báo thiên tai và quản lý tài nguyên biển.'
          },
          otherNews: [
            {
              image: 'image_pack/image_mini_post_side_bar.png',
              title: 'Phòng sạch mới cho nghiên cứu vi mạch'
            },
            {
              image: 'image_pack/image_mini_post_side_bar.png',
              title: 'Thiết bị đo chất lượng không khí cầm tay'
            }
          ]
        },
        {
          title: 'Văn hóa và Xã hội',
          feature: {
            image: 'image_pack/image_feature_post_side_bar.png',
            title: 'Không gian di sản số hoá mở cửa miễn phí',
            author: 'Phương Nam',
            lead: 'Trải nghiệm thực tế ảo đưa người xem xuyên qua các giai đoạn lịch sử.'
          },
          otherNews: [
            {
              image: 'image_pack/image_mini_post_side_bar.png',
              title: 'Sân khấu trẻ thử nghiệm kịch tương tác'
            },
            {
              image: 'image_pack/image_mini_post_side_bar.png',
              title: 'Không gian đọc cộng đồng mới bên bờ sông'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Styles handled by global styles.css */
</style>
