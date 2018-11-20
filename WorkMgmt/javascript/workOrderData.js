$(document).ready(function(){
  var template = $('#workorder-template').html();
  Mustache.parse(template);

  var rendered = Mustache.render(template, {
    workorder: [
        {
            WONum: "00001", 
            BuildingNum: "1226", 
            ResponsibleShop: "HVAC",
            RequestDate: '01 May 2018'
        }, 
        {
            WONum: "00002", 
            BuildingNum: "2450", 
            ResponsibleShop: "Electric",
            RequestDate: '01 Aug 2018'
        },
        {
            WONum: "00003", 
            BuildingNum: "1226", 
            ResponsibleShop: "HVAC",
            RequestDate: '23 July 2018'
        }
    ]
  })
  $("#workOrders").html(rendered);
});
