window.onload = () => {
    set_table_details();
}


let map;
initMap = () => {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 12.8797, lng: 121.7740},
        zoom: 3,
        styles: mapStyle,   
    });
    
    set_marker_details(map);
}
  

set_marker_details = (map) => {
    fetch_data().then((response) => {
        return response.json();
    }).then((jsonData) => {
        let marker_details = [];

        jsonData.map((eachCountry) => {
            marker_details.push([
                eachCountry.cases,
                {
                    lat: eachCountry.countryInfo.lat,
                    lng: eachCountry.countryInfo.long,
                }
            ]);
        });

        setMarkers(map, marker_details);
    });
}


setMarkers = (map, data) => {
    for (let i = 0; i < data.length; i++) {
        const d = data[i];
        new google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            position: d[1],
            map,
            title: d[0],
            zIndex: 1,
            center: d[1],
            radius: Math.sqrt(d[0]) * 100,
        });
    }
}


fetch_data = () => {
    return fetch('https://disease.sh/v2/countries');
}


set_table_details = () => {
    fetch_data().then((response) => {
        return response.json();
    }).then((jsonData) => {
        let data = '';

        jsonData.map((eachCountry) => {
            data += `<tr>
                <td>${eachCountry.country}</td>
                <td>${eachCountry.cases}</td>
                <td>${eachCountry.recovered}</td>
                <td>${eachCountry.deaths}</td>
            </tr>`;
        });

        populateTable(data);
    });
}


populateTable = (data) => {
    let table = document.querySelector('.table');
    let tbody = document.createElement('tbody');
    tbody.innerHTML = data;
    table.appendChild(tbody);
}