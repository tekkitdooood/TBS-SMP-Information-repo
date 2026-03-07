ServerEvents.recipes(event => {
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "tag": "c:obsidians"
            }
        ],
        "processing_time": 500,
        "results": [
            {
            "id": "electrodynamics:dustobsidian"
            },
            {
            "chance": 0.5,
            "id": "electrodynamics:dustobsidian"
            }
        ]
        }
    )
})