ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:saddle', 1),
        [
            ' L ',
            'LIL',
            '   '
        ],
        {
            L: '#c:leathers',
            I: '#c:ingots/iron'
        }
    )
})