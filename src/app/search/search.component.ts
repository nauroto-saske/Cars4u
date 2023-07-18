import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  make: any;
  model: any;
  distance: any;
  type: any;

  milleage: any;
  drivetype: any;
  fueltype: any;
  features: any;

  activeIndex: any = 0;
  stringobj: any;
  constructor(){
    document .getElementById("tabView")?.addEventListener("click", toggleFunction);
    
   

  // function to toggle tabView..
  function toggleFunction() {
    var x = document.getElementById("firstCard");
    if (x?.style.display === "none") {
      x.style.display = "block";
    } else {
  //    x.style.display  = "none";
    }
  }

  }
  ngOnInit(): void {
    
    this.milleage=[{ name: "Please select milleage" },
    { name: "< 10,000 milles" },
  { name: "< 20,000 milles" },
  { name: "< 30,000 milles" },
  { name: "< 40,000 milles" },
  { name: "< 50,000 milles"}];

    this.drivetype=[
      { name: "Please select Drive Type" },
      { name: "360-degree camera" },
      { name: "Heated Seats" },
      { name: "Cooled seats" },
      { name: "Leather Seats" },
      { name: "Memory Seats" },
      { name: "Bluetooth" }

    ]
    this.features=[ 
      { name: "Please select Features" },  
    { name: "360-degree camera" },
    { name: "Heated Seats" },
    { name: "Cooled seats" },
    { name: "Leather Seats" },
    { name: "Memory Seats" },
    { name: "Bluetooth" }
]

this.fueltype=[
      { name: "Please select Fuel Type" },  
      { name: "Diesel" },
      { name: "Electric" },
      { name: "Hybrid" },
      { name: "Petrol" },

];
    this.type=[
      { name: "Please select Type" },
      { name: "Audi" },
    { name: "Convertible" },
    { name: "Couple" },
    { name: "Hatchback" },
    { name: "Sedan"}];

    this.make=[
      { name: "Please select Make" },
      { name: "Audi" },
      { name: "Benz" },
      { name: "Maruthi" },
      { name: "Honda" },
      { name: "BMW" },
    ];

    this.model=[
      { name: "Please select Model" },
      { name: "Audi" },
      { name: "Benz" },
      { name: "Maruthi" },
      { name: "Honda" },
      { name: "BMW" },
    ];

    this.distance=[
      { name: "Please select Distance" },
      { name: "10 Km" },
      { name: "20 Km" },
      { name: "30 Km" },
      { name: "40 km" },
      { name: "50 Km" },
    ];
  }
  
}
