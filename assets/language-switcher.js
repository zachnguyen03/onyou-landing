// Language Switcher Functionality
const translations = {
  en: {
    // Navigation
    'about-us': 'About Us',
    'services': 'Services',
    'wedding-collection': 'Wedding Collection',
    'dress': 'Dress',
    'studio': 'Studio',
    'makeup': 'Makeup',
    'hanbok-ao-dai': 'Hanbok/Ao Dai',
    'gallery': 'Gallery',
    'contact-us': 'Contact Us',
    'language': 'Language',
    
    // Gallery
    'wedding-dress-gallery': 'Wedding Dress Gallery',
    'gallery-intro': 'Explore our stunning collection of handcrafted wedding dresses, each designed to make your special day unforgettable.',
    'all-dresses': 'All Dresses',
    'style-1': 'Style 1',
    'style-2': 'Style 2',
    'style-3': 'Style 3',
    'style-4': 'Style 4',
    'style-5': 'Style 5',
    'load-more-dresses': 'Load More Dresses',
    
    // Services
    'our-services': 'Our Services',
    'services-intro': 'Discover our comprehensive range of bridal services, designed to make your wedding day perfect.',
    'wedding-dress-design': 'Wedding Dress Design & Fitting',
    'bridal-makeup': 'Bridal Makeup & Hair',
    'wedding-photography': 'Wedding Photography',
    'wedding-planning': 'Wedding Planning & Coordination',
    'bridal-accessories': 'Bridal Accessories',
    'cultural-attire': 'Cultural Wedding Attire',
    'book-consultation': 'Book Consultation',
    'learn-more': 'Learn More',
    
    // Footer
    'shop': 'Shop',
    'customer-service': 'Customer Service',
    'about': 'About',
    'follow-us': 'Follow Us',
    'newsletter': 'Newsletter',
    'privacy-policy': 'Privacy Policy',
    'terms-of-use': 'Terms of Use',
    'accessibility': 'Accessibility',
    'copyright': '© 2024 Onyou Bridal. All rights reserved.'
  },
  vn: {
    // Navigation
    'about-us': 'Về Chúng Tôi',
    'services': 'Dịch Vụ',
    'wedding-collection': 'Bộ Sưu Tập Cưới',
    'dress': 'Váy',
    'studio': 'Studio',
    'makeup': 'Trang Điểm',
    'hanbok-ao-dai': 'Hanbok/Áo Dài',
    'gallery': 'Thư Viện',
    'contact-us': 'Liên Hệ',
    'language': 'Ngôn Ngữ',
    
    // Gallery
    'wedding-dress-gallery': 'Thư Viện Váy Cưới',
    'gallery-intro': 'Khám phá bộ sưu tập váy cưới thủ công tuyệt đẹp của chúng tôi, mỗi chiếc được thiết kế để làm cho ngày đặc biệt của bạn khó quên.',
    'all-dresses': 'Tất Cả Váy',
    'style-1': 'Phong Cách 1',
    'style-2': 'Phong Cách 2',
    'style-3': 'Phong Cách 3',
    'style-4': 'Phong Cách 4',
    'style-5': 'Phong Cách 5',
    'load-more-dresses': 'Xem Thêm Váy',
    
    // Services
    'our-services': 'Dịch Vụ Của Chúng Tôi',
    'services-intro': 'Khám phá loạt dịch vụ cưới toàn diện của chúng tôi, được thiết kế để làm cho ngày cưới của bạn hoàn hảo.',
    'wedding-dress-design': 'Thiết Kế & May Váy Cưới',
    'bridal-makeup': 'Trang Điểm & Tóc Cô Dâu',
    'wedding-photography': 'Chụp Ảnh Cưới',
    'wedding-planning': 'Lập Kế Hoạch & Điều Phối',
    'bridal-accessories': 'Phụ Kiện Cô Dâu',
    'cultural-attire': 'Trang Phục Văn Hóa',
    'book-consultation': 'Đặt Tư Vấn',
    'learn-more': 'Tìm Hiểu Thêm',
    
    // Footer
    'shop': 'Cửa Hàng',
    'customer-service': 'Dịch Vụ Khách Hàng',
    'about': 'Về Chúng Tôi',
    'follow-us': 'Theo Dõi Chúng Tôi',
    'newsletter': 'Bản Tin',
    'privacy-policy': 'Chính Sách Bảo Mật',
    'terms-of-use': 'Điều Khoản Sử Dụng',
    'accessibility': 'Khả Năng Tiếp Cận',
    'copyright': '© 2024 Onyou Bridal. Tất cả quyền được bảo lưu.'
  },
  kr: {
    // Navigation
    'about-us': '회사 소개',
    'services': '서비스',
    'wedding-collection': '웨딩 컬렉션',
    'dress': '드레스',
    'studio': '스튜디오',
    'makeup': '메이크업',
    'hanbok-ao-dai': '한복/아오자이',
    'gallery': '갤러리',
    'contact-us': '연락처',
    'language': '언어',
    
    // Gallery
    'wedding-dress-gallery': '웨딩 드레스 갤러리',
    'gallery-intro': '특별한 날을 잊을 수 없게 만들어줄 수제작 웨딩 드레스 컬렉션을 탐험해보세요.',
    'all-dresses': '모든 드레스',
    'style-1': '스타일 1',
    'style-2': '스타일 2',
    'style-3': '스타일 3',
    'style-4': '스타일 4',
    'style-5': '스타일 5',
    'load-more-dresses': '더 많은 드레스 보기',
    
    // Services
    'our-services': '우리의 서비스',
    'services-intro': '결혼식을 완벽하게 만들어줄 포괄적인 브라이덜 서비스를 발견하세요.',
    'wedding-dress-design': '웨딩 드레스 디자인 & 피팅',
    'bridal-makeup': '브라이덜 메이크업 & 헤어',
    'wedding-photography': '웨딩 사진',
    'wedding-planning': '웨딩 플래닝 & 코디네이션',
    'bridal-accessories': '브라이덜 액세서리',
    'cultural-attire': '문화적 웨딩 의상',
    'book-consultation': '상담 예약',
    'learn-more': '더 알아보기',
    
    // Footer
    'shop': '쇼핑',
    'customer-service': '고객 서비스',
    'about': '회사 소개',
    'follow-us': '팔로우하기',
    'newsletter': '뉴스레터',
    'privacy-policy': '개인정보 보호정책',
    'terms-of-use': '이용약관',
    'accessibility': '접근성',
    'copyright': '© 2024 Onyou Bridal. 모든 권리 보유.'
  }
};

// Function to change language
function changeLanguage(lang) {
  // Update active button
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`[data-lang="${lang}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  
  // Store language preference
  localStorage.setItem('preferred-language', lang);
  
  // Update text content
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update placeholder content
  const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });
}

// Initialize language switcher
function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  // Add click event listeners to language buttons
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });

  // Load saved language preference on page load
  const savedLang = localStorage.getItem('preferred-language') || 'en';
  changeLanguage(savedLang);
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { changeLanguage, initLanguageSwitcher, translations };
} 