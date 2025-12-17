ServerEvents.recipes(event => {
    event.custom({
            "type": "immersiveengineering:cloche",
            "input": {
                "item": "minecraft:cherry_sapling"
            },
            "render": {
                "type": "immersiveengineering:generic",
                "block": "minecraft:cherry_sapling"
            },
            "results": [
                {
                "count": 10,
                "id": "cherry_log"
                },
                {
                "chance": 0.05,
                "output": {
                    "id": "minecraft:cherry_sapling"
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