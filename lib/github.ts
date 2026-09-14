import { cache } from "react";

export interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
}
export interface GitHubResult {
  stats: GitHubStats;
  source: "api" | "snapshot";
  checkedAt: string;
}

export const snapshot: GitHubResult = {
  stats: { public_repos: 19, followers: 1, following: 1 },
  source: "snapshot",
  checkedAt: "2026-09-12",
};

export function parseGitHubStats(value: unknown): GitHubStats | null {
  if (!value || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;
  const keys = ["public_repos", "followers", "following"] as const;
  if (
    !keys.every(
      (key) =>
        typeof record[key] === "number" &&
        Number.isSafeInteger(record[key]) &&
        record[key] >= 0,
    )
  )
    return null;
  return {
    public_repos: record.public_repos as number,
    followers: record.followers as number,
    following: record.following as number,
  };
}

export async function fetchGitHubStats(
  fetcher: typeof fetch = fetch,
): Promise<GitHubResult> {
  try {
    const response = await fetcher("https://api.github.com/users/ahkurdev", {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "ahkurdev-portfolio",
      },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(4000),
    });
    if (!response.ok) return snapshot;
    const stats = parseGitHubStats(await response.json());
    return stats
      ? { stats, source: "api", checkedAt: new Date().toISOString() }
      : snapshot;
  } catch {
    return snapshot;
  }
}

export const getGitHubStats = cache(fetchGitHubStats);
