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