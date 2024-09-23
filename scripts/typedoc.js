import { path } from 'node:path'
import { pkgRoot } from '@movk-repo/build-utils'
import { TypeDoc } from 'typedoc'

async function generateDocs() {
  const app = new TypeDoc.Application()

  // 添加 TypeDoc 配置
  app.options.addReader(new TypeDoc.TSConfigReader())
  app.options.addReader(new TypeDoc.TypeDocReader())

  const entries = [
    pkgRoot('shared/src/index.ts'),
  ]

  // 指定 TypeDoc 配置项
  await app.bootstrapWithPlugins({
    entryPoints: entries,
    // tsconfig: rootPath('tsconfig.json'),
    plugin: ['typedoc-plugin-markdown'],
    allReflectionsHaveOwnDocument: true,
    excludePrivate: true,
    excludeProtected: true,
    readme: 'none',
    hideBreadcrumbs: true,
  })

  // 生成项目的反射对象
  const project = app.convert()

  if (project) {
    const outputDir = path.join(__dirname, 'dist')

    await app.generateDocs(project, outputDir)

    const jsonDir = path.join(outputDir, 'documentation.json')
    await app.generateJson(project, jsonDir)

    await resolveConfig(jsonDir)
  }
}

// 运行文档生成
generateDocs().catch(console.error)
