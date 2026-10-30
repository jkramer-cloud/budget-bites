# Budget Bites v7 — 25-Recipe Interactive Kitchen

GitHub Pages-ready: upload every file/folder in this ZIP to the root of `jkramer-cloud/budget-bites`.

## What is new

- 25 playable hands-on recipes, including 15 newly interactive meals selected from the original 68-meal catalog.
- Pixel-food drawings for ingredients and distinct graphics for simulated oven, microwave, boiling, and skillet cooking.
- Beginner / Intermediate / Advanced recipe filtering and recipe-specific cooking-method checks.
- A four-part scorecard: accuracy (40%), food safety (35%), pacing (15%) and portions (10%).
- Dynamic recipe counts, `NEW_RECIPE_TEMPLATE.json`, and locally saved recipe medals.
- Existing recipe progress, planning, grocery inventory, nutrition reports, and six walkable kitchen stations are preserved.

## Upload instructions

Replace `index.html`, `kitchen-recipes.json`, README and CHANGELOG. Add the full `assets/` folder, including new `assets/food/` and `assets/appliances/` subfolders. The original `game.js`, `recipes.js`, and `styles.css` are legacy files that can be left alone because v7 `index.html` is standalone.

## Adding more recipes

1. For an existing planner recipe, copy its exact `id` into a new `recipes` entry in `kitchen-recipes.json` and author the ordered `steps` list. No changes to meal costs or nutrition are needed.
2. For a brand-new recipe, also add a validated `mealCatalog` entry with the ingredient quantities and six nutrition estimates, plus `ingredientCatalog` entries for brand-new ingredients.
3. Supported step actions are `sequence`, `collect`, `measure`, `chop`, `combine`, `stir`, `heat`, `timer`, `appliance`, `method`, `portion`, and `quiz`. See existing recipes for examples.
4. To allow opening `index.html` directly as a file (offline), update its embedded `<script id="bb-kitchen-data">` manifest too. On GitHub Pages, the separate `kitchen-recipes.json` overrides the embedded copy automatically.
5. Add an `assets/food/<ingredient-id>.png` if you want unique pixel ingredient art. Otherwise those foods will be listed by name in the interface, with standard visual fallback.

**Safety:** This is a school simulation, not a physical cooking recipe or food safety certification. Times shown are game checkpoints, not actual cooking times. Always consult real food safety standards and appliance instructions when cooking food.
