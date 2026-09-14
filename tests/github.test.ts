import { test } from "node:test";
import assert from "node:assert/strict";
import { fetchGitHubStats, parseGitHubStats, snapshot } from "../lib/github.ts";

test("GitHub data accepts zero but rejects incomplete, fractional and unsafe counts", () => {
  assert.deepEqual(
    parseGitHubStats({ public_repos: 0, followers: 0, following: 0 }),
    { public_repos: 0, followers: 0, following: 0 },
  );
  for (const value of [
    null,
    {},
    { public_repos: "19", followers: 1, following: 1 },
    { public_repos: -1, followers: 1, following: 1 },
    { public_repos: 1.2, followers: 1, following: 1 },
    { public_repos: Infinity, followers: 1, following: 1 },
  ])
    assert.equal(parseGitHubStats(value), null);
});

test("successful API response supersedes dated snapshot", async () => {
  const result = await fetchGitHubStats((async () =>
    Response.json({
      public_repos: 20,
      followers: 2,
      following: 1,
    })) as typeof fetch);
  assert.equal(result.source, "api");
  assert.equal(result.stats.public_repos, 20);
});

test("rate limits, invalid JSON, malformed data and network failure preserve verified fallback", async () => {
  const fetchers = [
    async () => new Response(null, { status: 403 }),
    async () => new Response("not json"),
    async () => Response.json({ public_repos: 1 }),
    async () => {
      throw new Error("offline");
    },
  ];
  for (const fetcher of fetchers)
    assert.deepEqual(await fetchGitHubStats(fetcher as typeof fetch), snapshot);
});
