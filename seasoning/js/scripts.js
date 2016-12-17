var currentSeason = 'summer';
var scrollDistance = 0;
$(document).on('click', function(){
    $('h1').animate({
        opacity: 0
    }, 1000)
    $('.sun').animate({
        marginLeft: "29vmax",
        marginTop: "29vmax"
    },1000).animate({
        opacity: 0
    },10).animate({
        marginLeft: "-29vmax",
        marginTop: "-29vmax"
    },10).animate({
        opacity: 100,
        marginLeft: "0vmax",
        marginTop: "0vmax"
    },1000)
        $('.rays').animate({
            marginLeft: "29vmax",
            marginTop: "29vmax"
        },1000).animate({
            opacity: 0,
        }, 10).animate({
            marginTop: "-29vmax",
            marginLeft: "-29vmax"
        }, 10).animate({
            opacity: 100,
            marginLeft: 0,
            marginTop: 0
        }, 1000);
        if(currentSeason == "summer"){
            scrollDistance = 0;
            toFall();
        }
        else if(currentSeason == "fall"){
            scrollDistance = 0;
            console.log('no');
            toWinter();
        }
        else if(currentSeason == "winter"){
            scrollDistance = 0;
            toSpring();
        }
        else{
            toSummer();
        }
});

function toFall(){
    $('.flower').remove();
    currentSeason = "fall";
    $('.container').delay(2000).animate({
                backgroundColor: "#b7e9e9"
            }, 2000)
    $('.graphic').each(function(){
        if($(this).attr("id") == "grass"){
            console.log('yes');
            $(this).animate({
                backgroundColor: "#92b55e"
            },1000);
        }
        else if($(this).attr("id") == "leaves"){
            console.log('yes');
            $(this).delay(1000).animate({
                backgroundColor: "#dc4e19"
            }, 1000)
        }
        else if($(this).attr("id") == "cloud"){
            $(this).delay(500).animate({
                marginLeft: "50vw",
                marginTop: "10vh"
            }, 3000)
        }
        else if($(this).attr("id") == "sun"){
            $(this).delay(1000).animate({
                width: "-=1vmax",
                height: "-=1vmax"
            }, 1000)
        }
        else if($(this).attr("id") =="rays"){
            $(this).delay(1000).animate({
                width: "-=1vmax",
                height: "-=1vmax"
            }, 1000)
        }
    });
    for(var i = 0; i < 30; i++){
        $('.container').append("<div class='graphic leaf'></div>")
    }
    $('.leaf').each(function(){
        $(this).css("-webkit-transform", "rotate(" + Math.floor(Math.random()*360) + "deg)")
        $(this).css("margin-left", Math.random()*10 + "vw");
        $(this).css("margin-top", Math.random()*100 + "px")
        $(this).delay(2000).animate({
            opacity: 100
        },10).delay(Math.random()*10000).animate({
            marginTop: "+=40vh"
        },1000).delay(Math.random()*4000).animate({
            opacity: 0
        })
    })
    
};
                      
