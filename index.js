i/* Challenge 1 */

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




// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// function getFeedHtml(){
    
// /*
// Challenge:
// 1. Replace the for of with a forEach.
// */
      
//     let feedHtml = ``
//     tweetsData.forEach(function(tweet){
//                 feedHtml += `
// <div class="tweet">
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
// `
//     })
//    return feedHtml 
// }

// function render(){

// }



/* Render the tweets feed Challenge */

// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// function getFeedHtml(){
    
//     let feedHtml = ``
    
//     tweetsData.forEach(function(tweet){
//         feedHtml += `
// <div class="tweet">
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
// `
//    })
//    return feedHtml 
// }

// function render(){
//     // const feed = document.getElementById('feed')
//     // feed.innerHTML = getFeedHtml()
// /*
// Challenge:
// 1. Take control of the ‘feed’ div.
// 2. Render the HTML returned by the getFeedHtml 
//    function to the 'feed' div. 
//    See if you can do this with just one line of code!
// */
//    document.getElementById('feed').innerHTML = getFeedHtml() 
// }




/* Font Awesome CDN Challenge - Adding Icons */


// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// function getFeedHtml(){
//     let feedHtml = ``
// /*
// Challenge:
// 1. Inside each span that has a class of "tweet-detail",
//    add an <i> tag.
// 2. Give each <i> tag the classes it needs to render the
//    correct icons next to the numbers.
//    The classes you will need are:
//     fa-regular, 
//     fa-solid, 
//     fa-comment-dots, 
//     fa-heart, 
//     fa-retweet
// */
    
//     tweetsData.forEach(function(tweet){
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comments-dots"></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart"></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet"></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
// </div>
// `
//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()





/* Add Data Attributes to each of the <i></i> tags */





// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// function getFeedHtml(){
//     let feedHtml = ``
// /*
// Challenge:
// 1. Add data attributes to each of the  <i> tags. You can call
//    them 'reply', 'like', and 'retweet’.
// 2. Each data attribute should hold the tweet's uuid.
// */
    
//     tweetsData.forEach(function(tweet){
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comment-dots" 
//                     data-reply="${tweet.uuid}></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart"
//                     data-like="${tweet.uuid}></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet"
//                     data-retweet="${tweet.uuid}></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
// </div>
// `
//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()





/* Add eventListener for when an icon is clicked */






// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// document.addEventListener('click', function(e){
//     if (e.target.dataset.like){
//         console.log(e.target.dataset.like)
//     }
// /*
// Challenge:
// 1. When a like icon is clicked, this function 
//    should log out the contents of the 'data-like' 
//    data-attribute.

// ⚠️ Clicking on the page but not on the like icon
//    will log out 'undefined'. That is absolutely fine.
// */
// })

// function getFeedHtml(){
//     let feedHtml = ``
    
//     tweetsData.forEach(function(tweet){
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comment-dots"
//                     data-reply="${tweet.uuid}"
//                     ></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart"
//                     data-like="${tweet.uuid}"
//                     ></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet"
//                     data-retweet="${tweet.uuid}"
//                     ></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
// </div>
// `
//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()




/* Begin to create a function to handle clicks on the "like" button */




// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// document.addEventListener('click', function(e){
//     // console.log('like', e.target.dataset.like)
//     if(e.target.dataset.like) {
//         handleLikeClick(e.target.dataset.like).tweet.uuid
//     }
// /*
// Challenge:
// 1. If a like icon has been clicked, call handleLikeClick
//    passing in the uuid that is stored in the like icon's 
//    data attribute. 
// */
// })

// function handleLikeClick(tweetId){
//     console.log(tweetId)
// /*
// Challenge:
// 2. handleLikeClick should take in a parameter. 
//    You can call this parameter 'tweetId'. For 
//    now just log out tweetId.
// */
// }

// function getFeedHtml(){
//     let feedHtml = ``
    
//     tweetsData.forEach(function(tweet){
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comment-dots"
//                     data-reply="${tweet.uuid}"
//                     ></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart"
//                     data-like="${tweet.uuid}"
//                     ></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet"
//                     data-retweet="${tweet.uuid}"
//                     ></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
// </div>
// `
//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()





