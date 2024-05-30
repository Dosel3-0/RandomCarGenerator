// Arrays containing all the cars
const cars = {
  american: {
      FF: [
          { name: "1986-1986 Shelby Dodge Omni GLHS", image: "Pics/Omni.jpg" },
          { name: "1971-1978 Cadillac Eldorado", image: "Pics/Eldorado.jpg" },
          { name: "1992-1997 Ford Probe", image: "Pics/Probe.jpeg" },
          { name: "2005-2010 Chevrolet Cobalt SS", image: "Pics/Cobalt.jpg" },
          { name: "1986-1992 Oldsmobile Toronado", image: "Pics/Toronado.jpg" }
      ],
      FR: [
          { name: "1994-1996 Chevrolet Impala SS", image: "Pics/Impala.jpg" },
          { name: "1998-2012 Ford Crown Victoria", image: "Pics/CrownVic.jpeg" },
          { name: "1969-1974 Dodge Challenger", image: "Pics/Challenger.jpeg" },
          { name: "1967-1968 Shelby Cobra GT350", image: "Pics/350GT.jpg" },
          { name: "1970-1974 Plymouth Barracuda", image: "Pics/Barracuda.jpg" }
      ],
      F4: [
          { name: "2007-2014 Cadillac Escalade", image: "Pics/Escalade.jpg" },
          { name: "1999-2004 Ford F150 SVT Lightning", image: "Pics/F150.jpg" },
          { name: "1978-1979 Dodge Li'l Red Truck", image: "Pics/Red.jpg" },
          { name: "1996-2006 Jeep Wrangler", image: "Pics/Wrangler.jpg" },
          { name: "2016-2018 Ford Focus RS", image: "Pics/FocusRS.jpg" }
      ]
  },
  european: {
      FF: [
          { name: "1986-1992 Lancia Thema 8.32", image: "Pics/Thema.jpg" },
          { name: "2012-Today Abarth 595", image: "Pics/595.jpg" },
          { name: "1959-2000 Mini Austin", image: "Pics/Mini.jpg" },
          { name: "2002-2005 Alfa Romeo 156 3.2 GTA", image: "Pics/156.jpg" },
          { name: "1980-2008 Zastava Yugo", image: "Pics/Yugo.jpg" }
      ],
      FR: [
          { name: "1967-1968 Triumph TR5", image: "Pics/TR5.jpg" },
          { name: "2001-2003 Mercedes C32 AMG", image: "Pics/C32.jpg" },
          { name: "2006-2012 BMW 335i", image: "Pics/335i.JPG" },
          { name: "1977-1981 Talbot Sunbeam Lotus", image: "Pics/Talbot.jpg" },
          { name: "1962-1973 Lotus Elan", image: "Pics/Elan.jpeg" }
      ],
      F4: [
          { name: "1984-1985 Audi Sport Quattro", image: "Pics/quattro.jpeg" },
          { name: "2009-2016 Audi A4 Allroad", image: "Pics/Allroad.jpg" },
          { name: "2016-2020 Jaguar F-Pace", image: "Pics/FPace.jpg" },
          { name: "2002-2004 Volkswagen Golf R32", image: "Pics/R32.jpg" },
          { name: "1991-1993 Lancia Delta Integrale Evoluzione", image: "Pics/Delta.jpg" }
      ]
  },
  japanese: {
      FF: [
          { name: "1992-1996 Toyota Carina", image: "Pics/Toyota_Carina.jpg" },
          { name: "1996-2000 Honda Civic Si", image: "Pics/Honda_Civic.jpg" },
          { name: "1994-2001 Honda Integra DC2", image: "Pics/DC2.jpg" },
          { name: "1995-2000 Toyota Corolla Levin AE111", image: "Pics/AE111.jpg" },
          { name: "1991-1997 Mazda MX6", image: "Pics/mx6.jpeg" },
          { name: "1991-1995 Honda Civic SIR II", image: "Pics/EG6.jpg" }
      ],
      FR: [
          { name: "1991-2002 Mazda RX7", image: "Pics/RX7.jpg" },
          { name: "1980-1990 Isuzu Piazza", image: "Pics/Piazza.jpg" },
          { name: "1988-1993 Nissan Silvia S13", image: "Pics/Silvia.jpg" },
          { name: "1988-1994 Nissan Cefiro", image: "Pics/Cefiro.jpg" },
          { name: "1983-1987 Toyota Sprinter Trueno", image: "Pics/AE86.jpg" },
          { name: "1997-2005 Toyota Aristo", image: "Pics/Aristo.jpg" }
      ],
      F4: [
          { name: "1999-2001 Mitsubishi Lancer Evolution VI", image: "Pics/VI.jpg" },
          { name: "1989-1994 Nissan Skyline R32 GTR", image: "Pics/GTR.jpg" },
          { name: "1992-2000 Subaru Impreza WRX STI", image: "Pics/STI.jpg" },
          { name: "1998-2007 Toyota Land Cruiser", image: "Pics/LandCruiser.jpg" },
          { name: "2004-2006 Subaru Forester STI", image: "Pics/Forester.jpg" },
          { name: "1995-1998 Nissan Skyline R33 GTR", image: "Pics/R33.jpg" },
          { name: "1999-2002 Nissan Skyline R34 GTR", image: "Pics/R34.jpg" }
      ]
  }
};

let selectedCategory = null;

document.getElementById("American").addEventListener("click", () => selectCategory('american'));
document.getElementById("European").addEventListener("click", () => selectCategory('european'));
document.getElementById("Japanese").addEventListener("click", () => selectCategory('japanese'));

document.getElementById('FFButton').addEventListener('click', () => generateCar('FF'));
document.getElementById('FRButton').addEventListener('click', () => generateCar('FR'));
document.getElementById('F4Button').addEventListener('click', () => generateCar('F4'));

function selectCategory(category) {
  selectedCategory = category;
}

function generateCar(drivetrain) {
  if (!selectedCategory) return;

  const carList = cars[selectedCategory][drivetrain];
  const car = carList[Math.floor(Math.random() * carList.length)];

  document.getElementById('FFShow').textContent = drivetrain === 'FF' ? car.name : '';
  document.getElementById('FRShow').textContent = drivetrain === 'FR' ? car.name : '';
  document.getElementById('F4Show').textContent = drivetrain === 'F4' ? car.name : '';

  document.getElementById('FFImage').style.display = drivetrain === 'FF' ? 'block' : 'none';
  document.getElementById('FRImage').style.display = drivetrain === 'FR' ? 'block' : 'none';
  document.getElementById('F4Image').style.display = drivetrain === 'F4' ? 'block' : 'none';

  document.getElementById('FFImage').src = drivetrain === 'FF' ? car.image : '';
  document.getElementById('FRImage').src = drivetrain === 'FR' ? car.image : '';
  document.getElementById('F4Image').src = drivetrain === 'F4' ? car.image : '';
}
