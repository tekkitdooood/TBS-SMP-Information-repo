ServerEvents.recipes(event => {
    event.custom({
        "type": "immersiveengineering:fermenter",
        "energy": 6400,
        "fluid": {
            "amount": 200,
            "id": "immersiveengineering:ethanol"
            },
        "input": {
            "item": "createaddition:biomass"
            }
        }
    )
})