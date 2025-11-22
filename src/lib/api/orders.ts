export function createOrder(productId: string, amountGold: number) {
  return { id: crypto.randomUUID(), productId, amountGold, status: 'pending' };
}

