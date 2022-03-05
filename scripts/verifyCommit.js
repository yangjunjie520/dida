const chalk = require('chalk')

const msg = require('fs')
  .readFileSync(process.argv[2], 'utf-8')
  .trim()

const commitRE = /^(revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release|dep)(\(.+\))?: .{1,50}/

if (!/^Merge\sremote-tracking\sbranch/.test(msg) && !commitRE.test(msg)) {
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`commit message 格式错误，校验正则如下：`)}\n`,
    `    ${chalk.bgGrey.bold(
      `/^(revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release|dep)(\\(.+\\))?: .{1,50}/`,
    )}\n\n`,
    ` ${chalk.green(
      `请使用以下单词起手：feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release|dep，例子：`,
    )}\n`,
    `      ${chalk.green(`feat: xxxxx`)}\n`,
    `      ${chalk.green(`feat(qqqq): wwww`)}\n`,
  )
  process.exit(1)
}
