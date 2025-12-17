ServerEvents.recipes(event => {
    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {"tag": "c:ingots/steel"}
            ],
        "results": [
            {"id": "create:shadow_steel"}
            ]
        }
    )
})