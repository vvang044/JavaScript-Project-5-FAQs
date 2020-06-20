//traversing the dom

// const btns = document.querySelectorAll('.question-btn');
// //loop over

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(event){
//      //   console.log(event.currentTarget.parentElement.parentElement);
//         //parent of parent

//         const question = event.currentTarget.parentElement.parentElement

//         question.classList.toggle('show-text');

//     })

// })

//second option using selectors

const questions = document.querySelectorAll('.question');

questions.forEach(function(ques){
    console.log(ques);
    //will get all articles

const btn = ques.querySelector('.question-btn');
    console.log(btn);

btn.addEventListener('click', function(){
    ques.classList.toggle('show-text');
})
})
