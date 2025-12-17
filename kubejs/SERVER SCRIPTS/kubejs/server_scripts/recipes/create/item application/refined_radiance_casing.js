ServerEvents.recipes(event => {
    event.custom({
        "type": "create:item_application",
        "ingredients": [
            {"tag": "c:stripped_logs"},
            {"item": "create:refined_radiance"}
        ],
        "results": [
            {"id": "create:refined_radiance_casing"}
            ]
        }
    )
})