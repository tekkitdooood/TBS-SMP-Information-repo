ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {"item": "minecraft:copper_block"}
            ],
        "results": [{ 
            "chance": 1,
            "count": 1,
            "id": "minecraft:exposed_copper"
        }]
    })
})