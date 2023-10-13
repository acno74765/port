const quotes = [
    "Quote 1",
    "Quote 2",
    "Quote 3",
    // Add more quotes as needed
];

const quoteContainer = document.querySelector(".quote-container");
const quoteElement = document.querySelector(".quote");
let currentQuoteIndex = 0;
let currentLetterIndex = 0;

setTimeout(() => {
    // Delay for 1 second (1000 milliseconds)
    const quoteInterval = setInterval(() => {
        if (currentQuoteIndex < quotes.length) {
            const quote = quotes[currentQuoteIndex];
            if (currentLetterIndex < quote.length) {
                quoteElement.textContent += quote[currentLetterIndex];
                currentLetterIndex++;
            } else {
                // Display the full quote and move to the next one
                currentQuoteIndex++;
                currentLetterIndex = 0;
                quoteElement.textContent = '';
            }
        } else {
            // All quotes have been displayed
            clearInterval(quoteInterval);
            quoteContainer.style.display = "none";
        }
    }, 100); // Adjust the delay between letters if needed
}, 1000); // Wait for 1 second
