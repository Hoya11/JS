const quotes = [
    {quote: "Judgement, not passion should prevail.",
     author: "Epicharmus"},
    {quote: "What makes the engine go? Desire, desire, desire.",
     author: "Stanley Kunitz"},
    {quote: "To help a friend in need is easy, but to give him your time is not always opportune.",
     author: "Charlie Chaplin"},
    {quote: "Friends have all things in common.",
     author: "Plato"},
    {quote: "Learn as much by writing as by reading.",
     author: "Lord Acton"},
    {quote: "Love is an exploding cigar we willingly smoke.",
     author: "Lynda Barry"},
    {quote: "To love and be loved is to feel the sun from both sides.",
     author: "David Viscott"},
    {quote: "Travel is only glamorous in retrospect.",
     author: "Paul Theroux"}
];



const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
