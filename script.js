function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you for your message!");
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
}


function highlightPortfolio() {
    document.getElementById("portfolio").style.backgroundColor = "#f0f8ff";
}

document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.project-title').forEach((title) => {
    const colors = ['#f8d7da', '#d1e7dd', '#cff4fc'];
    let clickCount = 0;
    title.addEventListener('click', (e) => {
        clickCount++;
        const colorIdx = clickCount % colors.length;
        title.closest('.card').style.backgroundColor = colors[colorIdx];
    });
});

document.getElementById('contactNav').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contact').style.display = 'block';
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contactMeLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contact').style.display = 'block';
});