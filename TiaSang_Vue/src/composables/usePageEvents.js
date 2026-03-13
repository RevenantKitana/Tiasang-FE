import { CATEGORY_ROUTES } from '@/config/categories'

/**
 * Composable chứa các event handlers dùng chung trên tất cả pages.
 * Dùng trong Options API bằng cách spread vào `methods`.
 *
 * Ví dụ:
 *   import { pageEventMethods } from '@/composables/usePageEvents'
 *   export default { methods: { ...pageEventMethods(context) } }
 */
export function pageEventMethods() {
  return {
    handleSearch() {
      // TODO: mở hộp tìm kiếm toàn cục
    },
    handleLogin() {
      // TODO: mở modal đăng nhập
    },
    handleCategorySelect(category) {
      const path = CATEGORY_ROUTES[category]
      if (path) this.$router.push(path)
    }
  }
}
