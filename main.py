scene.set_background_color(15)
吃豆人 = sprites.create(img("""
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
    """),
    SpriteKind.player)
ghost = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
ghost1 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
吃豆人.set_stay_in_screen(True)
tiles.set_current_tilemap(tilemap("""
    级别1
"""))
tiles.place_on_random_tile(吃豆人, assets.tile("""
    myTile0
"""))
tiles.place_on_tile(ghost, tiles.get_tile_location(8, 1))
tiles.place_on_tile(ghost1, tiles.get_tile_location(1, 15))
scene.camera_follow_sprite(吃豆人)
controller.move_sprite(吃豆人, 60, 60)
wall = tiles.get_tiles_by_type(assets.tile("""
    myTile
"""))
for 值 in wall:
    tiles.set_wall_at(值, True)