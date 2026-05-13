let bannedItems = [
  "ae2:quantum_ring",
  "ae2:quantum_link",
  "ae2:quantum_entangled_singularity",
  "ae2wtlib:quantum_bridge_card"
];

ServerEvents.recipes(e => {
  bannedItems.forEach(id => {
    e.remove({ output: id });
  });
})
ItemEvents.modifyTooltips(e => {
  bannedItems.forEach(id => {
    e.add(id, Text.red("Item is disabled."));
  });
});