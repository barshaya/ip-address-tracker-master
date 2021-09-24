let mymap = L.map("mapid");
mymap.setView([0, 0], 3);
L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=KIgo2TvlDDD69kwl8OUo",
  {
    attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
  }
).addTo(mymap);


// Icon options
var iconOptions = {
    iconUrl: 'images/icon-location.svg',
    iconSize: [25, 35]
 }
 
 // Creating a custom icon
 var customIcon = L.icon(iconOptions);

 var markerOptions = {
    title: "MyLocation",
    clickable: true,
    draggable: true,
    icon: customIcon
 }

var submit = document.getElementsByClassName('btn-submit')[0];
submit.addEventListener('click',geocode);

function geocode(){
    var location=document.getElementsByClassName('location')[0];
    axios.get('https://geo.ipify.org/api/v1',{
        params:{
            ipAddress : location.value,
            apiKey: 'at_5WA9XxxUJ0ZzHUaC4aIfE6IZpv8is'
        }
    }).then(function(response){
        
        var lat=response.data.location.lat;
        var lng=response.data.location.lng;
        var result = document.querySelectorAll('#result')[0]
        result.classList.add('result');
        result.innerHTML = ` 
        <span class="result-item">
            <h2>IP ADDRESS</h2>
            <div>${response.data.ip}</div>
        </span>
        <span class="result-item">
            <h2>LOCATION</h2>
            <div>${response.data.location.city}, ${response.data.location.region}</div>
            <div> ${response.data.location.postalCode}</div>
        </span>
        <span class="result-item">
            <h2>TIMEZONE</h2>
            <div>UTC ${response.data.location.timezone}</div>
        </span>
        <span class="result-item">
            <h2>ISP</h2>
            <div>${response.data.isp}</div>
        </span>
        `
        mymap.flyTo([lat, lng], 13);
        marker.setLatLng([lat,lng],12)

      
    }).catch(function (error) {
        console.log(error);        
    });
    //city,region,postalcode
}