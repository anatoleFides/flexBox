//BURGER MENU
$(document).ready(function(){
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//Slike Slider
$(document).ready(function(){
	$('.slider').slick({
		dots:true,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:3,
		speed: 400,
		easing: 'ease',
		infinite:true,
		initialSlide:3,
		autoplay:true,
//		autoplaySpeed:2500,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		draggable:false,
		swipe:true,
		touchThreshold:7,
		touchMove:true,
//		centerMode: true,
//		centerPadding: '50px',
		responsive: [
		{
		breakpoint: 850,
		settings: {
			slidesToShow: 2,
//			slidesToScroll:2,
			}
		},
		{
		breakpoint: 550,
		settings: {
			slidesToShow: 1,}
		}
		],

	});
	$('.slider__big').slick({
		dots:false,
		adaptiveHeight:true,
		slidesToShow:1,
		slidesToScroll:1,
		speed: 300,
		infinite:true,
//		initialSlide:1,
//		autoplay:true,
//		autoplaySpeed:2500,
//		centerMode: true,
//		centerPadding: '50px',

	});
});
//MAPS
function initMap() {
	var myLatlng = new google.maps.LatLng(49.98967, 36.208309);
	var myElement = document.getElementById('myMap');
	var myOptions = {
		zoom: 7,
		center: myLatlng,
		styles: [
		{
		stylers: [
		{ hue: "#ff8d8d" },
		{ saturation: -20 }
		]
		},{
		featureType: "road",
		ementType: "geometry",
		stylers: [
		{ lightness: 100 },
		{ visibility: "simplified" }
		]
		},{
		featureType: "poi.business",
		elementType: "labels",
		stylers: [
		{ visibility: "off" }
		]
		}
		]
	}
	var myMap = new google.maps.Map(myElement, myOptions); 
	addMarker ({
		coordinates: {lat: 49.98967, lng:36.208309}, //Харьков
		image: "image/black_marker.png",
		info:
		'<div id="popup__myMap">'+
		'<div>'+
		'<h4 id="popup__title">Fantasy World!!!</h4>'+
		'<img src="image/fantasy_logo.jpg" class="img-responsive" alt="Fantasy World">'+
		'<p id="popup__content">ул.Пушкинская 38 , Харьков, 61002, Украина </p>'+
		'</div>'+
		'</div>'
	}); 
	addMarker ({
		coordinates: {lat: 49.59269, lng:34.551159}, //Полтава
		info:
		'<div id="popup__myMap">'+
		'<div>'+
		'<h4 id="popup__title">Fantasy World!!!</h4>'+
		'<img src="image/fantasy_logo.jpg" class="img-responsive" alt="Fantasy World">'+
		'<p id="popup__content">ул.Ленина 38 , Полтава, 61002, Украина</p>'+
		'</div>'
		});
	addMarker ({
		coordinates: {lat: 48.45, lng:34.9833333}, //Днепр
		image: "image/black_marker.png",
		info:
		'<div id="popup__myMap">'+
		'<div>'+
		'<h4 id="popup__title">Fantasy World!!!</h4>'+
		'<img src="image/fantasy_logo.jpg" class="img-responsive" alt="Fantasy World">'+
		'<p id="popup__content">ул.Гагариная 38 , Днепр, 61002, Украина</p>'+
		'</div>'+
		'</div>'
		});
	function addMarker(properties){
		var marker = new google.maps.Marker({
		position: properties.coordinates,
		map: myMap,
		title:"Hey there!!!",
		animation: google.maps.Animation.BOUNCE
	});
		if (properties.image)
		{
			marker.setIcon(properties.image);
		}
		if (properties.info)
		{
		var infowindow = new google.maps.InfoWindow({
			content: properties.info,
			maxWidth: 135
		});
		marker.addListener('click', function() {
			infowindow.open(myMap, marker);
		});
		}
	}
}