/* Find the Tweet Object Challenge */





// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// document.addEventListener('click', function(e){
//     if(e.target.dataset.like){
//        handleLikeClick(e.target.dataset.like) 
//     }
// })

// function handleLikeClick(tweetId){
//     console.log(tweetId)
// /*
// Challenge:
// 1. Iterate over tweetsData and use the uuid 
//    saved in tweetId to identify the liked
//    tweet's object. Save that object to a 
//    new const called 'targetTweetObj'.
// ⚠️ targetTweetObj should hold an object, NOT
//    an array.
// 2. Increment targetTweetObj's 'likes' count 
//    by 1.
// 3. Log out targetTweetObj
// */

// }

// function getFeedHtml(){
//     let feedHtml = ``
    
//     tweetsData.forEach(function(tweet){
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comment-dots"
//                     data-reply="${tweet.uuid}"
//                     ></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart"
//                     data-like="${tweet.uuid}"
//                     ></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet"
//                     data-retweet="${tweet.uuid}"
//                     ></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
// </div>
// `
//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()


// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// document.addEventListener('click', function(e){
//     if(e.target.dataset.like){
//        handleLikeClick(e.target.dataset.like) 
//     }
// })

// function handleLikeClick(tweetId){
//     // console.log(tweetId)

//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0] // Instead of creating a new const
//     // you can just add the index here so the 
//     // filter method will look for items at 
//     // position 0 in the array.
    
//     // const realTargetTweetObject = targetTweetObj[0]

//     targetTweetObj.likes++
//     render()
//     // console.log(targetTweetObj)
// /*
// Challenge:
// 1. Iterate over tweetsData and use the uuid 
//    saved in tweetId to identify the liked
//    tweet's object. Save that object to a 
//    new const called 'targetTweetObj'.
// ⚠️ targetTweetObj should hold an object, NOT
//    an array.
// 2. Increment targetTweetObj's 'likes' count 
//    by 1.
// 3. Log out targetTweetObj
// */

// }

// function getFeedHtml(){
//     let feedHtml = ``
    
//     tweetsData.forEach(function(tweet){
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comment-dots"
//                     data-reply="${tweet.uuid}"
//                     ></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart"
//                     data-like="${tweet.uuid}"
//                     ></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet"
//                     data-retweet="${tweet.uuid}"
//                     ></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
// </div>
// `
//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()






/* Challenge: Increment and Decrement the Like button */





// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// document.addEventListener('click', function(e){
//     if(e.target.dataset.like){
//        handleLikeClick(e.target.dataset.like) 
//     }
// })

// function handleLikeClick(tweetId){ 
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]
    
// /*
// Challenge:
// 1. When a tweet is liked, it's 'isLiked' property
//    should be set to true.
// 2. When a tweet is unliked, it's 'isLiked' property
//    should be set to false and its 'likes' count
//    should be decremented.
// */   

    
// if (targetTweetObj.isLiked) {
//     targetTweetObj.likes--
//     targetTweetObj.isLiked = false
// }
// else {
//     targetTweetObj.likes++
//     targetTweetObj.isLiked = true
// }
    
    
//     render()
// }

// function getFeedHtml(){
//     let feedHtml = ``
    
//     tweetsData.forEach(function(tweet){
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comment-dots"
//                     data-reply="${tweet.uuid}"
//                     ></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart"
//                     data-like="${tweet.uuid}"
//                     ></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet"
//                     data-retweet="${tweet.uuid}"
//                     ></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
// </div>
// `
//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()




/* Challenge: Flip the Boolean */



// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// document.addEventListener('click', function(e){
//     if(e.target.dataset.like){
//        handleLikeClick(e.target.dataset.like) 
//     }
// })

// function handleLikeClick(tweetId){ 
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]
    
// /*
// Challenge:
// 1. Delete the two lines of code marked below and
//    replace them with just one line of code outside 
//    of the if else.
//    Hint: Google the logical NOT operator (!)
// */ 

//     if (targetTweetObj.isLiked){
//         targetTweetObj.likes--
//         // targetTweetObj.isLiked = false // delete
//     }
//     else{
//         targetTweetObj.likes++
//         // targetTweetObj.isLiked = true // delete  
//     }
    
