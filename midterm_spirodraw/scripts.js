$(document).ready(function(){
  $("#circle-size").attr("value", Math.floor(windowHeight/4)).attr("min", Math.floor(windowHeight/10)).attr("max", Math.floor(windowHeight));
  $("#text-base").text(Math.floor(windowHeight/4));
  $("#speed").on("change mousemove",function(){
    fund = $(this).val()/1000;
    var val = parseFloat($(this).val());
    val = val.toFixed(1);
    $("#text-speed").text(val);
    
  })
  $("#point-size").on("change mousemove",function(){
    pointRad = $(this).val()/2;
    var val = parseFloat($(this).val());
    val = val.toFixed(1);
    $("#text-brush").text(val);
  })
  $("#circle-size").on("change mousemove",function(){
    rad = $(this).val();
    var val = parseFloat($(this).val());
    val = val.toFixed(1);
    $("#text-base").text(val);
  })
  $("#speed-ratio").on("change mousemove", function(){
    ratio = $(this).val() / 10;
    var val = parseFloat($(this).val());
    val = val.toFixed(1);
    $("#text-ratio").text(val);
  })
  $("#circle-num").on("change mousemove", function(){
    NUMSINES = $(this).val();
    var sineDif = NUMSINES - sines.length;
    if(sineDif >0 ){
      for(var j = 0; j < sineDif; j++){
        sines.push(PI);
      }
    }
    else{
      for(var j = 0; j < -sineDif; j++){
        sines.pop();
      }
    }
    var val = parseFloat($(this).val());
    val = val.toFixed(1);
    $("#text-num").text(val);
  })
  $("#go").on("click", function(){
    go();
  })
})
