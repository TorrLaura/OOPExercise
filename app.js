// 1a
const Mulan = {
title: `Mulan`,
main: `Fa Mulan`,
// 1b
quote: () => `Dishonor! Dishonor on your whole family!`,
// 1c
storyline: function() {
    return `The movie ${this.title} is about ${this.main}`;
    }
};
// 2a
const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,
// 2b
quote: function (){ 
    return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`;
},
// 2c
storyline: function () {
    return `The movie ${this.title} is about ${this.main}`;
    console.log(tangled.storyline());
    }
};
// 3a
function DisneyMovie(t,m) {
    this.title = t;
    this.main = m;
}
// 3b
DisneyMovie.prototype.storyLine = function (){
  return  `The movie ${this.title} is about ${this.Main}`;
}
// 3c
const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);
console.log(mulan1);
// 3d
const tangled1 = new DisneyMovie (`Tangled`, `Rapunzel`);
console.log(tangled1);
// 4a
class DM {
    constructor(t, m){
        this.title =t;
        this.main = m;

    }
// 4b
storyLine (){
return `The movie ${this.title} is about ${this.main}`;
    }
// 4e
static loveDisneyMovies(){
return `I Love Disney Movies`;
}
}
// 4c
const mulan2 = new DM (`Mulan`, `Fa Mulan`);
// 4d
const tangled2 = new DM (`Tangled`, `Rapunzel`);
console.log(tangled2);
// 4f
console.log(DM.loveDisneyMovies());  

// 5a
class DMCast extends DM {
// 5b
constructor (t, m, c){
    // 5c
super (t, m);
this.cast = c;
}
}

// 5d
const mulan3 = new DMCast(
    `Mulan`, 
    `Fa Mulan`,
{
    mulan: `Ming-Na Wen`, 
    mushu: `Eddie Murphy`, 
    shang: `BD Wong`, 
    theEmperor: `Pat Morita`
    }
);
console.log(mulan3);
// 5e
const repunzel3 = new DMCast (
`Tangled`,
`Rapunzel`,
{
    repunzel: `Mandy Moore`,
    FlynnRider: `Zachary Levi`,
    MotherGothel: `Donna Murphy`
}
);
console.log(repunzel3);


// BONUS Completed with class
// 6b
const moana = DMCast.create(
    `Moana`,
    `Moana of Motunui`,
    {
      moana: `Auli'i Cravalho`,
      maui: `Dwayne Johnson`,
      grammaTala: `Rachel House`,
      chiefTui: `Temuera Morrison`
    }
  );
  
  // 6c
  console.log(moana);
  /*
  DMCast {
    title: 'Moana',
    main: 'Moana of Motunui',
    cast: {
      moana: "Auli'i Cravalho",
      maui: 'Dwayne Johnson',
      grammaTala: 'Rachel House',
      chiefTui: 'Temuera Morrison'
    }
  }
  */















