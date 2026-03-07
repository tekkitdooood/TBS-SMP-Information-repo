ServerEvents.recipes(event => {
    event.custom({
            "type": "immersiveengineering:cloche",
            "input": {
                "item": "minecraft:oak_sapling"
            },
            "render": {
                "type": "immersiveengineering:generic",
                "block": "minecraft:oak_sapling"
            },
            "results": [
                {
                "count": 10,
                "id": "minecraft:oak_log"
                },
                {
                "chance": 0.05,
                "output": {
                    "id": "minecraft:oak_sapling"
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
            
    })

})