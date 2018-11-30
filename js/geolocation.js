
function showPosition(position) {
  const latlon = '${position.coords.latitude},${position.coords.longitude}';

  const Url = 'https://maps.googleapis.com/maps/api/staticmap?center= ${latlon}&zoom=14&size=400x300&sensor=false&key=AIzaSyARnpVqWwririHxUD5sRSoi-Aee6-PmL50';

document.getElementById('geo_pic').innerHTML = `<img src='${Url}'>`;
}
