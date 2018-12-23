
console.log(“Hello World!”);

var populationArray = []];
var maxPopulation = 0;
var isOverPopulated = false;

populationArray = ['50000','800000','700000','1200000','900000' ];
maxPopulation = 900000;

for(var i=0;i<populationArray.length;i++){
    if(populationArray[i]>maxPopulation)
        console.log("larger");
    else if(populationArray[i]<maxPopulation)
            console.log("smaller");
        else    
            console.log("equals");
}

if((populationArray[populationArray.length-1]<100000)&&(populationArray[populationArray.length-2]<100000)&&populationArray[populationArray.length-3]<100000)&&(maxPopulation<100000)||(isOverPopulated==false))
    console.log("Small cities!!!");
else    
    console.log("Large cities!!!");
    