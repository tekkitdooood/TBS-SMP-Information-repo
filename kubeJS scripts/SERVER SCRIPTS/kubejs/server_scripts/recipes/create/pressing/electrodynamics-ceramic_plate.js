ServerEvents.recipes(event => {
    event.custom({
        "type": "create:pressing",
        "ingredients": 
            [{"item": "electrodynamics:ceramiccooked"}],
        "results": 
            [{"id": "electrodynamics:ceramicplate"}]
    });
})