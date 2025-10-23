1.  (Slideshow)
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// تبديل الشرائح كل 4 ثوانٍ
if (slides.length > 0) {
  setInterval(showNextSlide, 4000);
}
  2.   (Filtering)

let filterSelect = document.getElementById('categoryFilter');
let eventCards = document.querySelectorAll('.event');

if (filterSelect) {
  filterSelect.addEventListener('change', function() {
    let selected = this.value;

    eventCards.forEach(card => {
      // إذا اختار المستخدم "الكل" نعرض جميع الفعاليات
      if (selected === 'all' || card.dataset.category === selected) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

  3. 

let contactForm = document.getElementById('contactForm');
let alertContainer = document.getElementById('alertContainer');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      showAlert('الرجاء تعبئة جميع الحقول المطلوبة.', 'danger');
    } else if (!validateEmail(email)) {
      showAlert('صيغة البريد الإلكتروني غير صحيحة.', 'warning');
    } else {
      showAlert('✅ تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.', 'success');
      contactForm.reset();
    }
  });
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function showAlert(message, type) {
  alertContainer.innerHTML = `
    <div class="alert alert-${type}" role="alert">
      ${message}
    </div>
  `;
}


  4. 
let scrollBtn = document.getElementById('scrollTopBtn');

if (scrollBtn) {
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}



  5. 
let toggleModeBtn = document.getElementById('toggleMode');

if (toggleModeBtn) {
  toggleModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}