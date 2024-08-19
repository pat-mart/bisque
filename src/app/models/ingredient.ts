interface Ingredient {
    id: string
    name: string
    quantity: number
    unit: string
    allergens: [string] | null
}