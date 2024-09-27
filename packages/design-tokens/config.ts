import StyleDictionary from 'style-dictionary';
import { Config } from 'style-dictionary';

export const config: Config | Config[] = {
    source: ['./src/lib/tokens/**/*.json'],
    platforms: {
        js: {
            transformGroup: 'js',
            transforms: ['size/px', 'name/pascal'],
            buildPath: 'dist/tokens/js/',
            files: [
                {
                    format: 'javascript/es6',
                    destination: 'index.js',
                },
                {
                    format: 'typescript/es6-declarations',
                    destination: 'index.d.ts',
                },
            ],
        },
    },
};

const SD = new StyleDictionary(config);
SD.buildAllPlatforms();
