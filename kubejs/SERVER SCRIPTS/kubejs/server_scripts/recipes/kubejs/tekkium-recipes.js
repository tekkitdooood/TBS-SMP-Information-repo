ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('kubejs:tekkium_bloooock', 1),
        [
            '9x kubejs:tekkium_doooodgot'
        ]
    )

    event.shapeless(
        Item.of('kubejs:tekkium_doooodgot', 9),
        [
            'kubejs:tekkium_bloooock'
        ]
    )
})