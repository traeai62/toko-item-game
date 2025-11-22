export function login(email: string, password: string) {
  localStorage.setItem('token', 'token');
  return { ok: true };
}

export function register(name: string, email: string, password: string) {
  localStorage.setItem('token', 'token');
  return { ok: true };
}

