import StyleDictionary from 'style-dictionary';
import { javascriptEsm } from './src/format/javascript-esm';
import { typescriptEsmDeclarations } from './src/format/typescript-esm-declarations';

const config = new StyleDictionary({
    source: ['./src/tokens/**/*.json'],
    platforms: {
        js: {
            transformGroup: 'js',
            buildPath: 'dist/tokens/js/',
            files: [
                {
                    format: 'javascript/esm',
                    destination: 'index.js',
                },
                {
                    format: 'typescript/esm-declarations',
                    destination: 'index.d.ts',
                },
            ],
        },
    },
});

StyleDictionary.registerFormat({
    name: 'javascript/esm',
    format: javascriptEsm,
});

StyleDictionary.registerFormat({
    name: 'typescript/esm-declarations',
    format: typescriptEsmDeclarations,
});

config.buildAllPlatforms();
