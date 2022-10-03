export const codeIndent = (code: string, repeatNumber: number) =>
	code.includes('    '.repeat(repeatNumber))
		? code.replaceAll('    '.repeat(repeatNumber), '')
		: code.replaceAll('\t'.repeat(repeatNumber), '');
