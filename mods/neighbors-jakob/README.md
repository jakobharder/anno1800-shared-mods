Simplify `<InfluencedByNeighbors>` compatibility with other mods.

This mod allows you to add a single tag to your building.
It scans the complete `assets.xml` and inserts the neighbors for you.

```xml
<Standard>
  <!-- .. -->

  <!-- react on residences beginning from this level -->
  <AdjustToNeighbors>Farmer</AdjustToNeighbors>

  <!-- define your level by height (not population) -->
  <NeighborLevel>Engineer</NeighborLevel>
</Standard>
```

You don't need to add buildings to your `InfluencedByNeighbors`, nor do you need to add your building to the engineer residence and others.

Mods which added themselves manually to Engineers are compatible with this approach.


## Use

Just add the mod as a sub-mod.
No `LoadAfterIds` is required.

This mod loads as `*`.
You can't use it if you do too.

## Adjust to Neighbors

Add the tag `AdjustToNeighbors` if you want your building to behave like Engineer/Investor residences do.

```xml
<Standard>
  <!-- .. -->
  <AdjustToNeighbors>Farmer</AdjustToNeighbors>
</Standard>
```

In most cases `Farmer` is what you want - that the vanilla game is doing.

Levels | Adjust to the following buildings |
---|---|
Farmer | any OW residence
Terraced | Engineers, Investors, Terraced Houses and up
Engineer | Engineers, Investors, Terraced Artisans Level 2, 3x3 Malls
Jornalero | any NW residence

### What it does

The mod adds `InfluenceByNeighbors` to your `Building` section.

```xml
<Building>
  <!-- .. -->
  <InfluenceByNeighbors>
    <Item>
      <!-- Farmer -->
      <Building>1010343</Building>
    </Item>
    <Item>
      <!-- Worker -->
      <Building>1010344</Building>
    </Item>
    <!-- .. -->
    <!-- up to Investors, Skyscrapers -->
    <!-- including other mod buildings -->
  </InfluenceByNeighbors>
</Building>
```

Additionally, your GUID is added to `InfluencedByNeighbors` of all buildings that are listed for as Engineer neighbors.

## Influence Neighbors

Add the tag `NeighborLevel` if you want your building to influence neighbors like Engineer residences, similar to how Farmer to Artisan residences do.

```xml
<Standard>
  <!-- .. -->
  <NeighborLevel>Engineer</NeighborLevel>
</Standard>
```

See the level table above.

Make sure to only add buildings that are as tall or taller than Engineers in the Engineer level!

### What it does

Your GUID is added to `InfluenceByNeighbors` of all buildings that adjust themselves to the wanted level.

## Examples

### Mall

The mall in City Variations behaves the same as Engineer residences.

It is tall as Engineers or higher.
And it adjusts to any residence.

```xml
<Standard>
  <!-- .. -->
  <AdjustToNeighbors>Farmer</AdjustToNeighbors>
  <NeighborLevel>Engineer</NeighborLevel>
</Standard>
```

### Restaurant

The restaurant in City Variations is tall.
Its height matches Engineers and Investors.

The `end` and `single` pieces are smaller, fitting to Workers and Artisans.

By ignoring lower residences as neighbors, the restaurant automatically switches to the lower `end` or `single` variant.

- Two Engineer residence neighbors: tall `corner` or `mid` variant.
- One Engineer residence neighbor: medium `end` variant
- No residence / low residence neighbors: small `single` variant

```xml
<Standard>
  <!-- .. -->
  <AdjustToNeighbors>Engineer</AdjustToNeighbors>
  <NeighborLevel>Engineer</NeighborLevel>
</Standard>
```
