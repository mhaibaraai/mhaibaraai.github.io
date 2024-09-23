import * as fs from 'node:fs'
import * as path from 'node:path'

const name = process.argv[2]

const sourceFile = path.join(process.cwd(), '../README.md')
const targetFile = path.join(process.cwd(), 'README.md')

const baseURL = `https://mhaibaraai.github.io/zh/guide/demo-preview`
const examplePath = '#example'
const changelogPath = `#changelog-${name}`

const extraContent = `
## 📝 示例

[查看示例](${baseURL}${examplePath})

## 🗓️ 更新日志

[点击查看更新日志](${baseURL}${changelogPath})
`

if (fs.existsSync(sourceFile)) {
  fs.copyFileSync(sourceFile, targetFile)
  fs.appendFileSync(targetFile, extraContent)
  console.log('README.md copy success')
}
else {
  console.error('README.md not found')
}
