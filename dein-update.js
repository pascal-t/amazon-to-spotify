var section = '';
var albums = [];
var singles = [];

$('.rhonda-full-entry').text().split('\n')
.forEach(function(line, i, lines) {
    if (/^[A-Z0-9 ]+$/.test(line)) {
        section = line;
        return;
    }
    
    var match = /^(.*) – „(.*)“$/.exec(line);
    if (match != null) {
        var artists = match[1].replace(/ &/g, ",");
        var work = match[2];
        
        switch (section) {
            case "ALBEN":
                var url = 'https://open.spotify.com/search/artist:' + artists + ' album:' + work;
                albums.push({"artists": artists, "album": work, "url": url});
                break;
            case "SINGLES":
                var url = 'https://open.spotify.com/search/artist:' + artists + ' track:' + work;
                singles.push({"artists": artists, "track": work, "url": url});
                break;
            default:
                break;
        }
    }
});

var page = "<h1>ALBEN</h1><br>\n";
albums.forEach(function(album, i, array){page =  page + "<a href='" + album.url + "' target='_blank'>" + album.artists + " - " + album.album + "</a><br>\n"})
page += "<h1>SINGLES</h1><br>\n";
singles.forEach(function(single, i, array){page =  page + "<a href='" + single.url + "' target='_blank'>" + single.artists + " - " + single.track + "</a><br>\n"})


w=window.open();
w.document.body.innerHTML = page;
