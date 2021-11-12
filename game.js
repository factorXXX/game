
class Player {
  constructor() {
        this.c = new OmegaNum(10)
        this.g1 = new OmegaNum(0)
        this.g1c = new OmegaNum(10)
        this.g1m = new OmegaNum(1)
        this.b1r = new OmegaNum(10000)
        this.b = new OmegaNum(0)
        this.t = new OmegaNum(0)
        this.time = new OmegaNum(0)
        this.timeeff = new OmegaNum(0)
        this.tgain = new OmegaNum(0)
        this.t1r = new OmegaNum(200)
        this.base = new OmegaNum(2)
        this.Gscalepow = new OmegaNum(1.25)
        this.Gbase = new OmegaNum(1.5)
        this.gain = new OmegaNum(0)
        this.u1bought = false
        this.u2bought = false
        this.u3bought = false
        this.u4bought = false
        this.u5bought = false
        this.u6bought = false
        this.u7bought = false
        this.u8bought = false
        this.u9bought = false
        this.u10bought = false
        this.u11bought = false
        this.u1m = false
        this.u2m = false
        this.u3m = false
        this.u4m = false
        this.inC1 = false
        this.inC2 = false
        this.inC3 = false
        this.inC4 = false
        this.C1times = new OmegaNum(0) 
        this.C2times = new OmegaNum(0) 
        this.C3times = new OmegaNum(0) 
        this.C1goal = new OmegaNum(1e16) 
        this.C2goal = new OmegaNum(1e14) 
        this.C3goal = new OmegaNum(1e36) 
        this.C1complete = false
        this.C2complete = false
        this.C3complete = false
        this.C4complete = false
        this.auto = false
        this.cap = false
        this.cap2 = new OmegaNum(3)
  }
}
var game = new Player()
function format(a){
  return new OmegaNum(a).div(new OmegaNum(10).pow(new OmegaNum(a).logBase(10).floor())).times(1000).floor().div(1000)+"e"+new OmegaNum(a).logBase(10).floor()
}
function makeC(a) {
    game.c = game.c.add(a);
}
function buyg1() {
    if(game.c.gte(game.g1c)){
    game.c = game.c.sub(game.g1c);
    game.g1=game.g1.add(1)
  }
}
function buyb() {
  if(game.c.gte(game.b1r)){
  game.c = new OmegaNum(10);
  game.g1=new OmegaNum(0)
  if(!game.u5bought){
  game.u1bought=false
  game.u2bought=false
  game.u3bought=false
  game.u4bought=false
  }
  game.b=game.b.add(1)

}
}

function buyt() {
    if(game.g1.gte(game.t1r)){
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.b=new OmegaNum(0)

    game.u1bought=false
    game.u2bought=false
    game.u3bought=false
    game.u4bought=false
    game.u5bought=false
    game.u6bought=false
    game.u7bought=false
    game.u8bought=false
    game.u9bought=false
    game.u10bought=false
    game.u11bought=false
    game.u1m=false
    game.u2m=false
    game.u3m=false
    game.u4m=false
game.cap=false
game.cap2=new OmegaNum(3)
    game.inC1=false
    game.inC2=false
    game.inC3=false
    game.inC4=false
    game.auto=false
    game.t=game.t.add(1)
  
  }
  }

function buyU1() {
    if(game.c.gte(200)&&!game.u1bought){
    game.c= game.c.sub(200);
    game.u1bought=true
    }
} 

function buyU2() {
  if(game.c.gte(1250)&&!game.u2bought){
  game.c= game.c.sub(1250);
  game.u2bought=true
  }
} 

function buyU3() {
  if(game.c.gte(25000)&&!game.u3bought){
  game.c= game.c.sub(25000);
  game.u3bought=true
  }
} 
function buyU4() {
  if(game.c.gte(5e5)&&!game.u4bought){
  game.c= game.c.sub(5e5);
  game.u4bought=true
  }
} 

function buyU5() {
  if(game.c.gte(1e6)&&!game.u5bought){
  game.c= game.c.sub(1e6);
  game.u5bought=true
  }
} 

