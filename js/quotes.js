const quotes = [
    {
        quote: "Be the change that you want to see in the world",
        from: "Gandhi"
    },
    {
        quote: "지지자 불여 호지자 호지자 불여 락지자",
        from: "공자"
    },
    {
        quote: "일체유심조",
        from: "화엄경"
    },
    {
        quote: "Call me Ismael",
        from: "Moby Dick"
    },
    {
        quote: "국경의 긴 터널을 빠져나오자, 설국이었다.",
        from: "설국"
    },
    {
        quote: "부끄럼 많은 생애를 보내 왔습니다.",
        from: "인간실격"
    },
    {
        quote: "만국의 노동자여 단결하라!",
        from: "공산당 선언, 마르크스"
    },
    {
        quote: "오늘 밤에도 별이 바람에 스치운다.",
        from: "서시, 윤동주"
    },
    {
        quote: "Cogito, ergo sum.",
        from: "Rene Descartes"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        from: "Mae West"
    }
]

const quote = document.querySelector("#quote");
const from = document.querySelector("#quote-author");

const randomNum = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[randomNum];

quote.innerText = todaysQuote.quote;
from.innerText = todaysQuote.from;