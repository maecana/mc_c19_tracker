window.onload = () => {

    let fetchCovid = fetch('https://disease.sh/v2/countries');
    fetchCovid.then((response) => {
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

populateTable = (data) => {
    let table = document.querySelector('.table');
    let tbody = document.createElement('tbody');
    tbody.innerHTML = data;
    table.appendChild(tbody);
}