function buyU6() {
  if(game.c.gte(1e7)&&!game.u6bought){
  game.c= game.c.sub(1e7);
  game.u6bought=true
  }
} 

function buyU7() {
  if(game.c.gte(1e10)&&!game.u7bought){
  game.c= game.c.sub(1e10);
  game.u7bought=true
  }
} 

function buyU8() {
  if(game.c.gte(4e12)&&!game.u8bought){
  game.c= game.c.sub(4e12);
  game.u8bought=true
  }
} 
function buyU9() {
  if(game.c.gte(4e19)&&!game.u9bought){
  game.c= game.c.sub(4e19);
  game.u9bought=true
  }
} 
function buyU10() {
  if(game.c.gte(4e25)&&!game.u10bought){
  game.c= game.c.sub(4e25);
  game.u10bought=true
  }
} 

function buyU11() {
  if(game.c.gte(1e28)&&!game.u11bought){
  game.c= game.c.sub(1e28);
  game.u11bought=true
game.u1m=false
game.u2m=false
game.u3m=false
game.u4m=false
  }
} 

function mU1() {
  if(game.u1m){
  game.cap=false
if(game.u11bought)  game.cap2=game.cap2.plus(1)
  game.u1m=false
  }
  else if(!game.cap&&game.cap2.gte(1)){
    if(!game.u11bought)game.cap=true
    game.u1m=true
    if(game.u11bought)  game.cap2=game.cap2.sub(1)
  }
} 
function mU2() {
  if(game.u2m){
  game.cap=false
if(game.u11bought)  game.cap2=game.cap2.plus(1)
  game.u2m=false
  }
  else if(!(game.cap&&game.cap2.gte(1))){
    if(!game.u11bought)game.cap=true
    game.u2m=true
    if(game.u11bought)  game.cap2=game.cap2.sub(1)
  }
} 
function mU3() {
  if(game.u3m){
  game.cap=false
if(game.u11bought)  game.cap2=game.cap2.plus(1)
  game.u3m=false
  }
  else if(!game.cap&&game.cap2.gte(1)){
    if(!game.u11bought) game.cap=true
    game.u3m=true
    if(game.u11bought)  game.cap2=game.cap2.sub(1)
  }
} 
function mU4() {
  if(game.u4m){
  game.cap=false
if(game.u11bought)  game.cap2=game.cap2.plus(1)
  game.u4m=false
  }
  else if(!game.cap&&game.cap2.gte(1)){
    if(!game.u11bought)game.cap=true
    game.u4m=true
    if(game.u11bought)  game.cap2=game.cap2.sub(1)
  }
} 
function inC1() {

  if(game.inC4){
alert("You can't exit this challenge while you are in Challenge 4!")
  }
  else 
  if(!game.inC1){ 
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.inC1=true
  
  }
  else if(game.c.gte(1e5)&&game.inC1){
    if(game.C4complete){
      if(game.c.gte(game.C1goal)&&game.inC1){
        game.c = new OmegaNum(10);
        game.g1=new OmegaNum(0)
        game.C1times=game.C1times.add(1)
        game.inC1=false
      }
      else if(confirm("Are you sure you want to exit challenge early?")){
        game.c = new OmegaNum(10);
        game.g1=new OmegaNum(0)
        game.inC1=false
      }
    }
  else{
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.C1complete=true
    game.inC1=false
  }

  }  
  else if(confirm("Are you sure you want to exit challenge early?")){ 
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.inC1=false

  }
  
} 

function inC2() {
  if(game.inC4){
    alert("You can't exit this challenge while you are in Challenge 4!")
      }
      else 

  if(!game.inC2){ 
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.inC2=true
  
  }
  else if(game.c.gte(2.5e6)&&game.inC2){
    if(game.C4complete){
      if(game.c.gte(game.C2goal)&&game.inC2){
        game.c = new OmegaNum(10);
        game.g1=new OmegaNum(0)
        game.C2times=game.C2times.add(1)
        game.inC2=false
      }
      else if(confirm("Are you sure you want to exit challenge early?")){
        game.c = new OmegaNum(10);
        game.g1=new OmegaNum(0)
        game.inC2=false
      }
    }
  else{
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.C2complete=true
    game.inC2=false
  }
  }  
  else if(confirm("Are you sure you want to exit challenge early?")){ 
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.inC2=false

  }
  
} 