//     targetTweetObj.isLiked = !targetTweetObj.isLiked
    
    
//     /* const a = 3;
// const b = -2;

// console.log(!(a > 0 || b > 0));
// // Expected output: false */
    
//     render()
// }

// function getFeedHtml(){
//     let feedHtml = ``
    
//     tweetsData.forEach(function(tweet){
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comment-dots"
//                     data-reply="${tweet.uuid}"
//                     ></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart"
//                     data-like="${tweet.uuid}"
//                     ></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet"
//                     data-retweet="${tweet.uuid}"
//                     ></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
// </div>
// `
//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()





/* Challenge: Retweet a Tweet */





// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// document.addEventListener('click', function(e){
//     if(e.target.dataset.like){
//        handleLikeClick(e.target.dataset.like) 
//     }

//     /*
// Challenge:
// 1. Make this eventListener call "handleRetweetClick" 
//    when the retweet icon is clicked, passing in the
//    uuid from that tweet.  
// */

//     else if(e.target.dataset.retweet){
//         handleRetweetClick(e.target.dataset.retweet)
//     }
// })

// function handleLikeClick(tweetId){ 
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]

//     if (targetTweetObj.isLiked){
//         targetTweetObj.likes--
//     }
//     else{
//         targetTweetObj.likes++ 
//     }
//     targetTweetObj.isLiked = !targetTweetObj.isLiked
//     render()
// }

// function handleRetweetClick(tweetId){
// /*
// Challenge:
// 2. Find the retweeted tweet's object in tweetsData 
//    and save it to a const.
// 3. Increment or decrement the retweet count of the 
//    tweet and flip its isRetweeted boolean.
// 4. Call the render function.  
// */

//     const targetRetweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]

//     if (targetRetweetObj.isRetweeted){
//         targetRetweetObj.retweets--
//     }
//     else {
//         targetRetweetObj.retweets++
//     }
//     targetRetweetObj.isRetweeted = !targetRetweetObj.isRetweeted
//     render()
// }

// function getFeedHtml(){
//     let feedHtml = ``
    
//     tweetsData.forEach(function(tweet){
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comment-dots"
//                     data-reply="${tweet.uuid}"
//                     ></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart"
//                     data-like="${tweet.uuid}"
//                     ></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet"
//                     data-retweet="${tweet.uuid}"
//                     ></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
// </div>
// `
//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()






/* Challenge: Color the Icons */




// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// document.addEventListener('click', function(e){
//     if(e.target.dataset.like){
//        handleLikeClick(e.target.dataset.like) 
//     }
//     else if(e.target.dataset.retweet){
//         handleRetweetClick(e.target.dataset.retweet)
//     }
// })

// function handleLikeClick(tweetId){ 
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]

//     if (targetTweetObj.isLiked){
//         targetTweetObj.likes--
//     }
//     else{
//         targetTweetObj.likes++ 
//     }
//     targetTweetObj.isLiked = !targetTweetObj.isLiked
//     render()
// }

// function handleRetweetClick(tweetId){
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]
    
//     if(targetTweetObj.isRetweeted){
//         targetTweetObj.retweets--
//     }
//     else{
//         targetTweetObj.retweets++
//     }
//     targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
//     render() 
// }

// function getFeedHtml(){
//     let feedHtml = ``
    
//     tweetsData.forEach(function(tweet){

//         let likeIconClass = ''
//         let retweetIconClass = ''

//         if(tweet.isLiked){
//             likeIconClass = 'liked'
//         }
//         else if(tweet.isRetweeted){
//             retweetIconClass = 'retweeted'
//         }
// /*
// Challenge:
// 1. Use an if statement to set the value of 
//    'likeIconClass' to the string 'liked' 
//    if the tweet has been liked. 
// 2. In the like icon tag, add 'likeIconClass' 
//    to the list of classes.
// */            
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comment-dots"
//                     data-reply="${tweet.uuid}"
//                     ></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart ${likeIconClass}"
//                     data-like="${tweet.uuid}"
//                     ></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet ${retweetIconClass}"
//                     data-retweet="${tweet.uuid}"
//                     ></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
// </div>
// `
//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()





