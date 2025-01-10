export interface Recipe {
    id: number;
    name: string;
    slug: string;
    url_file: string;
    url_video: string;
    author: Author;
    category: Category;
    thumbnail: string;
    tutorials: Tutorial[];
    recipe_ingredients: RecipeIngredient[];
    about:string;
}

export interface Tutorial{
    id: number;
    name: string;
}

export interface Author{
    id: number;
    name: string;
    photo: string;
}

export interface Category{
    id: number;
    name: string;
    slug: string;
    icon: string;
    recipe_count: number;
    recipe:Recipe[];
}

export interface RecipeIngredient{
    id: number;
    ingredient : Ingredient[];
}

export interface Ingredient{
    id: number;
    name: string;
    photo: string;
}