Simplify `<InfluencedByNeighbors>` compatibility with other mods.

This mod allows you to add a single tag to your building.
It scans the complete `assets.xml` and inserts the neighbors for you.

You don't need to add buildings to your `InfluencedByNeighbors`, nor do you need to add your building to the engineer residence and others.

Mods which added themselves manually to Engineers are compatible with this approach.

## Use

Just add the mod as a sub-mod.
No `LoadAfterIds` is required.

This mod loads as `*`.
You can't use it if you do too.

## Case 1 - Behave like Engineer residences

Add the tag `Building/InfluencedByFarmersUp` if you want your building to behave exactly like Engineer/Investor residences do.
They adjust themselves to any type of residence.

```xml
<Building>
  <!-- .. -->
  <InfluencedByFarmersUp />
</Building>
```

### What it does

`InfluencedByFarmersUp` is replaced by the same `InfluenceByNeighbors` that Engineers have.

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

## Case 2 - Behave like Farmer residences

Add the tag `Standard/InfluenceFarmersUp` if you want your building to behave like Farmer/Worker/Artisan residences do.

Your building does not adjust to neighbors, but expects neighbors adjust to them.

```xml
<Standard>
  <!-- .. -->
  <InfluenceFarmersUp />
</Standard>
```

### What it does

Your GUID is added to `InfluenceByNeighbors` of all buildings that behave like Engineers/Investors.

But `Building/InfluenceByNeighbors` won't be created for your building.

## Case 3 - Adjust only to tall buildings

This is a special case, if you want your buildings adjust to Engineer/Investor residences, but ignore Farmers to Artisans.

```xml
<Building>
  <!-- .. -->
  <InfluencedByEngineersUp />
</Building>
```

The behavior is very similar to the Engineer residences from case 1, except lower buildings like Farmers, Workers, Artisans, Terraced Workers are excluded.
They don't count as neighbor for your building.

### Example use case

The restaurant in City Variations is tall. Its height matches Engineers and Investors.
The `end` and `single` pieces are smaller, fitting to Workers and Artisans.
By ignoring lower residences as neighbors, the restaurant automatically switches to the lower `end` or `single` variant.

- Two Engineer residence neighbors: tall `corner` or `mid` variant.
- One Engineer residence neighbor: medium `end` variant
- No residence / low residence neighbors: small `single` variant