/* Challenge: Check it a tweet has Replies */




// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// document.addEventListener('click', function(e){
//     if(e.target.dataset.like){
//        handleLikeClick(e.target.dataset.like) 
//     }
//     else if(e.target.dataset.retweet){
//         handleRetweetClick(e.target.dataset.retweet)
//     }
// })

// function handleLikeClick(tweetId){ 
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]

//     if (targetTweetObj.isLiked){
//         targetTweetObj.likes--
//     }
//     else{
//         targetTweetObj.likes++ 
//     }
//     targetTweetObj.isLiked = !targetTweetObj.isLiked
//     render()
// }

// function handleRetweetClick(tweetId){
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]
    
//     if(targetTweetObj.isRetweeted){
//         targetTweetObj.retweets--
//     }
//     else{
//         targetTweetObj.retweets++
//     }
//     targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
//     render() 
// }

// function getFeedHtml(){
//     let feedHtml = ``
    
//     tweetsData.forEach(function(tweet){
        
//         let likeIconClass = ''
        
//         if (tweet.isLiked){
//             likeIconClass = 'liked'
//         }
        
//         let retweetIconClass = ''
        
//         if (tweet.isRetweeted){
//             retweetIconClass = 'retweeted'
//         }
        
// /*
// Challenge:
// 1. Use an if statement to check if a tweet has replies.
// 2. If it does, log out the uuid for that tweet.
// */

//         if (tweet.replies.length > 0) {
//             console.log(tweet.uuid)
//         }
          
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comment-dots"
//                     data-reply="${tweet.uuid}"
//                     ></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart ${likeIconClass}"
//                     data-like="${tweet.uuid}"
//                     ></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet ${retweetIconClass}"
//                     data-retweet="${tweet.uuid}"
//                     ></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
// </div>
// `
//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()






// /* Challenge: HTML string for replies and add to parent div */




// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// document.addEventListener('click', function(e){
//     if(e.target.dataset.like){
//        handleLikeClick(e.target.dataset.like) 
//     }
//     else if(e.target.dataset.retweet){
//         handleRetweetClick(e.target.dataset.retweet)
//     }
// })

// function handleLikeClick(tweetId){ 
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]

//     if (targetTweetObj.isLiked){
//         targetTweetObj.likes--
//     }
//     else{
//         targetTweetObj.likes++ 
//     }
//     targetTweetObj.isLiked = !targetTweetObj.isLiked
//     render()
// }

// function handleRetweetClick(tweetId){
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]
    
//     if(targetTweetObj.isRetweeted){
//         targetTweetObj.retweets--
//     }
//     else{
//         targetTweetObj.retweets++
//     }
//     targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
//     render() 
// }

// function getFeedHtml(){
//     let feedHtml = ``
    
//     tweetsData.forEach(function(tweet){
        
//         let likeIconClass = ''
        
//         if (tweet.isLiked){
//             likeIconClass = 'liked'
//         }
        
//         let retweetIconClass = ''
        
//         if (tweet.isRetweeted){
//             retweetIconClass = 'retweeted'
//         }

//         let repliesHtml = ''
        
//         if(tweet.replies.length > 0){
//             let repliesHtml = ''
        
//         if(tweet.replies.length > 0){
//             tweet.replies.forEach(function(reply){
//                    repliesHtml += `
//         <div class="tweet-reply">
//             <div class="tweet-inner">
//                     <img src=${reply.profilePic} class="profile-pic">
//                 <div>
//                     <p class="handle">${reply.handle}</p>
//                     <p class="tweet-text">${reply.tweetText}</p>
//                 </div>
//             </div>
//         </div>`
//             })
            
            
//             // console.log(tweet.uuid)
// /*
// Challenge:
// 1. If a tweet has replies, iterate through the replies
//    and wrap each one in the HTML template provided below. 
//    Make sure to replace words in UPPERCASE with data from 
//    the tweet. On each iteration, add this HTML to repliesHtml.
   
