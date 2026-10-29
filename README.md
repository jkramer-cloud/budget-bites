# Budget Bites v3 — Interactive Kitchen

An educational browser game for the Naches Learning Hub. Students build a fictional household, plan multi-day meals, shop within a budget, and compare planned versus served nutrition. **Version 3** adds a data-driven hands-on kitchen and an easily accessible reset.

## What's new in v3

- **Recipe Box:** Browse the full existing recipe catalog; see which recipes have a new hands-on lesson. All other meals retain the existing guided safety-question and Quick Cook options.
- **Banana Cinnamon Oats (12 interactive steps):** Move among six kitchen stations and actually interact with tasks: wash hands in order, collect the right tools, measure oats and milk, rinse produce, slice bananas, combine ingredients, turn the burner on low, stir, turn the heat **off**, plate, and answer a food safety question.
- **Two lesson modes:** Free Practice doesn't change the household budget, pantry, or nutrition results. Cooking a planned meal is available only when that exact recipe has been added to the calendar and the ingredients purchased. Completion consumes the correct planned household portions and awards cooking points.
- **Progress and restart:** The current kitchen lesson saves in local browser storage. Students can save/exit, resume, or restart the recipe. The global Reset Game button offers (a) a fresh mission while retaining the household and budget, or (b) a complete reset of household, purchases, points, and lessons. Back up first if needed.
- **Keyboard and touchscreen:** Station and action buttons are accessible by mouse, touch, and keyboard. Interactive food-prep visuals are illustrative, not a cooking simulator.

## GitHub Pages installation

**Existing repository:** `budget-bites`
**Existing URL:** `https://jkramer-cloud.github.io/budget-bites/`

1. Open the existing `budget-bites` repository; do **not** make a new repository.
2. Extract this ZIP. Upload the **files inside this folder** to the repository root: `index.html` and `kitchen-recipes.json` are required. README, template and changelog are useful supporting documentation.
3. Commit, then verify Settings → Pages uses `main` and `/(root)`.
4. Test the URL above. Hard refresh if GitHub Pages is still displaying the prior version.
5. Existing saves remain compatible. The app continues to use `budget-bites-v1-save` so previously planned meals and shopping remain. Export a backup before major updates as a precaution.

This version is standalone HTML: it embeds all existing catalog, styling, and game code. Any older `styles.css`, `recipes.js`, or `game.js` can remain in the repository but are **not imported** by the new `index.html`.

## Extending the kitchen without changing game code

`kitchen-recipes.json` is **the editable recipe registry** loaded by the site. It has separate metadata for stations, tools, and interactive recipes. The HTML embeds the first interactive recipe as an offline fallback, so the file can also be previewed locally. On GitHub Pages the JSON file overrides or adds recipes.

Key metadata fields:

| Field | Purpose |
|---|---|
| `stations` | IDs, names, icons and hints for the six locations: `sink`, `pantry`, `prep`, `counter`, `stove`, `serve`. Add a station if a future recipe needs one. |
| `toolCatalog` | Tool IDs and labels (e.g. measuring-cup, saucepan, spoon), icons, and descriptions. |
| `recipes[].id` | Must match an existing meal's catalog ID, or a new meal defined in `mealCatalog`. |
| `recipes[].ingredientIds` | Ingredient IDs (reference entries from the main catalog or `ingredientCatalog`). |
| `recipes[].requiredTools` | Tool IDs that the recipe needs. |
| `recipes[].steps` | Ordered interactive tasks. Each step has an ID, a station, an action type, instructions, safety text, and tool/ingredient IDs. |
| `ingredientCatalog` | **Optional.** Add new ingredients with `id`, `name`, `unit`, `packQty`, `price`, `category`, and `allergens` without editing the HTML. |
| `mealCatalog` | **Optional.** Add meals to the family meal planner by providing `id`, `name`, `meal`, `emoji`, `desc`, `ingredients` (quantities for four standard servings), `nutrition` (six estimated values), `groups`, and `minutes`. |

Supported step `action` types:

- `sequence` — execute actions in correct order (`sequence: [{id,label,icon}, ...]`)
- `collect` — pick required tools from a choice grid (`required` + `choices`)
- `measure` — pour a fixed increment until reaching `target` (`ingredient`, `target`, `increment`, `unit`)
- `chop` — tap cut marks to represent chopping (`target` count)
- `combine` — select ingredients in a specific order (same `sequence` format)
- `stir` — tap to simulate gentle stirring (`target` count)
- `heat` — set burner state explicitly (`state`: `on` or `off`)
- `quiz` — choose correct safety option (`question`, `options`, `correct` index)

**To add another detailed kitchen recipe:** Copy the existing entry in `recipes`, give it a different valid catalog ID, update its ingredients, tools, stations, steps and safety instructions. For a *new meal* not already in the planner, also add its corresponding `mealCatalog` entry; if it uses new groceries, define them under `ingredientCatalog`. See `NEW_RECIPE_TEMPLATE.json` for a sample scaffold. The engine discovers valid steps automatically; it does not require new hardcoded menus, kitchen buttons, or input handling for the supported action types. Keep the original `banana-oats` entry if you want it to remain detailed.

All ingredient prices and nutrition are hypothetical classroom estimates. New recipes should be reviewed for accuracy, allergens and food safety before assigning to students. All real knife and stove work requires adult supervision; real cook times and quantities must follow labels and trusted recipes.

## Important limitations

This kitchen uses 2D illustrations and repeated clicks/taps: students are practicing **order, equipment selection, measurement, sequence, and safety**. It is not a real-world cooking instruction substitute. For the first four-serving demo, measurement and stirring progress are simplified; actual portion quantities in the meal planner are scaled using the game's family-size logic. The game does not automatically verify real temperatures, cook times, food doneness, or live product labels.

## Files

- `index.html` — complete game with built-in first-recipe fallback.
- `kitchen-recipes.json` — data-driven interactive kitchen recipes, tools, stations, and potential new meal catalog.
- `NEW_RECIPE_TEMPLATE.json` — example scaffold for adding future recipes.
- `README.md` — installation and recipe data guide.
- `CHANGELOG.md` — release notes.
