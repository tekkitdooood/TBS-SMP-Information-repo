ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {"item": "create:experience_nugget"}
            ],
        "results": [
            {"amount": 250,
            "id": "sophisticatedcore:xp_still"}
            ]
        }
    )
})