function inC3() {
  if(game.inC4){
    alert("You can't exit this challenge while you are in Challenge 4!")
      }
      else 
  if(!game.inC3){ 
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.inC3=true
  
  }
  else if(game.c.gte(3e5)&&game.inC3){
    if(game.C4complete){
      if(game.c.gte(game.C3goal)&&game.inC3){
        game.c = new OmegaNum(10);
        game.g1=new OmegaNum(0)
        game.C3times=game.C3times.add(1)
        game.inC3=false
      }
      else if(confirm("Are you sure you want to exit challenge early?")){
        game.c = new OmegaNum(10);
        game.g1=new OmegaNum(0)
        game.inC3=false
      }
    }
  else{
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.C3complete=true
    game.inC3=false
  }
  }  
  else if(confirm("Are you sure you want to exit challenge early?")){ 
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.inC3=false

  }
  
} 
function inC4() {
  if(!game.inC4){ 
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.inC1=true
    game.inC2=true
    game.inC3=true
    game.inC4=true
  
  }
  else if(game.c.gte(2.5e6)&&game.inC4){
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.C4complete=true
    game.inC1=false
    game.inC2=false
    game.inC3=false
    game.inC4=false

  }  
  else if(confirm("Are you sure you want to exit challenge early?")){ 
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.inC1=false
    game.inC2=false
    game.inC3=false
    game.inC4=false

  }
  
} 
function auto() {
game.auto=!game.auto
} 

  setInterval(function() {
    makeC(game.gain.div(25))
if(game.u9bought) game.time=game.time.add(game.tgain.times(0.04))
    game.g1c=new OmegaNum(10).times(new OmegaNum(game.Gbase).pow(game.g1.pow(game.Gscalepow)))
    document.getElementById('C').innerHTML=game.c.round().toHyperE();
    document.getElementById('G1c').innerHTML=game.g1c.round().toHyperE();
    document.getElementById('G1').innerHTML=game.g1.round().toHyperE();
    document.getElementById('G1m').innerHTML=game.g1m.round().toHyperE();
    document.getElementById('B1').innerHTML=game.b.round().toHyperE();
    document.getElementById('Bc').innerHTML=game.b1r.round().toHyperE();
    document.getElementById('Tc').innerHTML=game.t1r.round().toHyperE();
    document.getElementById('T1').innerHTML=game.t.round().toHyperE();
    document.getElementById('Teff1').innerHTML=game.t.pow(0.8).toHyperE();
    document.getElementById('Teff2').innerHTML=game.t.pow(1.6).toHyperE();
    document.getElementById('tam').innerHTML=game.time.round().toHyperE();
    document.getElementById('teff').innerHTML=game.timeeff.toHyperE();
    if(!game.inC2) document.getElementById('Bm').innerHTML=new OmegaNum(game.base).pow(game.b.add(game.t)).round().toHyperE();
    else document.getElementById('Bm').innerHTML=new OmegaNum(1)

    document.getElementById('cps').innerHTML=game.gain.round().toHyperE();

    if(!game.u1bought) document.getElementById('u1b').innerHTML="false"
    else document.getElementById('u1b').innerHTML="true"

    if(!game.u2bought) document.getElementById('u2b').innerHTML="false"
    else document.getElementById('u2b').innerHTML="true"

    if(!game.u3bought) document.getElementById('u3b').innerHTML="false"
    else document.getElementById('u3b').innerHTML="true"

    if(!game.u4bought) document.getElementById('u4b').innerHTML="false"
    else document.getElementById('u4b').innerHTML="true"

    if(!game.u5bought) document.getElementById('u5b').innerHTML="false"
    else document.getElementById('u5b').innerHTML="true"

    if(!game.u6bought) document.getElementById('u6b').innerHTML="false"
    else document.getElementById('u6b').innerHTML="true"

    if(!game.u7bought) document.getElementById('u7b').innerHTML="false"
    else document.getElementById('u7b').innerHTML="true"

    if(!game.u8bought) document.getElementById('u8b').innerHTML="false"
    else document.getElementById('u8b').innerHTML="true"

    if(!game.u9bought) document.getElementById('u9b').innerHTML="false"
    else document.getElementById('u9b').innerHTML="true"

    if(!game.u10bought) document.getElementById('u10b').innerHTML="false"
    else document.getElementById('u10b').innerHTML="true"

    if(!game.u11bought) document.getElementById('u11b').innerHTML="false"
    else document.getElementById('u11b').innerHTML="true"


    if(game.inC4) document.getElementById('inC1').innerHTML="Trapped"
    else if(!game.inC1) document.getElementById('inC1').innerHTML="false"
    else document.getElementById('inC1').innerHTML="true"

    if(game.inC4) document.getElementById('inC2').innerHTML="Trapped"
   else if(!game.inC2) document.getElementById('inC2').innerHTML="false"
    else document.getElementById('inC2').innerHTML="true"

    if(game.inC4) document.getElementById('inC3').innerHTML="Trapped"
   else if(!game.inC3) document.getElementById('inC3').innerHTML="false"
    else document.getElementById('inC3').innerHTML="true"

    if(!game.inC4) document.getElementById('inC4').innerHTML="false"
    else document.getElementById('inC4').innerHTML="true"

    if(!game.C1complete) document.getElementById('C1c').innerHTML="false"
    else document.getElementById('C1c').innerHTML="true"

    if(!game.C2complete) document.getElementById('C2c').innerHTML="false"
    else document.getElementById('C2c').innerHTML="true"
    
    if(!game.C3complete) document.getElementById('C3c').innerHTML="false"
    else document.getElementById('C3c').innerHTML="true"

    if(!game.C4complete) document.getElementById('C4c').innerHTML="false"
    else document.getElementById('C4c').innerHTML="true"

    if(game.C4complete) document.getElementById('C1g').innerHTML=format(game.C1goal)+" coins<br>completion: "+game.C1times.add(1)
    else document.getElementById('C1g').innerHTML="1e5 coins"

    if(game.C4complete) document.getElementById('C2g').innerHTML=format(game.C2goal)+" coins<br>completion: "+game.C2times.add(1)
    else document.getElementById('C2g').innerHTML="2.5e6 coins"

    if(game.C4complete) document.getElementById('C3g').innerHTML=format(game.C3goal)+" coins<br>completion: "+game.C3times.add(1)
    else document.getElementById('C3g').innerHTML="3e5 coins"

    if(game.C4complete) document.getElementById('C1r').innerHTML=new OmegaNum(1.2).minus(new OmegaNum(0.5).pow(game.C1times).times(0.1))
    else document.getElementById('C1r').innerHTML="1.1"

    if(!game.auto) document.getElementById('autoon').innerHTML="false"
    else document.getElementById('autoon').innerHTML="true"

    if(!game.u1m) document.getElementById('u1mb').innerHTML="false"
    else document.getElementById('u1mb').innerHTML="true"

    if(!game.u2m) document.getElementById('u2mb').innerHTML="false"
    else document.getElementById('u2mb').innerHTML="true"

    if(!game.u3m) document.getElementById('u3mb').innerHTML="false"
    else document.getElementById('u3mb').innerHTML="true"

    if(!game.u4m) document.getElementById('u4mb').innerHTML="false"
    else document.getElementById('u4mb').innerHTML="true"

    if(game.g1.gte("6")||game.u1bought) {
      document.getElementById('u1').style.display = 'inline-block';
    }
    else     
    document.getElementById('u1').style.display = 'none';

    if(game.g1.gte("8")||game.u2bought) {
      document.getElementById('u2').style.display = 'inline-block';
    }
    else     
    document.getElementById('u2').style.display = 'none';

    if((game.g1.gte("12")&&game.b.gte(1))||game.u3bought) {
      document.getElementById('u3').style.display = 'inline-block';
    }
    else     
    document.getElementById('u3').style.display = 'none';

    if(game.g1.gte("15")||game.u4bought) {
      document.getElementById('u4').style.display = 'inline-block';
    }
    else     
    document.getElementById('u4').style.display = 'none';

    if(game.gain.gte(1e4)||game.u5bought) {
      document.getElementById('u5').style.display = 'inline-block';
    }
    else     
    document.getElementById('u5').style.display = 'none';

    if(game.g1.gte("26")||game.u6bought) {
      document.getElementById('u6').style.display = 'inline-block';
    }
    else     
    document.getElementById('u6').style.display = 'none';

    if(game.gain.gte(1e8)||game.u7bought) {
      document.getElementById('u7').style.display = 'inline-block';
    }
    else     
    document.getElementById('u7').style.display = 'none';

    if(game.g1.gte("44")||game.u8bought) {
      document.getElementById('u8').style.display = 'inline-block';
    }
    else     
    document.getElementById('u8').style.display = 'none';

    if(game.b.gte("9")||game.u9bought) {
      document.getElementById('u9').style.display = 'inline-block';
    }
    else     
    document.getElementById('u9').style.display = 'none';

    if(game.b.gte("11")||game.u10bought) {
      document.getElementById('u10').style.display = 'inline-block';
    }
    else     
    document.getElementById('u10').style.display = 'none';

    if(game.g1.gte("340")||game.u11bought) {
      document.getElementById('u11').style.display = 'inline-block';
    }
    else     
    document.getElementById('u11').style.display = 'none';

    if(game.u6bought||game.inC1) {
      document.getElementById('C1').style.display = 'inline-block';
    }
    else     
    document.getElementById('C1').style.display = 'none';

    if(game.C1complete||game.inC2) {
      document.getElementById('C2').style.display = 'inline-block';
    }
    else     
    document.getElementById('C2').style.display = 'none';

    if(game.C2complete||game.inC3) {
      document.getElementById('C3').style.display = 'inline-block';
    }
    else     
    document.getElementById('C3').style.display = 'none';

    if(game.C3complete||game.inC4) {
      document.getElementById('C4').style.display = 'inline-block';
    }
    else     
    document.getElementById('C4').style.display = 'none';

    if(game.u9bought) {
      document.getElementById('hasu9').innerHTML=" Your timer also produce "+game.tgain+" time per second.";
    }
    else     
    document.getElementById('hasu9').innerHTML="";

    if(game.u9bought||game.time.gte(1)) {
      document.getElementById('n1').style.display = 'inline-block';
    }
    else     
    document.getElementById('n1').style.display = 'none';

    if(game.g1.gte("10")||game.b.gte(1)||game.t.gte(1)) {
      document.getElementById('p1').style.display = 'inline-block';
    }
    else     
    document.getElementById('p1').style.display = 'none';

    if(game.g1.gte("200")||game.t.gte(1)) {
        document.getElementById('p2').style.display = 'inline-block';
      }
      else     
      document.getElementById('p2').style.display = 'none';

    if(game.C3complete) {
      document.getElementById('auto').style.display = 'inline-block';
    }
    else     
    document.getElementById('auto').style.display = 'none';


    if(game.C3complete) {document.getElementById('m').style.display = 'inline-block';} else document.getElementById('m').style.display = 'none';
    if(game.C3complete) {document.getElementById('m1').style.display = 'inline-block';} else document.getElementById('m1').style.display = 'none';
    if(game.C3complete) {document.getElementById('m2').style.display = 'inline-block';} else document.getElementById('m2').style.display = 'none';
    if(game.C3complete) {document.getElementById('m3').style.display = 'inline-block';} else document.getElementById('m3').style.display = 'none';
    if(game.C3complete) {document.getElementById('m4').style.display = 'inline-block';} else document.getElementById('m4').style.display = 'none';
  },40)


  
  setInterval(function() {
    let base=new OmegaNum(2)
    if(game.u3m&&game.u3bought) base=base.add(game.g1.add(1).logBase(2.3).add(1))
  else if(game.u1bought&&game.u7bought&&!game.inC3) base=base.add(game.g1.add(1).logBase(3).add(1))
  else  if(game.u3bought&&!game.inC3) base=base.add(game.g1.add(1).log10().add(1))
  base=base.add(game.t.pow(1.6))
    game.base=base
      },40)

