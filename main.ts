let coin: Sprite = null
scene.setBackgroundColor(15)
let 吃豆人 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 f f 5 5 5 5 f f 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 5 5 5 5 5 5 5 . . . . . . . 
    . 5 5 5 5 5 5 5 5 5 . . . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let ghost = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 1 1 1 2 2 1 1 1 2 . . . 
    . . . 2 8 8 1 2 2 8 8 1 2 . . . 
    . . . 2 8 8 1 2 2 8 8 1 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 . 2 . 2 . 2 . 2 . 2 2 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let ghost1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 9 9 9 . . . . 
    . . . 9 9 9 9 9 9 9 9 9 9 . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    . 9 1 1 9 9 9 9 9 1 1 9 9 9 9 . 
    . 1 1 1 1 9 9 9 1 1 1 1 9 9 9 . 
    . 8 8 1 1 9 9 9 8 8 1 1 9 9 9 . 
    . 8 8 1 1 9 9 9 8 8 1 1 9 9 9 . 
    . 9 1 1 9 9 9 9 9 1 1 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 . 9 9 9 . . 9 9 9 . 9 . 9 . 
    . 9 . 9 9 9 . . 9 9 9 . 9 . 9 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
吃豆人.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`级别1`)
tiles.placeOnRandomTile(吃豆人, assets.tile`myTile0`)
tiles.placeOnTile(ghost, tiles.getTileLocation(8, 1))
tiles.placeOnTile(ghost1, tiles.getTileLocation(1, 15))
scene.cameraFollowSprite(吃豆人)
controller.moveSprite(吃豆人, 60, 60)
let myfood = scene.getTilesByType(0)
for (let 值 of myfood) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    scene.place(值, coin)
}
let wall = tiles.getTilesByType(assets.tile`myTile`)
for (let 值 of wall) {
    tiles.setWallAt(值, true)
}
