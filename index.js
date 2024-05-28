const JFF = [
    { name: "1992-1996 Toyota Carina", image: "Pics/Toyota_Carina.jpg" },   
    { name: "1996-2000 Honda Civic Si", image: "Pics/Honda_Civic.jpg" },        
    { name: "1994-2001 Honda Integra DC2", image: "Pics/DC2.jpg" },             
    { name: "1995-2000 Toyota Corolla Levin AE111", image: "Pics/AE111.jpg" },    
    { name: "1991-1997 Mazda MX6", image: "Pics/mx6.jpeg" },
    { name: "1991-1995 Honda Civic SIR II", image: "Pics/EG6.jpg"}
  ]; 

//Variables containing all the cars in an Array
//(separated by Region and wheels driven)
// J=Japan, A=America, E=Europe
// FF=Front Engine Front Wheel Drive
// FR=Front Engine Rear Wheel Drive 
 // F4=Front Engine 4 Wheel Drive

  const JFR = [
    { name: "1991-2002 Mazda RX7", image: "Pics/RX7.jpg" },
    { name: "1980-1990 Isuzu Piazza", image: "Pics/Piazza.jpg" },
    { name: "1988-1993 Nissan Silvia S13", image: "Pics/Silvia.jpg" },
    { name: "1988-1994 Nissan Cefiro", image: "Pics/Cefiro.jpg" },
    { name: "1983-1987 Toyota Sprinter Trueno", image: "Pics/AE86.jpg" },
    { name: "1997-2005 Toyota Aristo", image: "Pics/Aristo.jpg" }  
  ];

  const JF4 = [
    { name: "1999-2001 Mitsubishi Lancer Evolution VI", image: "Pics/VI.jpg" },
    { name: "1989-1994 Nissan Skyline R32 GTR", image: "Pics/GTR.jpg" },
    { name: "1992-2000 Subaru Impreza WRX STI", image: "Pics/STI.jpg" },
    { name: "1998-2007 Toyota Land Cruiser", image: "Pics/LandCruiser.jpg" },
    { name: "2004-2006 Subaru Forester STI", image: "Pics/Forester.jpg" },
    { name: "1995-1998 Nissan Skyline R33 GTR", image: "Pics/R33.jpg" },
    { name: "1999-2002 Nissan Skyline R34 GTR", image: "Pics/R34.jpg" }  
  ];

  const AFF = [
    { name: "1984-1986 Dodge Omni GLH", image: "Pics/Omni.jpg" },
    { name: "1971-1978 Cadillac Eldorado", image: "Pics/Eldorado.jpg" },
    { name: "1993-2007 Ford Probe", image: "Pics/Probe.jpeg" },
    { name: "2005-2010 Chevrolet Cobalt SS", image: "Pics/Cobalt.jpg" },
    { name: "1986-1992 Oldsmobile Toronado", image: "Pics/Toronado.jpg" }
  ];

  const AFR = [
    { name: "1994-1996 Chevrolet Impala SS", image: "Pics/Impala.jpg" },
    { name: "1998-2012 Ford Crown Victoria", image: "Pics/CrownVic.jpeg" },
    { name: "1969-1974 Dodge Challenger", image: "Pics/Challenger.jpeg" },
    { name: "1967-1968 Shelby Cobra GT350", image: "Pics/350GT.jpg" },
    { name: "1970-1974 Plymouth Barracuda", image: "Pics/Barracuda.jpg" }
  ];

  const AF4 = [
    { name: "2007-2014 Cadillac Escalade", image: "Pics/Escalade.jpg" },
    { name: "1999-2004 Ford F150 SVT Lightning", image: "Pics/F150.jpg" },
    { name: "1978-1979 Dodge Li'l Red Truck", image: "Pics/Red.jpg" },
    { name: "1996-2006 Jeep Wrangler", image: "Pics/Wrangler.jpg" },
    { name: "2016-2018 Ford Focus RS", image: "Pics/FocusRS.jpg" }
  ];

  const EFF = [
    { name: "1986-1992 Lancia Thema 8.32", image: "Pics/Thema.jpg" },
    { name: "2012-Today Abarth 595", image: "Pics/595.jpg" },
    { name: "1959-2000 Mini Austin", image: "Pics/Mini.jpg" },
    { name: "2002-2005 Alfa Romeo 156 3.2 GTA", image: "Pics/156.jpg" },
    { name: "1980-2008 Zastava Yugo", image: "Pics/Yugo.jpg" }
  ];

  const EFR = [
    { name: "1967-1968 Triumph TR5", image: "Pics/TR5.jpg" },
    { name: "2001-2003 Mercedes C32 AMG", image: "Pics/C32.jpg" },
    { name: "2005-2011 BMW 335i", image: "Pics/335i.JPG" },
    { name: "1977-1981 Talbot Sunbeam Lotus", image: "Pics/Talbot.jpg" },
    { name: "1962-1973 Lotus Elan", image: "Pics/Elan.jpeg" }
  ];

  const EF4 = [
    { name: "1984-1985 Audi Sport Quattro", image: "Pics/quattro.jpeg" },
    { name: "2009-2016 Audi A4 Allroad", image: "Pics/Allroad.jpg" },
    { name: "2016-2020 Jaguar F-Pace", image: "Pics/FPace.jpg" },
    { name: "2002-2004 Volkswagen Golf R32", image: "Pics/R32.jpg" },
    { name: "1991-1993 Lancia Delta Integrale Evoluzione", image: "Pics/Delta.jpg" }
  ];



let american = false;          // Variables so that all buttons aren't visible at the same time
let european = false;  
let japanese = false;

