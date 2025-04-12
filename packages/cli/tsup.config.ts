import { optionsCJS, optionsESM } from '@kubb/config-tsup'

import { defineConfig } from 'tsup'

export default defineConfig([{ ...optionsCJS, noExternal: [/p-queue/, /execa/] }, optionsESM])
