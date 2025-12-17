ServerEvents.recipes(event => {
    event.custom(
       {
        "type": "electrodynamics:mineral_grinder_recipe",
        "experience": 0.1,
        "group": "electrodynamics",
        "itembi": [
            {
            "chance": 1.0,
            "item": {
                "count": 1,
                "id": "electrodynamics:oxidechromiumdisilicide"
            }
            }
        ],
        "iteminputs": [
            {
            "count": 1,
            "ingredient": {
                "tag": "c:plasticfibers"
            }
            }
        ],
        "output": {
            "count": 3,
            "id": "electrodynamics:sheetplastic"
        },
        "ticks": 80,
        "usagepertick": 250
        });
})