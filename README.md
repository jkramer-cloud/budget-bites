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
3. **Planner:** Fill a calendar with breakfast, lunch, dinner, and snack. Browse 68 recipes and choose a varied or budget-friendly menu.
4. **Market:** See required grocery quantities, buy *whole packages* at fictional prices, compare unit costs, and monitor pantry stock and budget remaining.
5. **Kitchen:** Follow specific recipe instructions with food-safety practice questions, or use Quick Cook to simulate meals rapidly. Each dish consumes pantry ingredients.
6. **Results:** Compare the nutrition in the planned menu with meals actually served, using age-group educational protein/fiber benchmarks and a sodium comparison level. Choose any family member, change nutrient and daily/mission views, explore day-by-day charts, grocery spending by aisle, food-group frequency, and individual nutrition summaries.

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

**Budget Bites is a game, not a real-world food safety, allergy, or dietary planning tool.** Prices, package sizes, meal nutrient numbers, and age-related serving multipliers are deliberately approximate educational examples. Reference markers are sourced from published age-group intake tables, but they do not provide personalized nutrition goals, diagnoses or a determination that an individual has eaten too much or too little. Younger and older family members have different benchmarks, but sex-specific adult recommendations are shown as ranges rather than making assumptions about a person. No target is assigned to calorie consumption. The "allergy" checks only match a simplified ingredient-tag list; they cannot detect cross-contact, manufacturing risk, or omitted allergens in actual products. Do not rely on the simulator to decide whether a meal is safe.

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

**v2.0** — 68 recipes, 10 additional grocery items, planned-versus-served nutrition visualizations, age-group protein/fiber/sodium comparisons, daily trends, aisle spending graphs, and food-group coverage; continuing 3/5/7-day planning, family portions and allergy warnings, shopping package inventory, guided cooking, quick simulation, nutrition and budget reports, local saving, and CSV/JSON export.

Planned ideas for later: scenario events (price changes, pantry surprises), more recipes, leftovers that can be reheated as future meals, student-designed recipes, printable shopping lists, cooking skill badges, and optional classroom assignment modes.


## Nutrition graph reference notes (V2)

- **Planned** values sum the recipes in each calendar slot. **Served** values sum only recipes completed in the Kitchen. Blank days or unserved meals contribute zero, so partially completed plans do not represent complete daily diets.
- Protein and fiber **educational** reference points follow the National Academies Dietary Reference Intake age/life-stage tables; age 9+ references where sex matters appear as a band, not an individualized goal. Sodium uses age-group chronic disease risk reduction comparison levels. Carbohydrates, energy, and fat are visualized without personal intake targets.
- The game is not estimating vitamin/mineral sufficiency, micronutrient deficiencies, or fitness/weight goals. Recipes use rough per-serving estimates and the same simplified age-based portion multiplier as V1.
- Sources: [National Academies DRI tables](https://www.ncbi.nlm.nih.gov/books/NBK545442/) and [NIH explanation of Daily Values](https://ods.od.nih.gov/HealthInformation/dailyvalues/).
- All five files must be replaced in the repo for V2. The `budget-bites-v1-save` storage key remains unchanged so V1 browser progress can be loaded by V2. Export a JSON backup before updating.