// <div class="tweet-reply">
//     <div class="tweet-inner">
//         <img src="PROFILE PIC" class="profile-pic">
//             <div>
//                 <p class="handle">HANDLE</p>
//                 <p class="tweet-text">TWEET TEXT</p>
//             </div>
//         </div>
// </div>
// */
//         }
        
          
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comment-dots"
//                     data-reply="${tweet.uuid}"
//                     ></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart ${likeIconClass}"
//                     data-like="${tweet.uuid}"
//                     ></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet ${retweetIconClass}"
//                     data-retweet="${tweet.uuid}"
//                     ></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
//     <div class="hidden" id="replies-${tweet.uuid}">
//       ${repliesHtml}  
//     </div>
// </div>
// `
// /*
// Challenge:
// 2. Place repliesHtml in its parent div remembering 
//    to update that divs id.
// */


//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()






/* Challenge: Toggle Hidden on Replies */





// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

// document.addEventListener('click', function(e){
//     if(e.target.dataset.like){
//        handleLikeClick(e.target.dataset.like) 
//     }
//     else if(e.target.dataset.retweet){
//         handleRetweetClick(e.target.dataset.retweet)
//     }
//     else if(e.target.dataset.reply){
//         handleReplyClick(e.target.dataset.reply)
//     }
// })
 
// function handleLikeClick(tweetId){ 
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]

//     if (targetTweetObj.isLiked){
//         targetTweetObj.likes--
//     }
//     else{
//         targetTweetObj.likes++ 
//     }
//     targetTweetObj.isLiked = !targetTweetObj.isLiked
//     render()
// }

// function handleRetweetClick(tweetId){
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]
    
//     if(targetTweetObj.isRetweeted){
//         targetTweetObj.retweets--
//     }
//     else{
//         targetTweetObj.retweets++
//     }
//     targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
//     render() 
// }

// function handleReplyClick(replyId){
//     document.getElementById('replies-${replyId}').classList.toggle('hidden')
    
//     /* element.classList.toggle("mystyle") */

// /*
// Challenge:
// 1. Use the uuid stored in 'replyId' to take control 
//    of the div containing that tweet’s replies. 
//    (Check the HTML string below to remind yourself 
//    what id that div will have.)  
// 2. Toggle the CSS class "hidden" on that div. 
// */
// }



// function getFeedHtml(){
//     let feedHtml = ``
    
//     tweetsData.forEach(function(tweet){
        
//         let likeIconClass = ''
        
//         if (tweet.isLiked){
//             likeIconClass = 'liked'
//         }
        
//         let retweetIconClass = ''
        
//         if (tweet.isRetweeted){
//             retweetIconClass = 'retweeted'
//         }
        
//         let repliesHtml = ''
        
//         if(tweet.replies.length > 0){
//             tweet.replies.forEach(function(reply){
//                 repliesHtml+=`
// <div class="tweet-reply">
//     <div class="tweet-inner">
//         <img src="${reply.profilePic}" class="profile-pic">
//             <div>
//                 <p class="handle">${reply.handle}</p>
//                 <p class="tweet-text">${reply.tweetText}</p>
//             </div>
//         </div>
// </div>
// `
//             })
//         }
        
          
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comment-dots"
//                     data-reply="${tweet.uuid}"
//                     ></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart ${likeIconClass}"
//                     data-like="${tweet.uuid}"
//                     ></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet ${retweetIconClass}"
//                     data-retweet="${tweet.uuid}"
//                     ></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
//     <div class="hidden" id="replies-${tweet.uuid}">
//         ${repliesHtml}
//     </div>   
// </div>
// `
//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()





/* Challenge: Refactor the Tweet btn */




// import { tweetsData } from './data.js'
// const tweetInput = document.getElementById('tweet-input')

// /*
// Challenge:
// 1. Somewhere in index.js there is a line of code 
//    we no longer need. Find it and delete it!
// */ 

// /* const tweetBtn = document.getElementById('tweet-btn') - this
// is the line of code no longer needed as we're taking control
// of this element with this "e.target.id === 'tweet-btn'"" line 
// of code */


// // tweetBtn.addEventListener('click', function(){
// //     console.log(tweetInput.value)
// // })

