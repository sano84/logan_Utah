
var map = L.map('map').setView([41.737778, -111.830833], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:'Map data &copy; OpenStreetMap contributors',
  maxZoom: 18
}).addTo(map);

///var marker = L.marker([41.78, -111.644]).addTo(map);
var landmarks = [
  [41.78, -111.644000],
  [41.893611, -111.643889],
  [41.745, -111.809000],
  [41.755556, -111.850556],
  [41.703397, -111.8548],
  [41.71922, -111.846458],
  [41.7132333, -111.8487396],
];

var markersArray = [];

for (var i=0; i<landmarks.length; i++) {
   markersArray[i] = new L.marker(landmarks[i]).addTo(map);
//marker = new L.marker(landmarks[i]).addTo(map);
}

// option var popup=L.popup({minWidth: 250}).setContent('<img src="img/logan canyon.jpg"><h3>Logan Canyon</h3>')
markersArray[0].bindPopup('<img src="img/logan canyon.jpg"><h3>Logan Canyon</a></h3>');
markersArray[1].bindPopup('<img src="img/Tony Grove Lake.jpg"><h3>Tony Grove Lake</h3>');
markersArray[2].bindPopup('<img src="img/Utah State University.jpg"><h3>Utah State University</h3>');
markersArray[3].bindPopup('<img src="img/Bridgerland Technical College.jpg"><h3>Bridgerland Technical College</h3>');
markersArray[4].bindPopup('<img src="img/Logan River Academy.jpg"><h3>Logan River Academy</h3>');
markersArray[5].bindPopup('<img src="img/Willow Park Zoo.jpg"><h3>Willow Park Zoo</h3>');
markersArray[6].bindPopup('<img src="img/Logan River Golf Course.jpg"><h3>Logan River Golf Course</h3>');
