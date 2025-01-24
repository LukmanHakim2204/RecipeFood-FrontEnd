export interface Recipe {
    id: number;
    name: string;
    slug: string;
    url_file: string;
    url_video: string;
    author: Author;
    category: Category;
    thumbnail: string;
    photos : Photo[];
    tutorials: Tutorial[];
    recipe_ingredients: RecipeIngredient[];
    about:string;
}
export interface Photo{
    id: number;
    photo: string;
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
    recipes_count: number;
    recipes:Recipe[];
}

export interface RecipeIngredient{
    id: number;
    ingredient : Ingredient;
}

export interface Ingredient{
    id: number;
    name: string;
    photo: string;
    measure: string;
}