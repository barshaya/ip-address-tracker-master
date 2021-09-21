var mymap = L.map('mapid').setView([0,0], 1);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=MEpxT42PsaWXDR1KXesP', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(mymap);
var marker= L.marker([51.5,-0.09]).addTo(mymap);

geocode();
function geocode(){
    var location ='192.212.174.101';
    axios.get('https://geo.ipify.org/api/v1',{
        params:{
            apiKey: 'at_5WA9XxxUJ0ZzHUaC4aIfE6IZpv8is',
            ipAddress : location
        }
    }).then(function(response){
        console.log(response);
    }).catch(function (error) {
        console.log(error);        
    });
    //city,region,postalcode
}