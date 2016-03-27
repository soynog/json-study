'use strict';

let json = { "name":"Jason",
  "things" : {
    "cat": "Mr. Kitty",
    "roommates": [
      { "name": "Dave",
        "things": {
          "goldfish": [
            { "name": "Bob", "color": "red", "bites": false},
            { "name": "Mr. MagicNibbles", "color": "yellow", "bites": true}
          ]
        }
      },
      { "name": "Miller", "things": []}
    ],
    "loves": ["Red Sox", "Patriots", "Bruins"],
    "recent-addresses": ["123 Fake Street", "2 Muchinfo Road"]
  }
};

const petRoommatesGoldfish = function(json,roommateName,fishName) {
  let roomies = json.things.roommates;
  for ( let i = 0; i < roomies.length; i++ ) {
    if (roomies[i].name === roommateName && roomies[i].things) {
      let fishies = (roomies[i].things.goldfish || []);
      for (let j = 0; j < fishies.length; j++) {
        if (fishies[j].name === fishName) {
          return (fishies[j].bites ? "YOW!!!" : "Aww, nice fishy.");
        }
      }
      return `${roomies[i].name} doesn't have a fish by that name.`
    }
  }
  return "That roommate is imaginary.";
};

console.log(petRoommatesGoldfish(json,"Dave","Mr. MagicNibbles"));
console.log(petRoommatesGoldfish(json,"Dave","Bob"));
console.log(petRoommatesGoldfish(json,"Miller","Mr. MagicNibbles"));
console.log(petRoommatesGoldfish(json,"Steve","Mr. MagicNibbles"));
