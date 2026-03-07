ServerEvents.recipes(event => {
    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 1600,
        "input": {
            "tag": "c:grain"
            },
        "result": {
            "count": 2,
            "id": "create:wheat_flour"
        },
        "secondaries": [{
            "chance": 0.75,
            "output": {
                "id": "create:wheat_flour"
                }
            },
            {
            "chance": 0.5,
            "output": {
                "id": "minecraft:wheat_seeds"
            }
            }
        ]
        }
    )
})