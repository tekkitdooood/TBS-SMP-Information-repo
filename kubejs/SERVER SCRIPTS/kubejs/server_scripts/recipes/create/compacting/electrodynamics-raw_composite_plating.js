ServerEvents.recipes(event => {
    event.custom({
         "type": "create:compacting",
         "ingredients": 
            [{"tag": "c:plates/titanium"},
            {"tag": "c:plastic"},
            {"item": "electrodynamics:ceramicplate"}],
         "results": 
            [{"id": "electrodynamics:compositeplatingraw"}]
    })
})