ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
            {"tag": "minecraft:small_flowers"},{"tag": "minecraft:small_flowers"},
            {"tag": "c:fertilizers"},
            {"item": "createaddition:biomass"}],
        "result": 
            {"count": 2,
            "id": "create:tree_fertilizer"}
        }
    )
})