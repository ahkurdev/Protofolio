const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahkur.my.id";
export const siteUrl = new URL(configuredUrl).origin;
