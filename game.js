game = {
  c: new OmegaNum(10), 
  g1: new OmegaNum(0),
  g1c: new OmegaNum(10),
  g1m: new OmegaNum(1),
  b1r: new OmegaNum(10000),
  b: new OmegaNum(0),
  base: new OmegaNum(2),
  Gscalepow: new OmegaNum(1.25),
  Gbase:new OmegaNum(1.5),
  u1bought:false,
  u2bought:false,
  u3bought:false,
  u4bought:false,
  u5bought:false,
  u6bought:false,
  u7bought:false,
  u8bought:false,
  u1m:false,
  u2m:false,
  u3m:false,
  u4m:false,
  inC1:false,
  inC2:false,
  inC3:false,
  C1complete:false,
  C2complete:false,
  C3complete:false,
  auto:false,
  gain: new OmegaNum(10), 
  cap:false,

};
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

function mU1() {
  if(game.u1m){
  game.cap=false
  game.u1m=false
  }
  else if(!game.cap){
    game.cap=true
    game.u1m=true
  }
} 
function mU2() {
  if(game.u2m){
  game.cap=false
  game.u2m=false
  }
  else if(!game.cap){
    game.cap=true
    game.u2m=true
  }
} function mU3() {
  if(game.u3m){
  game.cap=false
  game.u3m=false
  }
  else if(!game.cap){
    game.cap=true
    game.u3m=true
  }
} 
function mU4() {
  if(game.u4m){
  game.cap=false
  game.u4m=false
  }
  else if(!game.cap){
    game.cap=true
    game.u4m=true
  }
} 
function inC1() {


  if(!game.inC1){ 
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.inC1=true
  
  }
  else if(game.c.gte(1e5)&&game.inC1){
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.C1complete=true
    game.inC1=false

  }  
  else if(confirm("Are you sure you want to exit challenge early?")){ 
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.inC1=false

  }
  
} 

function inC2() {


  if(!game.inC2){ 
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.inC2=true
  
  }
  else if(game.c.gte(2.5e6)&&game.inC2){
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.C2complete=true
    game.inC2=false

  }  
  else if(confirm("Are you sure you want to exit challenge early?")){ 
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.inC2=false

  }
  
} 

function inC3() {

  if(!game.inC3){ 
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.inC3=true
  
  }
  else if(game.c.gte(3e5)&&game.inC3){
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.C3complete=true
    game.inC3=false

  }  
  else if(confirm("Are you sure you want to exit challenge early?")){ 
    game.c = new OmegaNum(10);
    game.g1=new OmegaNum(0)
    game.inC3=false

  }
  
} 

function auto() {
game.auto=!game.auto
} 

  setInterval(function() {
    makeC(game.gain.div(25))

    game.g1c=new OmegaNum(10).times(new OmegaNum(game.Gbase).pow(game.g1.pow(game.Gscalepow)))
    document.getElementById('C').innerHTML=game.c.round().toHyperE();
    document.getElementById('G1c').innerHTML=game.g1c.round().toHyperE();
    document.getElementById('G1').innerHTML=game.g1.round().toHyperE();
    document.getElementById('G1m').innerHTML=game.g1m.round().toHyperE();
    document.getElementById('B1').innerHTML=game.b.round().toHyperE();
    document.getElementById('Bc').innerHTML=game.b1r.round().toHyperE();
    if(!game.inC2) document.getElementById('Bm').innerHTML=new OmegaNum(game.base).pow(game.b).round().toHyperE();
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

    if(!game.inC1) document.getElementById('inC1').innerHTML="false"
    else document.getElementById('inC1').innerHTML="true"

    if(!game.inC2) document.getElementById('inC2').innerHTML="false"
    else document.getElementById('inC2').innerHTML="true"

    if(!game.inC3) document.getElementById('inC3').innerHTML="false"
    else document.getElementById('inC3').innerHTML="true"

    if(!game.C1complete) document.getElementById('C1c').innerHTML="false"
    else document.getElementById('C1c').innerHTML="true"

    if(!game.C2complete) document.getElementById('C2c').innerHTML="false"
    else document.getElementById('C2c').innerHTML="true"

    
    if(!game.C3complete) document.getElementById('C3c').innerHTML="false"
    else document.getElementById('C3c').innerHTML="true"

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

    if(game.g1.gte("10")||game.b.gte(1)) {
      document.getElementById('p1').style.display = 'inline-block';
    }
    else     
    document.getElementById('p1').style.display = 'none';
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

    game.base=base
      },1)

setInterval(function() {
let m=new OmegaNum(1)
if(game.u1m&&game.u1bought)  m=m.times(game.g1.add(1).logBase(2).pow(2).add(1))
else if(game.u1bought&&game.u5bought&&!game.inC3) m=m.times(game.g1.add(1).logBase(2).times(2).add(1))
else if(game.u1bought&&!game.inC3) m=m.times(game.g1.add(1).log10().times(2).add(1))

if(game.u2m&&game.u2bought) m=m.times(game.c.add(1).logBase(1.5).pow(1.5).add(1))
else if(game.u2bought&&game.u6bought&&!game.inC3) m=m.times(game.c.add(1).logBase(1.5).times(2).add(1))
else if(game.u2bought&&!game.inC3) m=m.times(game.c.add(1).log10().add(1))
if(!game.inC2) m=m.times(new OmegaNum(game.base).pow(game.b))
game.g1m=m
  },1)

setInterval(function() {
    let Gscalepow=new OmegaNum(1.25)
    let base=new OmegaNum(1.5)

    if(game.u4m&&game.u4bought) base=new OmegaNum(1.2)
  else  if(game.u8bought&&game.u4bought&&!game.inC3) base=new OmegaNum(1.225)

    if(game.C3complete)Gscalepow=new OmegaNum(1)
  else  if(game.u4bought&&!game.inC3) Gscalepow=new OmegaNum(1.1)

    game.Gscalepow=Gscalepow
    game.Gbase=base
      },1)

setInterval(function() {
  let Gain=game.g1.times(game.g1m)
  if(game.inC1) Gain=Gain.pow(0.5)
  if(game.C1complete) Gain=Gain.pow(1.1)
  game.gain=Gain
    },1)
setInterval(function() {
  let Req=new OmegaNum(10000).times(new OmegaNum(10).pow(game.b.pow(1.35)))
  if(game.C2complete) Req=Req.div(game.g1.add(1))
  game.b1r=Req
    },1)

setInterval(function() {
  let level=game.c.div(10).logBase(game.Gbase).add(1).floor()
  if(game.auto&&level.gte(game.g1)) game.g1=level

    },1)
setInterval(function() {   
save()
},2500)