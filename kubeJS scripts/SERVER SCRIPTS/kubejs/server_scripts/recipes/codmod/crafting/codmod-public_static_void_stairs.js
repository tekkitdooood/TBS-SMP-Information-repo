ServerEvents.recipes(event => {
    event.shaped(
        Item.of('codmod:public_static_void_stairs', 4),
        [
            '$  ',
            '$$ ',
            '$$$'
        ],
        {
            $: 'codmod:public_static_void'
        }
    )
})