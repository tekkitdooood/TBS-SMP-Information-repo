ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "key": {
            "I": {"tag": "c:ingots/steel"},
            "C": {"item": "immersiveengineering:coil_hv"},
            "A": {"item": "immersiveengineering:capacitor_hv"},
            "H": {"item": "immersiveengineering:wooden_grip"},
            "S": {"item": "immersiveengineering:component_steel"},
            "E": {"item": "immersiveengineering:component_electronic_adv"}
            },
        "pattern": [
            "IIIAEE",
            "  CCH ",
            "IIISHH"
            ],
        "result": 
            {"count": 1,
            "id": "electrodynamics:railgunkinetic"},
        "show_notification": false
        }
    )
})