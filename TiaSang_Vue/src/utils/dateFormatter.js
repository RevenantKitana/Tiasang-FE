/**
 * Tiện ích định dạng ngày tháng tiếng Việt.
 */

/**
 * Trả về chuỗi ngày hiện tại theo định dạng tiếng Việt.
 * Ví dụ: "Thứ hai, 13/03/2026"
 */
export function formatCurrentDate() {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }
  return new Date().toLocaleDateString('vi-VN', options)
}

/**
 * Định dạng một đối tượng Date hoặc chuỗi ngày tháng tùy chọn.
 * @param {Date|string} date
 * @param {Intl.DateTimeFormatOptions} [options]
 * @returns {string}
 */
export function formatDate(date, options = { year: 'numeric', month: '2-digit', day: '2-digit' }) {
  return new Date(date).toLocaleDateString('vi-VN', options)
}
