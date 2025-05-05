// document.querySelectorAll('.icons').forEach(icon => {
//     const originalSrc = icon.src;
//     icon.addEventListener('mouseenter', () => {
//         if (icon.classList.contains('git')) {
//             icon.src = './img/icons/github-after.webp';
//         } else if (icon.classList.contains('yout')) {
//             icon.src = './img/icons/youtube-after.webp';
//         } else if (icon.classList.contains('inst')) {
//             icon.src = './img/icons/instagram-after.webp';
//         }
//     });
//     icon.addEventListener('mouseleave', () => {
//         icon.src = originalSrc; // Повертаємо початкове зображення
//     });
// });


document.querySelectorAll('.icons').forEach(icon => {
    const originalSrc = icon.src;

    // Отримаємо назву сторінки, наприклад "index.html"
    const pageName = window.location.pathname.split('/').pop();

    icon.addEventListener('mouseenter', () => {
        if (pageName === 'doggy-lost.html') {
            if (icon.classList.contains('git')) {
                icon.src = './img/doggy-page/github-after.webp';
            } else if (icon.classList.contains('yout')) {
                icon.src = './img/doggy-page/youtube-after.webp';
            } else if (icon.classList.contains('inst')) {
                icon.src = './img/doggy-page/instagram-after.webp';
            }
        } else {
            // Для інших сторінок — інші іконки
            if (icon.classList.contains('git')) {
                icon.src = './img/icons/github-after.webp';
            } else if (icon.classList.contains('yout')) {
                icon.src = './img/icons/youtube-after.webp';
            } else if (icon.classList.contains('inst')) {
                icon.src = './img/icons/instagram-after.webp';
            }
        }
    });

    icon.addEventListener('mouseleave', () => {
        icon.src = originalSrc;// Повертаємо початкове зображення
    });
});