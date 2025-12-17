ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {"item": "minecraft:weathered_copper"}
            ],
        "results": [{ 
            "chance": 1,
            "count": 1,
            "id": "minecraft:oxidized_copper"
        }]
    })
})