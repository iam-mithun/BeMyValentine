function showGifts() {
    document.getElementById("giftOptions").style.display = "block";
}

function openGift(num) {
    let content = "";

    if (num === 1) {
        content = `
        <h2>My Love ❤️</h2>
        <p>
        No matter what happens, my heart still chooses you.
        You are my safe place, my happiness,
        and the most beautiful part of my life.
        I love you more than my ego.
        </p>`;
    }

    if (num === 2) {
        content = `
        <h2>Our Memories 📸</h2>
        <img src="photo1.jpg" width="200"><br><br>
        <img src="photo2.jpg" width="200">
        `;
    }

    if (num === 3) {
        content = `
        <h2>I Am Sorry 💌</h2>
        <p>
        I know I made mistakes.
        I know I hurt you.
        But never intentionally.
        If I could go back and fix things, I would.
        I don't want to lose us.
        Can we try again?
        </p>`;
    }

    document.getElementById("popupBody").innerHTML = content;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}