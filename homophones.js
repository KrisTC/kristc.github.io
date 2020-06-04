
// I am keeping this simple because its not a big list and I mined it from the internet.
let allHomophones = [["one","won"],["two","to","too"],["four","for"],["eight","ate"],["steak","stake"],["bean","been"],["pear","pair"],["bread","bred"],["cereal","serial"],["flour","flower"],["meat","meet"],["chilli","chilly"],["mussel","muscle"],["wine","whine"],["bite","byte"],["grate","great"],["berry","bury"],["currant","current"],["leek","leak"],["maize","maze"],["thyme","time"],["sauce","source"],["sweet","suite"],["mousse","moose"],["hare","hair","here","hear"],["bear","bare"],["deer","dear"],["gorilla","guerrilla"],["sole","soul"],["flea","flee"],["boar","bore"],["horse","hoarse"],["lynx","links"],["whale","wail"],["mare","mayor"],["toad","towed","toed"],["i","eye"],["i’ll","isle","aisle"],["you","ewe","yew"],["you’ll","yule"],["you’re","your"],["our","hour"],["they’re","their","there","the"],["theirs","there’s","their","the","there","they're","they","there's"],["we’ve","weave"],["we’d","weed"],["we’ll","wheel"],["we’re","weir"],["him","hymn"],["he’ll","heel","heal"],["he’d","heed"],["it’s","its"],["who’s","whose"],["what’s","watts"],["which","witch"],["blue","blew"],["red","read"],["greys","graze"],["son","sun"],["aunt","aren’t"],["father","farther"],["root","route"],["wood","would"],["sea","see"],["tide","tied"],["shore","sure"],["weather","whether"],["mist","missed"],["dew","due"],["reed","read"],["air","heir"],["night","knight"],["sew","sow","so"],["pause","paws","pours","pores"],["wrap","rap"],["wear","where","ware"],["steal","steel"],["write","right","rite"],["buy","by","bye"],["sell","cell"],["hear","here"],["break","brake"],["affect","effect"],["die","dye"],["waste","waist"],["know","no","now","know"],["accept","except"],["wait","weight"],["weigh","way","whey"],["flew","flu","flue"],["threw","through"],["male","mail"],["vain","vein","vane"],["weak","week"],["whole","hole"],["bored","board"],["coarse","course"],["higher","hire"],["plain","plane"],["aloud","allowed"],["principal","principle"],["ti","tee","tea"],["hut","heart","hot","hearts","huts","hats","but","butt"],["1","one"],["2","two"],["3","three"],["4","four"],["5","five"],["6","six"],["7","seven"],["8","eight"],["9","nine"],["10","ten"],["0","zero"],["grown","growing"],["year","hear","here"],["were","where"],["thicker","already","sika","sicker","seka"],["had","have","bad","dad","add","ad"],["the","this"],["shaded","shade"],["and","a"],["gemma's","jenners"],["on","her","are","hairstyle"],["of","was"],["milo","my"],["develop","love"],["other","early","are"],["color","colour"],["kris","chris","christopher","kristopher"]];

function homophoneSafeCompare(a, b) {
    // Start simple
    if (a == b) return true;

    return allHomophones.find(homophones => {
        // If we have a homophone match then we will see if b is in the homophone set
        return homophones.indexOf(a) >= 0 && homophones.indexOf(b) >= 0;
    }) != undefined;
}

function formatHomophones() {
    console.log(JSON.stringify(allHomophones, null, 2));
}

//--------------------------------------------------------------------------
// These methods for adding stuff will be inefficent so we should buildthe list 
// during development store updated computed results.
function addHomophones(homophones) {
    const a = homophones.splice(0, 1)[0];
    homophones.forEach(b=>addHomophone(a, b));
}

function addHomophone(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    const aIndex = allHomophones.findIndex(function(set, i) {
        return set.indexOf(a) >= 0;
    });
    if (aIndex >= 0) {
        allHomophones[aIndex].push(b);
        return;
    }
    const bIndex = allHomophones.findIndex(function(set, i) {
        return set.indexOf(b) >= 0;
    });
    if (bIndex >= 0) {
        allHomophones[bIndex].push(a);
        return;
    }
    allHomophones.push([a, b]);
}

function addProblemWords(problemWords) {
    Object.keys(problemWords).forEach(a=> {
        Object.keys(problemWords[a]).forEach(b=> {
            addHomophone(a, b);
            //console.log(a + '   ' + b);
        });
    });
}