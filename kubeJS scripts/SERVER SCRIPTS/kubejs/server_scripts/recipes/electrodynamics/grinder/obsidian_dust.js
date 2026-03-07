ServerEvents.recipes(event => {
    event.custom({
        "type": "electrodynamics:mineral_grinder_recipe",
        "experience": 1.0,
        "group": "electrodynamics",
        "iteminputs": [
            {
            "count": 1,
            "ingredient": {
                "tag": "c:obsidians"
            }
            }
        ],
        "output": {
            "count": 2,
            "id": "electrodynamics:dustobsidian"
        },
        "ticks": 200,
        "usagepertick": 350.0
})
})