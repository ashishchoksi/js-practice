const btn = document.getElementById("submit-gpt");
btn.addEventListener('click', () => {
    const div = document.getElementById("gpt-holder");
    div.innerHTML = "";
    const height = document.getElementById('height').value || 900;
    const width = document.getElementById('width').value || 1100;
    const iframe = document.createElement('iframe');
    iframe.src = "https://chat.openai.com/chat";
    iframe.height = height;
    iframe.width = width;
    div.appendChild(iframe);
});
