$(document).ready(function() {

    // var options = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
    
    // $("body").click(function() {
    //     var newGenLetter = options[Math.floor(Math.random() * options.length)];
    //     lettersGen(newGenLetter);
    //     //console.log("body click"+ newGenLetter);
    // });

});


// var letters = [];
// var nextID = 0;

// function lettersGen(newLetter)
// {
//     nextID++;
//     letters.unshift({
//         id: nextID,
//         letter: newLetter,
//         progress: !letters.length ? 100 : 0
//     });

//     for (var i = letters.length - 1; i >= 0; i--) 
//     {
//         $(".outerLetter .board .letter").html(letters[i].letter);

//         TweenLite.to(letters[i], 0.5, {
//                 'progress': (i == 0 ? 100 : 200),
//                 delay: 0.5,
//                 onComplete: checkStatus(letters[i]),
//                 onUpdate: tick(letters[i]),
//                 ease: Power4.easeOut
//             })

//     }

//     console.log(letters);
// }

// function tick(letter)
// {
//     console.log(letter.progress);
//     //$('#'+ letter.id).css();
//     if (letter.progress == 100) {
//         top = 0;
//         bottom = 0;
//         console.log("progress = 100");
//         $(".new .top").css("transform", "rotateX(" + top + "deg)");
//         $(".new .bottom").css("transform", "rotateX(" + bottom + "deg)");
        
//     }
//     if (letter.progress > 100) {
//         top = 0 - (((letter.progress - 100) / 100) * 90);
//         console.log("progress > 100)");
//         $(".new .top").css("transform", "rotateX(" + top + "deg)");
    
//     }
//     if (letter.progress < 100) {
//         bottom = 90 - ((letter.progress / 100) * 90);
//         console.log("progress < 100");

//         $(".new .bottom").css("transform", "rotateX(" + bottom + "deg)");
//     }
    
// }

// function checkStatus(letter)
// {
//     console.log(letter);
//     if (letter.progress == 100) {
//         TweenLite.to(letter, 0.5, {
//             'progress': 200,
//             onComplete: end(letter),
//             onUpdate: tick(letter),
//             ease: Power4.easeIn
//         });

//     }
    
//     //remo
// }

// function end(letter) {
//     console.log("---------------end");
    
//     window.setTimeout(function() {
        
        
//         removeLetter(letter);
        
//     }, 0.5 * 1000);
// }

    

// function removeLetter(letter){
//     if(letter.progress === 200) letters.splice(letter);
//     // $(".outerLetter.current").data("currentLetter", newLetter);
//     // $(".outerLetter.current").attr("data-currentLetter", newLetter);
//     // $(".outerLetter.current").find(".half .letter").html(newLetter);
//     // $(".outerLetter.current").attr("id", newLetter);
//     // $(".letterContainer").find(".new").removeClass("new");
//     // $(".outerLetter:not(.new)").addClass("old");

// }