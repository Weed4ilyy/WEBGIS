const map = L.map('map', {
  zoomControl: true,
  maxZoom: 28,
  minZoom: 1
}).fitBounds([[-7.36669989107804, 112.62186593631678], [-7.215932329714096, 112.8851343054977]]);

geolocation.getCurrentPosition((position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Create a marker for the user's location
  const marker = new L.Marker([latitude, longitude]);

  // Add the marker to the map
  map.addLayer(marker);
});
