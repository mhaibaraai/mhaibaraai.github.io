import fse from 'fs-extra'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import mri from 'mri'
import { camelize, hyphenate, capitalize } from '@vue/shared'
import { createIndexStr, createVueStr } from './temp'

interface MriData {
  path: string,
  name: string,
}

const argv = process.argv.slice(2)
const mriData = mri<MriData>(argv)
const packagesRootDir = fileURLToPath(new URL('../../packages', import.meta.url))

// 中横线命名
const kebabName = hyphenate(mriData.name)
// 首字母小写驼峰命名
const camelName = camelize(kebabName)
// 首字母大写驼峰命名
const capName = capitalize(camelName)

async function creatComponent(path: string, name: string) {

  const packagesDir = join(packagesRootDir, `./${path}`)
  const pkgsComponentsDir = join(packagesRootDir, `./${path}/components`)
  const pkgsComponentsPath = join(pkgsComponentsDir, name)

  if (!fse.existsSync(packagesDir)) {
    fse.mkdirSync(packagesDir)
  }

  if (!fse.existsSync(pkgsComponentsDir)) {
    fse.mkdirSync(pkgsComponentsDir)
  }

  fse.mkdirSync(pkgsComponentsPath)

  fse.writeFileSync(join(pkgsComponentsPath, 'index.vue'), createVueStr(kebabName))

  fse.writeFileSync(join(pkgsComponentsPath, 'index.ts'), createIndexStr(capName))

  fse.appendFileSync(join(packagesDir, 'index.ts'), `export * from './components/${kebabName}'\n`)

}

await creatComponent(mriData.path, mriData.name)
