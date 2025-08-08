function highlightPortfolio() {
    document.getElementById("portfolio").style.backgroundColor = "#f0f8ff";
}

function handleSubmit(event) {
    event.preventDefault();

    // Show thank you message
    const thankYouDiv = document.createElement('div');
    thankYouDiv.textContent = "Thank you for your message!";
    thankYouDiv.style.position = "fixed";
    thankYouDiv.style.top = "20px";
    thankYouDiv.style.left = "50%";
    thankYouDiv.style.transform = "translateX(-50%)";
    thankYouDiv.style.background = "#000000";
    thankYouDiv.style.color = "#fff";
    thankYouDiv.style.padding = "1em 2em";
    thankYouDiv.style.borderRadius = "8px";
    thankYouDiv.style.zIndex = "9999";
    document.body.appendChild(thankYouDiv);

    // Scroll to portfolio
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });

    // Fade out contact form after delay
    setTimeout(() => {
        thankYouDiv.remove();
        const contact = document.getElementById("contact");
        contact.classList.add("contact-fade-out");
        setTimeout(() => {
            contact.style.display = "none";
            contact.classList.remove("contact-fade-out");
        }, 600); // match transition duration
    }, 1200);
}

document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    const portfolio = document.getElementById('portfolio');
    portfolio.style.marginTop = '0';
    portfolio.style.minHeight = '93vh';
    portfolio.scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.project-title').forEach((title) => {
    const colors = ['#ff0014','#ff6b00', '#03cf73', '#0064fb', 'ffde21'];
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