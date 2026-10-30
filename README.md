# Budget Bites v5 — Playable 16-bit Kitchen

This release uses the same artwork as the 16-bit concept poster for a playable walkable kitchen and six detailed station scenes. The Banana Cinnamon Oats hands-on recipe has 12 working tasks. All existing Budget Bites planning, grocery, budgeting, allergy and nutrition systems remain.

## Install on GitHub Pages

Upload **all** files and the `assets` folder into your existing Budget Bites repository. Keep `index.html`, `kitchen-recipes.json`, `NEW_RECIPE_TEMPLATE.json` and `assets/` at the root. Enable GitHub Pages from the repository root, or use the existing Pages setting. No build or dependencies required.

## Controls

- Click **Kitchen** in the app, then **Try Banana Cinnamon Oats**.
- Use **WASD** or arrow keys to walk, **E** to open the highlighted station, or click a station to auto-walk.
- In the close-up, click the green interactive button on the artwork or complete the detailed controls at right.
- Choose **Back to kitchen** to continue exploring. **Continue to next step** returns to the map automatically if the next step uses a different station.
- Progress saves in browser localStorage; practice mode does not deduct groceries.
- Planning a meal and buying its ingredients unlocks the mission mode, which consumes inventory only after a completed recipe.

## Scope and limitations

The six close-up art scenes and animated overlays are functional for the **12-step Banana Cinnamon Oats recipe**. Other recipes retain guided reading and existing recipes can be extended in `kitchen-recipes.json`. This is a detailed art-led prototype, not a sprite-by-sprite engine with distinct animated assets for all other recipes. The animation is illustrative rather than physics-based, and the concept artwork is included as image assets.

Visual assets are based on the generated Budget Bites 16-bit concept art supplied in this conversation.
