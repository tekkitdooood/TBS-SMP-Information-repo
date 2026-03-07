ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('farmersdelight:organic_compost', 1),
        [
            '4x #c:fertilizers',
            'minecraft:dirt',
            '2x #c:compost_materials',
            '2x farmersdelight:straw'
        ]
    )
})