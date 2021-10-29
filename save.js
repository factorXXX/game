
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
    game.cap2 = new OmegaNum(game.cap2)

  }
  function reset(){
    if(confirm("Are you sure you want to do a hard reset?")){
    save()
    load()
    }
  }
  window.onload=function(){load()}