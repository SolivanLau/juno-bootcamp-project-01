// comment via blog

// VARIABLES 
// FORM VARIABLES

// name input
const $userNameInput = document.querySelector('#userName')
// website input
const $userWebInput = document.querySelector('#website');
// comment input
const $userCommentInput = document.querySelector('#comment');

const $commentForm = document.querySelector('#commentForm');
// NEW COMMENT VARIABLEs
// comment display 
const $commentDisplay = document.querySelector('#commentDisplay')
// comment Name
const $commentName = document.querySelector('#commentName');
// comment Post
const $commentPost = document.querySelector('#commentPost')
const $commentWeb = document.querySelector('#website')



// FUNCTIONS
// populate comment - main handler for form submit
function populateComment(event) {
    event.preventDefault();

    // create new li to contain comment html
    const newComment = document.createElement('li');
    // determines if a dash is needed
    if ($userWebInput.value.length >= 1) {
        '-' + $userWebInput.value
    }

    // add styling class
    newComment.classList.add('individualComment');
    newComment.innerHTML = `<!-- comment from ${$userNameInput.value} -->
    <!-- profilePic -->
    <a href="#" class="picLink">
        <figure class="profilePic commentItem">
            <div class="noProfilePic"></div>
            <div class="overlay"></div>
        </figure>
    </a>
    <!-- msg -->
    <div class="msgContainer commentItem">
        <div class="commentBio">
            <a href="#">
                <h4 id="commentName">${$userNameInput.value}</h4>
            </a>
            <p class="postData">${$userWebInput.value}</p>
        </div>
        <p id="commentPost">${$userCommentInput.value}</p>
        <div class="timeStampContainer">
            <p class="postData">April 19, 2020 at 10 hours ago</p>
        </div>
        <div class="msgTailContainer">
            <svg height="30px" width="30px" class="msgTail">
                <polygon points="15,15 30,25 30,5" />
              </svg> 
        </div>
    </div>`
    $commentDisplay.appendChild(newComment);


    // word counter to determine. string to evaluate. create
    function wordCounter(string, wordCapNum) {
        let wordTotal = 0;
        //set one integer ahead of actual word count
        let wordCap = wordCapNum;
        // removal of any whitespace
        const userComment = string.trim().split(' ');
        // use split function to define  pattern of single space as a separator

        wordTotal = userComment.length;
        // end function w returning total number
        const moreButton = `<span class="moreButton" id="moreButton">...</span>`

        userComment[wordCap + 1].innerHTML = moreButton;
    }

    wordCounter($userCommentInput.value, 2);
}


$commentForm.addEventListener('submit', populateComment)




