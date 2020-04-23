namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
c c c c f f f f f f f c c c c c 
c c f f 5 5 5 5 5 5 5 f f c c c 
c f 5 5 5 5 5 f 5 5 5 5 5 f c c 
c f 5 5 5 f f f f f 5 5 5 f c c 
f 5 5 5 f 5 5 f 5 5 f 5 5 5 f c 
f 5 5 5 f 5 5 f 5 5 5 5 5 5 f c 
f 5 5 5 f 5 5 f 5 5 5 5 5 5 f c 
f 5 5 5 f 5 5 f 5 5 5 5 5 5 f c 
f 5 5 5 f 5 5 f 5 5 5 5 5 5 f c 
f 5 5 5 f 5 5 f 5 5 f 5 5 5 f c 
f 5 5 5 5 f f f f f 5 5 5 5 f c 
c f 5 5 5 5 5 f 5 5 5 5 5 f c c 
c f 5 5 5 5 5 5 5 5 5 5 5 f c c 
c c f f 5 5 5 5 5 5 5 f f c c c 
c c c c f f f f f f f c c c c c 
c c c c c c c c c c c c c c c c 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
c c c c f f f f f f f f c c b c 
c c c f e 4 e 4 e 4 e 4 f c b c 
c c f 4 e 4 e 4 e 4 e 4 e f b c 
c f e 4 e 4 e e e 4 e 4 e 4 f c 
c f e 4 e e e e e e e 4 e 4 f c 
c f e e e e e e e e e e e e f c 
c f e e e e e e e e e e e e f c 
c f e e e e e e e e e e e e f c 
c f e e e e e e e e e e e e f c 
c f e e e e e e e e e e e e f c 
c f e e e e e e e e e e e e f c 
c f e e e e e e e e e e e e f c 
c f e e e e e e e e e e 5 e f c 
c f e e e e e e e e e e e e f c 
c f e e e e e e e e e e e e f c 
c f e e e e e e e e e e e e f c 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (numJumps < 1) {
        Advenurer.vy = -200
    }
    numJumps += 1
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    if (info.score() >= 1) {
        game.over(true)
    }
})
let numJumps = 0
let Advenurer: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`1e00100001070707070707070707070707070707070707070707070707070707070208090909090909090909090909090c0c0c0909090909090909090909090608090909090909090909090909090c09090909090909090909090909090608090909090c09090c09090909090c09090909090909090909090909090608090909090909090909090c09090c09090909090909090909090909090608090c0c090909090909090c09090c090909090e0909090909090909090608090909090c090909090909090e0c0909090c0c0c090909090909090906080909090909090c09090909090c0c09090909090909090909090909090608090909090909090909090909090909090909090909090909090909090608090909090909090c0c09090c090909090909090909090c0c0c090909060809090909090c09090909090909090c0c09090909090909090909090906080909090c090909090909090909090909090c09090e0909090909090906080c0c090909090e0909090c0c0c090909090909090c0909090909090906080909090909090c0c0c0909090909090c090909090c090909090c0c09060809090c0c09090c09090909090909090c090c0c090c090c0c090909090f0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 
. . . . . 2 . . 2 . . . . . 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . . 
. . 2 2 . . . . . . . 2 . . 2 . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . 2 . . . 2 2 2 . . . . . . . . . 
. . . . . . . 2 . . . . . 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 . . 2 . . . . . . . . . . 2 2 2 . . . . 
. . . . . . 2 . . . . . . . . 2 2 . . . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. 2 2 . . . . . . . . 2 2 2 . . . . . . . 2 . . . . . . . . 
. . . . . . . 2 2 2 . . . . . . 2 . . . . 2 . . . . 2 2 . . 
. . . 2 2 . . 2 . . . . . . . . 2 . 2 2 . 2 . 2 2 . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundCenter,sprites.builtin.coral1,sprites.builtin.crowd1,sprites.builtin.brick,sprites.dungeon.collectibleRedCrystal,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
info.setScore(0)
Advenurer = sprites.create(img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(Advenurer, 100, 0)
Advenurer.setPosition(8, 232)
Advenurer.ay = 350
scene.cameraFollowSprite(Advenurer)
numJumps = 0
info.startCountdown(180)
forever(function () {
    if (Advenurer.isHittingTile(CollisionDirection.Bottom)) {
        numJumps = 0
    }
})
