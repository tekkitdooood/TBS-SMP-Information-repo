ServerEvents.recipes(event => {
    event.custom({
            "type": "immersiveengineering:cloche",
            "input": {
                "item": "minecraft:jungle_sapling"
            },
            "render": {
                "type": "immersiveengineering:generic",
                "block": "minecraft:jungle_sapling"
            },
            "results": [
                {
                "count": 10,
                "id": "jungle_log"
                },
                {
                "chance": 0.05,
                "output": {
                    "id": "minecraft:jungle_sapling"
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