// document.addEventListener('click', function(e){
//     if(e.target.dataset.like){
//        handleLikeClick(e.target.dataset.like) 
//     }
//     else if(e.target.dataset.retweet){
//         handleRetweetClick(e.target.dataset.retweet)
//     }
//     else if(e.target.dataset.reply){
//         handleReplyClick(e.target.dataset.reply)
//     }
//     else if(e.target.id === 'tweet-btn'){
//         handleTweetBtnClick()
//     }
// /*
// Challenge:
// 1. Add an else if so that if the Tweet button
//    is clicked, handleTweetBtnClick is called.
// */ 
// })
 
// function handleLikeClick(tweetId){ 
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]

//     if (targetTweetObj.isLiked){
//         targetTweetObj.likes--
//     }
//     else{
//         targetTweetObj.likes++ 
//     }
//     targetTweetObj.isLiked = !targetTweetObj.isLiked
//     render()
// }

// function handleRetweetClick(tweetId){
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]
    
//     if(targetTweetObj.isRetweeted){
//         targetTweetObj.retweets--
//     }
//     else{
//         targetTweetObj.retweets++
//     }
//     targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
//     render() 
// }

// function handleReplyClick(replyId){
//     document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
// }

// function handleTweetBtnClick(){
//     console.log(tweetInput.value)
// }

// function getFeedHtml(){
//     let feedHtml = ``
    
//     tweetsData.forEach(function(tweet){
        
//         let likeIconClass = ''
        
//         if (tweet.isLiked){
//             likeIconClass = 'liked'
//         }
        
//         let retweetIconClass = ''
        
//         if (tweet.isRetweeted){
//             retweetIconClass = 'retweeted'
//         }
        
//         let repliesHtml = ''
        
//         if(tweet.replies.length > 0){
//             tweet.replies.forEach(function(reply){
//                 repliesHtml+=`
// <div class="tweet-reply">
//     <div class="tweet-inner">
//         <img src="${reply.profilePic}" class="profile-pic">
//             <div>
//                 <p class="handle">${reply.handle}</p>
//                 <p class="tweet-text">${reply.tweetText}</p>
//             </div>
//         </div>
// </div>
// `
//             })
//         }
        
          
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comment-dots"
//                     data-reply="${tweet.uuid}"
//                     ></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart ${likeIconClass}"
//                     data-like="${tweet.uuid}"
//                     ></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet ${retweetIconClass}"
//                     data-retweet="${tweet.uuid}"
//                     ></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
//     <div class="hidden" id="replies-${tweet.uuid}">
//         ${repliesHtml}
//     </div>   
// </div>
// `
//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()






/* Challenge: Bringing in a uuid */




// import { tweetsData } from './data.js'

// /*
// Challenge:
// 1. Bring in uuidjs.
// */

// import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
// console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// const tweetInput = document.getElementById('tweet-input')

// document.addEventListener('click', function(e){
//     if(e.target.dataset.like){
//        handleLikeClick(e.target.dataset.like) 
//     }
//     else if(e.target.dataset.retweet){
//         handleRetweetClick(e.target.dataset.retweet)
//     }
//     else if(e.target.dataset.reply){
//         handleReplyClick(e.target.dataset.reply)
//     }
//     else if(e.target.id === 'tweet-btn'){
//         handleTweetBtnClick()
//     }
// })
 
// function handleLikeClick(tweetId){ 
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]

//     if (targetTweetObj.isLiked){
//         targetTweetObj.likes--
//     }
//     else{
//         targetTweetObj.likes++ 
//     }
//     targetTweetObj.isLiked = !targetTweetObj.isLiked
//     render()
// }

// function handleRetweetClick(tweetId){
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]
    
//     if(targetTweetObj.isRetweeted){
//         targetTweetObj.retweets--
//     }
//     else{
//         targetTweetObj.retweets++
//     }
//     targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
//     render() 
// }

// function handleReplyClick(replyId){
//     document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
// }

