function rolldice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let imageSource = randomNumber;
    document.getElementById('ludo').src = imageSource;
}