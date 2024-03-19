// Створення масиву із посиланнями на зображення для логотипа
var logoImages = ["./img/main-page/start-name1.png", "./img/main-page/start-name2.png"];
var logoIndex = 0; // Індекс поточного зображення логотипа

// Створення масиву із посиланнями на зображення для каруселі
var carouselImages = ["./img/dl-page/picture1.png", "./img/dl-page/picture2.png", "./img/dl-page/picture3.png", "./img/dl-page/picture4.png"];
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