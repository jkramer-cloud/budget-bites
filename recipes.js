/* Budget Bites educational catalog — approximate fictional market prices and nutrition.
   Expand recipes by adding objects to BB_RECIPES; each ingredient quantity serves four.
   Allergen tags refer to ingredients and are NOT a substitute for reading real package labels. */
window.BB_INGREDIENTS = [
  ['oats','Rolled oats','cup',5,3.60,'Grains',[]],
  ['banana','Bananas','each',6,2.20,'Produce',[]],
  ['milk','Milk','cup',8,3.40,'Dairy',['milk']],
  ['pb','Peanut butter','tbsp',16,3.25,'Pantry',['peanuts']],
  ['bread','Whole-wheat bread','slice',16,3.60,'Grains',['wheat']],
  ['egg','Eggs','each',12,4.20,'Protein',['eggs']],
  ['berries','Mixed berries','cup',3,5.50,'Produce',[]],
  ['yogurt','Plain yogurt','cup',4,4.50,'Dairy',['milk']],
  ['rice','Brown rice','cup dry',5,5.20,'Grains',[]],
  ['chicken','Chicken breast','oz',32,9.60,'Protein',[]],
  ['broccoli','Broccoli','cup',6,4.50,'Produce',[]],
  ['carrot','Carrots','cup',6,2.50,'Produce',[]],
  ['onion','Onions','each',4,2.80,'Produce',[]],
  ['beans','Black beans','cup',6,5.40,'Protein',[]],
  ['tomato','Canned tomatoes','cup',6,4.80,'Pantry',[]],
  ['tortilla','Corn tortillas','each',16,3.50,'Grains',[]],
  ['cheese','Cheddar cheese','oz',12,4.80,'Dairy',['milk']],
  ['potato','Potatoes','each',6,3.90,'Produce',[]],
  ['tuna','Canned tuna','oz',15,5.70,'Protein',['fish']],
  ['pasta','Whole-wheat pasta','oz dry',16,3.50,'Grains',['wheat']],
  ['lentil','Dry lentils','cup dry',5,5.00,'Protein',[]],
  ['spinach','Spinach','cup',6,4.80,'Produce',[]],
  ['oil','Cooking oil','tbsp',20,4.20,'Pantry',[]],
  ['cucumber','Cucumbers','each',3,2.85,'Produce',[]],
  ['apple','Apples','each',6,4.40,'Produce',[]],
  ['turkey','Ground turkey','oz',32,9.80,'Protein',[]],
  ['hummus','Hummus','tbsp',16,4.40,'Protein',['sesame']],
  ['chickpea','Chickpeas','cup',6,5.40,'Protein',[]],
  ['pepper','Bell peppers','each',4,4.80,'Produce',[]],
  ['salsa','Salsa','cup',4,3.30,'Pantry',[]],
  ['corn','Canned corn','cup',6,3.90,'Produce',[]],
  ['raisins','Raisins','tbsp',20,3.60,'Produce',[]],
  ['flour','All-purpose flour','cup',8,3.40,'Grains',['wheat']],
  ['baking','Baking powder','tsp',20,2.40,'Pantry',[]],
  ['cinnamon','Cinnamon','tsp',16,2.80,'Pantry',[]],
  ['orange','Oranges','each',6,4.75,'Produce',[]],
  ['lettuce','Romaine lettuce','cup',8,4.00,'Produce',[]],
  ['sweetpotato','Sweet potatoes','each',6,5.20,'Produce',[]],
  ['tofu','Firm tofu','oz',16,4.60,'Protein',['soy']],
  ['popcorn','Popcorn kernels','cup dry',5,3.70,'Grains',[]]
].map(([id,name,unit,packQty,price,category,allergens])=>({id,name,unit,packQty,price,category,allergens}));

