// Sample recipe data
const recipes = [
    {
        title: "Spaghetti Carbonara",
        ingredients: [
            "200g spaghetti",
            "100g pancetta",
            "2 large eggs",
            "50g Pecorino cheese",
            "50g Parmesan",
            "Freshly ground black pepper",
            "Salt",
            "1 clove of garlic, peeled and left whole",
            "50g unsalted butter",
        ],
        description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    },
    {
        title: "Chicken Curry",
        ingredients: [
            "500g chicken breast, diced",
            "2 onions, chopped",
            "3 garlic cloves, minced",
            "2 tbsp curry powder",
            "400ml coconut milk",
            "Salt and pepper to taste",
            "Fresh cilantro for garnish",
        ],
        description: "A flavorful chicken curry that's easy to make and full of spices.",
    },
    {
        title: "Beef Stroganoff",
        ingredients: [
            "500g beef sirloin, sliced",
            "1 onion, chopped",
            "2 garlic cloves, minced",
            "200g mushrooms, sliced",
            "1 tbsp flour",
            "250ml beef broth",
            "200ml sour cream",
            "2 tbsp olive oil",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        description: "A rich and creamy beef stroganoff served over noodles or rice."
    },
    {
        title: "Vegetable Stir-Fry",
        ingredients: [
            "2 tbsp vegetable oil",
            "1 onion, sliced",
            "2 bell peppers, sliced",
            "1 carrot, julienned",
            "200g broccoli florets",
            "3 garlic cloves, minced",
            "2 tbsp soy sauce",
            "1 tbsp hoisin sauce",
            "1 tsp sesame oil",
            "Salt and pepper to taste",
            "Cooked rice for serving"
        ],
        description: "A quick and easy stir-fry with a mix of colorful vegetables."
    },
    {
        title: "Margherita Pizza",
        ingredients: [
            "1 pizza dough",
            "200g tomato sauce",
            "200g mozzarella cheese",
            "Fresh basil leaves",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        description: "A classic pizza with tomato sauce, mozzarella, and fresh basil."
    },
    {
        title: "Caesar Salad",
        ingredients: [
            "1 head of romaine lettuce, chopped",
            "50g Parmesan cheese, shaved",
            "1 cup croutons",
            "Caesar dressing",
            "Freshly ground black pepper"
        ],
        description: "A crisp and refreshing salad with romaine lettuce, Parmesan, and croutons."
    },
    {
        title: "Beef Tacos",
        ingredients: [
            "500g ground beef",
            "1 onion, chopped",
            "2 garlic cloves, minced",
            "1 tbsp taco seasoning",
            "8 taco shells",
            "Shredded lettuce",
            "Diced tomatoes",
            "Shredded cheese",
            "Sour cream"
        ],
        description: "Delicious beef tacos with all your favorite toppings."
    },
    {
        title: "Chicken Alfredo",
        ingredients: [
            "250g fettuccine",
            "2 chicken breasts, cooked and sliced",
            "200ml heavy cream",
            "100g Parmesan cheese",
            "2 garlic cloves, minced",
            "2 tbsp butter",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        description: "A creamy Alfredo sauce served over fettuccine with tender chicken."
    },
    {
        title: "Greek Salad",
        ingredients: [
            "1 cucumber, chopped",
            "2 tomatoes, chopped",
            "1 red onion, sliced",
            "100g feta cheese, crumbled",
            "1/4 cup black olives",
            "2 tbsp olive oil",
            "1 tbsp red wine vinegar",
            "Salt and pepper to taste",
            "Dried oregano"
        ],
        description: "A fresh salad with cucumber, tomatoes, feta, and olives."
    },
    {
        title: "Pancakes",
        ingredients: [
            "1 cup all-purpose flour",
            "2 tbsp sugar",
            "1 tbsp baking powder",
            "1/2 tsp salt",
            "1 cup milk",
            "1 egg",
            "2 tbsp melted butter",
            "Maple syrup for serving"
        ],
        description: "Fluffy pancakes perfect for a weekend breakfast."
    },
    {
        title: "Lemonade",
        ingredients: [
            "1 cup lemon juice",
            "1 cup sugar",
            "4 cups water",
            "Ice cubes",
            "Lemon slices for garnish"
        ],
        description: "A refreshing homemade lemonade."
    },
    {
        title: "Baked Salmon",
        ingredients: [
            "4 salmon fillets",
            "2 tbsp olive oil",
            "1 lemon, sliced",
            "2 garlic cloves, minced",
            "1 tsp dried thyme",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        description: "Tender salmon fillets baked with lemon and herbs."
    },
    {
        title: "Pasta Primavera",
        ingredients: [
            "250g pasta",
            "2 tbsp olive oil",
            "1 onion, chopped",
            "1 bell pepper, sliced",
            "1 zucchini, sliced",
            "1 cup cherry tomatoes",
            "2 garlic cloves, minced",
            "1/4 cup Parmesan cheese",
            "Salt and pepper to taste"
        ],
        description: "Pasta tossed with a variety of fresh vegetables and Parmesan."
    },
    {
        title: "Tomato Soup",
        ingredients: [
            "1 tbsp olive oil",
            "1 onion, chopped",
            "2 garlic cloves, minced",
            "800g canned tomatoes",
            "2 cups vegetable broth",
            "1 tsp dried basil",
            "Salt and pepper to taste",
            "Fresh basil for garnish"
        ],
        description: "A warm and comforting tomato soup."
    },
    {
        title: "Chicken Caesar Wrap",
        ingredients: [
            "2 large tortillas",
            "2 cups cooked chicken, sliced",
            "1 cup romaine lettuce, chopped",
            "1/2 cup Caesar dressing",
            "1/4 cup Parmesan cheese",
            "Freshly ground black pepper"
        ],
        description: "A tasty wrap filled with chicken Caesar salad."
    },
    {
        title: "Vegetarian Chili",
        ingredients: [
            "1 tbsp olive oil",
            "1 onion, chopped",
            "2 garlic cloves, minced",
            "1 bell pepper, chopped",
            "1 can black beans",
            "1 can kidney beans",
            "1 can corn",
            "1 can diced tomatoes",
            "2 tbsp chili powder",
            "Salt and pepper to taste"
        ],
        description: "A hearty and spicy vegetarian chili."
    },
    {
        title: "Fruit Smoothie",
        ingredients: [
            "1 banana",
            "1 cup frozen berries",
            "1 cup spinach",
            "1 cup yogurt",
            "1/2 cup orange juice",
            "Honey to taste"
        ],
        description: "A nutritious and delicious fruit smoothie."
    },
    {
        title: "Quiche Lorraine",
        ingredients: [
            "1 pie crust",
            "200g bacon, cooked and crumbled",
            "1 cup shredded cheese",
            "1 cup heavy cream",
            "4 large eggs",
            "Salt and pepper to taste",
            "Fresh chives for garnish"
        ],
        description: "A savory quiche with bacon and cheese."
    },
    {
        title: "Stuffed Bell Peppers",
        ingredients: [
            "4 bell peppers",
            "250g ground beef",
            "1 onion, chopped",
            "1 cup cooked rice",
            "1 can diced tomatoes",
            "1 tsp dried oregano",
            "1/2 cup shredded cheese",
            "Salt and pepper to taste"
        ],
        description: "Bell peppers stuffed with a savory beef and rice mixture."
    },
    {
        title: "Garlic Bread",
        ingredients: [
            "1 baguette",
            "4 cloves garlic, minced",
            "1/2 cup butter, softened",
            "2 tbsp fresh parsley, chopped",
            "Salt to taste"
        ],
        description: "Crispy and buttery garlic bread."
    },
    {
        title: "Chili Con Carne",
        ingredients: [
            "500g ground beef",
            "1 onion, chopped",
            "2 garlic cloves, minced",
            "1 can kidney beans",
            "1 can diced tomatoes",
            "2 tbsp chili powder",
            "1 tsp cumin",
            "Salt and pepper to taste"
        ],
        description: "A spicy and satisfying chili with beef and beans."
    },
    {
        title: "Chocolate Chip Cookies",
        ingredients: [
            "1 cup butter, softened",
            "1 cup sugar",
            "1 cup brown sugar",
            "2 eggs",
            "2 1/4 cups all-purpose flour",
            "1 tsp baking soda",
            "1/2 tsp baking powder",
            "1/2 tsp salt",
            "2 cups chocolate chips"
        ],
        description: "Classic chocolate chip cookies with gooey chocolate chips."
    },
    {
        title: "Minestrone Soup",
        ingredients: [
            "1 tbsp olive oil",
            "1 onion, chopped",
            "2 garlic cloves, minced",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "1 zucchini, diced",
            "1 can diced tomatoes",
            "1 can kidney beans",
            "4 cups vegetable broth",
            "1 tsp dried oregano",
            "Salt and pepper to taste"
        ],
        description: "A hearty vegetable soup with beans and pasta."
    },
    {
        title: "Eggplant Parmesan",
        ingredients: [
            "2 eggplants, sliced",
            "2 cups marinara sauce",
            "1 cup mozzarella cheese",
            "1/2 cup Parmesan cheese",
            "1 cup flour",
            "2 eggs, beaten",
            "1 cup breadcrumbs",
            "Olive oil for frying",
            "Fresh basil for garnish"
        ],
        description: "Breaded and fried eggplant slices baked with marinara and cheese."
    },
    {
        title: "Beef and Broccoli",
        ingredients: [
            "500g beef sirloin, sliced",
            "1 head broccoli, cut into florets",
            "2 tbsp soy sauce",
            "1 tbsp oyster sauce",
            "2 garlic cloves, minced",
            "1 tbsp cornstarch",
            "1 cup beef broth",
            "2 tbsp vegetable oil",
            "Salt and pepper to taste"
        ],
        description: "A savory beef and broccoli stir-fry."
    },
    {
        title: "Apple Pie",
        ingredients: [
            "1 pie crust",
            "6 apples, peeled and sliced",
            "3/4 cup sugar",
            "1/4 cup brown sugar",
            "1 tbsp lemon juice",
            "1 tsp cinnamon",
            "1/4 tsp nutmeg",
            "2 tbsp flour",
            "1 egg, beaten for egg wash"
        ],
        description: "A classic apple pie with a buttery crust and spiced apple filling."
    },
    {
        title: "Tuna Salad",
        ingredients: [
            "1 can tuna, drained",
            "1/4 cup mayonnaise",
            "1 tbsp lemon juice",
            "1 celery stalk, chopped",
            "1/4 cup red onion, chopped",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        description: "A simple and refreshing tuna salad."
    },
    {
        title: "Shrimp Scampi",
        ingredients: [
            "500g shrimp, peeled and deveined",
            "4 garlic cloves, minced",
            "1/4 cup butter",
            "1/4 cup olive oil",
            "1/4 cup white wine",
            "1 lemon, juiced",
            "1/4 cup fresh parsley, chopped",
            "Salt and pepper to taste"
        ],
        description: "Garlic shrimp cooked in a buttery, lemony sauce."
    },
    {
        title: "Breakfast Burritos",
        ingredients: [
            "4 large tortillas",
            "4 eggs, scrambled",
            "1 cup cooked sausage",
            "1 cup shredded cheese",
            "1/2 cup salsa",
            "1/4 cup chopped cilantro"
        ],
        description: "Hearty breakfast burritos filled with eggs, sausage, and cheese."
    },
    {
        title: "Goulash",
        ingredients: [
            "500g beef, cubed",
            "1 onion, chopped",
            "2 garlic cloves, minced",
            "2 tbsp paprika",
            "1 can diced tomatoes",
            "1 cup beef broth",
            "1 cup potatoes, diced",
            "Salt and pepper to taste"
        ],
        description: "A rich and flavorful Hungarian stew with beef and paprika."
    },
    {
        title: "Fruit Salad",
        ingredients: [
            "1 cup strawberries, sliced",
            "1 cup blueberries",
            "1 cup grapes, halved",
            "1 cup kiwi, peeled and chopped",
            "1 cup pineapple chunks",
            "2 tbsp honey",
            "1 tbsp fresh mint, chopped"
        ],
        description: "A fresh and vibrant fruit salad."
    },
    {
        title: "Chicken Parmesan",
        ingredients: [
            "4 chicken breasts, breaded and fried",
            "2 cups marinara sauce",
            "1 cup mozzarella cheese",
            "1/2 cup Parmesan cheese",
            "1/4 cup fresh basil, chopped"
        ],
        description: "Breaded chicken breasts topped with marinara and melted cheese."
    },
    {
        title: "Sloppy Joes",
        ingredients: [
            "500g ground beef",
            "1 onion, chopped",
            "1 green bell pepper, chopped",
            "1 can tomato sauce",
            "1 tbsp Worcestershire sauce",
            "1 tbsp brown sugar",
            "Salt and pepper to taste",
            "Hamburger buns for serving"
        ],
        description: "Savory ground beef mixture served on hamburger buns."
    },
    {
        title: "Ratatouille",
        ingredients: [
            "1 eggplant, diced",
            "1 zucchini, diced",
            "1 bell pepper, diced",
            "1 onion, chopped",
            "2 garlic cloves, minced",
            "1 can diced tomatoes",
            "2 tbsp olive oil",
            "1 tsp dried thyme",
            "Salt and pepper to taste"
        ],
        description: "A classic French vegetable stew."
    },
    {
        title: "Fried Rice",
        ingredients: [
            "2 cups cooked rice",
            "1 cup mixed vegetables",
            "2 eggs, beaten",
            "2 garlic cloves, minced",
            "2 tbsp soy sauce",
            "2 tbsp vegetable oil",
            "Salt and pepper to taste"
        ],
        description: "Stir-fried rice with vegetables and egg."
    },
    {
        title: "Buffalo Wings",
        ingredients: [
            "1 kg chicken wings",
            "1/2 cup hot sauce",
            "1/4 cup butter",
            "1 tbsp vinegar",
            "1/2 tsp garlic powder",
            "Salt to taste",
            "Celery sticks and ranch dressing for serving"
        ],
        description: "Spicy buffalo wings served with celery and ranch dressing."
    },
    {
        title: "Bread Omlet",
        ingredients: [
            "Eggs: Typically 2 eggs per omelette, but adjust according to your preference",
            "Bread slices: 2 slices per omelette, or as desired.",
            "Butter or oil: For frying the omelette and toasting the bread.",
            "Salt and pepper: To season the eggs.",
        ],
        description: "Toast the bread slices lightly Crack the eggs into a bowl and whisk them together with salt and pepper to taste Pour the egg mixture into the pan, spreading it evenly to form a thin layer Place one toasted bread slice Cook for another minute Serve hot with ketchup.",
    }
    // ... more recipes ...
];

// Function to display recipes
function displayRecipes(filter = "") {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = ""; // Clear existing recipes

    recipes
        .filter(recipe => recipe.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach((recipe) => {
            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add("recipe");
            recipeDiv.innerHTML = `<h3>${recipe.title}</h3>`; // Corrected line
            recipeDiv.addEventListener("click", () => openModal(recipe));
            recipeList.appendChild(recipeDiv);
        });
}

// Function to open modal
function openModal(recipe) {
    document.getElementById("modal-recipe-title").innerText = recipe.title;
    document.getElementById("modal-ingredients").innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join(''); // Corrected line
    document.getElementById("modal-description").innerText = recipe.description;

    const modal = document.getElementById("recipe-modal");
    modal.style.display = "block";
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById("recipe-modal");
    modal.style.display = "none";
}

// Event listeners for modal close button
document.querySelector(".close-btn").addEventListener("click", closeModal);
window.addEventListener("click", (event) => {
    const modal = document.getElementById("recipe-modal");
    if (event.target === modal) {
        closeModal();
    }
});

// Add recipe button functionality
document.getElementById("add-recipe-btn").addEventListener("click", () => {
    const title = prompt("Enter recipe title:");
    const ingredientsInput = prompt("Enter ingredients separated by commas:");
    const description = prompt("Enter recipe description:");

    if (title && ingredientsInput && description) {
        const ingredients = ingredientsInput.split(",").map(ingredient => ingredient.trim());
        recipes.push({ title, ingredients, description });
        displayRecipes();
    }
});

// Search bar functionality
document.getElementById("search-bar").addEventListener("input", (event) => {
    displayRecipes(event.target.value);
});

// Initial display of recipes
displayRecipes();
