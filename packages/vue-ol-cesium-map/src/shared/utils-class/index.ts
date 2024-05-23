import type { AnyFunc } from '@vunk/core'
import { ToggleHandler } from '@vunk/core/shared/utils-class'
import type { Map } from 'ol'

export class ViewEventToggleHandler extends ToggleHandler {
  view: Map
  eventName: string
  private handler: AnyFunc
  constructor(view: Map, eventName: string, handler: AnyFunc) {
    super()
    this.view = view
    this.eventName = eventName
    this.handler = handler
  }

  add() {
    console.log('111')
    const hr = this.view.on(this.eventName as any, this.handler)
    console.log(hr)
    this.removeHandler = hr.target.removeEventListener(this.eventName, hr.listener) as unknown as AnyFunc
  }
}
