ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {"item": "minecraft:exposed_copper"}
            ],
        "results": [{ 
            "chance": 1,
            "count": 1,
            "id": "minecraft:weathered_copper"
        }]
    })
})