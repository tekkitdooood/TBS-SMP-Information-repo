ServerEvents.recipes(event => {
    event.custom({
        "type": "createaddition:liquid_burning",
        "burn_time": 1200,
        "ingredients": [
            {"type": "fluid_tag",
            "amount": 1000,
            "fluid_tag": "c:lumisene"
            }
        ],
        "results": [],
        "superheated": true
    })
});