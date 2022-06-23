let marker = null
const updateMap = () => {
  const urlIss = ''
  fetch(urlIss)
    .then(res => res.json())
    .then(data => {
     const { lat, lon } = data.iss_position
      console.log( lat, lon)
      marker = L.marker ([lat, lon]).addTo(Map)
    })
    setTimeout(updateMap, 1)
}
updateMap()
