import { Bash } from '@goatlab/fluent/dist/Helpers/Bash'

export const serve = async (cmd, options) => {
  const spinner = Bash.spinner('serving project')
  Bash.execute('npm run start', false)
  spinner.succeed()
}
