/**
 * Danh sách chuyên mục dùng chung cho Navigation và Footer.
 * Chỉ cần cập nhật tại đây khi thêm/sửa/xóa chuyên mục.
 */

export const NAV_CATEGORIES = [
  'Chuyên đề',
  'Khoa học - Công nghệ',
  'Giáo dục',
  'Sức khỏe',
  'Du lịch',
  'Giải trí',
  'Nền tảng & Kiến tạo',
  'Diễn đàn'
]

/** Footer dùng tất cả các chuyên mục (không bao gồm Diễn đàn hiển thị riêng) */
export const FOOTER_CATEGORIES = NAV_CATEGORIES.filter(c => c !== 'Diễn đàn')

/** Map chuyên mục → route path */
export const CATEGORY_ROUTES = {
  'Nền tảng & Kiến tạo': '/category/nen-tang-kien-tao',
  'Diễn đàn': '/forum'
}
