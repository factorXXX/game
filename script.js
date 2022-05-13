function entiryHP(stage){
    return E(2.5).pow(stage.sub(1).pow(1.25)).times(10).floor()
}
function entiryATT(stage){
    return E(2).pow(stage.pow(1.25)).floor()
}
function playerHP(){
    return E(100)
}
function playerATT(){
    let att=E(5)
    att=att.add(player.shop[1].times(2))


    if(hasSkill(2)) att=att.times(1.5)
    return att
}
function playerDR(){
    let dr=E(0)
    if(hasSkill(3)) dr=dr.add(25)
    return dr
}
function coinGain(stage){
    return E(2).pow(stage.sub(1).pow(0.95)).floor()
}
function cost(shop){
    if(shop==1) return E(1.3).pow(player.shop[1].pow(1.1)).times(15).floor()
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
    player.buff=[]
}
function updateBackLevel(){
    player.stage=player.stage.sub(1)
    player.stage=player.stage.max(1)
    player.playerHP=playerHP()
    player.entiryHP=entiryHP(player.stage)
    player.buff=[]
}
function skill(x){
    if(hasSkill(x)) return;
    if(x==1) player.entiryHP=player.entiryHP.sub(playerATT())
    if(x==2) player.buff.push(2)
    if(x==3) player.buff.push(3)
    player.playerHP=player.playerHP.sub(entiryATT(player.stage).times(E(1).sub(playerDR().div(100))))

}
function shop(x){
    if(player.coin.lt(cost(x))) return;
    player.coin=player.coin.sub(cost(x))
    player.shop[1]=player.shop[1].add(1)
    player.playerHP=player.playerHP.sub(entiryATT(player.stage).times(E(1).sub(playerDR().div(100))))

}
function hasSkill(x){
    return player.buff.includes(x)
}