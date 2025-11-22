export function load({ url }) {
  const q = url.searchParams.get('q') ?? '';
  return { q };
}

