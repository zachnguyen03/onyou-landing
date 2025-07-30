// assets/mobile-nav.js

document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu functionality
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
  const mobileLangBtns = document.querySelectorAll('.mobile-lang-btn');

  // Language dropdown (globe) functionality
  const langDropdown = document.querySelector('.lang-dropdown');
  const langDropdownBtn = document.querySelector('.lang-dropdown-btn');
  const langDropdownMenu = document.querySelector('.lang-dropdown-menu');
  const langDropdownItems = document.querySelectorAll('.lang-dropdown-item');

  if (langDropdown && langDropdownBtn && langDropdownMenu) {
    // Toggle dropdown open/close
    langDropdownBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });
    // Select language
    langDropdownItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        if (typeof changeLanguage === 'function') changeLanguage(lang);
        langDropdown.classList.remove('open');
      });
    });
    // Close dropdown on outside click
    document.addEventListener('click', function(e) {
      if (!langDropdown.contains(e.target)) {
        langDropdown.classList.remove('open');
      }
    });
    // Close dropdown on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        langDropdown.classList.remove('open');
      }
    });
  }

  if (hamburgerMenu && mobileNavOverlay && mobileNavClose) {
    hamburgerMenu.addEventListener('click', function() {
      hamburgerMenu.classList.toggle('active');
      mobileNavOverlay.classList.toggle('active');
      document.body.style.overflow = mobileNavOverlay.classList.contains('active') ? 'hidden' : 'auto';
    });

    mobileNavClose.addEventListener('click', function() {
      hamburgerMenu.classList.remove('active');
      mobileNavOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    });

    // Close mobile nav when clicking outside
    mobileNavOverlay.addEventListener('click', function(e) {
      if (e.target === mobileNavOverlay) {
        hamburgerMenu.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Mobile dropdown functionality
  mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const dropdownMenu = this.nextElementSibling;
      // Close other dropdowns
      mobileDropdownToggles.forEach(otherToggle => {
        if (otherToggle !== this) {
          otherToggle.classList.remove('active');
          if (otherToggle.nextElementSibling) otherToggle.nextElementSibling.classList.remove('active');
        }
      });
      // Toggle current dropdown
      this.classList.toggle('active');
      if (dropdownMenu) dropdownMenu.classList.toggle('active');
    });
  });

  // Mobile language switcher
  mobileLangBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      // Update active state
      mobileLangBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      // Change language
      if (typeof changeLanguage === 'function') changeLanguage(lang);
      // Close mobile navigation
      if (hamburgerMenu && mobileNavOverlay) {
        hamburgerMenu.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });
});