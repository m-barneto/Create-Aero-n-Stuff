ServerEvents.recipes(e => {
	e.remove({ output: "ftbquests:book" });
    e.shapeless(
        Item.of("ftbquests:book"),
        ["minecraft:paper", "minecraft:blue_dye"]
    );
});