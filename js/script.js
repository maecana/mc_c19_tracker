// window.onload = () => {
// }

let map;
initMap = () => {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 12.8797, lng: 121.7740},
        zoom: 8,
        styles: mapStyle
    });
}