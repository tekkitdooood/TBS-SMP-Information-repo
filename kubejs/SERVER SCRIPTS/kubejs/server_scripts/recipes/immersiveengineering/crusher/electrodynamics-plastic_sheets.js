ServerEvents.recipes(event => {
    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 1600,
        "input": {
            "tag": "c:plasticfibers"
            },
        "result": {
            "count": 2,
            "id": "electrodynamics:sheetplastic"
        },
        "secondaries": [{
            "chance": 1.0,
            "output": {
                "id": "electrodynamics:oxidechromiumdisilicide"
                }
            }
        ]
        }
    )
})