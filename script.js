const messages = [
    "Ты уверена?",
    "А за конфетку??",
    "А за печеньку?",
    "А за рис с курочкой?",
    "Может передумаешь?",
    "Скажи да и ни одна Милена не пострадает",
    "Ты же знаешь что у тебя нет выбора?",
    "Я настаиваю",
    "Ладно, если ты настолько не хочешь..",
    "Я передумала, у тебя не было выбора изначально)"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}