document.getElementById("American").addEventListener("click", American, true);
document.getElementById("European").addEventListener("click", European, true);   // EventListener to check if the 3 main buttons were clicked
document.getElementById("Japanese").addEventListener("click", Japanese, true);

document.getElementById('AFFButton').style.display = 'none';
document.getElementById('AFRButton').style.display = 'none';
document.getElementById('AF4Button').style.display = 'none';
document.getElementById('EFFButton').style.display = 'none';    // Prevents the 3 buttons for each category to be shown
document.getElementById('EFRButton').style.display = 'none';    // when the site first loads up
document.getElementById('EF4Button').style.display = 'none';
document.getElementById('JFFButton').style.display = 'none';
document.getElementById('JFRButton').style.display = 'none';
document.getElementById('JF4Button').style.display = 'none';

function American() {
    american = true;
    european = false;
    japanese = false;
    document.getElementById('AFFButton').style.display = 'block';
    document.getElementById('AFRButton').style.display = 'block';
    document.getElementById('AF4Button').style.display = 'block';      // These 3 functions make the 3 buttons visible for the right category
    document.getElementById('EFFButton').style.display = 'none';
    document.getElementById('EFRButton').style.display = 'none';
    document.getElementById('EF4Button').style.display = 'none';
    document.getElementById('JFFButton').style.display = 'none';
    document.getElementById('JFRButton').style.display = 'none';
    document.getElementById('JF4Button').style.display = 'none';
}

function European() {
    american = false;
    european = true;
    japanese = false;
    document.getElementById('EFFButton').style.display = 'block';
    document.getElementById('EFRButton').style.display = 'block';
    document.getElementById('EF4Button').style.display = 'block';
    document.getElementById('AFFButton').style.display = 'none';
    document.getElementById('AFRButton').style.display = 'none';
    document.getElementById('AF4Button').style.display = 'none';
    document.getElementById('JFFButton').style.display = 'none';
    document.getElementById('JFRButton').style.display = 'none';
    document.getElementById('JF4Button').style.display = 'none';
}

function Japanese() {
    american = false;
    european = false;
    japanese = true;
    document.getElementById('JFFButton').style.display = 'block';
    document.getElementById('JFRButton').style.display = 'block';
    document.getElementById('JF4Button').style.display = 'block';
    document.getElementById('AFFButton').style.display = 'none';
    document.getElementById('AFRButton').style.display = 'none';
    document.getElementById('AF4Button').style.display = 'none';
    document.getElementById('EFFButton').style.display = 'none';
    document.getElementById('EFRButton').style.display = 'none';
    document.getElementById('EF4Button').style.display = 'none';
}

function generateCarFF() {

    document.getElementById('FRShow').textContent = '';
    document.getElementById('F4Show').textContent = '';
    document.getElementById('FRImage').style.display = 'none';   // Precaution to prevent the previous image and text from showing up 
    document.getElementById('F4Image').style.display = 'none';

    let car;
    if (american) {
        car = AFF  [Math.floor(Math.random()*AFF.length)];
    } else if (european) {
        car = EFF  [Math.floor(Math.random()*EFF.length)];    // This randomly selects one of the random FF cars in the Array depending
    } else if (japanese) {                                    //on which of the buttons was clicked
        car = JFF  [Math.floor(Math.random()*JFF.length)];
    }
    document.getElementById('FFShow').textContent = car.name;
    document.getElementById('FFImage').src = car.image;             // Makes the image and text visible on the page
    document.getElementById('FFImage').style.display = 'block';
}

function generateCarFR() {

    document.getElementById('FFShow').textContent = '';
    document.getElementById('F4Show').textContent = '';           // This function and the next one are exactly the same as the last one
    document.getElementById('FFImage').style.display = 'none';    // but with FR and F4 cars instead
    document.getElementById('F4Image').style.display = 'none';

    let car;
    if (american) {
        car = AFR  [Math.floor(Math.random()*AFR.length)];
    } else if (european) {
        car = EFR  [Math.floor(Math.random()*EFR.length)];
    } else if (japanese) {
        car = JFR  [Math.floor(Math.random()*JFR.length)];
    }
    document.getElementById('FRShow').textContent = car.name;
    document.getElementById('FRImage').src = car.image;
    document.getElementById('FRImage').style.display = 'block';
}

function generateCarF4() {

    document.getElementById('FRShow').textContent = '';
    document.getElementById('FFShow').textContent = '';
    document.getElementById('FRImage').style.display = 'none';
    document.getElementById('FFImage').style.display = 'none';

    let car;
    if (american) {
        car = AF4  [Math.floor(Math.random()*AF4.length)];
    } else if (european) {
        car = EF4  [Math.floor(Math.random()*EF4.length)];
    } else if (japanese) {
        car = JF4  [Math.floor(Math.random()*JF4.length)];
    }
    document.getElementById('F4Show').textContent = car.name;
    document.getElementById('F4Image').src = car.image;
    document.getElementById('F4Image').style.display = 'block';
}

document.getElementById('AFFButton').addEventListener('click', generateCarFF);
document.getElementById('AFRButton').addEventListener('click', generateCarFR);
document.getElementById('AF4Button').addEventListener('click', generateCarF4);
document.getElementById('EFFButton').addEventListener('click', generateCarFF);
document.getElementById('EFRButton').addEventListener('click', generateCarFR);    // Event listener for each of the Buttons  
document.getElementById('EF4Button').addEventListener('click', generateCarF4);
document.getElementById('JFFButton').addEventListener('click', generateCarFF);
document.getElementById('JFRButton').addEventListener('click', generateCarFR);
document.getElementById('JF4Button').addEventListener('click', generateCarF4);




