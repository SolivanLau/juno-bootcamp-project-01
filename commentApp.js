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
function populateComment(event) {
    event.preventDefault();

    // create new li to contain comment html
    const newComment = document.createElement('li');
    // add styling class
    newComment.classList.add('individualComment');
    newComment.innerHTML = `<!-- profilePic -->
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
            <p class="postData">${'-' + $userWebInput.value}</p>
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

    console.log($commentName);
}


$commentForm.addEventListener('submit', populateComment)