// Language Switcher Functionality
const translations = {
  en: {
    'about-us': 'About Us',
    'services': 'Services',
    'wedding-collection': 'Wedding Collection',
    'gallery': 'Gallery',
    'contact-us': 'Contact Us',
    'dress': 'Dress',
    'studio': 'Studio',
    'makeup': 'Makeup',
    'hanbok-ao-dai': 'Hanbok/Ao Dai',
    'why-onyou': 'Why ONYOU?',
    'exclusive': 'Exclusive',
    'hand-tailored': 'Hand-tailored',
    'memorable': 'Memorable',
    'quick-consultation': 'QUICK CONSULTATION',
    'your-name': 'Your Name',
    'your-email': 'Your Email',
    'your-message': 'Your Message',
    'send-message': 'Send Message',
    'featured-collections': 'Featured Collections',
    'shop': 'Shop',
    'wedding-dresses': 'Wedding Dresses',
    'bridesmaid-dresses': 'Bridesmaid Dresses',
    'accessories': 'Accessories',
    'veils': 'Veils',
    'sale': 'Sale',
    'customer-service': 'Customer Service',
    'book-appointment': 'Book Appointment',
    'faqs': 'FAQs',
    'shipping-returns': 'Shipping & Returns',
    'order-status': 'Order Status',
    'about': 'About',
    'our-story': 'Our Story',
    'careers': 'Careers',
    'events': 'Events',
    'press': 'Press',
    'follow-us': 'Follow Us',
    'newsletter': 'Newsletter',
    'your-email-address': 'Your email address',
    'subscribe': 'Subscribe',
    'exclusive-offers': 'Get exclusive offers & bridal inspiration',
    'privacy-policy': 'Privacy Policy',
    'terms-of-use': 'Terms of Use',
    'accessibility': 'Accessibility',
    'copyright': '© 2024 Onyou Bridal. All rights reserved.',
    'about-title': 'About Us',
    'services-title': 'Services',
    'gallery-title': 'Gallery',
    'contact-title': 'Contact Us',
    'wedding-dress-title': 'Wedding Dresses',
    'wedding-studio-title': 'Wedding Studio',
    'wedding-makeup-title': 'Wedding Makeup',
    'wedding-aodai-title': 'Hanbok/Ao Dai',
    'about-description': 'Discover the story behind Onyou Bridal and our commitment to creating unforgettable wedding experiences.',
    'services-description': 'Explore our comprehensive range of bridal services designed to make your special day perfect.',
    'gallery-description': 'Browse through our stunning collection of wedding dresses and bridal photography.',
    'contact-description': 'Get in touch with us to start planning your dream wedding.',
    'wedding-dress-description': 'Explore our exclusive collection of handcrafted wedding dresses.',
    'wedding-studio-description': 'Professional photography services to capture your special moments.',
    'wedding-makeup-description': 'Expert makeup and styling services for your wedding day.',
    'wedding-aodai-description': 'Traditional and modern interpretations of cultural wedding attire.'
  },
  vn: {
    'about-us': 'Về Chúng Tôi',
    'services': 'Dịch Vụ',
    'wedding-collection': 'Bộ Sưu Tập Cưới',
    'gallery': 'Thư Viện',
    'contact-us': 'Liên Hệ',
    'dress': 'Váy Cưới',
    'studio': 'Studio',
    'makeup': 'Trang Điểm',
    'hanbok-ao-dai': 'Hanbok/Áo Dài',
    'why-onyou': 'Tại Sao ONYOU?',
    'exclusive': 'Độc Quyền',
    'hand-tailored': 'May Đo Thủ Công',
    'memorable': 'Đáng Nhớ',
    'quick-consultation': 'ĐĂNG KÝ TƯ VẤN NHANH',
    'your-name': 'Tên Của Bạn',
    'your-email': 'Email Của Bạn',
    'your-message': 'Tin Nhắn Của Bạn',
    'send-message': 'Gửi Tin Nhắn',
    'featured-collections': 'Bộ Sưu Tập Nổi Bật',
    'shop': 'Cửa Hàng',
    'wedding-dresses': 'Váy Cưới',
    'bridesmaid-dresses': 'Váy Phù Dâu',
    'accessories': 'Phụ Kiện',
    'veils': 'Mạng Che Mặt',
    'sale': 'Khuyến Mãi',
    'customer-service': 'Dịch Vụ Khách Hàng',
    'book-appointment': 'Đặt Lịch Hẹn',
    'faqs': 'Câu Hỏi Thường Gặp',
    'shipping-returns': 'Vận Chuyển & Đổi Trả',
    'order-status': 'Trạng Thái Đơn Hàng',
    'about': 'Về Chúng Tôi',
    'our-story': 'Câu Chuyện Của Chúng Tôi',
    'careers': 'Tuyển Dụng',
    'events': 'Sự Kiện',
    'press': 'Báo Chí',
    'follow-us': 'Theo Dõi Chúng Tôi',
    'newsletter': 'Bản Tin',
    'your-email-address': 'Địa chỉ email của bạn',
    'subscribe': 'Đăng Ký',
    'exclusive-offers': 'Nhận ưu đãi độc quyền & cảm hứng cưới',
    'privacy-policy': 'Chính Sách Bảo Mật',
    'terms-of-use': 'Điều Khoản Sử Dụng',
    'accessibility': 'Khả Năng Tiếp Cận',
    'copyright': '© 2024 Onyou Bridal. Tất cả quyền được bảo lưu.',
    'about-title': 'Về Chúng Tôi',
    'services-title': 'Dịch Vụ',
    'gallery-title': 'Thư Viện',
    'contact-title': 'Liên Hệ',
    'wedding-dress-title': 'Váy Cưới',
    'wedding-studio-title': 'Studio Cưới',
    'wedding-makeup-title': 'Trang Điểm Cưới',
    'wedding-aodai-title': 'Hanbok/Áo Dài',
    'about-description': 'Khám phá câu chuyện đằng sau Onyou Bridal và cam kết của chúng tôi trong việc tạo ra những trải nghiệm cưới đáng nhớ.',
    'services-description': 'Khám phá loạt dịch vụ cưới toàn diện được thiết kế để làm cho ngày đặc biệt của bạn hoàn hảo.',
    'gallery-description': 'Duyệt qua bộ sưu tập váy cưới và nhiếp ảnh cưới tuyệt đẹp của chúng tôi.',
    'contact-description': 'Liên hệ với chúng tôi để bắt đầu lên kế hoạch cho đám cưới mơ ước của bạn.',
    'wedding-dress-description': 'Khám phá bộ sưu tập váy cưới thủ công độc quyền của chúng tôi.',
    'wedding-studio-description': 'Dịch vụ nhiếp ảnh chuyên nghiệp để ghi lại những khoảnh khắc đặc biệt của bạn.',
    'wedding-makeup-description': 'Dịch vụ trang điểm và tạo kiểu chuyên nghiệp cho ngày cưới của bạn.',
    'wedding-aodai-description': 'Diễn giải truyền thống và hiện đại của trang phục cưới văn hóa.'
  },
  kr: {
    'about-us': '회사 소개',
    'services': '서비스',
    'wedding-collection': '웨딩 컬렉션',
    'gallery': '갤러리',
    'contact-us': '연락처',
    'dress': '드레스',
    'studio': '스튜디오',
    'makeup': '메이크업',
    'hanbok-ao-dai': '한복/아오자이',
    'why-onyou': '왜 ONYOU인가요?',
    'exclusive': '독점',
    'hand-tailored': '핸드메이드',
    'memorable': '기억에 남는',
    'quick-consultation': '빠른 상담 신청',
    'your-name': '이름',
    'your-email': '이메일',
    'your-message': '메시지',
    'send-message': '메시지 보내기',
    'featured-collections': '추천 컬렉션',
    'shop': '쇼핑',
    'wedding-dresses': '웨딩 드레스',
    'bridesmaid-dresses': '브라이즈메이드 드레스',
    'accessories': '액세서리',
    'veils': '베일',
    'sale': '세일',
    'customer-service': '고객 서비스',
    'book-appointment': '예약하기',
    'faqs': '자주 묻는 질문',
    'shipping-returns': '배송 및 반품',
    'order-status': '주문 상태',
    'about': '회사 소개',
    'our-story': '우리의 이야기',
    'careers': '채용',
    'events': '이벤트',
    'press': '언론',
    'follow-us': '팔로우',
    'newsletter': '뉴스레터',
    'your-email-address': '이메일 주소',
    'subscribe': '구독',
    'exclusive-offers': '독점 혜택과 브라이덜 영감을 받으세요',
    'privacy-policy': '개인정보 보호정책',
    'terms-of-use': '이용약관',
    'accessibility': '접근성',
    'copyright': '© 2024 Onyou Bridal. 모든 권리 보유.',
    'about-title': '회사 소개',
    'services-title': '서비스',
    'gallery-title': '갤러리',
    'contact-title': '연락처',
    'wedding-dress-title': '웨딩 드레스',
    'wedding-studio-title': '웨딩 스튜디오',
    'wedding-makeup-title': '웨딩 메이크업',
    'wedding-aodai-title': '한복/아오자이',
    'about-description': 'Onyou Bridal의 이야기와 잊을 수 없는 웨딩 경험을 만드는 우리의 약속을 발견하세요.',
    'services-description': '특별한 날을 완벽하게 만들기 위해 설계된 종합적인 브라이덜 서비스를 탐색하세요.',
    'gallery-description': '우리의 멋진 웨딩 드레스와 브라이덜 사진 컬렉션을 둘러보세요.',
    'contact-description': '꿈의 웨딩을 계획하기 시작하려면 저희에게 연락하세요.',
    'wedding-dress-description': '우리의 독점적인 핸드메이드 웨딩 드레스 컬렉션을 탐색하세요.',
    'wedding-studio-description': '특별한 순간을 포착하기 위한 전문 사진 서비스.',
    'wedding-makeup-description': '웨딩 데이를 위한 전문 메이크업 및 스타일링 서비스.',
    'wedding-aodai-description': '문화적 웨딩 의상의 전통적이고 현대적인 해석.'
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