setInterval(function() {
let m=new OmegaNum(1)
if(game.u1m&&game.u1bought)  m=m.times(game.g1.add(1).logBase(2).pow(2).add(1))
else if(game.u1bought&&game.u5bought&&!game.inC3) m=m.times(game.g1.add(1).logBase(2).times(2).add(1))
else if(game.u1bought&&!game.inC3) m=m.times(game.g1.add(1).log10().times(2).add(1))

if(game.u2m&&game.u2bought) m=m.times(game.c.add(1).logBase(1.5).pow(1.5).add(1))
else if(game.u2bought&&game.u6bought&&!game.inC3) m=m.times(game.c.add(1).logBase(1.5).times(2).add(1))
else if(game.u2bought&&!game.inC3) m=m.times(game.c.add(1).log10().add(1))
if(!game.inC2) m=m.times(new OmegaNum(game.base).pow(game.b.add(game.t.pow(0.8))))
game.g1m=m
  },40)

setInterval(function() {
    let Gscalepow=new OmegaNum(1.25)
    let base=new OmegaNum(1.5)

    if(game.u4m&&game.u4bought&&game.C3times.gte(1))base=new OmegaNum(1.19)
  else  if(game.u4m&&game.u4bought) base=new OmegaNum(1.2)
  else  if(game.u8bought&&game.u4bought&&!game.inC3) base=new OmegaNum(1.225)

    if(game.C3complete)Gscalepow=new OmegaNum(1)

  else  if(game.u4bought&&!game.inC3) Gscalepow=new OmegaNum(1.1)

    game.Gscalepow=Gscalepow
    game.Gbase=base
      },40)

