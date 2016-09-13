/**
 * Created by e2 on 4/2/2016.
 */

$(document).ready(function(){

	// var iframeElement = document.querySelector('iframe');
	// var iframeElementID = iframeElement.id;
	// var widget1 = SC.Widget(iframeElement);
	// var widget2 = SC.Widget(iframeElementID);
	// console.log(iframeElement);
	//widget1.setVolume(20);
	var artistName = $("#searchBar").val();

	SC.initialize({
		client_id: '9b9b0a3aa21a2c94c533113b940e0451',
		redirect_uri: 'http://localhost:63342/music/html/callback.html'
	});

   // // initiate auth popup
   //  SC.connect().then(function() {
   //      return SC.get('/me');
   //  }).then(function(me) {
   //  //alert('Hello, ' + me.username);
   //  });

	 SC.oEmbed('http://soundcloud.com/chancetherapper/sets', { //+ artistName
		 auto_play: false
	 }).then(function(embed){

		 $("#putTheWidgethere").html(embed.html);

   // console.log(embed);
		 $("#submitButton").on("click",function(){
			 var bgNum = Math.floor(Math.random() * 2) + 0;
			 var bg = ["http://41.media.tumblr.com/7f6b98a17ba3b5c50bd771c6e304858e/tumblr_nnxx45DOQj1rz5vqwo1_400.jpg","http://photon.hypb.st/hypetrak.com/images/2016/01/chance-the-rapper-earl-sweatshirt-duo-0.jpg"];
			 $(".backgroundImage").css("background-image","url('"+ bg[bgNum]+"')");
		 });
	 });
});