function composeQuery(){
  const postal = document.getElementById('postal').value.trim();
  const keywords = document.getElementById('q').value.trim() || 'family doctor';
  const query = encodeURIComponent(`${keywords} ${postal} Ontario`);
  return {
    embed: `https://www.google.com/maps?q=${query}&output=embed`,
    maps: `https://www.google.com/maps/search/?api=1&query=${query}`
  };
}

function search(){
  const { embed, maps } = composeQuery();
  document.getElementById('mapFrame').src = embed;
  document.getElementById('openMaps').href = maps;
}

document.getElementById('searchBtn').addEventListener('click', search);
document.getElementById('nearbyBtn').addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude, longitude } = pos.coords;
    const query = encodeURIComponent(`family doctor @${latitude},${longitude}`);
    document.getElementById('mapFrame').src = `https://www.google.com/maps?q=${query}&output=embed`;
    document.getElementById('openMaps').href = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  });
});
