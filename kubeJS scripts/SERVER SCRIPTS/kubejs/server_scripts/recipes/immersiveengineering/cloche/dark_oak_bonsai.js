ServerEvents.recipes(event => {
    event.custom({
            "type": "immersiveengineering:cloche",
            "input": {
                "item": "minecraft:dark_oak_sapling"
            },
            "render": {
                "type": "immersiveengineering:generic",
                "block": "minecraft:dark_oak_sapling"
            },
            "results": [
                {
                "count": 10,
                "id": "dark_oak_log"
                },
                {
                "chance": 0.05,
                "output": {
                    "id": "minecraft:dark_oak_sapling"
                }
                },
                {
                "chance": 0.005,
                "output": {
                    "id": "minecraft:apple"
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