// function handleTweetBtnClick(){
//     console.log(    {
//         handle: `@Scrimba`,
//         profilePic: `images/scrimbalogo.png`,
//         likes: 0,
//         retweets: 0,
//         tweetText: tweetInput.value,
//         replies: [],
//         isLiked: false,
//         isRetweeted: false,
//         uuid: uuidv4(),
//     })
// /*
// Challenge:
// 2. When the Tweet button is clicked, log out an object
//    for a new tweet. Make sure you include the text of 
//    the tweet (how can you get that?) and a unique 
//    identifier using uuidjs.
   
//    The handle @Scrimba (or whatever you prefer) and 
//    the profile pic scrimbalogo.png can be hard-coded.
// */ 
// }

// function getFeedHtml(){
//     let feedHtml = ``
    
//     tweetsData.forEach(function(tweet){
        
//         let likeIconClass = ''
        
//         if (tweet.isLiked){
//             likeIconClass = 'liked'
//         }
        
//         let retweetIconClass = ''
        
//         if (tweet.isRetweeted){
//             retweetIconClass = 'retweeted'
//         }
        
//         let repliesHtml = ''
        
//         if(tweet.replies.length > 0){
//             tweet.replies.forEach(function(reply){
//                 repliesHtml+=`
// <div class="tweet-reply">
//     <div class="tweet-inner">
//         <img src="${reply.profilePic}" class="profile-pic">
//             <div>
//                 <p class="handle">${reply.handle}</p>
//                 <p class="tweet-text">${reply.tweetText}</p>
//             </div>
//         </div>
// </div>
// `
//             })
//         }
        
          
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comment-dots"
//                     data-reply="${tweet.uuid}"
//                     ></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart ${likeIconClass}"
//                     data-like="${tweet.uuid}"
//                     ></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet ${retweetIconClass}"
//                     data-retweet="${tweet.uuid}"
//                     ></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
//     <div class="hidden" id="replies-${tweet.uuid}">
//         ${repliesHtml}
//     </div>   
// </div>
// `
//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()





/* Challenge: Add the new tweet object to 'TweetsData' */




// import { tweetsData } from './data.js'
// import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

// const tweetInput = document.getElementById('tweet-input')

// document.addEventListener('click', function(e){
//     if(e.target.dataset.like){
//        handleLikeClick(e.target.dataset.like) 
//     }
//     else if(e.target.dataset.retweet){
//         handleRetweetClick(e.target.dataset.retweet)
//     }
//     else if(e.target.dataset.reply){
//         handleReplyClick(e.target.dataset.reply)
//     }
//     else if(e.target.id === 'tweet-btn'){
//         handleTweetBtnClick()
//     }
// })
 
// function handleLikeClick(tweetId){ 
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]

//     if (targetTweetObj.isLiked){
//         targetTweetObj.likes--
//     }
//     else{
//         targetTweetObj.likes++ 
//     }
//     targetTweetObj.isLiked = !targetTweetObj.isLiked
//     render()
// }

// function handleRetweetClick(tweetId){
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]
    
//     if(targetTweetObj.isRetweeted){
//         targetTweetObj.retweets--
//     }
//     else{
//         targetTweetObj.retweets++
//     }
//     targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
//     render() 
// }

// function handleReplyClick(replyId){
//     document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
// }

// function handleTweetBtnClick(){
// /*
// Challenge:
// 1. Add the new tweet object to 'tweetsData'
//    and make it render at the top of the feed. 
// */ 

// /* Note: I used the push() method, but if you 
// want the object to appear at the top
// of the feed, you need to use "unshift" */

//     tweetsData.unshift({
//         handle: `@Scrimba`,
//         profilePic: `images/scrimbalogo.png`,
//         likes: 0,
//         retweets: 0,
//         tweetText: tweetInput.value,
//         replies: [],
//         isLiked: false,
//         isRetweeted: false,
//         uuid: uuidv4()
//     })
//     render()
// }

// function getFeedHtml(){
//     let feedHtml = ``
    
//     tweetsData.forEach(function(tweet){
        
//         let likeIconClass = ''
        
//         if (tweet.isLiked){
//             likeIconClass = 'liked'
//         }
        
//         let retweetIconClass = ''
        
//         if (tweet.isRetweeted){
//             retweetIconClass = 'retweeted'
//         }
        
