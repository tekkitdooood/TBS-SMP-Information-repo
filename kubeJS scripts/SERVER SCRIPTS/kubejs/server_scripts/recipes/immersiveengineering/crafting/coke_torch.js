ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:torch', 8),
        [
            ' C ',
            ' S ',
            '   '
        ],
        {
            C: '#c:coal_coke',
            S: '#c:rods/wooden'
        }
    )
})