import <%= displayName %> from './src/<%= name %>.vue'

import { install } from '../_utils'

export const <%= prefixU %><%= displayName %> = install(<%= displayName %>)

export type <%= displayName %>Instance = InstanceType<typeof <%= displayName %>>

export * from './src/interface.d'

export default <%= prefixU %><%= displayName %>
