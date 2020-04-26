import { Bash, IQuestions } from '@goatlab/fluent/dist/Helpers/Bash'

export const newProject = async (cmd, options) => {
  const questions: IQuestions[] = []
  const name = cmd.args[0]
  if (!name) {
    questions.push({
      type: 'input',
      name: 'appName',
      message: 'App folder name?'
    })
  }

  const repo = `https://github.com/goat-io/goat-loopback.git`

  if (!cmd.framework) {
    questions.push({
      type: 'list',
      name: 'framework',
      message: 'Choose your framework!',
      choices: ['Loopback 4', 'NestJS (soon)']
    })
  }
  console.log('')
  const answers = await Bash.question(questions)

  const spinner = Bash.spinner('Cloning git repo')
  await Bash.execute(`git clone ${repo} ${answers.appName || name}`)
  spinner.succeed()

  const spinner2 = Bash.spinner('Removing git tracking')
  await Bash.execute(`cd ${answers.appName || name} && rm -rf .git`)
  spinner2.succeed()

  const spinner3 = Bash.spinner('Installing packages (this takes a while!)')
  await Bash.execute(`cd ${answers.appName || name} &&  npm install`)
  spinner3.succeed()

  console.log('\nYour Goat project is ready!. Enter the folder and start it!\n')
  console.log(`\t cd ${answers.appName || name} \n`)
  console.log('\t goat dev\n')
}
