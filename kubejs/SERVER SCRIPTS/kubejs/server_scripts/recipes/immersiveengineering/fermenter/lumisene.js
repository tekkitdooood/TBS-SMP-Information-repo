ServerEvents.recipes(event => {
    event.custom({
        "type": "immersiveengineering:fermenter",
        "energy": 9600,
        "fluid": {
            "amount": 100,
            "id": "supplementaries:lumisene"
            },
        "input": {
            "item": "minecraft:glow_berries"
            }
        }
    )
})