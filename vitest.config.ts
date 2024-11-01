import { defineConfig } from "vitest/config";

// Configure auto-import of globals like 'it', 'expect', 'describe', etc.
export default defineConfig({
    test: {
        globals: true,
        coverage: {
            enabled: true,
            include: ["src/**/*"],
            reporter: ['html','json-summary'],
            reportOnFailure: true,
        }
    }
});
