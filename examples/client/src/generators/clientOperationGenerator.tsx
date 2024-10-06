import { URLPath } from '@kubb/core/utils'
import type { PluginClient } from '@kubb/plugin-client'
import { createGenerator } from '@kubb/plugin-oas'

export const clientOperationGenerator = createGenerator<PluginClient>({
  name: 'client-operation',
  async operation({ operation, instance }) {
    const pluginKey = instance.context.plugin.key
    const name = instance.context.pluginManager.resolveName({
      name: operation.getOperationId(),
      pluginKey,
      type: 'function',
    })

    const client = {
      name,
      file: instance.context.pluginManager.getFile({
        name,
        extname: '.ts',
        pluginKey,
        options: { type: 'file', pluginKey },
      }),
    }

    return [
      {
        baseName: client.file.baseName,
        path: client.file.path,
        meta: client.file.meta,
        sources: [
          {
            value: `
          export const ${operation.getOperationId()} = {
            method: '${operation.method}',
            url: '${new URLPath(operation.path).URL}'
          }
        `,
          },
        ],
      },
    ]
  },
})
