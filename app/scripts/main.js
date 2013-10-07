

var index = 0;
var urlsNb =0;
var hashtags = 0;
var reply=0;
var retweet =0;
var geo =0;
var replytoUser=0;
// svgInit();









var oneMoreTweet = function(data) {

    index +=1;
   
    //RenderTweet(data.text);


    // $('body').append(template(data));
    particleArray.push( new Particle( 0, Math.floor((Math.random() * SCREEN_HEIGHT) + 1, index)));
   


    if(data.entities.urls.length>0)
    {
        urlsNb +=1;
        // console.log(" URLS ");

        // console.log(parseInt(urlsNb *100 / index));

    }

      if(data.entities.hashtags.length>0)
    {
        hashtags+=1;
     
         // console.log(parseInt(hashtags *100 / index));
        
    }

          if(data.entities.user_mentions>0)
    {
        reply+=1;
        // console.log(parseInt(reply *100 / index));
        
    }


           if(data.in_reply_to_user_id)
    {
        replytoUser+=1;
        // console.log(parseInt(replytoUser *100 / index));
        
    }


              if(data.retweeted_status)
    {
        // console.log(" RETWEET ");
        retweet+=1;
         // console.log(parseInt(retweet *100 / index));
        
    }

                  if(data.place)
    {
        // console.log(" Place GEO ");
        geo+=1;
         // console.log(parseInt(geo *100 / index));
        
    }








}



