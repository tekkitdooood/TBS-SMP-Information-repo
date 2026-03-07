ServerEvents.recipes(event => {
    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 1600,
        "input": {
            "tag": "minecraft:planks"
            },
        "result": {
            "count": 3,
            "id": "immersiveengineering:dust_wood"
            }
        }
    )
    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 1600,
        "input": {
            "tag": "minecraft:logs"
            },
        "result": {
            "count": 12,
            "id": "immersiveengineering:dust_wood"
            }
        }
    )
})