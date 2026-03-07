ServerEvents.recipes(event => {
    event.shaped(
        Item.of('immersiveengineering:drillhead_steel', 1),
        [
            ' I ',
            'HIW',
            'IBI'
        ],
        {
            H: 'immersiveengineering:hammer',
            I: '#c:ingots/steel',
            W: 'immersiveengineering:wirecutter',
            B: '#c:storage_blocks/steel'
        }
    )
    event.shaped(
        Item.of('immersiveengineering:drillhead_iron', 1),
        [
            ' I ',
            'HIW',
            'IBI'
        ],
        {
            H: 'immersiveengineering:hammer',
            I: '#c:ingots/iron',
            W: 'immersiveengineering:wirecutter',
            B: '#c:storage_blocks/iron'
        }
    )
})
