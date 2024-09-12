interface Ingredient {
    id: string
    name: string
    measurement: number
    unit: string
    allergens: [string] | null
}