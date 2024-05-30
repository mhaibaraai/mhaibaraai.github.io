export function debounce(this: any, func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout | null = null
  return function (this: any, ...args: any[]) {
    if (timeout !== null)
      clearTimeout(timeout)

    timeout = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
