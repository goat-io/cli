#!/usr/bin/env node
import { Bash } from '@goatlab/fluent/dist/Helpers/Bash'
import { newProject } from './new/new'
const packageJSON = require('../package.json')

const CLI = async () => {
  const Goat = await Bash.createCli({
    description: packageJSON.description,
    logo: 'Goat-CLI',
    name: packageJSON.name,
    version: packageJSON.version
  })

  Goat.command('new')
    .description('Creates a new Goat backend')
    .option('-f, --framework [framework]', 'Which framework to use')
    .action(newProject)

  Bash.parse()
}

CLI()
