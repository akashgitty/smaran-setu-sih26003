// Replace these demo functions with real API calls when the backend is ready.
export async function loginUser(credentials) { return { success: true, role: credentials.role || 'user' } }
export async function registerUser(payload) { return { success: true, user: payload } }
