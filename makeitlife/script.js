$(function(){

    // Monster Class
    class Monster{
        constructor(soul) {
            this.soul = soul;
          }
        
        static summonMonster(emotion){
            let append = "<div class='monster'><img src='img/"+emotion+".png'></div>";
            $(".monster-area").append(append)
             }
        
        static summonWolf(){
            let append = "<div class='wolf'><img src='img/wolf.jpeg' class='wolfimg'></div>";
            $(".monster-area").append(append)
        }

    }
    
    
    function getEmotion(){
      var number, emotName;
      number = Math.floor(Math.random() * 1000) + 1;
      number = number%5

      if (number === 0) {
        emotName = "sad"
      }
      else if(number === 1){
        emotName = "bigSad"
      }
      else if(number === 2){
        emotName = "angry"
      }
      else if(number === 3){
        emotName = "anger"
      }
      else{
        emotName = "sick"
      }
      return Monster.summonMonster(emotName);
    }

    // Rotate Animation
    $.fn.animateRotate = function(angle, duration, easing, complete) {
      var args = $.speed(duration, easing, complete);
      var step = args.step;
      return this.each(function(i, e) {
        args.complete = $.proxy(args.complete, e);
        args.step = function(now) {
          $.style(e, 'transform', 'rotate(' + now + 'deg)');
          if (step) return step.apply(e, arguments);
        };

        $({deg: 0}).animate({deg: angle}, args);
        });
      };


    $("#summon").on({
      click: function() {getEmotion()},

      dblclick: function () { 
        if ($('.btn-wolf').length === 0) {
          let append = "<button class='btn-wolf'><b>Roarrr</b></button>";
        $(".wolf-button-area").append(append)
        } else {
          getEmotion()
        }     
      }
    })


    $(document).on('click', '.btn-wolf', function(){
      $('.monster').animateRotate(360, {
        duration: 1337,
        easing: 'linear',
        complete: function () {},
        step: function () {}
      });
    })

    $(document).on('dblclick', '.btn-wolf', function(){
      Monster.summonWolf()
    })

    $(document).on('mouseleave', '.btn-wolf', function(){
      alert("GRRR")     
    })

    $(document).on('mouseenter', '.wolfimg', function(){
      if ($(this).attr('src') === "img/wolf.jpeg") {
        $(this).attr('src', 'img/angrywolf.jpeg');
      } else {
        $(this).attr('src', 'img/angerwolf.jpg');
      }
    })

    $(document).on('mouseleave', '.wolfimg', function(){
      $(this).attr('src', 'img/angrywolf.jpeg');
    })

  })
