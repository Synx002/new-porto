  // Pilih elemen custom cursor dan semua gambar di .image-wrapper
  const cursor = document.querySelector('.custom-cursor');
  const images = document.querySelectorAll('.image-wrapper img');

  // Fungsi untuk memperbarui posisi cursor dengan sedikit delay
  function updateCursorPosition(e) {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
  }

  // Event listener untuk setiap gambar
  images.forEach(img => {
      img.addEventListener('mouseenter', (e) => {
          cursor.classList.remove('hidden'); // Hapus kelas hidden
          cursor.classList.add('visible'); // Tampilkan cursor
          updateCursorPosition(e); // Update posisi awal saat masuk
      });

      img.addEventListener('mousemove', (e) => {
          // Tambahkan sedikit delay pada posisi agar mengikuti pointer dengan halus
          requestAnimationFrame(() => updateCursorPosition(e));
      });

      img.addEventListener('mouseleave', () => {
          cursor.classList.add('hidden'); // Sembunyikan cursor saat keluar dari gambar
      });
  });



  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
  });

  document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image-wrapper img'); // Memilih hanya gambar dalam .image-wrapper

  images.forEach(image => {
          const randomClass = 'rounded-random-' + (Math.floor(Math.random() * 4) + 1);
          image.classList.add(randomClass);
      });
  });



  document.querySelectorAll('.image-wrapper').forEach(item => {
      item.addEventListener('mouseenter', () => {
          const cursor = document.querySelector('.custom-cursor');
          cursor.classList.add('visible');
      });

      item.addEventListener('mouseleave', () => {
          const cursor = document.querySelector('.custom-cursor');
          cursor.classList.remove('visible');
      });
  });

  document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.custom-dropdown');

  dropdown.addEventListener('change', () => {
          dropdown.classList.add('selected'); // Tambahkan class 'selected' ketika ada pilihan
      });
  });

  document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.querySelector('.custom-date');

  dateInput.addEventListener('change', () => {
          dateInput.classList.add('selected'); // Tambahkan class 'selected' saat tanggal dipilih
      });
  });