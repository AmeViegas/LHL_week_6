function initMap() {
  //geo location info
  var chicago    =  {lat: 41.881832,  lng: -87.623177};
  var bigBricks  =  {lat: 41.951274,  lng: -87.7470746};
  var louMalnati =  {lat: 41.9605724, lng: -87.6857121};
  var gooseFoot  =  {lat: 41.9687274, lng: -87.7659927};
  var monti      =  {lat: 41.9682798, lng: -87.7649167};
  var jibekJolu  =  {lat: 41.9731769, lng: -87.6935268};
  var fountainHead = {lat: 41.9616903,lng: -87.6808763};


  //info window data
  var chiContentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Chicago, IL</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Chicago, IL</b>, also referred to as <b>the Windy City</b>, is the third ' +
    'most populous city in the US. Founded in 1833, Chicago was important transportation hub '+
    'between the eastern and western United States. The city continues to be a international hub '+
    'with the second busiest airport in the world and the largest number of U.S. highways and rail road freight.</p>'+
    '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Chicago">'+
    'Wikipedia</a> and <a href="http://www.cityofchicago.org/city/en/about/history.html"> City of Chicago</a> '+
    '</p>'+
    '</div>'+
    '</div>';

  var bigBricksContentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Big Bricks</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Big Bricks</b>, my favourite place to go for BBQ! They have a smoker on site and the staff ' +
    'is awesome.  They were the location for our wedding reception and made for wonderful memories. '+
    'Great reviews can be found on: <a href="https://www.zagat.com/r/big-bricks-chicago">Zagat</a>, '+
    '<a href="https://www.yelp.ca/biz/big-bricks-chicago">Yelp</a>, '+
    '<a href="http://www.chicagoreader.com/chicago/big-bricks/Location?oid=5773150">Chicago Reader</a> </p>'+
    '</div>'+
    '</div>';

  var louContentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Lou Malnati</h1>'+
    '<div id="bodyContent">'+
    '<p>Chicago has the best pizza in the world! And each person has their favourite location to get their pie.' +
    " For me, Lou Malnati's is the best pizza.  They have many locations in Chicago and deliver throughout the US. "+
    'Which made for a great wedding gift for a friend of ours in California. You can find other '+
    '<a href="https://www.loumalnatis.com/chicagoland">Chicago locations</a> on their website. And, here are some reviews: '+
    '<a href="https://www.zagat.com/r/lou-malnatis-pizzeria-river-north-chicago">Zagat</a>, ' +
    '<a href="https://www.yelp.ca/biz/lou-malnatis-pizzeria-chicago">Yelp</a> </p>'+
    '</div>'+
    '</div>';

  var gfContentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Goosefoot</h1>'+
    '<div id="bodyContent">'+
    '<p>For those of you who like upscale done right, Goosefoot is a lovely experiance. Chris and Nina Nugent are ' +
    'chef/owners of this 24-seat Fine Dining BYOB restaurant located in Lincoln Square. The cuisine is an artful' +
    'blend of French technique with modern vision created from small artisan farm products.' +
    'Goosefoot <a href="http://www.goosefoot.net/menu"> menu </a> changes by the season. '+
    'And, here are some reviews: '+
    '<a href="https://www.zagat.com/r/goosefoot-chicago">Zagat</a>, ' +
    '<a href="http://www.goosefoot.net/menu">Yelp</a> </p>'+
    '</div>'+
    '</div>';

  var montiContentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Monti</h1>'+
    '<div id="bodyContent">'+
    "<p>Monti is a Philly Cheesesteak resturant on a sleepy little street in Chicago's" +
    ' Lincoln Square neighboorhood. Chef James Gottwald and Jennifer Monti make a mean ' +
    'sandwich. If you like spicey, <i> The Rocky </i> is the way to go.' +
    'And, here are some reviews: '+
    '<a href="http://www.chicagoreader.com/chicago/montis-does-philly-cheesesteak-right/Content?oid=6624033">' +
    'Chicago Reader</a>, ' +
    '<a href="https://www.yelp.ca/biz/montis-chicago">Yelp</a> </p>'+
    '</div>'+
    '</div>';

  var jjContentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Jibek Jolu</h1>'+
    '<div id="bodyContent">'+
    '<p>Kyrgyz food reflects a mixture of cuisines from Russia, China, Turkey, Afghanistan, India and beyond. ' +
    'ibek Jolu is Chicago’s first and only Kyrgyz restaurant, one that will allow you to truly enjoy unique flavors, '+
    'And, here are some reviews: '+
    '<a href="http://www.chicagoreader.com/Bleader/archives/2009/12/23/say-hello-to-jibek-jolu">Chicago Reader</a>, ' +
    '<a href="https://www.yelp.ca/biz/jibek-jolu-chicago">Yelp</a> </p>'+
    '</div>'+
    '</div>';

  var fhContentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Fountain Head</h1>'+
    '<div id="bodyContent">'+
    '<p>A gastro-pub in the Ravenswood area, Fountain Head is one of the few locations in the US to hold a selection of ' +
    'single cask <a href="http://www.smwsa.com/">Scotch Malt Wiskey society </a> selections. ' +
    'A farm-to-table restaurant, Fountain Head has a frequently changing menu to go with the great beer and'+
    'wiskey selection. And, here are some reviews: '+
    '<a href="https://www.zagat.com/r/fountainhead-chicago">Zagat</a>, ' +
    '<a href="https://www.yelp.ca/biz/fountainhead-chicago">Yelp</a> </p>'+
    '</div>'+
    '</div>';

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: chicago
  });

  var chiInfoWindow = new google.maps.InfoWindow({
    content: chiContentString
  });
  var chiMarker = new google.maps.Marker({
    position: chicago,
    map: map,
    title: 'Chicago, IL'
  });
  chiMarker.addListener('click', function() {
    chiInfoWindow.open(map, chiMarker);
  });

  var bbInfoWindow = new google.maps.InfoWindow({
    content: bigBricksContentString
  });
  var bbMarker = new google.maps.Marker({
    position: bigBricks,
    map: map,
    title: 'Big BricksChicago, IL'
  });
  bbMarker.addListener('click', function() {
    bbInfoWindow.open(map, bbMarker);
  });

  var louInfoWindow = new google.maps.InfoWindow({
    content: louContentString
  });
  var louMarker = new google.maps.Marker({
    position: louMalnati,
    map: map,
    title: 'Lou Malnati,Chicago, IL'
  });
  louMarker.addListener('click', function() {
    louInfoWindow.open(map, louMarker);
  });

  var gfInfoWindow = new google.maps.InfoWindow({
    content: gfContentString
  });
  var gfMarker = new google.maps.Marker({
    position: gooseFoot,
    map: map,
    title: 'Goosefoot, Chicago, IL'
  });
  gfMarker.addListener('click', function() {
    gfInfoWindow.open(map, gfMarker);
  });

  var montiInfoWindow = new google.maps.InfoWindow({
    content: montiContentString
  });
  var montiMarker = new google.maps.Marker({
    position: monti,
    map: map,
    title: 'Monti, Chicago, IL'
  });
  montiMarker.addListener('click', function() {
    montiInfoWindow.open(map, montiMarker);
  });

  var jjInfoWindow = new google.maps.InfoWindow({
    content: jjContentString
  });
  var jjMarker = new google.maps.Marker({
    position: jibekJolu,
    map: map,
    title: 'Jibek Jolu, Chicago, IL'
  });
  jjMarker.addListener('click', function() {
    jjInfoWindow.open(map, jjMarker);
  });

  var fhInfoWindow = new google.maps.InfoWindow({
    content: fhContentString
  });
  var fhMarker = new google.maps.Marker({
    position: fountainHead,
    map: map,
    title: 'Fountain Head, Chicago, IL'
  });
  fhMarker.addListener('click', function() {
    fhInfoWindow.open(map, fhMarker);
  });

}
