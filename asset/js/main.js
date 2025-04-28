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
