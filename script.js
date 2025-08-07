function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you for your message!");
}

function highlightPortfolio() {
    document.getElementById("portfolio").style.backgroundColor = "#f0f8ff";
}

document.querySelectorAll('.project-title').forEach((title) => {
    title.dataset.clickCount = 0;
    title.addEventListener('click', () => {
        const colors = ['#f8d7da', '#d1e7dd', '#cff4fc', '#fff3cd', '#e0cffc', '#fce0f5'];
        title.dataset.clickCount = Number(title.dataset.clickCount) + 1;
        const colorIdx = title.dataset.clickCount % colors.length;
        document.getElementById('portfolio').style.backgroundColor = colors[colorIdx];
    });
});