const domains = [
  "yahoo.com",
  "outlook.com",
  "gmail.com",
  "icloud.com",
  "minnesota.edu",
  "facebook.com",
  "msn.com",
  "bootcampspot.com",
  "whitehouse.gov",
];

const userNames = [
  "itsme",
  "whynot",
  "example",
  "pseudonum",
  "wassup",
  "moira.rose",
  "buttercup",
  "humperdinck",
  "captain.kirk",
  "mr.spock",
  "frodo",
  "gandalf",
  "cruella",
  "donchaknow",
  "harold.hill",
  "d.harry",
  "trying_this_out",
  "samwise",
  "aragorn",
  "gimli",
  "legolas",
  "santa.claus",
  "hanukkah.harry",
  "joltin.joe",
  "try_try_again",
  "m.python",
  "danny.ocean",
  "clark_kent",
  "lois_lane",
  "bruce_wayne",
  "diana_prince",
  "winston",
  "julia",
];

const thoughts = [
  "This is a thought. It's not much of a thought, perhaps, but it's a thought.",
  "Whan that Aprille with his shoures soote, The droghte of March hath perced to the roote, And bathed every veyne in swich licóur Of which vertú engendred is the flour.",
  "In a hole in the ground, there lived a hobbit. Not a nasty, dirty, wet hole filled with the ends of worms, nor a dry bare sandy hole with nothing on which to sit down or to eat.",
  "Do you know the way to San Jose?",
  "Eat at Joe's!",
  "Kilroy was here",
  "You can pick your friends, and you can pick your nose, but you can't pick your friend's nose.",
  "Soylent Green is people!",
  "I'll have what she's having.",
  "It's under the big W",
  "If at first you don't succeed, then complain about it over and over until you get credit for somehow succeeding so they can get you to shut up already.",
  "I don't think we're in Kansas anymore, Toto.",
  "I'm mad as hell, and I'm not going to take this any more!",
  "I'm going to make him an offer he can't refuse.",
  "May the Force be with you.",
  "[thought wanted]",
  "In the shadows, to the left!",
  "There once was some code from Nantucket...",
  "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
  "Frankly, my dear, I don't give a damn.",
  "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
  "All right, Mr. DeMille, I'm ready for my close-up.",
  "Fasten your seatbelts. It's going to be a bumpy night.",
  "What we've got here is a failure to communicate.",
  "Mr. Vaughn, what we are dealing with here is a perfect engine, an eating machine. It's really a miracle of evolution. All this machine does is swim, and eat, and make little sharks, and that's all.",
  "Gentlemen, you can't fight in here! This is the War Room!",
  "Who controls the past controls the future. Who controls the present controls the past.",
  "Freedom is the freedome to say that two plus two make four. If that is granted, all else follows.",
  "Big Brother is Watching You.",
];

const createUser = () => {
  // This function creates a random user to be seeded

  // randomly choose a username and email domain (combine them for email address)
  const domain = domains[Math.trunc(Math.random() * domains.length)];
  const userRand = Math.trunc(Math.random() * userNames.length);
  return {
    username: userNames[userRand],
    email: `${userNames[userRand]}@${domain}`,
    thoughts: [],
    friends: [],
  };
};

module.exports = { createUser, thoughts };
