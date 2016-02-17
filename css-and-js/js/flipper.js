$(document).ready(function() {
    var currentLetter = 'L';
    $(".outerLetter.current").data("currentLetter", currentLetter);
    $(".outerLetter.current").attr("data-currentLetter", currentLetter);
    $(".outerLetter.current").find(".half .letter").html(currentLetter);
    $(".outerLetter.current").attr("id", currentLetter);
    
    $("body").click(function() {
        addLetter();
    });

});

function addLetter() {
    
    var options = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
    newGenLetter = options[Math.floor(Math.random() * options.length)];
    $(".outerLetter.new").remove();
    $(".outerLetter.current").clone().removeClass("current").addClass("new").appendTo(".letterContainer");
    
    var _this = $(".letterContainer").find(".new");
    //console.log($(_this));
    $(_this).data("currentLetter", newGenLetter);
    $(_this).attr("data-currentLetter", newGenLetter);
    $(_this).attr("id", newGenLetter);
    $(_this).find(".half .letter").html(newGenLetter);


    flipLetter(newGenLetter);

   

}

function flipLetter(newLetter) {
    console.log('letterFlip');
    var letters = [{
        character: 'K',
        zindex: 0,
        progress:100
    }];

    var index;

    
    letters.unshift({
        character: newLetter,
        zindex: 0
    });

    
    

    var total = letters.length;

    for (var i = letters.length - 1; i >= 0; i--) 
    {
        var progress, top, bottom, zindex;
        letters[i].index = i;
        letters[i].zindex = i;
        letters[i].progress = 0;
        zindex = letters[i].zindex;

        $(".flipper").css("z-index", "100"+zindex);

        if ((total - 1) === letters[i].index) {
            progress = 100;
            top = 0;
            bottom = 0;

            console.log("if "+progress);
            
            
        } else {
            progress = 0;
            top = 0;
            bottom = 90;

            console.log("else " + progress);
            
        }
       addNewLetter(newLetter, zindex, letters, total, progress, top, bottom, letters[i]); 
    }
    
    console.log(letters);

}

function addNewLetter(newLetter, zindex, letters, total, progress, top, bottom, letter){
        var total = total;
        var progress = progress;
        var top = top;
        var bottom = bottom;
        var letters = letters;
        var zindex = zindex;
        var newLetter = newLetter;


        if (progress == 0){ 
            $(".new .top").css("transform", "rotateX(" + top + "deg)");
            $(".new .bottom").css("transform", "rotateX(" + bottom + "deg)");

            TweenLite.to(letter, 0.5, {
                'progress': 100,
                delay: 0.5,
                onComplete: checkStatus(top, bottom, zindex),
                onUpdate: tick(),
                onUpdateParams:[newLetter],
                ease: Power4.easeOut
            }) 
        }

        function checkStatus() {

        console.log("---------------checkStatus");

            if (zindex != 0 && progress == 100) {
                

                TweenLite.to(".new .letter", 0.5, {
                    'progress': 200,
                    onComplete: end(),
                    onUpdate: tick(),
                    onUpdateParams:[newLetter],
                    ease: Power4.easeIn
                });

            }
            console.log("---------------end checkStatus");
        }

        function end() {
            console.log("---------------end");
            zindex = zindex - 2;
            
            window.setTimeout(function() {
                $(".current .flipper").css("z-index", "100"+zindex);
                console.log('I (' + newLetter + ') have animated out');
                removeLetter(zindex, newLetter);
                
            }, 0.5 * 1000);
        }

        checkStatus();

        function tick() {
            console.log("---------------tick");

            if (progress == 100) {
                top = 0;
                bottom = 0;
                console.log("progress = 100");
                $(" .top").css("transform", "rotateX(" + top + "deg)");
                $(".new .bottom").css("transform", "rotateX(" + bottom + "deg)");
                return;
            }
            if (progress > 100) {
                top = 0 - (((progress - 100) / 100) * 90);
                console.log("progress > 100)");
                $(".new .top").css("transform", "rotateX(" + top + "deg)");
            
            }
            if (progress < 100) {
                bottom = 90 - ((progress / 100) * 90);
                console.log("progress < 100");

                $(".new .bottom").css("transform", "rotateX(" + bottom + "deg)");
            }


            
            

            // $(".new .top").css("transform", "rotateX(" + 0 + "deg)");
            // $(".new .bottom").css("transform", "rotateX(" + 0 + "deg)");
            // $(".new .flipper").css("z-index", "100"+zindex);

        }

        function removeLetter(zindex, newLetter){
            letters.splice(zindex, 1);
            $(".outerLetter.current").data("currentLetter", newLetter);
            $(".outerLetter.current").attr("data-currentLetter", newLetter);
            $(".outerLetter.current").find(".half .letter").html(newLetter);
            $(".outerLetter.current").attr("id", newLetter);
            // $(".letterContainer").find(".new").removeClass("new");
            // $(".outerLetter:not(.new)").addClass("old");

        }

        
    }