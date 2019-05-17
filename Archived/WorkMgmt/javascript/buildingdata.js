$(document).ready(function(){
  var template = $('#building-template').html();
  Mustache.parse(template);

  var rendered = Mustache.render(template, {
    building: [
        {
            BuildingNum: "1226", 
            ReplacementValue: "$1,200,000.00", 
            SquareFootage: "20,000"
        }, 
        {
            BuildingNum: "2450", 
            ReplacementValue: "$8,200,000.00", 
            SquareFootage: "50,000"
        }
    ]
  })
  $("#buildingInfo").html(rendered);
});
