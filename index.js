/* Challenge 1 */

// import { tweetsData } from '/data.js'

// // console.log(tweetsData)

// import { tweetsData } from '/data.js'


// /*
// Challenge:
// 1. Put all of the data in its own file called
//    data.js, and export it back into index.js. 
//    Make any changes to index.html that are
//    necessary to make this work.
// 2. Log out tweetsData.
// */

// /* Challenge 2 */

// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
    
//     /*
// Challenge
// 1. Have the eventListener's function
//    log out the contents of the textarea
//    when the Tweet button is clicked.
// */
//     console.log(tweetInput.value)
    
// })


// function 


// /*
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="URL OF PROFILE PIC" class="profile-pic">
//         <div>
//             <p class="handle">TWEET HANDLE</p>
//             <p class="tweet-text">TWEET TEXT</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     NUMBER OF REPLIES
//                 </span>
//                 <span class="tweet-detail">
//                     NUMBER OF LIKES
//                 </span>
//                 <span class="tweet-detail">
//                     NUMBER OF RETWEETS
//                 </span>
//             </div>   
//         </div>            
//     </div>
// </div>

// */


/* Tweet Boilerplate Challenge */

// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// function getFeedHtml(){
// /* My Solution */
//     for (let tweet of tweetsData) {
//         let feedHtml = `
//         <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     ${tweet.replies.length} use ".length" to retrieve the entire array
//                 </span>
//                 <span class="tweet-detail">
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
// </div>
//         `
        
// console.log(feedHtml)

// /* Tom's Solution */

//         let feedHtml = ``

//         for (let tweet of tweetsData) {
//             feedHtml += `
//             <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
// </div>
//         `} 
//         return feedHtml
//     }

// getFeedHtml()
/*
Challenge:
1. Use a "for of" to iterate over the data and 
   create HTML string for each tweet using the 
   boilerplate below. Replace UPPERCASE text
   with data from the tweets. 
2. Store this HTML in a let called "feedHtml".
3. Log out feedHtml.
4. Call getFeedHtml to check it's working.
*/  
// }


/*
<div class="tweet">
    <div class="tweet-inner">
        <img src="URL OF PROFILE PIC" class="profile-pic">
        <div>
            <p class="handle">TWEET HANDLE</p>
            <p class="tweet-text">TWEET TEXT</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    NUMBER OF REPLIES
                </span>
                <span class="tweet-detail">
                    NUMBER OF LIKES
                </span>
                <span class="tweet-detail">
                    NUMBER OF RETWEETS
                </span>
            </div>   
        </div>            
    </div>
</div>

*/

/* forEach() Challenge */

import { tweetsData } from './data.js'
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function(){
    console.log(tweetInput.value)
})

function getFeedHtml(){
    
/*
Challenge:
1. Replace the for of with a forEach.
*/
      
    let feedHtml = ``
    tweetsData.forEach(function(tweet){
                feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>
`
    })
   return feedHtml 
}

function render()



