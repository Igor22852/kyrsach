document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item[data-tab]');
  const tabContents = document.querySelectorAll('.tab-content');
  const pageTitle = document.getElementById('page-title');

  // Названия вкладок
  const tabTitles = {
    bookings: 'Мои бронирования',
    profile: 'Профиль',
    favorites: 'Избранное',
    payments: 'Платежи',
    support: 'Поддержка'
  };

  navItems.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      // Убираем активный класс у всех
      navItems.forEach(el => el.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Добавляем активный класс текущему
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
      pageTitle.textContent = tabTitles[tabId] || 'Личный кабинет';
    });
  });

  // Простая обработка кнопок (можно расширить)
  document.querySelectorAll('.btn-cancel').forEach(btn => {
    btn.addEventListener('click', function () {
      if (confirm('Вы уверены, что хотите отменить бронирование?')) {
        this.closest('.booking-card').style.opacity = '0.6';
        this.textContent = 'Отменено';
        this.disabled = true;
      }
    });
  });

  document.querySelector('.btn-save').addEventListener('click', function () {
    alert('Изменения сохранены!');
  });
});