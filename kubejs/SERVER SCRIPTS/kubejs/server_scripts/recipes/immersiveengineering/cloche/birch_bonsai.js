ServerEvents.recipes(event => {
    event.custom({
            "type": "immersiveengineering:cloche",
            "input": {
                "item": "minecraft:birch_sapling"
            },
            "render": {
                "type": "immersiveengineering:generic",
                "block": "minecraft:birch_sapling"
            },
            "results": [
                {
                "count": 10,
                "id": "birch_log"
                },
                {
                "chance": 0.05,
                "output": {
                    "id": "minecraft:birch_sapling"
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