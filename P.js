$(function(){

    //마우스 움직임
    // $(document).mousemove(function(event){
    //     let dx = event.pageX
    //     let dy = event.pageY
    //     $(".coords_x").html(dx)
    //     $(".coords_y").html(dy)
    
    
    //        let cx =event.clientX
    //        let cy =event.clientY
    //        $(".coords_x2").html(cx)
    //        $(".coords_y2").html(cy) 
    
    //        $(".mouse").css("left",cx-30)
    //        $(".mouse").css("top",cy-50)
    
    //    })

    //    배너버튼
    

     $(".banner>span").click(function(){
        $(".B_1").addClass("on")
        $(".B_2").addClass("on")
     })

     $(".close1").click(function(){
        $(".B_1").removeClass("on")
     })

     $(".close2").click(function(){
        $(".B_2").removeClass("on")
     })


    //  profile버튼
    let boxState = "닫힘"

     $(".TML").click(function(){
        if(boxState=="닫힘"){
            $(".TML").addClass("on")
            boxState = "열림"
        }else{
            $(".TML").removeClass("on")
            boxState = "닫힘"
        }
    })
    $(".SS3").click(function(){
        if(boxState=="닫힘"){
            $(".SS3").addClass("on")
            boxState = "열림"
        }else{
            $(".SS3").removeClass("on")
            boxState = "닫힘"
        }
    })
    $(".AVA").click(function(){
        if(boxState=="닫힘"){
            $(".AVA").addClass("on")
            boxState = "열림"
        }else{
            $(".AVA").removeClass("on")
            boxState = "닫힘"
        }
    })
    $(".QUR").click(function(){
        if(boxState=="닫힘"){
            $(".QUR").addClass("on")
            boxState = "열림"
        }else{
            $(".QUR").removeClass("on")
            boxState = "닫힘"
        }
    })
    $(".AI").click(function(){
        if(boxState=="닫힘"){
            $(".AI").addClass("on")
            boxState = "열림"
        }else{
            $(".AI").removeClass("on")
            boxState = "닫힘"
        }
    })
    $(".PS").click(function(){
        if(boxState=="닫힘"){
            $(".PS").addClass("on")
            boxState = "열림"
        }else{
            $(".PS").removeClass("on")
            boxState = "닫힘"
        }
    })
    
    // 팝업


    $(window).scroll(function(){
        sct = $(window).scrollTop()
        let scrollBoxTop = $(".scrollBox2").offset().top
        let distance = sct - scrollBoxTop
        let scrollBoxHeight = $(".scrollBox2").height()
        let elvHeight = $(".elv2").height()
        let aniEnd = scrollBoxHeight - elvHeight
        let per = distance/aniEnd
        let per100 = per*100 //0~130
        let perTrain = per*83.5

        if(distance<0){
            console.log("도달하지못함")
            $(".elv2").removeClass("fixed")
            $(".elv2").removeClass("bottom")
        }
        if(distance>=0 && distance<aniEnd){
            console.log("중간지점 안에 있는 상태")
            $(".elv2").removeClass("bottom")
            $(".elv2").addClass("fixed")
            console.log(per)
            $(".orangee>.a").attr("r",30+per100)
            $(".train").css("transform",`translateX(-${perTrain}%)`)
        }
        if(distance>=aniEnd){
            console.log("벗어난상태임")
            $(".elv2").removeClass("fixed")
            $(".elv2").addClass("bottom")
        }

        
        // 문제

        $(".t_p").click(function(){
            $(".train_p").css("transform",`translateX(-50.25%)`)
        })

        $(".sc_p").click(function(){
            $(".train_p").css("transform",`translateX(0%)`)
        })
    
       
    })

    //스크롤 탑
    $(".intro,.profile,.program").on("wheel DOMMouseScroll",function(event){
        // event는 사용자의 행동정보를 담고있는 객체
       let E = event.originalEvent
       let delta = 0  
       if(E.detail){
        // 파폭
        delta = E.detail * -40
       }else{
        // 크롬,익스
        delta = E.wheelDelta
       }
    
     
     if(delta<0){
        // 휠을 아래로 굴렸다
       let posTop = $(this).next().offset().top
       $("html,body").stop().animate({scrollTop:posTop},1000)
       $(".wrap>div").removeClass("on")
       $(this).next().addClass("on")
       }else{
        // 휠을 위로 굴렸다
        let posTop = $(this).prev().offset().top
        $("html,body").stop().animate({scrollTop:posTop},1000)
        $(".wrap>div").removeClass("on")
        $(this).prev().addClass("on")
       }
       return false
    })

    

    $( '.top' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 1000 );
        return false;
    } );

  // 마우스 효과

  
})