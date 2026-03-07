ServerEvents.recipes(event => {
    event.remove({id: 'minecraft:eye_armor_trim_smithing_template'})

    event.shaped(
        Item.of('minecraft:eye_armor_trim_smithing_template', 2),
        [
            'DTD',
            'DED',
            'DDD'
        ],
        {
            D: 'minecraft:diamond',
            T: 'minecraft:eye_armor_trim_smithing_template',
            E: 'minecraft:ender_eye'
        }
    )
})