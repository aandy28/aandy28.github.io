$(function() {
    initialize();
});

function initialize() 
{
  var locations = [
    ["Kevin Gutowski", "@kev","Berkeley, CA",37.871593,-122.272747],
    ["Kasper Andersen", "@kaandk","Copenhagen, Denmark",55.676097,12.568337],
    ["Zoe Jones", "@zoej","Liverpool, UK",53.408371,-2.991573],
    ["Jasmine", "@jasmony","Oakland/SF, CA",37.804364,-122.271114],
    ["Filipa", "@filipamaia","Lisbon, Portugal",38.722252,-9.139337],
    ["Daniel GK", "@danza","Johannesburg, South Africa",-26.204103,28.047305],
    ["David Tercero", "@davidtercero","Sacramento, CA",38.581572,-121.4944],
    ["Ryan de Metz", "@ryandemetz","Pretoria, South Africa",-25.747868,28.229271],
    ["Jill Patrick", "@awordybird","York, England",53.959965,-1.087298],
    ["Derek Lieu", "@derek","Los Angeles, CA",34.052234,-118.243685],
    ["Matt Willmott", "@mattwillmott","Hemel Hempstead, UK",51.753241,-0.448632],
    ["Sophie Alp", "@sophie","Montreal, Canada",45.501689,-73.567256],
    ["Nathan Allotey", "@nathanallotey","Houston, TX",29.760427,-95.369803],
    ["Dineth Hettiarachchi", "@itsdineth","Dallas, TX",32.776664,-96.796988],
    ["Steve McKinney", "@steve","Manchester, England",53.480759,-2.242631],
    ["Emily K", "@designisem","Surrey, England.",51.314759,-0.55995],
    ["Matej Mitas", "@matejmitas","Olomouc, Czech Republic",49.593778,17.250879],
    ["Bianca Prince", "@bianca","Charleston, WV, USA",38.34982,-81.632623],
    ["Gavin Williams", "@gavinwilliams","Newcastle, UK",54.978252,-1.61778],
    ["Kaylin Murray", "@kaylin.murray","Irvine, CA, USA",33.684567,-117.826505],
    ["Andrea Holtz", "@Andrea H","Santa Cruz, California, USA",36.974117,-122.030796],
    ["Jessica Slevin", "@slevin","Tampa, FL",27.950575,-82.457178],
    ["Noe Harrison", "@noeharrison","Barcelona, Spain",41.385064,2.173403],
    ["Ade Mills", "@ademills","Hastings, United Kingdom",50.854259,0.573453],
    ["Matt Dalby", "@mattjdalby","London, UK",51.507351,-0.127758],
    ["Bernardo Raposo", "@braposo","London, UK",51.507351,-0.127758],
    ["Lauren Hay", "@laurengemmahay","Aberdeenshire, Scotland, UK",57.149581,-2.093763],
    ["Valentina Sottano", "@vsottano","Mendoza, Argentina.",-32.889459,-68.845839],
    ["Jose Romero", "@Josefraires","Dalton, GA, USA",34.769802,-84.970223],
    ["Chloe Atchue-Mamlet", "@chloeam","Philadelphia, USA",39.952584,-75.165222],
    ["George Menjin", "@menji","Boston, MA USA",42.360083,-71.05888],
    ["Hollie Arnett", "@holliearnett","Wellington, NZ",-41.28646,174.776236],
    ["Alex Lucas", "@ohtheraven","Cleveland, OH USA",41.49932,-81.694361],
    ["Savannah", "@savannah","New York, NY, USA",40.712784,-74.005941],
    ["Anthony Grimes", "@anthonywigrimes","Waupun, WI",43.633322,-88.729552],
    ["Christina Medrano", "@christina","Los Angeles, CA",34.052234,-118.243685],
    ["Anton Sten", "@antonsten","Malmö, Sweden",55.604981,13.003822],
    ["Nickolans Griffith", "@Nickolans","Houston, Texas",29.760427,-95.369803],
    ["Jen Murse", "@jenmurse","San Francisco, CA",37.77493,-122.419416],
    ["Akira Laine", "@akira","Noumea, New Caledonia",-22.255823,166.450524],
    ["Noukka Signe", "@noukka","Alkmaar, the Netherlands",52.632381,4.753375],
    ["Simon Harper", "@simon","Bangor, Northern Ireland, UK",54.654197,-5.673065],
    ["Jernej Gracner", "@jernejg","Maribor, Slovenia",46.55465,15.645881],
    ["Nimisha Patil", "@nimtim","London, UK",51.507351,-0.127758],
    ["Atul Pradhananga", "@atul","Kathmandu, Nepal",27.717245,85.323961],
    ["Fiona Botha", "@fiona","Johannesburg, South Africa",-26.204103,28.047305],
    ["Dave Brener", "@davebrener","Harrisburg, Pennsylvania USA",40.273191,-76.886701],
    ["Helga Jiang", "@helga","Waterloo, Ontario, Canada",43.464258,-80.52041],
    ["Eric Friedensohn", "@efdot","Buenos Aires",-34.603684,-58.381559],
    ["Katie Steckly", "@katiesteckly","Toronto, Canada",43.653226,-79.383184],
    ["Nancy Palm", "@nancypalm","Leesburg, VA",39.115662,-77.563601],
    ["Stefanie Osmond", "@stefanieso","Old Bridge, NJ",40.412855,-74.307282],
    ["Paul Bunyar", "@paulbunyar","Shawnee, KS, USA",39.022848,-94.715187],
    ["Anna Nguyen", "@annanguyen","Oakland, CA",37.804364,-122.271114],
    ["Joshwin Greene", "@josh_w_g","Fresno, CA",36.746842,-119.772587],
    ["Lurrachi Lurrier", "@Lurrachi","Brisbane, Australia",-27.469771,153.025124],
    ["Rebekah Schiffer", "@rebekah","Portland USA",45.523062,-122.676482],
    ["Margreet Haleber", "@margreet","Amersfoort, Netherlands",52.156111,5.387827],
    ["Charlotte Bradburn", "@mynameischarl","Manchester, UK",53.480759,-2.242631],
    ["Julia Porter", "@boardxdesign","Tampa, FL",27.950575,-82.457178],
    ["Jennifer Yu", "@rayuko","New Britain,",41.66121,-72.779542],
    ["Kara West", "@karawr","Brisbane, Australia",-27.469771,153.025124],
    ["Lauryn", "@heylauryn","Outer Banks, NC, USA",35.558493,-75.466516],
    ["Vosco", "@vosco","Boise, Idaho, USA",43.61871,-116.214607],
    ["Tricia", "@tricia_pdx","Portland, OR, USA",45.523062,-122.676482],
    ["Jayden Sinclair", "@jayden","Geelong, Australia",-38.149918,144.361719],
    ["Ziad Baroudy", "@thisisziad","Edmonton, Alberta, Canada",53.544389,-113.490927],
    ["Derek McLennan", "@derekmclennan","Waco, TX",31.549333,-97.14667],
    ["Borja Castropol", "@justborja","Asturias, Spain",43.361395,-5.859327],
    ["Stephanie Ko", "@stephkoanie","Ottawa, Ontario, Canada",45.42153,-75.697193],
    ["Gisela Vargas", "@gvargas","Lincolnwood, IL",42.004476,-87.730059],
    ["Drew Luper", "@luper.design","Seattle, WA, USA",47.60621,-122.332071],
    ["Alex Howes", "@aihowes","Totnes, UK",50.433741,-3.685797],
    ["Karen Ybarra", "@kareny","Hastings, MN",44.744329,-92.851371],
    ["Lucija Cetin", "@lucija_c","Malmö, Sweden",55.604981,13.003822],
    ["Sofie Nilsson", "@sofienilsson","Oslo, Norway",59.913869,10.752245],
    ["Steve Davies", "@stevedavies","Bangor, North Wales, UK",53.22739,-4.129263],
    ["Ashley Niro", "@ashleysername","New Haven, Connecticut, USA",41.308274,-72.927883],
    ["Elsa Martins", "@somebodyelsa","Lisbon, PT",38.722252,-9.139337],
    ["João Borges", "@joaobborges","Coimbra, PT",40.203315,-8.410257],
    ["Giulia Pietrobelli", "@giulia","London, UK",51.507351,-0.127758],
    ["Damian Herrington", "@damian","Hull, UK",53.745671,-0.336741],
    ["Mario Kovačević", "@mario","Zagreb, Croatia",45.815011,15.981919],
    ["Tabitha Emma", "@tabithaemma","NSW, Australia",-31.253218,146.921099],
    ["Abby", "@abby","NSW, Australia",-31.253218,146.921099],
    ["Ralph Gnonlonfoun", "@ralph","Cotonou, Benin",6.370293,2.391236],
    ["Christer Eckermann", "@ecker00","Horten, Norway",59.417084,10.483213],
    ["Lexi", "@giraffeinabath","Limassol, Cyprus",34.70713,33.022617],
    ["Clare Eckermann", "@clareecker","Horten, Norway",59.417084,10.483213],
    ["Benedicte Jenssen", "@jenssendesign","Kristiansand, Norway",58.159912,8.018206],
    ["Francisco Aguilera G", "@FranciscoAMK","Santiago, Chile",-33.44889,-70.669265],
    ["Nathan Albrecht", "@albrechtnate","Philadelphia, OH",39.7478402,-83.8259781],
    ["Jessica Dolliver", "@jesdolliver","Mystic, CT",41.354266,-71.966462],
    ["Lily Hargreaves", "@lilyhargreaves","Melbourne, Australia",-37.813628,144.963058],
    ["Kelli White", "@kelli","Milton Keynes, UK",52.040622,-0.759417],
    ["Tamzen Hunter", "@tamzen","Brisbane, Australia",-27.469771,153.025124],
    ["Charlotte Kathleen", "@charlottekathleen","Manchester, UK",53.480759,-2.242631],
    ["Ngaire Clare", "@ngaireclare","Sydney, Australia",-33.86882,151.209296],
    ["Andy Smith", "@andy_smith","Darlington UK",54.5311746,-1.6233878],
  ];

  // var clusterStyles = [
  //   {
  //     textColor: 'white',
  //     url: 'path/to/smallclusterimage.png',
  //     height: 40,
  //     width: 40
  //   },
  //  {
  //     textColor: 'white',
  //     url: 'path/to/mediumclusterimage.png',
  //     height: 50,
  //     width: 50
  //   },
  //  {
  //     textColor: 'white',
  //     url: 'path/to/largeclusterimage.png',
  //     height: 60,
  //     width: 60
  //   }
  // ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(41.923, 12.513), 
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();
  var marker, i, member;
  var markers = [];
  var members = [];

  for (i = 0; i < locations.length; i++) {

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][3], locations[i][4]),
      map: map
    });
    markers.push(marker)

    member = {name: locations[i][0], location: locations[i][2]}
    members.push(member)

    // console.log(marker.getPosition());

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        var name = locations[i][0];
        var username = locations[i][2];
        var html = "<b>Name: " + name + "</b> <br/>Username: " + username;
        infowindow.setContent(html);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

  var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

  createMembers(members);
}

function createMembers(members)
{
  let membersContainer = $('.members');

  Object.keys(members).map(function(key, index) {
    let memberList = "<ul></ul>"
    let member = "<li><b>Name: " + members[key].name + "</b> <br/>Location: " + members[key].location +"</li>";

    memberList.append(member);
    membersContainer.append(memberList);
  });
}
