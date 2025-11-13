const cached: Record<string, string | undefined> = {};

export function invariantEnv(
  key: keyof NodeJS.ProcessEnv,
  message?: string,
): string {
  if (cached[key]) {
    return cached[key] as string;
  }

  const value = process.env[key];

  if (!value) {
    const error = message ?? `Missing required environment variable: ${key}`;
    throw new Error(error);
  }

  cached[key] = value;
  return value;
}