function toWinter(){
    $('.leaf').remove();
    currentSeason = "winter";
    $('.container').delay(2000).animate({
                backgroundColor: "#cae3e3"
            }, 2000)
    $('.graphic').each(function(){
        if($(this).attr("id") == "grass"){
            console.log('yes');
            $(this).animate({
                backgroundColor: "#b6c9bf"
            },1000);
        }
        else if($(this).attr("id") == "leaves"){
            console.log('yes');
            $(this).delay(1000).animate({
                opacity: 0
            }, 2000)
        }
        else if($(this).attr("id") == "cloud"){
            $(this).delay(500).animate({
                marginLeft: "40vw",
                marginTop: "-5vh",
            }, 3000)
        }
        else if($(this).attr("id") == "cloud2"){
            $(this).delay(1000).animate({
                backgroundColor: "white",
                marginLeft: "-10vw",
                marginTop: "-5vh",
                opacity: 100
            }, 4000)
        }
        else if($(this).attr("id") == "sun"){
            $(this).delay(1000).animate({
                width: "-=1vmax",
                height: "-=1vmax"
            }, 1000)
        }
        else if($(this).attr("id") =="rays"){
            $(this).delay(1000).animate({
                width: "-=1vmax",
                height: "-=1vmax",
                opacity: "50%"
            }, 1000)
        }
    });
    for(var i = 0; i < 100; i++){
        $('.container').append("<div class='graphic snowflake'></div>")
    }
    $('.snowflake').each(function(){
        $(this).css("-webkit-transform", "rotate(" + Math.floor(Math.random()*360) + "deg)")
        $(this).css("margin-left", Math.random()*40 + "vw");
        $(this).css("margin-top", Math.random()*100 + "px")
        $(this).delay(4000).animate({
            opacity: 100
        },10).delay(Math.random()*10000).animate({
            marginTop: "+=70vh"
        },1000).delay(Math.random()*4000).animate({
            opacity: 0
    });
    })
    
};
function toSpring(){
    $('.snowflake').remove();   
    currentSeason = "spring";
    $('.container').delay(2000).animate({
                backgroundColor: "#a1e0f0"
            }, 2000)
    $('.graphic').each(function(){
        if($(this).attr("id") == "grass"){
            console.log('yes');
            $(this).animate({
                backgroundColor: "#a5d435"
            },1000);
        }
        else if($(this).attr("id") == "leaves"){
            console.log('yes');
            $(this).animate({
                backgroundColor: "#70d21a"
            }, 1000).delay(1000).animate({
                opacity: 100
            },2000)
        }
        else if($(this).attr("id") == "cloud"){
            $(this).delay(500).animate({
                marginLeft: "30vw",
                marginTop: "0vh",
                backgroundColor: "#aaa"
            }, 3000)
        }
        else if($(this).attr("id") == "cloud2"){
            $(this).delay(1000).animate({
                marginLeft: "0vw",
                marginTop: "4vh",
                backgroundColor: "#aaa"
            }, 4000)
        }
        else if($(this).attr("id") == "sun"){
            $(this).delay(1000).animate({
                width: "+=1vmax",
                height: "+=1vmax"
            }, 1000)
        }
        else if($(this).attr("id") =="rays"){
            $(this).delay(1000).animate({
                width: "+=1vmax",
                height: "+=1vmax",
                opacity: "100"
            }, 1000)
        }
    });
    for(var i = 0; i < 100; i++){
        $('.container').append("<div class='graphic raindrop'></div>")
    }
    $('.lightningbolt').delay(5000).animate({
            opacity: 100
        }, 300).delay(100).animate({
            opacity: 0
    }, 300).delay(1000).animate({
        
            marginLeft: "+=15vw"
    },10).animate({
            opacity: 100
    }, 300).delay(100).animate({
            opacity: 0
    },300)
    $('.raindrop').each(function(){
        $(this).css("margin-left", Math.random()*40 + "vw");
        $(this).css("margin-top", Math.random()*100 + "px")
        $(this).delay(4000).animate({
            opacity: 100
        },10).delay(Math.random()*10000).animate({
            marginTop: "+=70vh"
        },1000).delay(Math.random()*4000).animate({
            opacity: 0
    });
    })
};
function toSummer(){
    $('.raindrop').remove();
    currentSeason = "summer";
    $('.container').delay(2000).animate({
                backgroundColor: "#72d9e9"
            }, 2000)
    $('.graphic').each(function(){
        if($(this).attr("id") == "grass"){
            console.log('yes');
            $(this).animate({
                backgroundColor: "#29c213"
            },1000);
        }
        else if($(this).attr("id") == "leaves"){
            console.log('yes');
            $(this).delay(1000).animate({
                backgroundColor: "#2c9108"
            }, 2000)
        }
        else if($(this).attr("id") == "cloud"){
            $(this).delay(500).animate({
                marginLeft: "0",
                marginTop: "0",
                backgroundColor: "white"
            }, 3000)
        }
        else if($(this).attr("id") == "cloud2"){
            $(this).delay(1000).animate({
                opacity: 0
            }, 4000)
        }
        else if($(this).attr("id") == "sun"){
            $(this).delay(1000).animate({
                width: "+=1vmax",
                height: "+=1vmax"
            }, 1000)
        }
        else if($(this).attr("id") =="rays"){
            $(this).delay(1000).animate({
                width: "+=1vmax",
                height: "+=1vmax"
            }, 1000)
        }
    });
    for(var i = 0; i < 100; i++){
        $('.container').append("<div class='graphic flower'></div>")
    }
    $('.flower').each(function(){
        $(this).css("-webkit-transform", "rotate(" + Math.floor(Math.random()*360) + "deg)")
        $(this).css("margin-left", Math.random()*95 + "vw");
        $(this).css("margin-top", Math.random()*30 + "vh");
        $(this).css("background-color", "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + ")")
        $(this).delay(Math.floor(Math.random()*10000)).animate({
            opacity: 100,
            height: "2vw",
            width: "2vw"
        },4000)
    });
};