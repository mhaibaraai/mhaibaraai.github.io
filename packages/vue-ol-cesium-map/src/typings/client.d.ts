import type { Emitter } from 'mitt'
import { Map as _Map } from 'ol'
import { sMitter } from '~/shared/symbol'

declare global {
  namespace __ol {

    interface Map extends _Map {
      [sMitter]?: Emitter<any>
    }

  }

}
