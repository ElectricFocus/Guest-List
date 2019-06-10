var friends=[];
$('.addButton').click(function() {
var input = $(".guestName").val();
friends.push(input);
$(".guestList").append("<li>" + input + "</li>");
console.log(friends.length);

});