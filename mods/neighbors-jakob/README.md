Simplify `<InfluencedByNeighbors>` setup.

You don't need to add buildings to your `InfluencedByNeighbors`, nor do you need to add your building to the engineer residence and others.

The mod will scan the complete `assets.xml` and insert the neighbors for you.

## Case 1 - Behave like Engineer residences

Same behavior as Engineer residences - your building adjusts itself to all other residences, and vice versa.

```xml
<Building>
  <!-- .. -->
  <InfluencedByFarmersUp />
</Building>
```

`<InfluencedByFarmersUp />` will be replaced by the same `<InfluenceByNeighbors>` that Engineers have.

Additionally, your GUID will be added to `<InfluenceByNeighbors>` of all buildings that are listed for as Engineer neighbors.

Your loading order does not matter, this mod uses `*` to catch also mods loading after yours.

## Case 2 - Behave like Farmer residences

Same behavior as Farmer residences - other buildings adjust themselves to your building.

```xml
<Standard>
  <!-- .. -->
  <InfluencedByFarmersUp />
</Standard>
```

Your GUID will be added to `<InfluenceByNeighbors>` of all buildings that are listed for as Engineer neighbors.

But `<Building><InfluenceByNeighbors>` won't be created for your building.

## Case 3 - Adjust only to tall buildings

Adjust your building to Engineer residences, but ignore Farmers to Artisans.

```xml
<Building>
  <!-- .. -->
  <InfluencedByEngineersUp />
</Building>
```

Same as case 1, except lower buildings like Farmers, Workers, Artisans, Terraced Workers are excluded.
They don't count as neighbor for your building.