const K=(name,detail,question,options,correct,why)=>({name,detail,question,options,correct,why});
const wash=K('Prepare your station','Wash hands with soap and water for at least 20 seconds. Clean counters and rinse produce under running water.','When should you wash your hands?',['Only after eating','Before food prep and after handling raw meat','Only if they look dirty'],1,'Handwashing helps prevent germs and cross-contamination.');
const raw=K('Handle raw poultry safely','Use a separate cutting board for raw chicken or turkey. Do not wash raw poultry. Clean tools and surfaces after contact.','What should you do after handling raw chicken?',['Use the same board for salad','Wash hands and sanitize the board','Rinse raw chicken in the sink'],1,'Keep raw poultry separate, and clean hands and equipment.');
const heatPoultry=K('Cook the poultry','Heat thoroughly, checking the thickest part with a food thermometer. Chicken and ground turkey need 165°F (74°C).','What temperature should poultry reach?',['100°F / 38°C','145°F / 63°C','165°F / 74°C'],2,'A food thermometer verifies poultry reaches a safe internal temperature.');
const knife=K('Cut and organize','Use a stable cutting board and the claw grip. Ask an adult to supervise sharp knives or hot equipment.','Which habit is safest when chopping?',['Tuck fingertips using the claw grip','Cut toward your hand','Hold food in the air'],0,'The claw grip protects fingertips and a stable board reduces slips.');
const simmer=K('Cook and check','Simmer or heat ingredients until ready. Stir carefully and keep handles turned inward.','What helps prevent burns at the stove?',['Leave handles sticking out','Turn pan handles inward','Lean over rising steam'],1,'Handles turned inward are less likely to be bumped.');
const store=K('Serve and store safely','Serve the meal. Refrigerate perishable leftovers promptly, generally within 2 hours, in shallow containers.','How soon should perishable leftovers go in the refrigerator?',['Within 2 hours','The next morning','After sitting out all day'],0,'Prompt refrigeration reduces time in the temperature danger zone.');
const cold=K('Combine and serve','Assemble ingredients with clean utensils. Keep cold dairy, eggs, or tuna refrigerated until needed.','How should perishable ingredients be handled?',['Leave on the counter all afternoon','Keep refrigerated until ready to use','Put them near a sunny window'],1,'Cold storage slows bacterial growth.');
const grain=K('Prepare the grains','Follow package directions, use clean water, and keep pot handles away from the edge.','What is the safest way to lift a hot lid?',['Lift toward your face','Use a mitt and lift away from you','Grab it with bare hands'],1,'Lifting a lid away from you reduces steam burns.');
const eggCook=K('Cook the eggs','Use clean utensils. For these activities, cook eggs until the whites and yolks are firm.','What is the safer egg preparation for this activity?',['Raw egg batter','Firm whites and yolks','Uncooked mixed eggs'],1,'Properly cooked eggs lower foodborne illness risks.');
const label=K('Check ingredient labels','Read real package labels for allergies; recipes are only simulations. Watch for ingredient changes and cross-contact.','What is the best way to verify an allergen?',['Guess by appearance','Read the actual packaging and ask a trusted adult','Trust that a recipe title is enough'],1,'Allergen information must be checked on each real product.');
const noCook=[wash,knife,cold,label];
const base=[wash,knife,simmer,store];
const chickenSteps=[wash,raw,heatPoultry,store];
const turkeySteps=[wash,raw,heatPoultry,store];
const eggsSteps=[wash,eggCook,knife,store];
const grainSteps=[wash,grain,knife,store];
function R(id,name,meal,emoji,desc,ingredients,nutrition,groups,minutes,steps,skill='Beginner') {
 return {id,name,meal,emoji,desc,ingredients,nutrition,groups,minutes,steps,skill,serves:4};
}
// Nutrition values are rough estimates PER STANDARD SERVING, not authoritative labels.
// nutrition = kcal, protein(g), carbohydrate(g), fiber(g), fat(g), sodium(mg).
window.BB_RECIPES=[
R('banana-oats','Banana Cinnamon Oats','Breakfast','🥣','Warm oats topped with banana and cinnamon.',{oats:2,banana:3,milk:2,cinnamon:1},[345,12,60,8,7,115],['grains','fruit','dairy'],12,grainSteps),
R('egg-toast','Egg & Toast Plate','Breakfast','🍳','Eggs, whole-wheat toast and orange slices.',{egg:6,bread:6,orange:2,oil:0.4},[385,21,38,6,16,390],['protein','grains','fruit'],15,eggsSteps),
R('berry-yogurt','Berry Yogurt Bowls','Breakfast','🫐','Fruit and yogurt layered with toasted oats.',{yogurt:3,berries:2,oats:1.2},[330,15,49,6,7,105],['dairy','fruit','grains'],5,noCook),
R('pb-banana','Peanut Butter Banana Toast','Breakfast','🍌','A quick breakfast with fruit and whole grain.',{bread:8,pb:8,banana:3},[390,13,53,8,16,310],['grains','fruit','protein'],5,[wash,cold,label,store]),
R('breakfast-taco','Breakfast Tacos','Breakfast','🌮','Corn tortillas filled with eggs, peppers and salsa.',{tortilla:8,egg:6,pepper:1,salsa:0.8,cheese:2},[420,24,42,6,17,560],['protein','vegetable','grains','dairy'],20,eggsSteps),
R('apple-oats','Apple Raisin Oatmeal','Breakfast','🍎','Apple and raisin oats with warming spices.',{oats:2,apple:2,raisins:4,milk:2,cinnamon:0.5},[365,12,69,9,7,105],['grains','fruit','dairy'],12,grainSteps),
R('yogurt-apple','Apple Yogurt Parfait','Breakfast','🥛','Apple slices, yogurt and crunchy oats.',{yogurt:3,apple:2,oats:1.2,cinnamon:0.4},[310,15,48,6,6,110],['fruit','dairy','grains'],5,noCook),
R('potato-egg','Potato & Egg Scramble','Breakfast','🥔','Pan-cooked potatoes, spinach and eggs.',{potato:3,egg:6,spinach:2,onion:1,oil:0.7},[410,20,42,6,17,330],['vegetable','protein'],25,eggsSteps,'Intermediate'),
R('bean-burritos','Bean & Rice Burritos','Lunch','🌯','Hearty beans, rice and salsa in corn tortillas.',{beans:3,rice:1.5,tortilla:8,salsa:1,lettuce:2},[525,18,88,15,9,540],['protein','grains','vegetable'],25,grainSteps),
R('tuna-sandwich','Tuna Salad Sandwich','Lunch','🥪','Tuna, cucumber and lettuce on whole-wheat bread.',{tuna:12,bread:8,cucumber:1,lettuce:2,yogurt:0.7},[430,33,40,7,13,620],['protein','grains','vegetable','dairy'],10,noCook),
R('tomato-soup','Tomato Lentil Soup','Lunch','🍅','Tomatoes and lentils simmered with carrots.',{tomato:3,lentil:1.6,carrot:2,onion:1,oil:0.5,bread:4},[480,23,78,19,8,490],['vegetable','protein','grains'],35,base,'Intermediate'),
R('chickpea-wrap','Chickpea Lettuce Wraps','Lunch','🥬','Seasoned chickpeas, lettuce and crunchy vegetables.',{chickpea:3,tortilla:8,lettuce:2,cucumber:1,pepper:1,yogurt:0.8},[455,19,71,13,10,410],['protein','vegetable','grains','dairy'],15,noCook),
R('quesadilla','Bean & Cheese Quesadillas','Lunch','🧀','Crispy corn tortillas with black beans and cheese.',{tortilla:8,beans:2.5,cheese:5,salsa:1,spinach:2},[520,24,64,13,19,670],['protein','grains','dairy','vegetable'],18,base),
R('hummus-box','Hummus Snack-Plate Lunch','Lunch','🥒','Hummus, vegetables, apples and toast.',{hummus:10,carrot:2,cucumber:1,apple:2,bread:8},[465,17,66,13,15,445],['protein','vegetable','fruit','grains'],10,noCook),
R('turkey-bowl','Turkey Rice Bowls','Lunch','🍚','Ground turkey, rice, broccoli and salsa.',{turkey:16,rice:1.5,broccoli:3,salsa:1,oil:0.7},[535,35,64,8,14,510],['protein','grains','vegetable'],30,turkeySteps,'Intermediate'),
R('pasta-salad','Garden Pasta Salad','Lunch','🥗','Chilled whole-wheat pasta and garden vegetables.',{pasta:12,cucumber:1,pepper:1,spinach:2,chickpea:2,oil:1},[480,19,69,12,14,260],['grains','vegetable','protein'],22,grainSteps),
R('leftover-chili','Lentil Tomato Bowls','Lunch','🍲','Warm lentils and tomatoes served over brown rice.',{lentil:1.4,tomato:2.5,rice:1.1,spinach:2,onion:0.5},[460,21,77,17,5,395],['protein','vegetable','grains'],27,grainSteps),
R('chicken-rice','Chicken & Broccoli Rice','Dinner','🍗','Chicken, broccoli and brown rice skillet.',{chicken:20,rice:1.7,broccoli:3,carrot:2,oil:1,onion:0.5},[610,46,64,9,17,420],['protein','grains','vegetable'],35,chickenSteps,'Intermediate'),
R('lentil-chili','Three-Veg Lentil Chili','Dinner','🌶️','A filling vegetarian chili with lentils and beans.',{lentil:1.8,beans:2,tomato:3,pepper:1,onion:1,carrot:1},[535,27,88,24,7,580],['protein','vegetable'],40,base,'Intermediate'),
R('turkey-tacos','Turkey Taco Night','Dinner','🌮','Ground turkey, lettuce and salsa in corn tortillas.',{turkey:20,tortilla:12,lettuce:3,salsa:1.2,cheese:3,pepper:1},[635,43,62,9,23,690],['protein','grains','vegetable','dairy'],30,turkeySteps,'Intermediate'),
R('pasta-tomato','Garden Tomato Pasta','Dinner','🍝','Pasta tossed with lentils, tomato and spinach.',{pasta:14,tomato:3,lentil:1.2,spinach:3,onion:1,oil:0.8},[560,25,88,16,11,460],['grains','vegetable','protein'],35,base),
R('baked-potato','Loaded Baked Potatoes','Dinner','🥔','Baked potatoes with beans, broccoli and yogurt.',{potato:6,beans:3,broccoli:3,yogurt:1,cheese:2},[570,27,88,16,13,480],['vegetable','protein','dairy'],45,base),
R('tofu-stirfry','Tofu Veggie Stir-Fry','Dinner','🥦','Tofu, peppers, carrots and rice.',{tofu:14,rice:1.8,broccoli:2.5,pepper:1,carrot:1.5,oil:1},[595,28,77,10,18,340],['protein','grains','vegetable'],30,grainSteps,'Intermediate'),
R('chicken-wrap','Chicken Veggie Tacos','Dinner','🌯','Chicken, corn tortillas and chopped vegetables.',{chicken:20,tortilla:12,lettuce:3,pepper:1,salsa:1.5,cheese:2},[590,43,61,9,17,610],['protein','grains','vegetable','dairy'],30,chickenSteps,'Intermediate'),
R('sweetpotato-beans','Sweet Potato Bean Bowls','Dinner','🍠','Roasted sweet potatoes and seasoned black beans.',{sweetpotato:4,beans:3,rice:1.2,spinach:2,salsa:1,oil:0.6},[615,20,102,19,11,475],['vegetable','protein','grains'],40,base),
R('turkey-skillet','Turkey & Vegetable Skillet','Dinner','🍳','Ground turkey with potatoes and vegetables.',{turkey:20,potato:4,carrot:2,pepper:1,onion:1,oil:0.8},[590,42,53,9,19,410],['protein','vegetable'],35,turkeySteps,'Intermediate'),
R('chickpea-stew','Chickpea Tomato Stew','Dinner','🍲','Warm chickpeas, spinach and tomatoes with rice.',{chickpea:3.5,tomato:3,spinach:3,rice:1.5,onion:1,oil:0.8},[560,21,90,19,11,460],['protein','vegetable','grains'],35,grainSteps),
R('apple-pb','Apple & Peanut Butter','Snack','🍏','Crisp apple slices and peanut butter.',{apple:3,pb:6},[215,6,30,5,9,80],['fruit','protein'],5,[wash,knife,label,cold]),
R('berries-yogurt','Berries and Yogurt','Snack','🫐','Plain yogurt with fresh mixed berries.',{berries:1.8,yogurt:2},[165,10,24,3,3,75],['fruit','dairy'],4,noCook),
R('veggie-hummus','Veggies & Hummus','Snack','🥕','Carrots, cucumber and hummus.',{carrot:2,cucumber:1,hummus:6},[180,6,23,6,7,250],['vegetable','protein'],8,noCook),
R('banana-milk','Banana & Milk','Snack','🥛','An easy banana and milk snack.',{banana:4,milk:4},[205,9,35,4,5,115],['fruit','dairy'],3,noCook),
R('popcorn-fruit','Popcorn & Orange Slices','Snack','🍿','Homemade popcorn with oranges.',{popcorn:0.9,orange:3,oil:0.7},[185,5,34,6,5,35],['grains','fruit'],10,[wash,simmer,label,store]),
R('toast-raisins','Cinnamon Raisin Toast','Snack','🍞','Whole-grain toast with banana and raisins.',{bread:4,raisins:5,banana:2,cinnamon:0.4},[220,6,45,6,3,205],['grains','fruit'],5,[wash,cold,label,store])
];
window.BB_KITCHEN_TIPS=[
'Never taste raw poultry or raw flour dough.',
'Read packaging for ingredient allergens and cross-contact warnings.',
'Use a food thermometer for poultry; color alone is not reliable.',
'Compare the unit price, not only the package price.',
'Plan one recipe that reuses ingredients from another to reduce waste.',
'Wash fresh produce under running water before cutting.',
'An adult should supervise knives, the stove, and hot pans.',
'Refrigerate perishable leftovers promptly.'
];

