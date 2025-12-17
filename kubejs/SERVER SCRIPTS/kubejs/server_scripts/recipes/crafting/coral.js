ServerEvents.recipes(event => {
    const coral_names = ["bubble", "brain", "fire", "tube", "horn"]
    
    function coral_recipes (coral_type) {
        event.shaped(
            Item.of(`minecraft:${coral_type}_coral_block`, 1),
            [
                '   ',
                ' cc',
                ' cc'
            ],
            {
                c: `minecraft:${coral_type}_coral`
            }
        )
        
        event.shapeless( 
            Item.of(`minecraft:${coral_type}_coral`, 4),
            [
                `minecraft:${coral_type}_coral_block`
            ]
        )

        event.shaped(
            Item.of(`minecraft:dead_${coral_type}_coral_block`, 1),
            [
                '   ',
                ' cc',
                ' cc'
            ],
            {
                c: `minecraft:dead_${coral_type}_coral`
            }
        )
        
        event.shapeless( 
            Item.of(`minecraft:dead_${coral_type}_coral`, 4),
            [
                `minecraft:dead_${coral_type}_coral_block`
            ]
        )

        event.shapeless( 
            Item.of(`minecraft:${coral_type}_coral`, 1),
            [
                `minecraft:dead_${coral_type}_coral`,
                `#c:fertilizers`
            ]
        )

        event.shapeless( 
            Item.of(`minecraft:${coral_type}_coral_block`, 1),
            [
                `minecraft:dead_${coral_type}_coral_block`,
                `#c:fertilizers`
            ]
        )

        event.shapeless( 
            Item.of(`minecraft:${coral_type}_coral_fan`, 1),
            [
                `minecraft:dead_${coral_type}_coral_fan`,
                `#c:fertilizers`
            ]
        )

        event.custom({
            "type": "farmersdelight:cutting",
            "ingredients": [
                {
                "item": `minecraft:${coral_type}_coral`
                }
            ],
            "result": [
                {
                "item": {
                    "count": 2,
                    "id": `minecraft:${coral_type}_coral_fan`
                }
                }
            ],
            "tool": {
                "tag": "c:tools/knife"
            }
            })
        
        event.custom({
            "type": "farmersdelight:cutting",
            "ingredients": [
                {
                "item": `minecraft:dead_${coral_type}_coral`
                }
            ],
            "result": [
                {
                "item": {
                    "count": 2,
                    "id": `minecraft:dead_${coral_type}_coral_fan`
                }
                }
            ],
            "tool": {
                "tag": "c:tools/knife"
            }
            })
    }
    coral_names.forEach(coral_type => coral_recipes(coral_type))







})