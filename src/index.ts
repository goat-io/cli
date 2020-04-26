#!/usr/bin/env node
import { Bash } from '@goatlab/fluent/dist/Helpers/Bash'
import { newProject } from './new/new'
import { serve } from './serve/serve'
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

  Goat.command('serve')
    .description('Starts a Goat backend')
    .action(serve)

  Bash.parse()
}

CLI()
