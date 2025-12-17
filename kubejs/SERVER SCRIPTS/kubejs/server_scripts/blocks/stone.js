BlockEvents.broken('createaddition:connector', event => {
  const be = event.block.entity;
  if (!be) return;

  const level = be.getLevel();
  const nodeCount = be.getNodeCount ? be.getNodeCount() : 0;

  let connections = 0;
  for (let i = 0; i < nodeCount; i++) {
    try {
      if (be.hasConnection && be.hasConnection(i)) connections++;
    } catch (e) {
    }
  }

  be.dropWires(level, false);

  if (connections > 0) {
    event.player.give(Item.of('createaddition:festive_spool', connections));
  }
});

BlockEvents.broken('createaddition:small_light_connector', event => {
  const be = event.block.entity;
  if (!be) return;

  const level = be.getLevel();
  const nodeCount = be.getNodeCount ? be.getNodeCount() : 0;

  let connections = 0;
  for (let i = 0; i < nodeCount; i++) {
    try {
      if (be.hasConnection && be.hasConnection(i)) connections++;
    } catch (e) {
    }
  }

  be.dropWires(level, false);

  if (connections > 0) {
    event.player.give(Item.of('createaddition:festive_spool', connections));
  }
});
