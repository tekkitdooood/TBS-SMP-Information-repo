ServerEvents.recipes(event => {
    event.custom({
        "type": "create:item_application",
        "ingredients": [
            {"tag": "c:stripped_logs"},
            {"item": "create:shadow_steel"}
        ],
        "results": [
            {"id": "create:shadow_steel_casing"}
            ]
        }
    )
})