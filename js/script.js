window.onload = () => {

    let fetchCovid = fetch('https://disease.sh/v2/countries');
    fetchCovid.then((response) => {
        return response.json();
    }).then((jsonData) => {
        jsonData.map((eachCountry) => {
            console.log(eachCountry);
        });
    }).catch((error) => {
        console.log("ERROR", error);
    });
}

let map;
initMap = () => {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 12.8797, lng: 121.7740},
        zoom: 8,
        styles: mapStyle
    });
}