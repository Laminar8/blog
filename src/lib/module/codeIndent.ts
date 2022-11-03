export const codeIndent = (code: string, repeatNumber: number) =>
	code.includes('    '.repeat(repeatNumber))
		? code.replaceAll(`\n${'    '.repeat(repeatNumber)}`, '\n')
		: code.replaceAll(`\n${'\t'.repeat(repeatNumber)}`, '\n').replaceAll('\t', '    ');