setInterval(function() {
  let Gain=game.g1.times(game.g1m)
 Gain=Gain.times(game.timeeff)
 if(game.inC1) Gain=Gain.pow(0.5)
  if(game.C1complete) Gain=Gain.pow(new OmegaNum(1.2).minus(new OmegaNum(0.5).pow(game.C1times).times(0.1)))

  game.gain=Gain
    },40)
setInterval(function() {
  let Req=new OmegaNum(10000).times(new OmegaNum(10).pow(game.b.pow(1.35)))
  if(game.C2complete) Req=Req.div((game.g1.add(1)).pow(game.C2times.add(1)))
  game.b1r=Req
    },40)

 setInterval(function() {
    let Req=new OmegaNum(200).times(new OmegaNum(1.325).pow(game.t.pow(1.5)))
    game.t1r=Req
        },40)
setInterval(function() {
  let level=game.c.div(10).logBase(game.Gbase).add(1).floor()
  if(game.auto&&level.gte(game.g1)) game.g1=level

    },40)
setInterval(function() {
  let gain=game.t.pow(2)
  if(game.u10bought) gain=gain.times(game.b.add(1))
  game.tgain=gain
    },40)
setInterval(function() {
  let pow=new OmegaNum(1.25)
  if(game.u10bought) pow=new OmegaNum(2.2)
  let eff=game.time.add(1).logBase(2).pow(pow).add(1)
game.timeeff=eff
  },40)    
  setInterval(function() {
  game.C1goal=new OmegaNum(1e16).pow(game.C1times.pow(1.75).add(1))
  game.C2goal=new OmegaNum(2.5e12).pow(game.C2times.pow(1.75).add(1))
  game.C3goal=new OmegaNum(4e35).pow(game.C3times.pow(1.75).add(1))
    },40)
setInterval(function() {   
save()
},2500)
function tab(tab) {
	document.getElementById("Main").style.display = "none";
	document.getElementById("Challenge").style.display = "none";
  document.getElementById("Upgrade").style.display = "none";
	document.getElementById("Options").style.display = "none";
	document.getElementById(tab).style.display = "inline-block";
}