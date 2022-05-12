function entiryHP(stage){
    return E(2.5).pow(stage.sub(1).pow(1.25)).times(10).floor()
}
function entiryATT(stage){
    return E(2).pow(stage.pow(1.25)).floor()
}
function playerHP(){
    return E(100)
}
function coinGain(stage){
    return E(2).pow(stage.sub(1).pow(0.95)).floor()
}
setInterval(function () {
    if(player.entiryHP.lte(0)) updateNextLevel()
    if(player.playerHP.lte(0)) updateBackLevel()
}, 40);

function updateNextLevel(){
    player.coin=player.coin.add(coinGain(player.stage))
    player.stage=player.stage.add(1)
    player.playerHP=playerHP()
    player.entiryHP=entiryHP(player.stage)
    
}
function updateBackLevel(){
    player.stage=player.stage.sub(1)
    player.stage=player.stage.max(1)
    player.playerHP=playerHP()
    player.entiryHP=entiryHP(player.stage)
}
function skill(x){
    if(x==1) player.entiryHP=player.entiryHP.sub(player.attick)
    player.playerHP=player.playerHP.sub(entiryATT(player.stage))
}

