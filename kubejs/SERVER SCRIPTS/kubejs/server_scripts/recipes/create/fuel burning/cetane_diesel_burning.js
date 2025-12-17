ServerEvents.recipes(event => {
    event.custom({
        "type": "createaddition:liquid_burning",
        "burn_time": 5000,
        "ingredients": [
            {"type": "fluid_tag",
            "amount": 1000,
            "fluid_tag": "c:boosted_biodiesel"
            }
        ],
        "results": [],
        "superheated": true
    })
});