// Step-by-step recipe methods are written separately from the safety quizzes.
// Methods adapt to the ingredient quantities shown for the household.
const BB_METHODS = {
 'banana-oats':['Measure the oats and milk. Add extra water as needed, following the oats package instructions.','With adult supervision, simmer oats over low heat, stirring until creamy and fully cooked.','Slice washed bananas, add cinnamon, divide oats into family portions and top with banana.'],
 'egg-toast':['Wash the oranges and cut into segments with adult supervision. Toast the whole-wheat bread.','Crack eggs into a clean bowl and cook in a lightly oiled skillet until both whites and yolks are firm.','Plate the eggs with toast and orange slices.'],
 'berry-yogurt':['Rinse berries under running water and wash your hands.','Spoon yogurt into clean bowls; add oats and berries in layers.','Keep yogurt chilled until serving. Divide among family members.'],
 'pb-banana':['Read the peanut-butter and bread labels carefully before starting. Wash and slice bananas.','Toast the bread if desired, then spread with peanut butter using a clean knife.','Arrange banana slices on toast and divide into portions.'],
 'breakfast-taco':['Wash and dice bell pepper with adult help. Warm corn tortillas according to the package.','Crack eggs and cook thoroughly with the peppers until whites and yolks are firm.','Fill tortillas with egg mixture, add cheese and salsa, and serve warm.'],
 'apple-oats':['Rinse and chop apples with supervision; measure oats, raisins and milk.','Simmer oats with milk and water according to package instructions until cooked. Stir in cinnamon and raisins.','Top bowls with chopped apples and serve.'],
 'yogurt-apple':['Wash apples, remove cores, and dice into small pieces with adult help.','Spoon yogurt into bowls and add oats, apples, and a sprinkle of cinnamon.','Serve immediately; return unused yogurt to the refrigerator.'],
 'potato-egg':['Scrub potatoes, dice into small cubes, and chop onions with adult supervision. Rinse spinach.','Pan-cook potatoes and onions in a little oil until tender; add spinach and cook until wilted.','Add eggs and cook until whites and yolks are firm. Divide into portions.'],
 'bean-burritos':['Cook brown rice following its package instructions using safe handling of hot pots.','Warm drained beans with salsa until hot; wash and shred lettuce.','Layer rice, beans and lettuce in warmed corn tortillas, then roll or fold.'],
 'tuna-sandwich':['Keep tuna and yogurt chilled until needed. Drain canned tuna carefully; watch sharp can edges.','Wash and dice cucumber. Mix tuna with plain yogurt and cucumber in a clean bowl.','Place tuna mixture and lettuce between slices of bread; serve or refrigerate promptly.'],
 'tomato-soup':['Rinse and dice carrots and onions with adult supervision. Rinse lentils according to the package.','Simmer lentils, tomatoes, carrots, onions and sufficient water until lentils are fully tender.','Stir carefully and serve with whole-wheat toast. Refrigerate leftovers promptly.'],
 'chickpea-wrap':['Drain and rinse canned chickpeas; clean and cut the cucumber and bell pepper.','Mash some chickpeas lightly with a fork and combine with yogurt and chopped vegetables.','Place mixture with lettuce into warmed corn tortillas, fold and serve.'],
 'quesadilla':['Drain and rinse black beans, wash spinach, and warm beans until hot.','Place beans, cheese and spinach on half of each corn tortilla. Fold over.','With an adult, cook each quesadilla on a skillet until warmed through and cheese is melted; serve with salsa.'],
 'hummus-box':['Wash cucumber, carrots and apples. Have an adult help cut them into safe bite-size pieces.','Toast bread if preferred. Portion hummus into separate cups for dipping.','Arrange produce, hummus and bread on plates; keep leftover hummus refrigerated.'],
 'turkey-bowl':['Cook brown rice following package instructions. Wash and chop broccoli into florets.','Keep raw ground turkey separate from vegetables. Cook turkey to 165°F (74°C), checking with a thermometer.','Steam broccoli until tender and assemble bowls with rice, turkey and salsa.'],
 'pasta-salad':['Cook pasta until tender according to the package; use a colander safely with adult help.','Rinse and chop vegetables. Drain and rinse canned chickpeas.','Cool pasta promptly, toss with vegetables, chickpeas and oil, and refrigerate until serving.'],
 'leftover-chili':['Rinse lentils, then simmer in water according to the package until fully tender.','Cook rice separately; warm tomatoes, onions and spinach with the lentils.','Spoon lentil-tomato mixture over the rice. Refrigerate leftovers promptly.'],
 'chicken-rice':['Cook rice according to package directions. Wash broccoli and carrots before cutting.','Keep raw chicken on a separate board. Cook to 165°F (74°C) in the thickest part, using a thermometer.','Steam vegetables until tender. Mix everything with oil in a clean pan and serve hot.'],
 'lentil-chili':['Rinse lentils; wash and dice onion, bell pepper and carrots with adult assistance.','Simmer lentils with tomatoes and enough water to soften them fully; add chopped vegetables.','Stir in drained black beans, heat thoroughly, and serve in bowls.'],
 'turkey-tacos':['Wash lettuce and pepper. Dice pepper using the claw grip and separate cutting boards.','Cook ground turkey to 165°F (74°C), checking with a thermometer. Stir in chopped pepper and salsa.','Warm tortillas and fill with turkey, shredded lettuce and cheese.'],
 'pasta-tomato':['Cook pasta according to package directions. Wash spinach and dice onion.','Simmer lentils until tender; gently cook onion and tomatoes, then add spinach and lentils.','Toss cooked pasta with tomato-lentil sauce, heat through and serve.'],
 'baked-potato':['Scrub and pierce potatoes with adult help, then bake until completely tender.','Warm black beans and broccoli separately until hot and cooked; wash hands after handling produce.','Split hot potatoes carefully, add beans, broccoli, yogurt and cheese, and serve.'],
 'tofu-stirfry':['Drain tofu; wash and chop broccoli, pepper and carrots. Cook brown rice separately.','With adult supervision, sauté tofu and vegetables in a lightly oiled pan until heated through and tender.','Spoon tofu and vegetables over cooked rice and serve warm.'],
 'chicken-wrap':['Wash lettuce and pepper, slice carefully with adult supervision and warm the tortillas.','Keep raw chicken separate. Cook chicken to 165°F (74°C), checking the thickest part with a thermometer.','Slice cooked chicken using clean tools and fill tortillas with chicken, lettuce, salsa and cheese.'],
 'sweetpotato-beans':['Wash, peel if desired and cut sweet potatoes with adult help. Rinse spinach.','Roast sweet potato pieces until completely tender; prepare brown rice following package directions.','Warm black beans and spinach with salsa. Assemble rice, potato and bean bowls.'],
 'turkey-skillet':['Wash and dice potatoes, carrots, peppers and onions using a stable board.','Keep ground turkey separate from produce; cook to 165°F (74°C) with a thermometer.','Pan-cook vegetables until tender, combine with the fully cooked turkey, and serve.'],
 'chickpea-stew':['Drain and rinse chickpeas; wash spinach and chop onions with adult supervision.','Cook rice as directed. Simmer onions, chickpeas and tomatoes until heated through; stir in spinach.','Serve chickpea stew over cooked rice. Refrigerate any leftovers promptly.'],
 'apple-pb':['Wash and core apples; ask an adult to help slice them safely.','Read peanut butter packaging for allergy information before opening.','Portion peanut butter into individual cups and dip apple slices.'],
 'berries-yogurt':['Wash and drain berries; keep the yogurt chilled until serving.','Spoon yogurt into small clean bowls and top with fresh berries.','Serve promptly and refrigerate unused dairy ingredients.'],
 'veggie-hummus':['Rinse carrots and cucumbers under running water.','With adult supervision, slice carrots and cucumbers into safe dipping sizes.','Spoon hummus into separate bowls, arrange vegetable sticks and serve.'],
 'banana-milk':['Wash hands and wipe down the preparation area.','Peel bananas and divide into portions; pour milk into clean cups.','Serve immediately and refrigerate remaining milk.'],
 'popcorn-fruit':['Wash and cut oranges into wedges with adult supervision.','Pop kernels with oil using an appropriate covered popcorn popper or pot under adult supervision. Avoid steam burns.','Let the popcorn cool slightly before serving alongside orange slices.'],
 'toast-raisins':['Wash and slice bananas safely; have the raisins ready.','Toast bread, then sprinkle with cinnamon and add banana slices and raisins.','Share between family members and serve.']
};
for(const recipe of BB_RECIPES)recipe.method=BB_METHODS[recipe.id]||[];
