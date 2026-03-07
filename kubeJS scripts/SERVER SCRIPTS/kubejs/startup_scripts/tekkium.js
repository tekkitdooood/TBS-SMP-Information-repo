StartupEvents.registry('item', event => {
    event
        .create('tekkium_doooodgot')
        .texture('teks_trims:item/tekkium_doooodgot')
        .maxStackSize(64)
    event
        .create('zinc_dust')
        .texture('teks_trims:item/zinc_dust')
        .maxStackSize(64)
})

StartupEvents.registry('block', event => {
    event
        .create('tekkium_bloooock')
        .displayName('Tekkium Bloooock')
        .hardness(5)
        .resistance(1100)
        .requiresTool(false)
        .texture('teks_trims:block/tekkium_bloooock')
        .tagBlock('minecraft:beacon_base_blocks')
        .tagBlock('minecraft:beacom_base_material')

    event
        .create('clear_block')
        .displayName('Clear Block')
        .hardness(1)
        .resistance(1500)
        .requiresTool(false)
        .texture('teks_trims:block/clear_block')
        .defaultCutout()

})