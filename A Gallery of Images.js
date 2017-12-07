

let imageArray = [
    "",
    
];

var loopCount = imageArray.lenght;

for (var i = 0; i < loopCount; i = i + 1) {
    
    var imageTag = "<img src=\"images/" + imageArrray[i] + "\" width=\"200\" height=\"150\">";
    
    var linkImage ="<a href=\"images/" + imageArrray[i] + "  \">" + imageTag + "</a>";
    
    var htmlListItem = "<li>" + linkImage + "</li>";
    
    
    $("body").css("background-color", "black");
    
    $("#mainbox").append(htmlListItem);
    
    
}
