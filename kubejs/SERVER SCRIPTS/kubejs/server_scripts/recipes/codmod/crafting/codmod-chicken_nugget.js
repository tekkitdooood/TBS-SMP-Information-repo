ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('codmod:chicken_nugget', 6),
        [
            'minecraft:cooked_chicken',
            'create:wheat_flour',
            '#c:tools/knife'
        ]
    ).damageIngredient('#c:tools/knife')
})