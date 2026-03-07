ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "G": {"item": "electrodynamics:gaspipeuninsulatedsteel"},
            "C": {"item": "electrodynamics:gastanksteel"},
            "P": {"tag": "c:plates/steel"},
            "A": {"item": "electrodynamics:circuitadvanced"},
            "N": {"item": "create:netherite_backtank"}
            },
        "pattern": [
            "  N  ",
            " APA ",
            "GCPCG",
            "G G G",
            "G G G"
        ],
        "result": 
            {"count": 1,
            "id": "electrodynamics:jetpack"},
        "show_notification": false
        }
    )
})