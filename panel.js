// Panel functions start when page is ready

$(document).ready( function(){
	weather();
	
})

// Weather function
function weather()
{
	var wData = weatherData();
	var parsedWData = JSON.parse(wData);

	var temp = parsedWData.current_observation.temperature_string;
	var feelsLike = parsedWData.current_observation.feelslike_string;
	var rain = parsedWData.current_observation.precip_today_in;

	$("#temp").html(temp);
	$("#feels-like").html(feelsLike);
	$("#chance-of-rain").html(rain);

	var time = setTimeout(weatherData, 360000);

	function weatherData()
	{

		var apiKey = ""
		var connectString = "https://api.wunderground.com/api/"+apiKey+"/conditions/q/FL/Oviedo.json";
		var reqHttp = new XMLHttpRequest();

		reqHttp.open("GET", connectString, false);
		reqHttp.send(null);

		return reqHttp.responseText;

	}

}

// Ron Swanson quote

function generateMichael()
{

	var rand = Math.floor((Math.random() * 40) + 1);

	var	michaelScottQuotes = [ 

							  "I enjoy having breakfast in bed. I like waking up to the smell of bacon, sue me. And since I don’t have a butler, I do it myself. So most nights before I go to bed, I will lay six strips of bacon out on my George Foreman Grill. Then I go to sleep. When I wake up, I plug in the grill, I go back to sleep again. Then I wake up to the smell of crackling bacon.",
							  "No, I’m not going to tell them about the downsizing. If a patient has cancer, you don’t tell them.",
							  "I guess the attitude that I’ve tried to create here is that I’m a friend first and a boss second and probably an entertainer third.",
							  "Make friends first, make sales second, make love third. In no particular order.",
							  "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.",
							  "Sometimes you have to take a break from being the kind of boss that’s always trying to teach people things. Sometimes you just have to be the boss of dancing.",
							  "This is our receptionist, Pam. If you think she’s cute now you should have seen her a couple years ago.",
							  "Fool me once, strike one. Fool me twice, strike three.",
							  "Guess what, I have flaws. What are they? Oh I don’t know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I’ll hit somebody with my car. So sue me.",
							  "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden and Toby, I would shoot Toby twice.",
							  "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject. So you know you are getting the best possible information.",
							  "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
							  "Well, well, well, how the turntables.",
							  "I took her to the hospital. And the doctors tried to save her life, they did the best they could. And she is going to be okay.",
							  "Presents are the best way to show how much you care. It’s a tangible thing you can point at and say, ‘Hey man, I love you. This many dollars worth.’",
							  "Is there something besides ‘Mexican’ you prefer to be called? Something less offensive?",
							  "The worst thing about prison was the dementors.",
							  "I hate so much about the things that you choose to be.",
							  "You may look around and see two groups here: white collar, blue collar. But I don’t see it that way, and you know why not? Because I am collar-blind.",
							  "Yes it is true! I, Michael Scott, am signing up with an online dating service. I need a username and I have a great one. Little Kid Lover. That way people will know exactly where my priorities are at.",
							  "I don’t come up with this stuff, I just forward it along. You wouldn’t arrest the guy who was just passing drugs from one guy to another.",
							  "I don’t understand. We have a day honoring Martin Luther King, but he didn’t even work here.",
							  "It’s not like booze ever killed anyone.",
							  "I love inside jokes. I’d love to be a part of one someday.",
							  "Don’t ever, for any reason, do anything for anyone, for any reason, ever, no matter what. No matter where. Or who, or who you are with, or where you are going or... or where you’ve been... ever. For any reason, whatsoever.",
							  "Jan is cold. If she was sitting across from you on a train and she wasn’t moving, you might think she was dead.",
							  "It’s simply beyond words. It’s incalculable.",
							  "We’re all homos. Homo... Sapiens.",
							  "Do you think that doing alcohol is cool?",
							  "Jim and I are great friends. We hang out a ton, mostly at work.",
							  "I have got to make sure that Youtube comes own to tape this.",
							  "Tell him to call me ASAP as possible.",
							  "There is no such thing as an appropriate joke, that’s why it’s a joke.",
							  "Dwight, you ignorant slut!",
							  "Toby is in HR which technically means he works for corporate. So he’s not really a part of our family. Also he’s divorced... so he’s not really a part of his family.",
							  "Society teaches us that having feelings and crying is bad and wrong. Well, that’s baloney because grief isn’t wrong. There’s such a thing as good grief. Just ask Charlie Brown.",
							  "I’m not superstitious but I am a little stitious.",
							  "I don’t hate it. I just don’t like it at all and it’s terrible.",
							  "I would not miss it for the world. But if something else came up I would definitely not go.",
							  "I am Beyonce, always."

							];



	var michaelQuote = michaelScottQuotes[rand];
	var author = "- Michael Scott";

	$('#quote').html(michaelQuote);
	$('#author').html(author);

}

function generateRon()
{

	var rand = Math.floor((Math.random() * 16) + 1);

	var ronQuotes = [
						"The whole point of this country is if you want to eat garbage, balloon up to 600 pounds and die of a heart attack at 43, you can! You are free to do so. To me, that’s beautiful.",
						"History began July 4th, 1776. Anything before that was a mistake.",
						"When I eat, it is the food that is scared.",
						"Ron, would you like a salad? Since I am not a rabbit, no I do not.",
						"Dear frozen yogurt. You are the celery of desserts. Be ice cream, or be nothing.",
						"I call this turf ‘n’ turf. It’s a 16 oz T-bone and a 24 oz porterhouse. Also, whiskey and a cigar. I am going to consume all of this at the same time because I am a free American.",
						"Strippers do nothing for me…but I will take a free breakfast buffet anytime, anyplace.",
						"Never half-ass two things. Whole-ass one thing.",
						"There are only three ways to motivate people: money, fear, and hunger.",
						"I like saying ‘No,’ it lowers their enthusiasm.",
						"Any dog under fifty pounds is a cat and cats are useless.",
						"When people get a little too chummy with me I like to call them by the wrong name to let them know I don’t really care about them.",
						"The less I know about other people’s affairs, the happier I am. I’m not interested in caring about people. I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.",
						"There’s only on thin I hate more than lying. Skim milk, which is water that’s lying about being milk.",
						"I think that all government is a waster of taxpayer money. My dream is to have the park system privatized and run entirely by for profit corporations, like Chuck E. Cheese. They have an impeccable business model.",
						"My idea of a perfect government is one guy who sits in a small room at a desk, and the only thing he’s allowed to decide is who to nuke.",
						"I like Tom. He doesn’t do a lot of work around here. He shows zero initiative. He’s not a team player. He’s never wanted to go that extra mile. Tom is exactly what I’m looking for in a government employee."
					];

	var ronQuote = ronQuotes[rand];
	var author = "- Ron Swanson";

	$('#quote').html(ronQuote);
	$('#author').html(author);

}


function initMap() {
						 
    var location = {lat: 28.602784, lng: -81.202022};	//Select a location by coord
    //change to center on uni latlong
    var mapDiv = document.getElementById('map');	//Find div for map
    var map = new google.maps.Map(mapDiv, {			//Create map in map div, pass in properties
        center: location,
        zoom: 13
    });
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
}