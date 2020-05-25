
// I am keeping this simple because its not a big list and I mined it from the internet.
let allHomophones = [
    ["one", "won"], 
    ["two", "to", "too"], 
    ["four", "for"], 
    ["eight", "ate"], 
    ["steak", "stake"], 
    ["bean", "been"], 
    ["pear", "pair"], 
    ["bread", "bred"], 
    ["cereal", "serial"], 
    ["flour", "flower"], 
    ["meat", "meet"], 
    ["chilli", "chilly"], 
    ["mussel", "muscle"], 
    ["wine", "whine"], 
    ["bite", "byte"], 
    ["grate", "great"], 
    ["berry", "bury"], 
    ["currant", "current"], 
    ["leek", "leak"], 
    ["maize", "maze"], 
    ["thyme", "time"], 
    ["sauce", "source"], 
    ["sweet", "suite"], 
    ["mousse", "moose"], 
    ["hare", "hair"], 
    ["bear", "bare"], 
    ["deer", "dear"], 
    ["gorilla", "guerrilla"], 
    ["sole", "soul"], 
    ["flea", "flee"], 
    ["boar", "bore"], 
    ["horse", "hoarse"], 
    ["lynx", "links"], 
    ["whale", "wail"], 
    ["mare", "mayor"], 
    ["toad", "towed", "toed"], 
    ["i", "eye"], 
    ["i’ll", "isle", "aisle"], 
    ["you", "ewe", "yew"], 
    ["you’ll", "yule"], 
    ["you’re", "your"], 
    ["our", "hour"], 
    ["they’re", "their", "there"], 
    ["theirs", "there’s"], 
    ["we’ve", "weave"], 
    ["we’d", "weed"], 
    ["we’ll", "wheel"], 
    ["we’re", "weir"], 
    ["him", "hymn"], 
    ["he’ll", "heel", "heal"], 
    ["he’d", "heed"], 
    ["it’s", "its"], 
    ["who’s", "whose"], 
    ["what’s", "watts"], 
    ["which", "witch"], 
    ["blue", "blew"], 
    ["red", "read"], 
    ["greys", "graze"], 
    ["son", "sun"], 
    ["aunt", "aren’t"], 
    ["father", "farther"], 
    ["root", "route"], 
    ["wood", "would"], 
    ["sea", "see"], 
    ["tide", "tied"], 
    ["shore", "sure"], 
    ["weather", "whether"], 
    ["mist", "missed"], 
    ["dew", "due"], 
    ["reed", "read"], 
    ["air", "heir"], 
    ["night", "knight"], 
    ["sew", "sow", "so"], 
    ["pause", "paws", "pours", "pores"], 
    ["wrap", "rap"], 
    ["wear", "where", "ware"], 
    ["steal", "steel"], 
    ["write", "right", "rite"], 
    ["buy", "by", "bye"], 
    ["sell", "cell"], 
    ["hear", "here"], 
    ["break", "brake"], 
    ["affect", "effect"], 
    ["die", "dye"], 
    ["waste", "waist"], 
    ["know", "no"], 
    ["accept", "except"], 
    ["wait", "weight"], 
    ["weigh", "way", "whey"], 
    ["flew", "flu", "flue"], 
    ["threw", "through"], 
    ["male", "mail"], 
    ["vain", "vein", "vane"], 
    ["weak", "week"], 
    ["whole", "hole"], 
    ["bored", "board"], 
    ["coarse", "course"], 
    ["higher", "hire"], 
    ["plain", "plane"], 
    ["aloud", "allowed"], 
    ["principal", "principle"]
];
// Homophones that I finding from testing the dictation,
// need a better way to add them though, need '2' to merge with the other 'two' etc.
allHomophones.push(["ti", "tee", "tea"]);
allHomophones.push(["hut", "heart", "hot"]);
allHomophones.push(["1", "one"]);
allHomophones.push(["2", "two"]);
allHomophones.push(["3", "three"]);
allHomophones.push(["4", "four"]);
allHomophones.push(["5", "five"]);
allHomophones.push(["6", "six"]);
allHomophones.push(["7", "seven"]);
allHomophones.push(["8", "eight"]);
allHomophones.push(["9", "nine"]);
allHomophones.push(["10", "ten"]);
allHomophones.push(["0", "zero"]);
allHomophones.push(["grown", "growing"]);
allHomophones.push(["year", "hear", "here"]);
allHomophones.push(["were", "where"]);

function homophoneSafeCompare(a, b) {
    // Start simple
    if (a == b) return true;

    return allHomophones.find(homophones => {
        // If we have a homophone match then we will see if b is in the homophone set
        return homophones.indexOf(a) >= 0 && homophones.indexOf(b) >= 0;
    }) != undefined;
}
