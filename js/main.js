$(document).ready(function () {
    var currentFloor=2;
    var usCurrentFloor=2;
    var floorPath=$(".home-image path");
    var counter=$(".counter");
    var arrowUp=$(".arrow-up");
    var arrowDown=$(".arrow-down");

    floorPath.on("mouseover",function(){
        floorPath.removeClass("current-floor");
        currentFloor=$(this).attr("data-floor");
        counter.text(currentFloor);
    });

    arrowUp.on("click",function(){
        if (currentFloor < 18){
            currentFloor++;
            usCurrentFloor=currentFloor.toLocaleString('en-Us',{minimumIntegerDigits:2,useGrouping:false});
            counter.text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
    
    arrowDown.on("click",function(){
        if (currentFloor > 2){
            currentFloor--;
            usCurrentFloor=currentFloor.toLocaleString('en-Us',{minimumIntegerDigits:2,useGrouping:false});
            counter.text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
});