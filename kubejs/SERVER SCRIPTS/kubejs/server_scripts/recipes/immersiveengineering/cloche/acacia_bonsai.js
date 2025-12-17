ServerEvents.recipes(event => {
    event.custom({
            "type": "immersiveengineering:cloche",
            "input": {
                "item": "minecraft:acacia_sapling"
            },
            "render": {
                "type": "immersiveengineering:generic",
                "block": "minecraft:acacia_sapling"
            },
            "results": [
                {
                "count": 10,
                "id": "acacia_log"
                },
                {
                "chance": 0.05,
                "output": {
                    "id": "minecraft:acacia_sapling"
                }
                }
            ],
            "soil": {
                "item": "minecraft:dirt"
            },
            "time": 1600
            }
    )

})