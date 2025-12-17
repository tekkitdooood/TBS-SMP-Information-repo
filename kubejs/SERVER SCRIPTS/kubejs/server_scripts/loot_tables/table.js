LootJS.modifiers(event => {
    
    
    event
        .addTableModifier("minecraft:blocks/oak_leaves")
        .addLoot(LootEntry.of("codmod:lemon").randomChance(0.005));

    event
        .addTableModifier("minecraft:blocks/oak_leaves")
        .addLoot(LootEntry.of("codmod:orange").randomChance(0.005));
    
    event
        .addTableModifier("minecraft:blocks/jungle_leaves")
        .addLoot(LootEntry.of("codmod:mango").randomChance(0.005));

    event
        .addTableModifier("minecraft:blocks/jungle_leaves")
        .addLoot(LootEntry.of("codmod:banana").randomChance(0.005));
    
    event
        .addEntityModifier(/.*/)
        .addLoot('create:experience_nugget')
        .randomChance(0.15)

    event
        .addEntityModifier("minecraft:cod")
        .addLoot(LootEntry.of("codmod:realcod").randomChance(0.001));


    });