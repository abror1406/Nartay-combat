let score = 0;

// Local storage'da ballarni saqlash
if (localStorage.getItem('score')) {
    score = parseInt(localStorage.getItem('score'));
}

document.getElementById('score').innerText = `Nartay coins: ${score}`;

const hamster = document.getElementById('hamster');
const message = document.getElementById('message');

// Hamster bosilganda
hamster.addEventListener('click', () => {
    score++;
    localStorage.setItem('score', score);
    document.getElementById('score').innerText = `Nartay coins: ${score}`;

    // Matnni ko'rsatish
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 2000); // 2 soniyadan so'ng yashirinadi

    // Vibrasiya
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }
});

// Bir nechta barmoq bilan bosish
document.addEventListener('touchstart', (event) => {
    if (event.touches.length > 1) {
        score += event.touches.length; // Har bir barmoq uchun ball qo'shiladi
        localStorage.setItem('score', score);
        document.getElementById('score').innerText = `Nartay coins: ${score}`;

        // Matnni ko'rsatish
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 10000); // 2 soniyadan so'ng yashirinadi

        // Vibrasiya
        if (navigator.vibrate) {
            navigator.vibrate(100);
        }
    }
});






