"use client";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const clientSnapshot = () => false;
const serverSnapshot = () => true;

// Motion starts automatically after hydration. No persisted pause or OS override.
// The static server snapshot keeps the initial HTML and client render identical.
export function useMotionPreference() {
  return useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
}
