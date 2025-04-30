function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
  }
  let currentIndex = 0;
  const imageSources = [
      ['/asset/images/Image 01.png', '/asset/images/Instagram_02.jpg', '/asset/images/Instagram_03.jpg'],
      ['/asset/images/Image seks.png', '/asset/images/Instagram_01.jpg', '/asset/images/Instagram7.jpg'],
      ['/asset/images/Instagram5.jpg', '/asset/images/Instagram3.jpg', '/asset/images/Image 01.png']
  ];
  
  function changeImages(direction) {
      // Skift index baseret på retningen (1 for fremad, -1 for bagud)
      currentIndex = (currentIndex + direction + imageSources.length) % imageSources.length;
  
      const images = document.querySelectorAll('.images img');
      for (let i = 0; i < images.length; i++) {
          images[i].src = imageSources[currentIndex][i];
      }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function (e) {
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      // Simpel email-regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!name || !email || !message) {
        alert("Alle felter skal udfyldes.");
        e.preventDefault();
        return;
      }
  
      if (!emailRegex.test(email)) {
        alert("Indtast en gyldig emailadresse.");
        e.preventDefault();
        return;
      }
  
      alert("Tak for din besked!");
    });
  });
