var map;
var latlng = new google.maps.LatLng(36.830503, 10.229495);
var stylez = [{
    featureType: "all",
    elementType: "all",
    stylers: [{
        saturation: -40
    }]
}];
var mapOptions = {
    zoom: 15,
    center: latlng,
    scrollwheel: false,
    scaleControl: false,
    disableDefaultUI: true,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
    }
};
map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: 'img/core-img/map.png'
});


var mapType = new google.maps.StyledMapType(stylez, {
    name: "Grayscale"
});
map.mapTypes.set('gMap', mapType);
map.setMapTypeId('gMap');