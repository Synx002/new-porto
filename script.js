document.addEventListener("DOMContentLoaded", () => {
    // Animate text from left to follow the circular path
    gsap.fromTo(
        "#curvedText",
        {
            startOffset: "-100%", // Start off-screen to the left
        },
        {
            startOffset: "25%", // Ends centered over the top half of the circle
            duration: 3,
            ease: "power2.inOut",
        }
    );
});

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})


document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');

    images.forEach(image => {
        const randomClass = 'rounded-random-' + (Math.floor(Math.random() * 4) + 1);
        image.classList.add(randomClass);
    });
});


