ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "key": {
            "P": {"tag": "c:plates/brass"},
            "C": {"item": "electrodynamics:coil"},
            "A": {"item": "create:andesite_alloy"},
            "R": {"tag": "c:rods/iron"},
            "E": {"item": "immersiveengineering:electron_tube"}
            },
        "pattern": [
            "  A  ",
            " PCP ",
            "PCRCP",
            " PEP "
        ],
        "result": 
            {"count": 1,
            "id": "createaddition:electric_motor"},
        "show_notification": false
        }
    )
})