ServerEvents.recipes(event => {
    event.custom({
        "type": "create:compacting",
        "heat_requirement": "heated",
        "ingredients": 
            [{"item": "electrodynamics:compositeplatingraw"}],
        "results": 
            [{"id": "electrodynamics:compositeplating"}]
    });
})