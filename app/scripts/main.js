



var svgInit = function () {

    // Creates circle at x = 50, y = 40, with radius 10
var circle = paper.circle(0, 40, 10);
// Sets the fill attribute of the circle to red (#f00)
circle.attr("fill", "#f00");

// Sets the stroke attribute of the circle to white
circle.attr("stroke", "#fff");

};



var oneMoreTweet = function(data) {

    
    //RenderTweet(data.text);


       // $('body').append(template(data));

}

var RenderTweet = function(dataText) {
    var infos = d3.select('body').append('div')
                .data(dataText)
                
               

    var p = infos.append('p');

    p.attr('class','tweet').text(dataText);
};


// Creates canvas 320 × 200 at 10, 50

var paper = Raphael('holder');

svgInit();