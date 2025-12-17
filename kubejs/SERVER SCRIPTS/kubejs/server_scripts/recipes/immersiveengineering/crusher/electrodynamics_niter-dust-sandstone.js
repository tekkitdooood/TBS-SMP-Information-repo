ServerEvents.recipes(event => {
    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 1600,
        "input": {
            "tag": "c:sandstone/blocks"
            },
        "result": {
            "count": 2,
            "id": "minecraft:sand"
        },
        "secondaries": [{
            "chance": 0.75,
            "output": {
                "id": "electrodynamics:dustniter"
                }
            }
        ]
        }
    )
})