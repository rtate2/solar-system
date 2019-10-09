const planets = [
  {
    Name: 'Mercury',
    imageUrl: 'src/solarSystem/MercuryE10.jpg',
    Description: "Mercury is the smallest planet in our solar system. Along with Venus, Earth, and Mars, Mercury is one of the rocky planets. It has a solid surface that is covered with craters. It has a thin atmosphere, and it doesn't have any moons.",
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'n/a',
  },
  {
    Name: 'Venus',
    imageUrl: 'src/solarSystem/VenusE10.jpg',
    Description: "Venus is the second planet from the Sun, and is Earth's closest neighbor in the solar system. Venus is the brightest object in the sky after the Sun and the Moon, and sometimes looks like a bright star in the morning or evening sky. The planet is a little smaller than Earth, and is similar to Earth inside.",
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'n/a',
  },
  {
    Name: 'Earth',
    imageUrl: 'src/solarSystem/EarthE10.jpg',
    Description: "Earth, our home, is the third planet from the sun. It's the only planet known to have an atmosphere containing free oxygen, oceans of water on its surface and, of course, life. Earth is the fifth largest of the planets in the solar system.",
    isGasPlanet: false,
    numberOfMoons: 1,
    nameOfLargestMoon: 'moon',
  },
  {
    Name: 'Mars',
    imageUrl: 'src/solarSystem/MarsE10.jpg',
    Description: 'Mars is the fourth planet from the Sun and is the second smallest planet in the solar system. Named after the Roman god of war, Mars is also often described as the “Red Planet” due to its reddish appearance. Mars is a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.',
    isGasPlanet: false,
    numberOfMoons: 2,
    nameOfLargestMoon: 'Phobos',
  },
  {
    Name: 'Jupiter',
    imageUrl: 'src/solarSystem/JupiterE10.png',
    Description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter has been known to astronomers since antiquity.',
    isGasPlanet: true,
    numberOfMoons: 79,
    nameOfLargestMoon: 'Ganymede',
  },
  {
    Name: 'Saturn',
    imageUrl: 'src/solarSystem/SaturnE10.jpeg',
    Description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.',
    isGasPlanet: true,
    numberOfMoons: 82,
    nameOfLargestMoon: 'Titan',
  },
  {
    Name: 'Uranus',
    imageUrl: 'src/solarSystem/UranusE10.jpg',
    Description: 'Uranus (from the Latin name Ūranus for the Greek god Οὐρανός) is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. ... Like the other giant planets, Uranus has a ring system, a magnetosphere, and numerous moons.',
    isGasPlanet: true,
    numberOfMoons: 27,
    nameOfLargestMoon: 'Ariel',
  },
  {
    Name: 'Neptune',
    imageUrl: 'src/solarSystem/NeptuneE10.png',
    Description: "Neptune is dark, cold, and very windy. Neptune is very similar to Uranus. It's made of a thick soup of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen, helium, and methane.",
    isGasPlanet: true,
    numberOfMoons: 13,
    nameOfLargestMoon: 'Triton',
  },
];

const getPlanets = () => planets;

export default { getPlanets };
