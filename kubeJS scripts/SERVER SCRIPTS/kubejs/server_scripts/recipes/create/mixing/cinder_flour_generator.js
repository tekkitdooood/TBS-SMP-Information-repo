ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
         "ingredients": 
            [{"item" : "create:cinder_flour"},{"item": "create:wheat_flour"}],
        "results": 
            [{"count": 2,"id": "create:cinder_flour"}]
    })
})