
function save(){
    localStorage.setItem("save key",JSON.stringify(game))
  }
  function load(){
    game = JSON.parse(localStorage.getItem("save key"))
    game.c = new OmegaNum(game.c)
    game.g1 = new OmegaNum(game.g1)
    game.g1c = new OmegaNum(game.g1c)
    game.g1m = new OmegaNum(game.g1m)
    game.b = new OmegaNum(game.b)
    game.b1r = new OmegaNum(game.b1r)
    game.base = new OmegaNum(game.base)
    game.gain = new OmegaNum(game.gain)
    game.Gbase = new OmegaNum(game.Gbase)
    game.t = new OmegaNum(game.t)
    game.t1r = new OmegaNum(game.t1r)
    game.time = new OmegaNum(game.time)

  }
  function reset(){
    if(confirm("Are you sure you want to do a hard reset?")){
    game.c = new OmegaNum(10)
    game.g1 = new OmegaNum(0)
    game.g1c = new OmegaNum(10)
    game.g1m = new OmegaNum(1)
    game.b= new OmegaNum(0)
    game.b1r= new OmegaNum(10000)
    game.base= new OmegaNum(2)
    game.gain = new OmegaNum(0)
    game.t = new OmegaNum(0)
    game.t1r = new OmegaNum(200)
    game.u1bought = false
    game.u2bought = false
    game.u3bought = false
    game.u4bought = false
    game.u5bought = false
    game.u6bought = false
    game.u7bought = false
    game.u8bought = false
    game.u9bought = false
    game.u1m = false
    game.u2m = false
    game.u3m = false  
    game.u4m = false
    game.cap=false
    game.C1complete = false
    game.inC1 = false
    game.C2complete = false
    game.inC2 = false
    game.C3complete = false
    game.inC3 = false
    game.auto=false
    save()
    load()
    }
  }
  window.onload=function(){load()}