// variables
var index = 0;

var urlsNb = 0;
var hashtags = 0;
var reply = 0;
var retweet = 0;
var geo = 0;
var replytoUser = 0;

var urlsNbperCent = 0;
var hashtagsperCent = 0;
var replyperCent = 0;
var retweetperCent = 0;
var geoperCent = 0;
var replytoUserperCent = 0;

var mostRT = 0;
// svgInit();



var urls;
var hash;
var replys;
var rt;

var Alldata = [];


// that function is launched from index.html when a tweet is streamed

var oneMoreTweet = function(data) {

    $('#rt').empty();
    $('#hash').empty();
    $('#urls').empty();

    Alldata.push(data.text);
   
    index += 1;

    particleArray.push(new Particle(0, Math.floor((Math.random() * SCREEN_HEIGHT) + 1, index)));



    if (data.entities.urls.length > 0) {
        urlsNb += 1;
        urlsNbperCent = parseInt(urlsNb * 100 / index);
        }

    if (data.entities.hashtags.length > 0) {
        hashtags += 1;
        hashtagsperCent = parseInt(hashtags * 100 / index);
       }

    if (data.entities.user_mentions > 0) {
        reply += 1;
        replyperCent = parseInt(reply * 100 / index);
       }


    if (data.in_reply_to_user_id) {
        replytoUser += 1;
        replytoUserperCent = parseInt(replytoUser * 100 / index);
       }


    if (data.retweeted_status) {
        if (data.retweeted_status.retweet_count > mostRT) {
            console.log(data.retweeted_status.retweet_count);
            mostRT = data.retweeted_status.retweet_count;
            $('#most').text(data.text);
            $('#rtWith').text("WITH " + data.retweeted_status.retweet_count + " RT");

        }
        retweet += 1;
        retweetperCent = parseInt(retweet * 100 / index);
    }

    if (data.place) {
        geo += 1;
        geoperCent = parseInt(geo * 100 / index);
    }



  // Update Graphic Pies and Percent Text

    rt = new Raphael('rt');
    rt.piechart(120, 120, 50, [100 - retweetperCent, retweetperCent], {
        colors: ['#522B52', '#F7DEEB'],
        minPercent: 1
    });

    $('#titlert').text("RT : " + retweetperCent + " %");

    hash = new Raphael('hash');
    hash.piechart(120, 120, 50, [100 - hashtagsperCent, hashtagsperCent], {
        colors: ['#522B52', '#F7DEEB'],
        minPercent: 1
    });

    $('#titleHash').text("#HASHTAG : " + hashtagsperCent + " %");


    urls = new Raphael('urls');
    urls.piechart(120, 120, 50, [100 - urlsNbperCent, urlsNbperCent], {
        colors: ['#522B52', '#F7DEEB'],
        minPercent: 2
    });


    $('#titleurls').text("URLS : " + urlsNbperCent + " %");


}