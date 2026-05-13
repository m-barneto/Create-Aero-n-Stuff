ServerEvents.recipes(e => {
    e.shapeless(
        Item.of("ae2:certus_quartz_crystal"),
        ["ae2:sky_dust", "minecraft:quartz"]
    );
    e.shapeless(Item.of("ae2:sky_dust", 2), ["ae2:ender_dust", "minecraft:redstone"]);
});