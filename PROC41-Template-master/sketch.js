const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var range;
var qand;

function preload(){
    range = loadImage("AA.jpg")
}

function setup(){

   var canvas = createCanvas(400,600);
   engine = Engine.create();
   world = engine.world;

   drop1 = new Drop(1000,100,5,5)
   drop2 = new Drop(1000,100,5,5)
   drop3 = new Drop(1000,100,5,5)
   drop4 = new Drop(10230,100,5,5)
   drop5 = new Drop(10032,100,5,5)
   drop6 = new Drop(1002,100,5,5)
   drop7 = new Drop(1030,100,5,5)
   drop8 = new Drop(1010,100,5,5)
   drop9 = new Drop(10110,100,5,5)
   drop10 = new Drop(1010,100,5,5)
   drop11 = new Drop(1010,100,5,5)
   drop12 = new Drop(1001111,100,5,5)
   drop13 = new Drop(100,100,5,5)
   drop14 = new Drop(1010,100,5,5)
   drop15 = new Drop(1010,100,5,5)
   drop16 = new Drop(10320,100,5,5)
   drop17 = new Drop(10110,100,5,5)
   drop18 = new Drop(1010,100,5,5)
   drop19 = new Drop(1001,100,5,5)
   drop20 = new Drop(12300,100,5,5)
   drop21 = new Drop(2100,100,5,5)
   drop22 = new Drop(100,100,5,5)
   drop23 = new Drop(1300,100,5,5)
   drop24 = new Drop(1030,100,5,5)
   drop25 = new Drop(1003,100,5,5)
   drop26 = new Drop(2100,100,5,5)
   drop27 = new Drop(100,100,5,5)
   drop28 = new Drop(1300,100,5,5)
   drop29 = new Drop(1030,100,5,5)
   drop30 = new Drop(10033,100,5,5)
   drop31 = new Drop(10320,100,5,5)
   drop32 = new Drop(10330,100,5,5)
   drop33 = new Drop(1030,100,5,5)
   drop34 = new Drop(100,100,5,5)
   drop35 = new Drop(1030,100,5,5)
   drop36 = new Drop(1003,100,5,5)
   drop37 = new Drop(100,100,5,5)
   drop38 = new Drop(33100,100,5,5)
   drop39 = new Drop(1030,100,5,5)
   drop40 = new Drop(10230,100,5,5)

   umbrella1 = new Umbrella(100,400,80,20);
   umbrella2 = new Umbrella(170,420,60,20);
   umbrella3 = new Umbrella(30,420,60,20);
   umbrella4 = new Umbrella(100,500,20,200);

   adrop1 = new Drop(100,100,5,5)
   adrop2 = new Drop(12300,100,5,5)
   adrop3 = new Drop(10230,100,5,5)
   adrop4 = new Drop(2100,100,5,5)
   adrop5 = new Drop(2100,100,5,5)
   adrop6 = new Drop(100,100,5,5)
   adrop7 = new Drop(2100,100,5,5)
   adrop8 = new Drop(2100,100,5,5)
   adrop9 = new Drop(12200,100,5,5)
   adrop10 = new Drop(13200,100,5,5)
   adrop11 = new Drop(1200,100,5,5)
   adrop12 = new Drop(12300,100,5,5)
   adrop13 = new Drop(1020,100,5,5)
   adrop14 = new Drop(1030,100,5,5)
   adrop15 = new Drop(102320,100,5,5)
   adrop16 = new Drop(1230230,100,5,5)
   adrop17 = new Drop(23100,100,5,5)
   adrop18 = new Drop(10320,100,5,5)
   adrop19 = new Drop(1030,100,5,5)
   adrop20 = new Drop(1030,100,5,5)
   adrop21 = new Drop(100333,100,5,5)
   adrop22 = new Drop(1030,100,5,5)
   adrop23 = new Drop(1030,100,5,5)
   adrop24 = new Drop(1030,100,5,5)
   adrop25 = new Drop(1030,100,5,5)
   adrop26 = new Drop(1030,100,5,5)
   adrop27 = new Drop(10330,100,5,5)
   adrop28 = new Drop(10330,100,5,5)
   adrop29 = new Drop(1030,100,5,5)
   adrop30 = new Drop(1030,100,5,5)
   adrop31 = new Drop(1300,100,5,5)
   adrop32 = new Drop(1020,100,5,5)
   adrop33 = new Drop(10220,100,5,5)
   adrop34 = new Drop(10022,100,5,5)
   adrop35 = new Drop(1200,100,5,5)
   adrop36 = new Drop(2100,100,5,5)
   adrop37 = new Drop(2100,100,5,5)
   adrop38 = new Drop(12200,100,5,5)
   adrop39 = new Drop(12200,100,5,5)
   adrop40 = new Drop(1200,100,5,5)
}

function draw(){
   
    background("black");

    text.size=125;
    text("RAINY DAY", 100,100);
   

    if(World.frameCount%12==0){
        quand.addImage("THUNDER",range)
    }

    drop1.display();
    drop2.display();
    drop3.display();
    drop5.display();
    drop6.display();
    drop7.display();
    drop8.display();
    drop9.display();
    drop10.display();
    drop11.display();
    drop12.display();
    drop13.display();
    drop14.display();
    drop15.display();
    drop16.display();
    drop17.display();
    drop18.display();
    drop19.display();
    drop20.display();
    drop21.display();
    drop22.display();
    drop23.display();
    drop24.display();
    drop25.display();
    drop26.display();
    drop27.display();
    drop28.display();
    drop29.display();
    drop30.display();
    drop31.display();
    drop32.display();
    drop33.display();
    drop34.display();
    drop35.display();
    drop36.display();
    drop37.display();
    drop38.display();
    drop39.display();
    drop40.display();




    adrop1.display();
    adrop2.display();
    adrop3.display();
    adrop5.display();
    adrop6.display();
    adrop7.display();
    adrop8.display();
    adrop9.display();
    adrop10.display();
    adrop11.display();
    adrop12.display();
    adrop13.display();
    adrop14.display();
    adrop15.display();
    adrop16.display();
    adrop17.display();
    adrop18.display();
    adrop19.display();
    adrop20.display();
    adrop21.display();
    adrop22.display();
    adrop23.display();
    adrop24.display();
    adrop25.display();
    adrop26.display();
    adrop27.display();
    adrop28.display();
    adrop29.display();
    adrop30.display();
    adrop31.display();
    adrop32.display();
    adrop33.display();
    adrop34.display();
    adrop35.display();
    adrop36.display();
    adrop37.display();
    adrop38.display();
    adrop39.display();
    adrop40.display();
    
    umbrella1.display();
    umbrella2.display();
    umbrella3.display();
    umbrella4.display();

    Engine.update(engine);
}   

