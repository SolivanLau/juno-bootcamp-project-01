// REVIEW SECTION QUOTE TRAVERSAL

// USER EXPERIENCE
// when clicking on arrow navigation buttons, a quote (string) will populate according to data array 
// this will also update in the indicator icons below the quote

// DataCounter is linked to dataArray.length
// if the user presses next, we add +1 to dataCounter - corelate that to populate array index
// if the user presses previous, we add -1 to dataCounter - corelate that to populate array index
// //if counter is surpasses dataArray.length... stop incriment and do nothing
// //if counter is surpasses below 0 ... stop incriment and do nothing





// VARAIBLES NEEDED
//quote element <p> - where string will populate
const $quote = document.querySelector('#quote');
// previous quote button
const $previousArrow = document.querySelector('#previousQuote')
// next quote button
const $nextArrow = document.querySelector('#nextQuote')
//  indicator containe (ul indicator list)
const $indicatorContainer = document.querySelector('#indicatorList')
// array of random quotes
const quoteData = [
    // quote 0
    ` Delicious! The steak at this restaurant was cooked perfectly, and the sides were flavorful. A great experience overall.`,
    // quote 1
    `The pasta at this Italian restaurant was cooked perfectly al dente and the sauce was rich and flavorful. The portion size was also very generous. Can't wait to go back!`,
    // quote 2
    `The tacos were amazing! Fresh ingredients, great flavors, and generous portions. A must-try.`,
    // quote 3
    `I had high expectations for this brunch spot and it did not disappoint. The eggs benedict were cooked to perfection and the coffee was top-notch. Highly recommend for a relaxing weekend brunch.`,
    // quote 4
    `I ordered a burger from this joint and it was hands-down the best burger I've ever had. The patty was juicy and the toppings were perfectly balanced. Yum!`,
    // quote 5
    `Very good food - all smiles :)!`,
    // quote 6
    `I brought my girlfriend on a date to this place for the first time. The reviews DO NOT LIE - we have made this our regular date night spot!`
]

// dataTracker initial value: midway point if odd number of quotes, will round down if even value
let dataTracker = Math.floor((quoteData.length - 1) / 2);

// evaluation function:if li index value === datatracker: fill svg child w color to begin
function indicatorEval() {
    for (let child = 0; child < quoteData.length; child++) {
        const indicatorChildren = $indicatorContainer.children

        const svgChild = indicatorChildren[child].children[0];

        if (indicatorChildren[child].value === dataTracker) {
            svgChild.classList.add('currentQuote');
        } else {
            svgChild.removeAttribute('class')
        }

    }
}
// dataTracker increase/decrease via next/previous buttons
function populateQuote() {
    $quote.textContent = ``;
    $quote.textContent = `${quoteData[dataTracker]}`
}

// next button functionality
function nextFunctionality() {
    // Increase w cap according to quote data
    const maxQuote = quoteData.length - 1;

    dataTracker++;
    if (dataTracker <= maxQuote) {
        console.log(`tracker at ${dataTracker} out of a max number of ${maxQuote}`)
    } else {
        dataTracker = dataTracker - (maxQuote + 1);
    }
    populateQuote();
    indicatorEval();
}
// previous button functionality

function previousFunctionality() {
    // decrease w cap according to quote data
    const maxQuote = quoteData.length - 1;

    dataTracker--;

    if (dataTracker >= 0) {
        console.log(`tracker at ${dataTracker} out of a max number of ${maxQuote}`)
    } else {
        dataTracker = 0 + maxQuote;

    }
    populateQuote();
    indicatorEval();

}
// indicator item (li) functionality

function liHandler(event) {

    if (event.target.tagName === 'circle') {
        // click gives circle from svg... need to target li for .value
        const $indicatorLink = event.target.parentElement.parentElement.value;
        dataTracker = $indicatorLink;
        indicatorEval();
        populateQuote();
    }

}
$nextArrow.addEventListener('click', nextFunctionality);

$previousArrow.addEventListener('click', previousFunctionality);
// populate  indicator icon dynamically upon page load
function indicatorPopulate() {
    for (quote = 0; quote <= quoteData.length - 1; quote++) {
        // adjusted for undefined as part of the length

        const createLi = document.createElement('li')
        // adding styling class
        createLi.classList.add('indicatorItem');
        // value of array index number
        createLi.value = quote;
        // adding svg
        createLi.innerHTML = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" />
        </svg>`
        // append as child to indicator list
        $indicatorContainer.appendChild(createLi)
    }
};

$indicatorContainer.addEventListener('click', liHandler)


indicatorPopulate();
indicatorEval();
populateQuote();

