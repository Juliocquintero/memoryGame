const body = document.querySelector('body')
const gameCards = document.getElementById('game-cards')
const gameInstructions = document.getElementById('gameInstructions')
const timeGame = document.getElementById('timeGame')
const gameDescription = document.getElementById('gameDescription')

const gamebutton = document.getElementById('gamebutton')

let minutes = '00'
let seconds = '00'
let time
let status = true


let paso = 0
let cartaElegida = undefined
let carta2Elegida = undefined
let CartaADestapar = undefined
let Carta2ADestapar = undefined

cartasDestapadas = 0

const personajes = [

    {//IronMan[0]
        "id": "0",
        "name": "Iron Man",
        "powerstats": {
            "intelligence": "100",
            "strength": "85",
            "speed": "58",
            "durability": "85",
            "power": "100",
            "combat": "64"
        },
        "biography": {
            "full-name": "Tony Stark",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Iron Knight",
                "Hogan Potts",
                "Spare Parts Man",
                "Cobalt Man II",
                "Crimson Dynamo",
                "Ironman"
            ],
            "place-of-birth": "Long Island, New York",
            "first-appearance": "Tales of Suspence #39 (March, 1963)",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "6'6",
                "198 cm"
            ],
            "weight": [
                "425 lb",
                "191 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "Black"
        },
        "work": {
            "occupation": "Inventor, Industrialist; former United States Secretary of Defense",
            "base": "Seattle, Washington"
        },
        "connections": {
            "group-affiliation": "Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.",
            "relatives": "Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg"
    },
    //Capitan America[1]
    {
        "id": "1",
        "name": "Captain America",
        "powerstats": {
            "intelligence": "69",
            "strength": "19",
            "speed": "38",
            "durability": "55",
            "power": "60",
            "combat": "100"
        },
        "biography": {
            "full-name": "Steve Rogers",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Nomad",
                "The Captain"
            ],
            "place-of-birth": "Manhattan, New York City, New York",
            "first-appearance": "Captain America Comics #1 (March 1941)",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "6'2",
                "188 cm"
            ],
            "weight": [
                "240 lb",
                "108 kg"
            ],
            "eye-color": "blue",
            "hair-color": "blond"
        },
        "work": {
            "occupation": "Adventurer, federal official, intelligence operative; former soldier, Hydra agent, liaison between S.H.I.E.L.D. and the Avengers, police officer, teacher, sparring partner.",
            "base": "New York City"
        },
        "connections": {
            "group-affiliation": "Secret Avengers (Black OPS Unit Formerly,The Avengers, Secret Avengers (Civil War), New Avengers, formerly The Invaders, Secret Defenders The Redeemers; formerly partner of Bucky, Golden Girl, Rick Jones, Falcon, Demolition-Man and Nomad (Jack Monroe)",
            "relatives": "Joseph (father, deceased), Sara (mother, deceased), Ian Zola (Nomad) (adopted son)"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg"

    },
    //2
    {
        "id": "2",
        "name": "Ant-Man",
        "powerstats": {
            "intelligence": "100",
            "strength": "18",
            "speed": "23",
            "durability": "28",
            "power": "32",
            "combat": "32"
        },
        "biography": {
            "full-name": "Hank Pym",
            "alter-egos": "Giant-Man, Goliath, Wasp II, Yellowjacket",
            "aliases": [
                "Hank Pym",
                "Doctor Pym",
                "Ant-Man",
                "Goliath",
                "Yellowjacket",
                "Wasp",
                "Earth's Scientist Supreme"
            ],
            "place-of-birth": "Elmsford, New York",
            "first-appearance": "Tales to Astonish #27 (January, 1962) (as Hank Pym)  Tales to Astonish #35 (September, 1962) (as Ant-Man)",
            "publisher": "Giant-Man",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "6'11",
                "211 cm"
            ],
            "weight": [
                "270 lb",
                "122 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "Blond"
        },
        "work": {
            "occupation": "Adventurer, Biochemist, former manager of Avengers Compound",
            "base": "Avengers Compound, Los Angeles; formerly Infinite Avengers Mansion; Captive aboard a Skrull ship; Avengers Mansion, New York City, New York"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/010ant_ons_crd_04.jpg"
    },
    //3
    {
        "id": "3",
        "name": "Black Panther",
        "powerstats": {
            "intelligence": "88",
            "strength": "16",
            "speed": "30",
            "durability": "60",
            "power": "41",
            "combat": "100"
        },
        "biography": {
            "full-name": "T'Challa",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Mr. Okonkwo",
                "The Man Without Fear",
                "Luke Charles",
                "Black Leopard",
                "the Client",
                "Coal Tiger",
                "has impersonated Daredevil and others on occasion"
            ],
            "place-of-birth": "Wakanda, Africa",
            "first-appearance": "Fantastic Four Vol. 1 #52 (1966)",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "6'0",
                "183 cm"
            ],
            "weight": [
                "200 lb",
                "90 kg"
            ],
            "eye-color": "Brown",
            "hair-color": "Black"
        },
        "work": {
            "occupation": "King and Chieftain of Wakanda, scientist; former school teacher",
            "base": "Wakanda, Mobile"
        },
        "connections": {
            "group-affiliation": "Formerly Fantastic Four, Secret Avengers, Avengers, Pendragons, Queen's Vengeance, former Fantastic Force financier",
            "relatives": "Bashenga (paternal ancestor, deceased), Azzuri the Wise (paternal grandfather, deceased), Nanali (paternal grandmother, deceased), Chanda (paternal grandfather, presumably deceased), T�Chaka (father, deceased), S'Yan (uncle, deceased), N�Yami (mother, deceased), Ramonda (stepmother), Hunter (adopted brother), Jakarra (half-brother), Shuri (sister), Ororo Munroe (wife), Joshua Itobo, Ishanta, Zuni, M'Koni, T'Shan (cousins), Wheeler (cousin by marriage, deceased), Billy Wheeler (1st cousin once removed)"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_ons_crd_02.jpg"

    },
    //4
    {
        "id": "4",
        "name": "Black Widow",
        "powerstats": {
            "intelligence": "75",
            "strength": "13",
            "speed": "33",
            "durability": "30",
            "power": "36",
            "combat": "100"
        },
        "biography": {
            "full-name": "Natasha Romanoff",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Yelena Belova",
                "Natasha Romanoff",
                "Natasha",
                "Tasha",
                "Madame Natasha",
                "Nancy Rushman",
                "Laura Matthers",
                "Nadine Roman",
                "\"Oktober\"",
                "Black Pearl",
                "Ebon Flame"
            ],
            "place-of-birth": "-",
            "first-appearance": "Tales of Suspense #52",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Female",
            "race": "Human",
            "height": [
                "5'7",
                "170 cm"
            ],
            "weight": [
                "131 lb",
                "59 kg"
            ],
            "eye-color": "Green",
            "hair-color": "Auburn"
        },
        "work": {
            "occupation": "Adventurer, Intelligence agent, former ballerina",
            "base": "Mobile"
        },
        "connections": {
            "group-affiliation": "Secret Avengers; formerly Thunderbolts (as Yelena Belova), Nick Fury, Mighty Avengers, S.H.I.E.L.D., Avengers, Champions of Los Angeles, Lady Liberators, KGB, \"Marvel Knights\", partner of Daredevil, Hawkeye, Boris Turgenov, Logan",
            "relatives": "Unnamed parents (presumed deceased); Alexi Shostakov (Red Guardian, estranged husband); Vindiktor (alleged brother, deceased)"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/scarlet_ons_crd_01.jpg"
    },
    //5
    {
        "id": "5",
        "name": "Falcon",
        "powerstats": {
            "intelligence": "38",
            "strength": "13",
            "speed": "50",
            "durability": "28",
            "power": "22",
            "combat": "64"
        },
        "biography": {
            "full-name": "Sam Wilson",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Sam Wilson",
                "(formerly) Captain America",
                "Blackbird",
                "Blackwing",
                "Brother Superhero"
            ],
            "place-of-birth": "New York, New York",
            "first-appearance": "Captain America #117 (September, 1969)",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "6'2",
                "188 cm"
            ],
            "weight": [
                "240 lb",
                "108 kg"
            ],
            "eye-color": "Brown",
            "hair-color": "Black"
        },
        "work": {
            "occupation": "Crimefighter, (former) freelance artist",
            "base": "New York, New York; formerly Avengers Mansion, New York City, New York; S.H.I.E.L.D. Helicarrier."
        },
        "connections": {
            "group-affiliation": "Mighty Avengers, Avengers, S.H.I.E.L.D.; partner of Redwing; formerly Heroes For Hire, partner of Captain America, Secret Avengers, S.H.I.E.L.D. Super-Agents (leader), Defenders, ally of Secret Warriors , Defenders for a Day",
            "relatives": "Paul Wilson (father, deceased); Darlene Wilson (mother, deceased); Sarah Wilson (sister), Gideon Wilson (brother); Jim Wilson (nephew, deceased); Jody Casper (nephew)"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/014fal_ons_crd_03.jpg"

    },
    //6
    {
    "id": "6",
    "name": "Gamora",
    "powerstats": {
        "intelligence": "75",
        "strength": "85",
        "speed": "42",
        "durability": "85",
        "power": "53",
        "combat": "100"
    },
    "biography": {
        "full-name": "Gamora Zen Whoberi Ben Titan",
        "alter-egos": "No alter egos found.",
        "aliases": [
            "The Deadliest Woman In The Universe",
            "The Most Dangerous Woman in the Galaxy"
        ],
        "place-of-birth": "Planet Zen Whoberi, Silican System, Milky Way",
        "first-appearance": "Strange Tales #180 (June, 1975)",
        "publisher": "Marvel Comics",
        "alignment": "good"
    },
    "appearance": {
        "gender": "Female",
        "race": "Zen-Whoberian",
        "height": [
            "6'0",
            "183 cm"
        ],
        "weight": [
            "170 lb",
            "77 kg"
        ],
        "eye-color": "Yellow",
        "hair-color": "Black"
    },
    "work": {
        "occupation": "Assassin, mercenary, adventurer",
        "base": "C.I.T.T.; formerly Godthab Omega, Monster Island, Sanctuary II and the pocket-dimension within the Soul Gem; Earth-7528"
    },
    "connections": {
        "group-affiliation": "Guardians of the Galaxy ; formerly Phalanx's Selects, Graces (Leader), Infinity Watch ; United Front ; former minion of Thanos; ally of Adam Warlock and Pip the Troll",
        "relatives": "Thanos (foster father), Thane (foster brother), Unnamed former Symbiote"
    },
    "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/022gam_ons_crd_01-1.jpg"

    },
    //7
    {
        "id": "7",
        "name": "Hawkeye",
        "powerstats": {
            "intelligence": "56",
            "strength": "12",
            "speed": "21",
            "durability": "10",
            "power": "29",
            "combat": "80"
        },
        "biography": {
            "full-name": "Clint Barton",
            "alter-egos": "Goliath, Ronin",
            "aliases": [
                "Ronin",
                "Goliath",
                "Golden Archer",
                "the Marksman",
                "Father Time",
                "Longbow"
            ],
            "place-of-birth": "Waverly, Iowa",
            "first-appearance": "Tales of Suspense #57 (September, 1964)",
            "publisher": "Goliath",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "6'3",
                "191 cm"
            ],
            "weight": [
                "230 lb",
                "104 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "Blond"
        },
        "work": {
            "occupation": "Adventurer",
            "base": "-"
        },
        "connections": {
            "group-affiliation": "Avengers, Thunderbolts, Avengers West Coast, Great Lakes Avengers, Shadows, Chain Gang, former partner of the Black Widow",
            "relatives": "Harold Barton (father, deceased), Edith Barton (mother, deceased), Bernard Barton (brother, deceased), Barbara Morse (wife, deceased)"
        },
        "image":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/018hcb_ons_crd_02.jpg"
    },
    //8
    {
        "id": "8",
        "name": "Hulk",
        "powerstats": {
            "intelligence": "88",
            "strength": "100",
            "speed": "63",
            "durability": "100",
            "power": "98",
            "combat": "85"
        },
        "biography": {
            "full-name": "Bruce Banner",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Annihilator",
                "Captain Universe",
                "Joe Fixit",
                "Mr. Fixit",
                "Mechano",
                "Professor",
                "Jade Jaws",
                "Golly Green Giant"
            ],
            "place-of-birth": "Dayton, Ohio",
            "first-appearance": "Incredible Hulk #1 (May, 1962)",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human / Radiation",
            "height": [
                "8'0",
                "244 cm"
            ],
            "weight": [
                "1400 lb",
                "630 kg"
            ],
            "eye-color": "Green",
            "hair-color": "Green"
        },
        "work": {
            "occupation": "Nuclear physicist, Agent of S.H.I.E.L.D.",
            "base": "(Banner) Hulkbuster Base, New Mexico, (Hulk) mobile, but prefers New Mexico"
        },
        "connections": {
            "group-affiliation": "Defenders, former leader of the new Hulkbusters, member of the Avengers, Pantheon, Titans Three, the Order, Hulkbusters of Counter-Earth-Franklin, alternate Fantastic Four",
            "relatives": "Betty Ross Talbot Banner (wife), Brian Banner (father, apparently deceased), Rebecca Banner (mother, deceased), Morris Walters (uncle), Elaine Banner Walters (aunt, deceased), Jennifer Walters (She-Hulk, cousin), Thaddeus E. 'Thunderbolt' Ross (father"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_03.jpg"
    },
    //9
    {
        "id": "9",
        "name": "Loki",
        "powerstats": {
            "intelligence": "88",
            "strength": "63",
            "speed": "46",
            "durability": "85",
            "power": "100",
            "combat": "60"
        },
        "biography": {
            "full-name": "Loki Laufeyson",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "God of Mischief",
                "Gem-Keeper",
                "Walter Lawson",
                "Lester",
                "Loren Olsen",
                "Tyfon",
                "Father Williams",
                "Willie",
                "Tso Zhung; has also impersonated hundreds of others."
            ],
            "place-of-birth": "Jotunheim, Asgard",
            "first-appearance": "Journey into Mystery Vol. 1 #85",
            "publisher": "Marvel Comics",
            "alignment": "bad"
        },
        "appearance": {
            "gender": "Male",
            "race": "Asgardian",
            "height": [
                "6'4",
                "193 cm"
            ],
            "weight": [
                "525 lb",
                "236 kg"
            ],
            "eye-color": "Green",
            "hair-color": "Black"
        },
        "work": {
            "occupation": "God of evil; former god of mischief and madness",
            "base": "Asgard"
        },
        "connections": {
            "group-affiliation": "Asgardians, Karnilla, Enchantress, Skurge the Executioner, Cobra, Mister Hyde, Absorbing Man, Igron, Tyr, Lorelei, Hela, Ulik, Frost Giants, Storm Giants (former), Dormammu, \"Acts of Vengeance\" prime movers (Dr. Doom, Magneto, Red Skull, Mandari",
            "relatives": "Laufey (father, deceased), Farbauti (mother, deceased), Sigyn (wife, deceased), Odin (foster father, deceased), Frigga (foster mother, deceased), Thor, Vidar (foster brothers, deceased), Hela,Fenris (Wolf), Jordmungand (Midgard Serpent) (children, deceased), Arkin (cousin, deceased)"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/017lok_ons_crd_02.jpg"
    },
    //10
    {
        "id": "10",
        "name": "Rocket Raccoon",
        "powerstats": {
            "intelligence": "50",
            "strength": "5",
            "speed": "23",
            "durability": "28",
            "power": "28",
            "combat": "64"
        },
        "biography": {
            "full-name": "Rocket Raccoon",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Sharpshooting Space Racoon",
                "Rocky Raccoon",
                "Ranger Rocket"
            ],
            "place-of-birth": "-",
            "first-appearance": "Marvel Preview #7 (June, 1976)",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Animal",
            "height": [
                "4'0",
                "122 cm"
            ],
            "weight": [
                "55 lb",
                "25 kg"
            ],
            "eye-color": "Brown",
            "hair-color": "Brown"
        },
        "work": {
            "occupation": "Law enforcement officer, security guard, member of the Guardians of the Galaxy",
            "base": "Knowhere; Formerly Hala, mobile aboard the Rakk'n'Ruin Halfworld, Keystone Quadrant"
        },
        "connections": {
            "group-affiliation": "Guardians of the Galaxy; Formerly Star-Lord's unnamed commando team",
            "relatives": "Lylla (mate)"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/023rra_ons_crd_03.jpg"
    },
    //11
    {
        "id": "11",
        "name": "Scarlet Witch",
        "powerstats": {
            "intelligence": "100",
            "strength": "10",
            "speed": "29",
            "durability": "70",
            "power": "100",
            "combat": "80"
        },
        "biography": {
            "full-name": "Wanda Maximoff",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Wanda Frank",
                "Wanda Magnus",
                "Ana Maximoff",
                "Gypsy Witch",
                "The Witch"
            ],
            "place-of-birth": "Wundagore Mountain, Transia",
            "first-appearance": "Uncanny X-Men #4 (March, 1964)",
            "publisher": "Marvel Comics",
            "alignment": "bad"
        },
        "appearance": {
            "gender": "Female",
            "race": "Mutant",
            "height": [
                "5'7",
                "170 cm"
            ],
            "weight": [
                "132 lb",
                "59 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "Brown"
        },
        "work": {
            "occupation": "Adventurer; formerly witchcraft tutor, housewife, terrorist",
            "base": "Mobile; formerly The Works; Avengers Compound, California; Avengers Mansion, New York"
        },
        "connections": {
            "group-affiliation": "None, Formerly Avengers, Avengers West Coast, Force Works, Queen's Vengeance, Secret Defenders, Lady Liberators, Brotherhood of Evil Mutants",
            "relatives": "Pietro (Quicksilver, twin brother), Magnus (Magneto, father), Magda Lehnsherr (mother, deceased), Anya (half-sister, deceased), Lorna Dane (Polaris, half-sister), Vision (estranged husband), Django Maximoff (foster father, deceased), Marya Maximoff (foster mother, deceased), Crystal (sister-in-law), Luna (niece), Tommy & Billy (reincarnated sons), Talia Wagner (Nocturne, alternate reality daughter)"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_02.jpg"
    },
    //12
    {
        "id": "12",
        "name": "Winter Soldier",
        "powerstats": {
            "intelligence": "56",
            "strength": "32",
            "speed": "35",
            "durability": "65",
            "power": "60",
            "combat": "84"
        },
        "biography": {
            "full-name": "Bucky Barnes",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Bucky",
                "Captain America"
            ],
            "place-of-birth": "-",
            "first-appearance": "Captain America Vol 5 #1 (January, 2005) (as Winter Soldier)",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "5'9",
                "175 cm"
            ],
            "weight": [
                "260 lb",
                "117 kg"
            ],
            "eye-color": "Brown",
            "hair-color": "Brown"
        },
        "work": {
            "occupation": "Adventurer; former SHIELD operative, Assassin (See Note under \"Winter Soldier\" article), Army Mascot, Student",
            "base": "-"
        },
        "connections": {
            "group-affiliation": "Black Widow (partner), Nick Fury (employer); formerly Avengers, New Avengers, Invaders, Kid Commandos, Liberty Legion, Young Allies, Crazy S.U.E.S., Captain America (partner), Falcon (partner)",
            "relatives": "George M. Barnes (father, deceased), Winifred C. Barnes (mother, deceased), Rebecca P. Barnes Proctor (sister), Ida (aunt, presumed deceased), Mr. Proctor (brother-in-law), unidentified niece and nephew, Scott Proctor (grandnephew), Kimberly Proctor (grandniece)"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/015wsb_ons_crd_03.jpg"
    },
    //13
    {
        "id": "13",
        "name": "Spider-Man",
        "powerstats": {
            "intelligence": "90",
            "strength": "55",
            "speed": "67",
            "durability": "75",
            "power": "74",
            "combat": "85"
        },
        "biography": {
            "full-name": "Peter Parker",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Spiderman",
                "Bag-Man",
                "Black Marvel",
                "Captain Universe",
                "Dusk",
                "Green Hood",
                "Hornet",
                "Mad Dog 336",
                "Peter Palmer",
                "Prodigy",
                "Ricochet",
                "Scarlet Spider",
                "Spider-Boy",
                "Spider-Hulk",
                "Spider-Morphosis"
            ],
            "place-of-birth": "New York, New York",
            "first-appearance": "Amazing Fantasy #15",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "5'10",
                "178 cm"
            ],
            "weight": [
                "165 lb",
                "74 kg"
            ],
            "eye-color": "Hazel",
            "hair-color": "Brown"
        },
        "work": {
            "occupation": "Freelance photographer, teacher",
            "base": "New York, New York"
        },
        "connections": {
            "group-affiliation": "Member of the Avengers, formerly member of Outlaws, alternate Fantastic Four",
            "relatives": "Richard Parker (father, deceased), Mary Parker(mother, deceased), Benjamin Parker (uncle, deceased), May Parker (aunt), Mary Jane Watson-Parker (wife), May Parker (daughter, allegedly deceased)"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg"
    },
    //14
    {
        "id": "14",
        "name": "Star-Lord",
        "powerstats": {
            "intelligence": "69",
            "strength": "20",
            "speed": "33",
            "durability": "50",
            "power": "25",
            "combat": "70"
        },
        "biography": {
            "full-name": "Peter Jason Quill",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Starlord"
            ],
            "place-of-birth": "-",
            "first-appearance": "Marvel Preview #4 (January, 1976)",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human-Spartoi",
            "height": [
                "6'2",
                "188 cm"
            ],
            "weight": [
                "175 lb",
                "79 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "Blond"
        },
        "work": {
            "occupation": "Adventurer; Royal Prince of Spartax",
            "base": "C.I.T.T.; formerly Kree space; Hala, Daedalus 5"
        },
        "connections": {
            "group-affiliation": "Guardians of the Galaxy (leader); formerly unnamed commando team, United Front, Imperial Guard, partner of Ship, NASA",
            "relatives": "Eson (grandfather, deceased), Gareth (great-uncle, deceased), Jason of Sparta (father), Meredith Quill (mother, deceased), Victoria (half-sister), Kip Holm (adopted brother), Sandy (adopted sister in-law), Alain (adopted niece), Rhys, Robyn (adopted nephews), Kitty Pryde (fiance), Unnamed former Symbiote"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/021slq_ons_crd_02.jpg"
    },
    //15
    {
        "id": "15",
        "name": "Thor",
        "powerstats": {
            "intelligence": "69",
            "strength": "100",
            "speed": "83",
            "durability": "100",
            "power": "100",
            "combat": "100"
        },
        "biography": {
            "full-name": "Thor Odinson",
            "alter-egos": "Rune King Thor",
            "aliases": [
                "Donald Blake",
                "Sigurd Jarlson",
                "Jake Olsen",
                "Donar the Mighty"
            ],
            "place-of-birth": "Asgard",
            "first-appearance": "Journey into Mystery #83 (August, 1962)",
            "publisher": "Rune King Thor",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Asgardian",
            "height": [
                "6'6",
                "198 cm"
            ],
            "weight": [
                "640 lb",
                "288 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "Blond"
        },
        "work": {
            "occupation": "King of Asgard; formerly EMS Technician; Physician",
            "base": "New York, New York"
        },
        "connections": {
            "group-affiliation": "Avengers",
            "relatives": "Odin (father), Gaea (mother), Frigga (step-mother), Loki (step-brother), Vidar (half-brother), Buri (paternal great-grandfather), Bolthorn (maternal great grandfather), Bor (grandfather), Bestla (grandmother), Vili (uncle), Ve (uncle), Sigyn (former sister-in-law), Hela (alleged niece), Jormungand (alleged nephew), Fernis Wolf (alleged nephew)"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg"
    },
    //16

    {
        "id": "16",
        "name": "Vision",
        "powerstats": {
            "intelligence": "100",
            "strength": "72",
            "speed": "54",
            "durability": "95",
            "power": "100",
            "combat": "70"
        },
        "biography": {
            "full-name": "Vision",
            "alter-egos": "Anti-Vision, Vision II",
            "aliases": [
                "Victor Shade"
            ],
            "place-of-birth": "-",
            "first-appearance": "Avengers Vol.1 #57, Young Avengers # 4",
            "publisher": "Anti-Vision",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Android",
            "height": [
                "6'3",
                "191 cm"
            ],
            "weight": [
                "300 lb",
                "135 kg"
            ],
            "eye-color": "Gold",
            "hair-color": "No Hair"
        },
        "work": {
            "occupation": "-",
            "base": "Mobile. Formerly Avengers Mansion, New York City and Avengers Compound"
        },
        "connections": {
            "group-affiliation": "Young Avengers, formerly; Avengers, West Coast Avengers, Defenders, Queen's Vengeance",
            "relatives": "Wanda Maximoff (Scarlet Witch, ex-wife), Thomas Shepherd (Speed, son), William Kaplan (Wiccan, son), Ultron (\"father\"), Henry Pym (Ant-Man, \"grandfather\"), Pietro Maximoff (Quicksilver, ex-brother-in-law), Erik Magnus Lensher (Magneto, ex-father-in-law), Jocasta (fellow creation, \"sister\"), Simon Williams (Wonder Man, \"brother\"), Victor Mancha (fellow creation, half brother), Alkhema (fellow creation, \"stepmother\")"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/013vis_ons_crd_01-1.jpg"

    },
    //17
    {
        "id": "17",
        "name": "Captain Marvel",
        "powerstats": {
            "intelligence": "84",
            "strength": "88",
            "speed": "71",
            "durability": "95",
            "power": "100",
            "combat": "90"
        },
        "biography": {
            "full-name": "Carol Danvers",
            "alter-egos": "Binary, Warbird",
            "aliases": [
                "Ace",
                "Binary",
                "Lady Marvel",
                "Warbird",
                "others used during her espionage career"
            ],
            "place-of-birth": "Boston, Massachusetts",
            "first-appearance": "Ms. Marvel #1",
            "publisher": "Binary",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Female",
            "race": "Human-Kree",
            "height": [
                "5'11",
                "180 cm"
            ],
            "weight": [
                "165 lb",
                "74 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "Blond"
        },
        "work": {
            "occupation": "Former National Aeronautics and Space Administration security Chief, former magazine editor, former freelance writer, former military intelligence officer.",
            "base": "Avengers Mansion"
        },
        "connections": {
            "group-affiliation": "currently Avengers, former companion to the X-Men (as Carol Danvers), former member of the Starjammers (as Binary), Former Avenger (as Ms. Marvel)",
            "relatives": "Marie Danvers (mother), Joseph Danvers, Sr. (father), Joseph Danvers, Jr. (brother), Steve Danvers (brother, deceased), Marcus Immortus (Danvers) (\"son\", deceased)"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_crd_04.jpg"
    },

    //18
    {
        "id": "18",
        "name": "Doctor Strange",
        "powerstats": {
            "intelligence": "100",
            "strength": "10",
            "speed": "12",
            "durability": "84",
            "power": "100",
            "combat": "60"
        },
        "biography": {
            "full-name": "Stephen Strange",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Sorcerer Supreme",
                "Master of the Mystic Arts",
                "Stephen Sanders",
                "Captain Universe",
                "Vincent Stevens"
            ],
            "place-of-birth": "Philadelphia, Pennsylvania",
            "first-appearance": "Strange Tales #110 (July, 1963)",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "6'2",
                "188 cm"
            ],
            "weight": [
                "180 lb",
                "81 kg"
            ],
            "eye-color": "Grey",
            "hair-color": "Black"
        },
        "work": {
            "occupation": "Sorcerer Supreme, retired neurosurgeon",
            "base": "-"
        },
        "connections": {
            "group-affiliation": "Defenders, underground Avengers; formerly the Order, Midnight Sons; former disciple of the Ancient One",
            "relatives": "Eugene (father, deceased), Beverly (mother, deceased), Victor (Khiron, brother, apparently deceased), Donna (sister, deceased), Clea (wife, estranged), Umar (mother-in-law), Orini (father-in-law), Dormammu (uncle-in-law)"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_ons_crd_02.jpg"
    },

    //19 ULTIMO - 20 Length
    {
        "id": "19",
        "name": "Groot",
        "powerstats": {
            "intelligence": "75",
            "strength": "85",
            "speed": "33",
            "durability": "70",
            "power": "100",
            "combat": "64"
        },
        "biography": {
            "full-name": "Groot",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "The Monster from Planet X; His Divine Majesty King Groot the 23rd",
                "Monarch of Planet X",
                "custodian of the branch worlds",
                "ruler of all the shades",
                "Flora colossus Information-silk"
            ],
            "place-of-birth": "-",
            "first-appearance": "Tales to Astonish #13 (November, 1960)",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Flora Colossus",
            "height": [
                "23'0",
                "701 cm"
            ],
            "weight": [
                "8200 lb",
                "4 tons"
            ],
            "eye-color": "Yellow",
            "hair-color": "-"
        },
        "work": {
            "occupation": "-",
            "base": "Area 13 (the Howling Commandos' base)"
        },
        "connections": {
            "group-affiliation": "Guardians of the Galaxy, Unnamed Kree covert ops team, formerly Galactic Council, Howling Commandos",
            "relatives": "-"
        },
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/024grt_ons_crd_01-1.jpg"
    },

]


const numeroDeCartas = personajes.length
const niveles = numeroDeCartas


const numeroRandom = () => {
    const numero = Math.floor(Math.random() * (niveles - 1)) + 1
    return numero
}

let numeros = []
let dobles = []
let numerosDobles = []

let id = numeroRandom()

const agregarNumerosAArray = ()=>{
    id = numeroRandom()
    if(!numeros.includes(id)){
        numeros.push(id)
    }

    if(!dobles.includes(id)){
        dobles.push(id)
    }

}


function agregarInstrucciones () {
    for (let i= 0; i < 20 ; i++){

        gameInstructions.innerHTML +=  `
            <img src='${personajes[i].image}' alt="Carta de ${personajes[i].name}" class="card-img" id="cardDefault${i+1}">
            `
    }
}

function agregarNuevosPersonajes () {
    gameCards.classList.add('out')

    for (let i= 0; i < 20 ; i++){

        while(numeros.length < 10){
            agregarNumerosAArray()
        }
        dobles.sort()
        const pares = numeros.concat(dobles)

        id = pares[i]
        gameCards.innerHTML +=  `
        <img src='https://i.pinimg.com/originals/cf/af/df/cfafdfc5ca3e84c4afe2829b7ec3ce61.png' alt="Carta de ${personajes[id].name}" data-id="${personajes[id].id}" class="card-img" id="card${i+1}">
        `
    }

}
agregarNuevosPersonajes()


function playTime(){

        const subirSegundos = ()=>{
        seconds++
        if (seconds<10){
            seconds = '0' + seconds
        }
        timeGame.textContent = minutes + ':' + seconds
        time = minutes + ':' + seconds
    }
    if(status===true){
        setInterval(subirSegundos, 1000)
    }

    const subirMinutos = ()=>{
        minutes++
        if (minutes<10){
            minutes = '0' + minutes
        }
        seconds = 0
        timeGame.textContent = minutes + ':' + seconds
        time = minutes + ':' + seconds
    }
    if (status === true){
        setInterval(subirMinutos, 60000)
    }
}


function stopTime(){
    timeGame.textContent = time
    status = false
}

function iniciarPartida(){
    playTime()
    gameInstructions.classList.add('out')
    gameCards.classList.remove('out')
    gamebutton.classList.add('out')
    gameDescription.classList.add('out')
}


gamebutton.addEventListener('click', iniciarPartida)



const carta1 = document.getElementById('card1')
const card2 = document.getElementById('card2')
const card3 = document.getElementById('card3')
const card4 = document.getElementById('card4')
const card5 = document.getElementById('card5')
const card6 = document.getElementById('card6')
const card7 = document.getElementById('card7')
const card8 = document.getElementById('card8')
const card9 = document.getElementById('card9')
const card10 = document.getElementById('card10')
const card11 = document.getElementById('card11')
const card12 = document.getElementById('card12')
const card13 = document.getElementById('card13')
const card14 = document.getElementById('card14')
const card15 = document.getElementById('card15')
const card16 = document.getElementById('card16')
const card17 = document.getElementById('card17')
const card18 = document.getElementById('card18')
const card19 = document.getElementById('card19')
const card20 = document.getElementById('card20')

card1.addEventListener('click', function(){elegirCartas(card1)})
card2.addEventListener('click', function(){elegirCartas(card2)})
card3.addEventListener('click', function(){elegirCartas(card3)})
card4.addEventListener('click', function(){elegirCartas(card4)})
card5.addEventListener('click', function(){elegirCartas(card5)})
card6.addEventListener('click', function(){elegirCartas(card6)})
card7.addEventListener('click', function(){elegirCartas(card7)})
card8.addEventListener('click', function(){elegirCartas(card8)})
card9.addEventListener('click', function(){elegirCartas(card9)})
card10.addEventListener('click', function(){elegirCartas(card10)})
card11.addEventListener('click', function(){elegirCartas(card11)})
card12.addEventListener('click', function(){elegirCartas(card12)})
card13.addEventListener('click', function(){elegirCartas(card13)})
card14.addEventListener('click', function(){elegirCartas(card14)})
card15.addEventListener('click', function(){elegirCartas(card15)})
card16.addEventListener('click', function(){elegirCartas(card16)})
card17.addEventListener('click', function(){elegirCartas(card17)})
card18.addEventListener('click', function(){elegirCartas(card18)})
card19.addEventListener('click', function(){elegirCartas(card19)})
card20.addEventListener('click', function(){elegirCartas(card20)})

function eliminarEventos(){
    card1.removeEventListener('click', function(){elegirCartas(card1)})
    card2.removeEventListener('click', function(){elegirCartas(card2)})
    card3.removeEventListener('click', function(){elegirCartas(card3)})
    card4.removeEventListener('click', function(){elegirCartas(card4)})
    card5.removeEventListener('click', function(){elegirCartas(card5)})
    card6.removeEventListener('click', function(){elegirCartas(card6)})
    card7.removeEventListener('click', function(){elegirCartas(card7)})
    card8.removeEventListener('click', function(){elegirCartas(card8)})
    card9.removeEventListener('click', function(){elegirCartas(card9)})
    card10.removeEventListener('click', function(){elegirCartas(card10)})
    card11.removeEventListener('click', function(){elegirCartas(card11)})
    card12.removeEventListener('click', function(){elegirCartas(card12)})
    card13.removeEventListener('click', function(){elegirCartas(card13)})
    card14.removeEventListener('click', function(){elegirCartas(card14)})
    card15.removeEventListener('click', function(){elegirCartas(card15)})
    card16.removeEventListener('click', function(){elegirCartas(card16)})
    card17.removeEventListener('click', function(){elegirCartas(card17)})
    card18.removeEventListener('click', function(){elegirCartas(card18)})
    card19.removeEventListener('click', function(){elegirCartas(card19)})
    card20.removeEventListener('click', function(){elegirCartas(card20)})
}
function win () {
    console.log('ganaste')
    paso = 0
    CartaADestapar.classList.remove('destapar')
    let idCarta1 = CartaADestapar.dataset.id

    let idCarta2 = Carta2ADestapar.dataset.id
    Carta2ADestapar.classList.remove('destapar')
    cartaElegida = undefined
    carta2Elegida = undefined
    cartasDestapadas+=2
    if (cartasDestapadas===2){
        swal('¡Ganaste!', 'Tiempo transcurrido: ' + time + ' minutos', 'success')
        stopTime()
        timeGame.classList.add('out')
    }
}

function taparCarta(){
   CartaADestapar.src ='https://i.pinimg.com/originals/cf/af/df/cfafdfc5ca3e84c4afe2829b7ec3ce61.png'
   Carta2ADestapar.src ='https://i.pinimg.com/originals/cf/af/df/cfafdfc5ca3e84c4afe2829b7ec3ce61.png'
}

function agregarClases(){
    CartaADestapar.classList.add('cartaEquivocada')
    Carta2ADestapar.classList.add('cartaEquivocada')
}
function removerClases(){
    CartaADestapar.classList.remove('cartaEquivocada')
    Carta2ADestapar.classList.remove('cartaEquivocada')
}

function lose () {
    console.log('perdiste')
    agregarClases()
    setTimeout(removerClases, 100)
    setTimeout(taparCarta, 1000)
    cartaElegida = undefined
    carta2Elegida = undefined
    paso = 0
}


function elegirCartas(card){
    if(cartaElegida !== undefined){
        carta2Elegida = Number(card.dataset.id)
        console.log('Segunda Carta es: ' + carta2Elegida)
        Carta2ADestapar = card
        paso++
        card.src = `${personajes[carta2Elegida].image}`

    } else {
        let destaparCarta = card.image
        cartaElegida = Number(card.dataset.id)
        console.log('Primera Carta es: ' + cartaElegida)
        CartaADestapar= card
        paso++
        card.src = `${personajes[cartaElegida].image}`
    }

    if (paso==2){
        if(CartaADestapar.id === Carta2ADestapar.id){
            lose()
        }

        if(cartaElegida === carta2Elegida){
            win()
        } else {
            lose()
        }
    }
}



