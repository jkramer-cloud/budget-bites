# Budget Bites — Family Food & Cooking Adventure

**Naches Learning Hub** | Browser game | Recommended grades 5–8 (adaptable for older students)

Plan meals for a fictional household, buy groceries on a budget, learn basic cooking techniques, and review nutrition and spending. Budget Bites is a practical life-skills simulation combining math, budgeting, food literacy, safe food preparation, and problem-solving.

## Play the game

Once GitHub Pages is enabled for a repository named `budget-bites`, the game will be available at:

`https://jkramer-cloud.github.io/budget-bites/`

New players select **Start your food mission**. The game initially provides a fictional three-person household, a $180 budget, and a five-day mission. Students can change every setting.

### The six areas

1. **Home:** Launch or resume the mission, view progress, and see daily cooking tips.
2. **Family:** Add/remove fictional family members, specify ages and simulated food allergies, set a budget, and choose 3, 5, or 7 days.
3. **Planner:** Fill a calendar with breakfast, lunch, dinner, and snack. Browse 33 recipes and choose a varied or budget-friendly menu.
4. **Market:** See required grocery quantities, buy *whole packages* at fictional prices, compare unit costs, and monitor pantry stock and budget remaining.
5. **Kitchen:** Follow specific recipe instructions with food-safety practice questions, or use Quick Cook to simulate meals rapidly. Each dish consumes pantry ingredients.
6. **Results:** See completion, stars, financial results, food-group variety, and approximate nutrient totals (energy, protein, carbohydrate, fat, fiber, sodium). Switch between daily averages and entire-mission totals.

## Controls and scoring

- Click or tap calendar recipes to replace meals. Meals already served cannot be changed.
- **Build a varied menu** creates a sample rotation; **Budget Helper** generates a cheaper rotation. Both protect previously cooked meals from accidental replacement.
- **Buy all missing groceries** only succeeds if the whole shopping list fits the remaining budget; buy individual packs to manage purchases yourself.
- **Guided Cook** combines recipe steps and practical hygiene/food-safety questions, earning more points. **Quick Cook** serves food immediately (if stocked) for fewer points.
- Scores reward serving meals, variety, trying recipes, and keeping within budget. They do *not* rank the nutritional worth of individuals.
- You can download the meal plan CSV, grocery list CSV, nutrition report CSV, or a JSON game backup.

## Installation / GitHub Pages

This repository requires exactly four web files (and this README):

```
index.html
styles.css
recipes.js
game.js
README.md
```

1. Create a **public** GitHub repository named `budget-bites`.
2. Upload all five files to the **root** of the repository, keeping filenames unchanged.
3. In **Settings → Pages**, choose **Deploy from a branch → main → / (root)** and save.
4. Open `https://jkramer-cloud.github.io/budget-bites/` after GitHub Pages deploys.

No build system, npm, backend, authentication, images, fonts, or external services are required. The site can be run locally by opening `index.html` with the three sibling code files present. A single-file demonstration HTML is also provided outside the repository ZIP for convenience.

## Save data and student privacy

- Mission progress is stored in browser `localStorage`, keyed to the exact site origin and browser profile. It is **not** synced to Google accounts or Google Drive.
- Use **Save backup** to export a JSON snapshot. The **Restore backup** action replaces the existing local save with a chosen compatible backup.
- A different device or browser profile may not contain the same saved progress.
- Use **fictional household names**; the game does not need student identifiers, diagnoses, or sensitive personal information.
- The app does not send gameplay data to a server. Exported files are only saved by user action.

## Important safety and nutrition limitations

**Budget Bites is a game, not a real-world food safety, allergy, or dietary planning tool.** Prices, package sizes, meal nutrient numbers, and age-related serving multipliers are deliberately approximate educational examples. The "allergy" checks only match a simplified ingredient-tag list; they cannot detect cross-contact, manufacturing risk, or omitted allergens in actual products. Do not rely on the simulator to decide whether a meal is safe.

When preparing actual food, read labels, observe local food-safety requirements, check poultry with a calibrated food thermometer (165°F / 74°C), refrigerate perishable leftovers promptly, and have responsible adult supervision for hot appliances, sharp utensils, and other hazards. The nutrition dashboard does not prescribe calorie targets for children or adults.

## Expanding the recipe library

Recipes and grocery items live in **`recipes.js`**, separate from the user interface. Each grocery item defines its package quantity, price, unit, store category, and simulated allergens. Each recipe defines:

- `id`, `name`, `meal` (Breakfast, Lunch, Dinner, Snack), `emoji`, `desc`, `minutes` and `skill`
- `ingredients` as package-unit quantities for **four standard servings**
- `nutrition` as approximate energy (kcal), protein, carbohydrate, fiber, fat (g) and sodium (mg) **per standard serving**
- `groups` and cooking `steps` for practice questions
- A `method` array of specific preparation directions via `BB_METHODS`

Any added recipe must use existing grocery item IDs or add new corresponding items to `BB_INGREDIENTS`. Keep prices and nutrition labeled as approximate, and provide ingredient and cooking safety notes.

## Learning activities

- Plan a week that stays under budget and compare the price of individual packs with unit prices.
- Explain the difference between an estimated ingredient value and the actual cost of buying grocery packages.
- Re-plan for different household sizes; explain the budget impact.
- Identify allergen conflicts and replace affected recipes.
- Compare food group diversity and discuss how leftovers and shared ingredients reduce waste.
- Write a reflection on spending choices, safety skills, and changes for the next mission.

## Version

**v1.0** — 33 recipes, 3/5/7-day planning, family portions and allergy warnings, shopping package inventory, guided cooking, quick simulation, nutrition and budget reports, local saving, and CSV/JSON export.

Planned ideas for later: scenario events (price changes, pantry surprises), more recipes, leftovers that can be reheated as future meals, student-designed recipes, printable shopping lists, cooking skill badges, and optional classroom assignment modes.
