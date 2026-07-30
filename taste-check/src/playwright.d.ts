/**
 * Minimal shim: playwright is an optional dependency, only needed when
 * grading a live URL. Installed by the user, so no types at build time.
 */
declare module "playwright" {
  export const chromium: {
    launch(): Promise<{
      newPage(options?: {
        viewport?: { width: number; height: number };
      }): Promise<{
        goto(url: string, options?: { waitUntil?: string }): Promise<unknown>;
        screenshot(options?: { fullPage?: boolean }): Promise<Uint8Array>;
      }>;
      close(): Promise<void>;
    }>;
  };
}
