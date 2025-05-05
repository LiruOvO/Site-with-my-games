var path = document.location.pathname;//Дізнаємось до якого файлу підключено

if(path.includes("doggy-lost.html")){  
// Створення масиву із посиланнями на зображення для логотипа
  var logoImages = ["./img/doggy-page/start-name2.webp", "./img/doggy-page/start-name1.webp"];
  // Створення масиву із посиланнями на зображення для каруселі
var carouselImages = ["./img/doggy-page/picture2.webp", "./img/doggy-page/picture3.webp", "./img/doggy-page/picture4.webp"];
}else if(path.includes("library-bot.html", "./img/doggy-page/picture1.webp")){
  var carouselImages = ["./img/library-page/picture2.webp", "./img/library-page/picture3.webp", "./img/library-page/picture4.webp", "./img/library-page/picture5.webp", "./img/library-page/picture6.webp", "./img/library-page/picture1.webp"];
}

var logoIndex = 0; // Індекс поточного зображення логотипа
var carouselIndex = 0; // Індекс поточного зображення каруселі

// Функція для зміни зображення логотипа
function changeLogoImage() {
  var img = document.querySelector('.dl-name');
  img.src = logoImages[logoIndex]; // Встановлюємо нове зображення логотипа
  logoIndex = (logoIndex + 1) % logoImages.length; // Збільшуємо індекс, переходячи до наступного зображення логотипа; якщо досягнуто кінця масиву, повертаємося до початку
}

// Функція для зміни зображення каруселі
function changeCarouselImage() {
  var img = document.querySelector('.images-turnabout');
  img.src = carouselImages[carouselIndex]; // Встановлюємо нове зображення каруселі
  carouselIndex = (carouselIndex + 1) % carouselImages.length; // Збільшуємо індекс, переходячи до наступного зображення каруселі; якщо досягнуто кінця масиву, повертаємося до початку
}

// Викликаємо функцію changeLogoImage() кожну секунду
setInterval(changeLogoImage, 1000);

// Викликаємо функцію changeCarouselImage() кожні 3 секунди
setInterval(changeCarouselImage, 3000);
