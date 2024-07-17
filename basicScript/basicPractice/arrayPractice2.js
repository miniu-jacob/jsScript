let animals = [
    'Aardvark',
    'Albatross',
    'Alligator',
    'Alpaca',
    'Ant',
    'Ape',
    'Armadillo',
    'Donkey',
    'Baboon',
    'Badger',
    'Barracuda',
    'Bat',
    'Bear',
    'Beaver',
    'Bee',
    'Bison',
    'Cat',
    'Caterpillar',
    'Cattle',
    'Chamois',
    'Cheetah',
    'Chicken',
    'Chimpanzee',
    'Chinchilla',
    'Chough',
    'Clam',
    'Cobra',
    'Cockroach',
    'Cod',
    'Cormorant',
    'Dugong',
    'Dunlin',
    'Eagle',
    'Echidna',
    'Eel',
    'Eland',
    'Elephant',
    'Elk',
    'Emu',
    'Falcon',
    'Ferret',
    'Finch',
    'Fish',
    'Flamingo',
    'Fly',
    'Fox',
    'Frog',
    'Gaur',
    'Gazelle',
    'Gerbil',
    'Giraffe',
    'Grasshopper',
    'Heron',
    'Herring',
    'Hippopotamus',
    'Hornet',
    'Horse',
    'Kangaroo',
    'Kingfisher',
    'Koala',
    'Kookabura',
    'Moose',
    'Narwhal',
    'Newt',
    'Nightingale',
    'Octopus',
    'Okapi',
    'Opossum',
    'Quail',
    'Quelea',
    'Quetzal',
    'Rabbit',
    'Raccoon',
    'Rail',
    'Ram',
    'Rat',
    'Raven',
    'Red deer',
    'Sandpiper',
    'Sardine',
    'Sparrow',
    'Spider',
    'Spoonbill',
    'Squid',
    'Squirrel',
    'Starling',
    'Stingray',
    'Tiger',
    'Toad',
    'Whale',
    'Wildcat',
    'Wolf',
    'Worm',
    'Wren',
    'Yak',
    'Zebra',
];

console.log(animals);
console.log(animals.pop());
console.log(animals);
animals.push('Dog');
console.log(animals);
console.log(animals.indexOf('Dog'));
console.log(animals.includes('Human'));
console.log(animals.includes('Cat'));
console.log('Red deer있어?: ', animals.includes('Red deer'));
console.log('인덱스 몇번에 있어? ', animals.indexOf('Red deer'));
animals.splice(animals.indexOf('Red deer'), 1, 'Deer');
console.log('Red deer있어? ', animals.includes('Red deer'));
console.log('Deer있어? ', animals.includes('Deer'));
console.log('인덱스 몇번에 있어? ', animals.indexOf('Deer'));

console.log('Tiger 있어? ', animals.includes('Tiger'));
console.log('인덱스 몇번에 있어? ', animals.indexOf('Tiger'));
console.log(animals.slice(animals.indexOf('Tiger') - 1));

console.log(animals);