//         let repliesHtml = ''
        
//         if(tweet.replies.length > 0){
//             tweet.replies.forEach(function(reply){
//                 repliesHtml+=`
// <div class="tweet-reply">
//     <div class="tweet-inner">
//         <img src="${reply.profilePic}" class="profile-pic">
//             <div>
//                 <p class="handle">${reply.handle}</p>
//                 <p class="tweet-text">${reply.tweetText}</p>
//             </div>
//         </div>
// </div>
// `
//             })
//         }
        
          
//         feedHtml += `
// <div class="tweet">
//     <div class="tweet-inner">
//         <img src="${tweet.profilePic}" class="profile-pic">
//         <div>
//             <p class="handle">${tweet.handle}</p>
//             <p class="tweet-text">${tweet.tweetText}</p>
//             <div class="tweet-details">
//                 <span class="tweet-detail">
//                     <i class="fa-regular fa-comment-dots"
//                     data-reply="${tweet.uuid}"
//                     ></i>
//                     ${tweet.replies.length}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-heart ${likeIconClass}"
//                     data-like="${tweet.uuid}"
//                     ></i>
//                     ${tweet.likes}
//                 </span>
//                 <span class="tweet-detail">
//                     <i class="fa-solid fa-retweet ${retweetIconClass}"
//                     data-retweet="${tweet.uuid}"
//                     ></i>
//                     ${tweet.retweets}
//                 </span>
//             </div>   
//         </div>            
//     </div>
//     <div class="hidden" id="replies-${tweet.uuid}">
//         ${repliesHtml}
//     </div>   
// </div>
// `
//    })
//    return feedHtml 
// }

// function render(){
//     document.getElementById('feed').innerHTML = getFeedHtml()
// }

// render()






/* Challenge: No Empty Tweets and Clear Text Area After Tweeting */




import { tweetsData } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

/*
Challenge:
3. We could improve index.js by moving one line
   of code to a better position. Find it and move it!
*/

const tweetInput = document.getElementById('tweet-input') // This is the line, we're going to
// move it to the function where it's being used.

document.addEventListener('click', function(e){
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like) 
    }
    else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
    else if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply)
    }
    else if(e.target.id === 'tweet-btn'){
        handleTweetBtnClick()
    }
})
 
function handleLikeClick(tweetId){ 
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isLiked){
        targetTweetObj.likes--
    }
    else{
        targetTweetObj.likes++ 
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    render()
}

function handleRetweetClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    
    if(targetTweetObj.isRetweeted){
        targetTweetObj.retweets--
    }
    else{
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
    render() 
}

function handleReplyClick(replyId){
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}

function handleTweetBtnClick(){
    const tweetInput = document.getElementById('tweet-input')
/*
Challenge:
1. No empty tweets!
2. Clear the textarea after tweeting!
*/

    // console.log(tweetInput.value) // returns an empty string

    // so, we need to check if there is text in the text area and
    // we can do that, like this:

    if(tweetInput.value){
        tweetsData.unshift({
            handle: `@Scrimba`,
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
        render()
    // Now we have to clear the textarea, so we do this:
        tweetInput.value = ''
    }
}

function getFeedHtml(){
    let feedHtml = ``
    
    tweetsData.forEach(function(tweet){
        
        let likeIconClass = ''
        
        if (tweet.isLiked){
            likeIconClass = 'liked'
        }
        
        let retweetIconClass = ''
        
        if (tweet.isRetweeted){
            retweetIconClass = 'retweeted'
        }
        
        let repliesHtml = ''
        
        if(tweet.replies.length > 0){
            tweet.replies.forEach(function(reply){
                repliesHtml+=`
<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="${reply.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${reply.handle}</p>
                <p class="tweet-text">${reply.tweetText}</p>
            </div>
        </div>
</div>
`
            })
        }
        
          
        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${tweet.uuid}"
                    ></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}"
                    data-like="${tweet.uuid}"
                    ></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}"
                    data-retweet="${tweet.uuid}"
                    ></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
    <div class="hidden" id="replies-${tweet.uuid}">
        ${repliesHtml}
    </div>   
</div>
`
   })
   return feedHtml 
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()