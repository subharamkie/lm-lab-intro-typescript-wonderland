export const beverages = ['Tea','Coffee','Hot Chocolate'] as const;
export type morningDrink = typeof beverages[number];