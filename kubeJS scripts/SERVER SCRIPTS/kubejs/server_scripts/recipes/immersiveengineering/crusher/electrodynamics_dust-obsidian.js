ServerEvents.recipes(event => {
    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 1600,
        "input": {
            "tag": "c:obsidians"
            },
        "result": {
            "count": 2,
            "id": "electrodynamics:dustobsidian"
            }
        }
    )
})