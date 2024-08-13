import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/components/**/*.{ts,tsx}'],
    outDir: 'dist',
    splitting: true,
    sourcemap: true,
    dts: true,
    clean: true,
    format: ['esm', 'cjs'],
    minify: true,
    target: 'es2015',
    external: ['react'],
});
