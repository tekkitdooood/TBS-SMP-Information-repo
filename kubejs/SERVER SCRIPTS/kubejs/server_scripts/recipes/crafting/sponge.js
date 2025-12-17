ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:sponge', 2),
        [
            'SPS',
            'PBP',
            'SPS'
        ],
        {
            S: 'immersiveengineering:dust_wood',
            P: 'electrodynamics:sheetplastic',
            B: 'minecraft:slime_ball'
        }
    )
})