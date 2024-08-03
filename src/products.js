import imageProduct1 from "./assets/images/1-anhbia.jpg";
import imageProduct2 from "./assets/images/2-audi-rs6-avant.jpg";
import imageProduct3 from "./assets/images/3-Lamborghini Hurucán.jpg";
import imageProduct4 from "./assets/images/4-Audi R8.jpg";
import imageProduct5 from "./assets/images/5-BMW M5.jpg";
import imageProduct6 from "./assets/images/6-BMW M6.png";
import imageProduct7 from "./assets/images/7- Audi S8 5.2 FSI quattro.jpg";
import imageProduct8 from "./assets/images/8 - Dodge Ram SRT-10.jpg";
import imageProduct9 from "./assets/images/9 -Lamborghini Gallardo.jpg";
import imageProduct10 from "./assets/images/10 -Dodge Viper.jpg";
import imageProduct11 from "./assets/images/11 - Lexus LFA.jpg";
import imageProduct12 from "./assets/images/12 - Volkswagen Touareg V10 TDI.jpg";
import imageProduct13 from "./assets/images/13 - Porsche Carrera GT.jpg";
import imageProduct14 from "./assets/images/14 - McLaren Solus GT.jpg";

export const products = [
  {
    id: 1,
    name: "V-10",
    price: 161395,
    image: imageProduct1,
    description:
      "Production cars that use V-10 power are rare. There are just a small handful that exist, each greater than the last. We love them for their mighty power delivery and unique pitch. These are the best V-10-powered cars ever made.",
    slug: "v-10",
  },
  {
    id: 2,
    name: "2008-2010 Audi RS6 Avant",
    price: 160000,
    image: imageProduct2,
    description:
      "Though it was never sold in the U.S., the last-gen Audi RS6 Avant remains one of the coolest ten-cylinder cars out there. Equipped with a twin-turbo 5.0-liter V-10 originating from the naturally aspirated Lamborghini Gallardo, it makes an explosive 572 horsepower and 479 lb.-ft. of torque. Not bad for a station-wagon.",
    slug: "audi-rs6-avant",
  },
  {
    id: 3,
    name: "2015-2023 Lamborghini Hurucán",
    price: 249865,
    image: imageProduct3,
    description:
      "No matter which version of the Lamborghini Huracán you prefer, you're getting a naturally aspirated 5.2 V-10 that can make up to 631 hp. Whether you want to set a Nürburgring lap record or leave your Raptor-driving friends in the dust, there's a mid-engine Italian supercar for you.",
    slug: "lamborghini-hurucan",
  },
  {
    id: 4,
    name: "2009-2023 Audi R8",
    price: 158600,
    image: imageProduct4,
    description:
      "Not long after the R8 came out, Audi introduced the 5.2 liter V10 version, an engine also based off of Lamborghini's Gallardo LP560-4. Performance was impressive: 525 bhp and 391 lb.-ft. of torque. Now, the top-level R8 makes an incredible 602 hp.",
    slug: "audi-r8",
  },
  {
    id: 5,
    name: "2006-2010 BMW M5",
    price: 89575,
    image: imageProduct5,
    description:
      "The mid-2000s was an age where carmakers could slap big engines into big sedans and no one complained. The 2006 M5 is the product of such a sentiment. Bellowing up to a redline of 8250 rpm, the 5.0 liter, F1-inspired V-10 produced 500 hp and 380 lb-ft of torque.",
    slug: "bmw-m5",
  },
  {
    id: 6,
    name: "2006-2010 BMW M6",
    price: 99795,
    image: imageProduct6,
    description:
      "The M5 wasn't the only BMW M car to receive that magnificent 5.0-liter V-10 power plant. The big-boy two-door M6 got the same powertrain, paired to either a seven-speed single-clutch automated manual or a traditional six-speed.",
    slug: "bmw-m6",
  },
  {
    id: 7,
    name: "2006-2010 Audi S8 5.2 FSI quattro",
    price: 51874,
    image: imageProduct7,
    description:
      "As one of the ultimate sleeper cars, the Audi S8 uses a 5.2 liter Lamborghini-related V-10 to haul its 4,300 lb. body from 0-60 in 4.8 seconds. The tuxedo-trim good looks and everyday usability made this car an excellent balance between work and play.",
    slug: "audi-s8-5.2-fsi-quattro",
  },
  {
    id: 8,
    name: "2004-2006 Dodge Ram SRT-10",
    price: 45795,
    image: imageProduct8,
    description:
      "Gaudy body kit and flashy wheels aside, the Dodge Ram SRT-10 doesn't look much different from your average 1500. But under the hood rests a gargantuan 8.3-liter naturally aspirated V-10 borrowed from the Viper, paired to an optional T-56 manual transmission. It remains the ultimate performance truck.",
    slug: "dodge-ram-srt-10",
  },
  {
    id: 9,
    name: "2004-2014 Lamborghini Gallardo",
    price: 97555,
    image: imageProduct9,
    description:
      "The Gallardo will always have a special place in our hearts as the first baby Lambo, as it was the car that saved the brand. An Italian beauty with a German heart, the mid-mounted V-10 produced 493 bhp and matured across 10 model years, birthing dozens of iterations and special editions.",
    slug: "lamborghini-gallardo",
  },
  {
    id: 10,
    name: "1991-2017 Dodge Viper",
    price: 51645,
    image: imageProduct10,
    description:
      "The Viper may be dead now, but it sure went out with a bang. The track-ready ACR version is a beast on the circuit, with a big 645-horsepower 8.4-liter V10 that makes one hell of a noise. Too pricey for you? Early models are exciting too, and can be had for about the price of an average new car.",
    slug: "dodge-viper",
  },
  {
    id: 11,
    name: "2010-2012 Lexus LFA",
    price: 375000,
    image: imageProduct11,
    description: `Have you heard the pipes on this thing? Lexus teamed up with Yamaha's musical instrument division and they tuned the LFA's engine note like it was a guitar. Described by Toyota engineers as a "roar of an angel," we agree wholeheartedly. The 553 hp seems almost secondary. Almost.`,
    slug: "lexus-lfa",
  },
  {
    id: 12,
    name: "2002-2008 Volkswagen Touareg V10 TDI",
    price: 68340,
    image: imageProduct12,
    description:
      "How cool is a diesel-powered V-10? Cool enough for U.S. emissions regulations to cancel the Touareg TDI's sales here (twice). Twin turbos aid the ten cylinders, and the engine produces 310 hp and 553 lb-ft of torque—enough to move the 5825 lb. body out and around town.",
    slug: "volkswagen-touareg-v10-tdi",
  },
  {
    id: 13,
    name: "2004-2006 Porsche Carrera GT",
    price: 450000,
    image: imageProduct13,
    description:
      "Where to begin with this holiest of holies, the infamous Widow-Maker? Perhaps that it can trace its lineage back to Le Mans and F1 cars? Or that the 5.7-liter V-10 produced 605 hp? Amidst the engine shrieks from the lighter-than-air flywheel, this is one of the greatest sports cars ever made.",
    slug: "porsche-carrera-gt",
  },
  {
    id: 14,
    name: "2023 McLaren Solus GT",
    price: 2500000,
    image: imageProduct14,
    description:
      "The McLaren Solus GT is the by far the newest V-10-powered car on this list. It's a track-only special with a unique 5.2-liter engine that revs to 10,000 rpm and has 829 hp and 479 lb-ft of torque. Thanks to its slim single-seater design and carbon fiber monocoque, it weighs just 2205 pounds. Sounds like a riot to us.",
    slug: "mcLaren-solus-gt",
  },
];
