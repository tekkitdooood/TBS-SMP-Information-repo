ServerEvents.recipes(event => {
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {"tag": "c:ingots/steel"},
            {"type": "fluid_stack",
            "amount": 250,
            "fluid": "sophisticatedcore:xp_still"}
            ],
        "results": [
            {"id": "create:refined_radiance"}
            ]
    });
})