import { resolve } from 'node:path'

export const projRoot = resolve(__dirname, '..', '..', '..')
export const pkgRoot = resolve(projRoot, 'packages')
export const compRoot = resolve(pkgRoot, 'components')
export const iconsRoot = resolve(pkgRoot, 'icons')
export const utilRoot = resolve(pkgRoot, 'utils')
export const themeRoot = resolve(pkgRoot, 'theme-chalk')

// Docs
export const docsDirName = 'docs'
export const docRoot = resolve(projRoot, docsDirName)
