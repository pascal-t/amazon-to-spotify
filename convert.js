list = ''; 
$('.playlistDetailsListItem').each(function(i){ 
  if($(this).find('.checkboxInput').is(':checked')) {
    return false;
  }
  artist = $(this).find('.title > .artist > a').first().attr('title')
    .replace(/ ?([\(\[][^\)\]]+[\)\]])/g, '')
    .replace(/ feat\./g, ',')
    .replace(/ &/g, ', ');
  track = $(this).find('.title').first().attr('title')
    .replace(/ ?([\(\[][^\)\]]+[\)\]])/g, '');
  list += "<a href='https://open.spotify.com/search/songs/artist:"+artist+" track:"+track+"' target='_blank'>"
          +artist+" - "+track
          +"</a><br>";
});
w=window.open();
w.document.body.innerHTML = list;
