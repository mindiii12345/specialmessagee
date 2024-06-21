document.getElementById('clickMeButton').addEventListener('click', function() {
    document.getElementById('messageContainer').classList.remove('hidden');
    this.style.display = 'none'; // Hide the button after clicking
    generateHearts();
});

function generateHearts() {
    for (let i = 0; i < 50; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        document.body.appendChild(heart);
    }
}
