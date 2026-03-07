// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded client example script)')

// MAKE SURE THE SERVER VERSION STAYS UP-TO-DATE!!
const createTome = () => {
    const tome = Item.of("eccentrictome:tome");
    const data = tome.components.getTyped("eccentrictome:tome_data");
    const val = data.value();

    const updated = val.withBook(Item.of("immersiveengineering:manual"))
        .withBook(Item.of("voltaic:guidebook"));

    tome.components.set("eccentrictome:tome_data", updated);

    tome.setItemName(
        Text.of("The Tome of Infinite Knowledge").gold().italic().bold(),
    );

    return tome;
};

RecipeViewerEvents.addEntries("item", (ev) => {
    ev.add(createTome());
});
