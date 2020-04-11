import { Component, OnInit } from '@angular/core';
declare var $: any;

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-solarEnergy',
  templateUrl: './solarEnergy.component.html',
  styleUrls: ['./solarEnergy.component.css']
})
export class SolarEnergyComponent implements OnInit {
   
  solarPowerPlant
  constructor() { }
  showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      const color = Math.floor((Math.random() * 4) + 1);

      $.notify({
          icon: "notifications",
          message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
          }
      });
  }
  ngOnInit() 
  {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
        zoom: 13,
        center: myLatlng,
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [{
            "featureType": "water",
            "stylers": [{
                "saturation": 43
            }, {
                "lightness": -11
            }, {
                "hue": "#0088ff"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
                "hue": "#ff0000"
            }, {
                "saturation": -100
            }, {
                "lightness": 99
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#808080"
            }, {
                "lightness": 54
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ece2d9"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ccdca1"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#767676"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#b8cb93"
            }]
        }, {
            "featureType": "poi.park",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.sports_complex",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.medical",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.business",
            "stylers": [{
                "visibility": "simplified"
            }]
        }]

    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);

   
    this.solarPowerPlant =[
      { 
        id : 0 ,
        name:'Pavagada Solar Park', 
        location:' Palavalli, Karnataka' ,
        area : " 13,000 acres",
        capacity:"2,050 MegaWatt"
      },
      { 
        id : 1 ,
         name:'ADANI SOLAR PLANT', 
        location:' Kolar, Karnataka' ,
        area : "2500 Acree ",
        capacity:" 648 MegaWatt "
      },
      { id : 2 ,
        name:'Karnataka I Project ', 
        location:'Koppal,Karnataka ' ,
        area : " 178 acres",
        capacity:" 40.5 MegaWatt"
      },
      { id : 3 ,
        name:'Solar power plant', 
        location:'Ramanagara, Karnataka' ,
        area : "92 Acres (approx.)",
        capacity:"20 MegaWatt"
      },
      { id :4 ,
        name:'Bosch Power plant ', 
        location:' Chamarajanagar, Karnataka' ,
        area : "1.5 Acres (approx)",
        capacity:"100 KilloWatt"
      },

     ] ;

}

SolarDetail(id) {
  console.log("id",id)
}

}
