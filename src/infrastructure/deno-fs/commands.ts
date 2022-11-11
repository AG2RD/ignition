import { Command } from '../deps.ts';

await new Command()
	.name('mkdir')
	.description('Remove directory.')
	.arguments('<dir>')
	.action(async (options, dir: string) => {
		console.log('create directory ' + dir);
		await Deno.mkdir('new_dir');
	})
	.parse(Deno.args);
