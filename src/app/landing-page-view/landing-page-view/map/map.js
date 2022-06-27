 import { BuscadorComponent } from '../buscador/buscador.component';
 let marker = null
 const updateMap = () => {
   const urlIss = 'COLOCAR API AQUI'
   fetch(urlIss)
     .then(res => res.json())
     .then(data => {
      const { lat, lon } = data.iss_position
       console.log( lat, lon)
      marker = L.marker ([lat, lon]).addTo(Map)
     })
     setTimeout(updateMap, 100)
 }
 updateMap()

 document.getElementById('select-location').addEventListener('change', function(e){
   let location = e.target.value.split(",");
   L.marker(location).addTo(map)
   map.flyTo(location, 18);
})
let layer = L.geoJSON(null, {});
$.getJSON("API",  function (data)  {
 layer.addData(data);
});

