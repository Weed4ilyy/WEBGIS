const map = L.map('map', {
  zoomControl: true,
  maxZoom: 28,
  minZoom: 1
}).fitBounds([[-7.36669989107804, 112.62186593631678], [-7.215932329714096, 112.8851343054977]]);

geolocation.watchPosition((position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Update the marker's position
  marker.setLatLng([latitude, longitude]);
});
