export const users = [
  { id: 'u1', name: 'Budi', email: 'budi@example.com', avatar: '', role: 'buyer', goldBalance: 500 },
  { id: 'u2', name: 'Siti', email: 'siti@example.com', avatar: '', role: 'seller', goldBalance: 1200 }
];

export const products = [
  { id: 'p1', sellerId: 'u2', title: 'Diamond ML 500', description: 'Top up cepat', priceGold: 50000, images: ['https://picsum.photos/seed/p1/400/240'], createdAt: new Date().toISOString() },
  { id: 'p2', sellerId: 'u2', title: 'Voucher Steam 100k', description: 'Kode instan', priceGold: 100000, images: ['https://picsum.photos/seed/p2/400/240'], createdAt: new Date().toISOString() },
  { id: 'p3', sellerId: 'u2', title: 'UC PUBG 660', description: 'Aman dan cepat', priceGold: 120000, images: ['https://picsum.photos/seed/p3/400/240'], createdAt: new Date().toISOString() }
];

