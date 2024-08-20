import { format } from 'prettier';
import { jsonToNestedValue } from '../utilities/jsonToNestedValue.js';
import { fileHeader } from 'style-dictionary/utils';
import { FormatFn, FormatFnArguments } from 'style-dictionary/types';

export const javascriptEsm: FormatFn = async ({ dictionary, file, options, platform = {} }: FormatFnArguments) => {
    const { prefix } = platform;
    const tokens = prefix ? { [prefix]: dictionary.tokens } : dictionary.tokens;
    const output =
        (await fileHeader({ file })) + `export default ${JSON.stringify(jsonToNestedValue(tokens), null, 4)}\n`;

    return format(output, { parser: 'typescript', printWidth: 80, ...options?.prettier });
};
