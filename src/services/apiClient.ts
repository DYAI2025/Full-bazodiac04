export const API_BASE = "/api/bafe";

export async function fetchHealth() {
  const response = await fetch(`${API_BASE}/health`);
  return response.json();
}

export async function calculateChart(input: any) {
  const response = await fetch(`${API_BASE}/chart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  if (!response.ok) throw new Error('Failed to fetch chart data');
  return response.json();
}
