import { defineCommand } from 'citty';

import { confirm, promptScope, text, select } from '../../prompts';
import { log, note, outro } from '@clack/prompts';
import { existsSync, writeFileSync, mkdirSync } from 'fs';
import { camelCase, kebabCase, pascalCase } from 'scule';
import { relative, resolve } from 'pathe';

import componentTemplate from './templates/Component.tsx';
import storiesTemplate from './templates/Component.stories.tsx';
import muiThemeTemplate from './templates/Component.ts';

const componentCategories = ['inputs', 'data-display', 'feedback', 'surfaces', 'navigation', 'layout', 'utils'];

export default defineCommand({
    meta: {
        name: 'make:component',
        description: 'Generate a component from boilerplate',
    },

    args: {
        name: {
            type: 'positional',
            description: 'Component name i.e. Alert',
            required: false,
        },
        category: {
            type: 'positional',
            description: 'Component category i.e. ',
            options: componentCategories,
            required: false,
        },
    },

    async run({ args }) {
        const { name, category } = args;

        let componentName = name;
        let componentCategory = category;

        if (!name) {
            componentName = await text({
                message: 'Component name:',
                placeholder: 'Alert',
            });
        }

        if (!category || !componentCategories.includes(category)) {
            componentCategory = await select({
                message: 'Component category:',
                options: componentCategories.map((category) => ({ label: category, value: category })),
            });
        }

        await promptScope(async ({ intro }) => {
            intro(`Generating component boilerplate for ${componentName}`);

            note(componentName, 'Component name:');
            note(componentCategory, 'Component category:');
        });

        const confirmed = await confirm({
            message: 'Is the above correct?',
        });

        if (!confirmed) {
            outro('Aborted');

            return;
        }

        const files = [
            {
                name: 'Component.tsx',
                file: componentTemplate,
                path: `packages/ui/src/components/${componentCategory}/${componentName}`,
            },
            {
                name: 'Component.stories.tsx',
                file: storiesTemplate,
                path: `packages/ui/src/components/${componentCategory}/${componentName}`,
            },
            {
                name: 'Component.ts',
                file: muiThemeTemplate,
                path: `packages/mui-theme/src/components/${componentCategory}`,
            },
        ];

        files.forEach(async ({ name, file, path }) => {
            const filePath = resolve(path, name.replace('Component', componentName));
            const compiled = file({
                component: {
                    name: {
                        pascal: pascalCase(componentName),
                        kebab: kebabCase(componentName),
                        camel: camelCase(componentName),
                    },
                },

                paths: {
                    fromRoot: (fromPath: string) => {
                        const root = process.cwd();
                        const fullComponentPath = resolve(root, path);
                        const fullPath = resolve(root, fromPath);

                        return relative(fullComponentPath, fullPath);
                    },
                },
            });

            if (!existsSync(path)) {
                mkdirSync(path, {
                    recursive: true,
                });
            }

            writeFileSync(filePath, compiled, 'utf-8');
        });

        log.info(
            `Component generated at packages/ui/src/components/${componentCategory}/${componentName}/${componentName}.tsx`,
        );
        log.info(
            `Story generated at packages/ui/src/components/${componentCategory}/${componentName}/${componentName}.stories.tsx`,
        );
        outro(`MUI styles generated at packages/mui-theme/src/components/${componentCategory}/${componentName}.ts`);
    },
});
