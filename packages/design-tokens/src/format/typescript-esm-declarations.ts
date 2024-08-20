import { format } from 'prettier';
import { fileHeader } from 'style-dictionary/utils';
import { FormatFn, FormatFnArguments } from 'style-dictionary/types';
import { jsonToTypes } from '../utilities/jsonToTypes';
import { jsonToNestedValue } from '../utilities/jsonToNestedValue';

export const typescriptEsmDeclarations: FormatFn = async ({
    dictionary,
    file,
    options,
    platform = {},
}: FormatFnArguments) => {
    const { prefix } = platform;
    const tokens = prefix ? { [prefix]: dictionary.tokens } : dictionary.tokens;

    const rootName = file.options?.rootName || 'DesignToken';
    const values = jsonToTypes(jsonToNestedValue(tokens), '  ', rootName, true);
    const output = (await fileHeader({ file })) + `${values}\n`;

    return format(output, { parser: 'typescript', printWidth: 80, ...options?.prettier });
};
