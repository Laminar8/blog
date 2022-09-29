export const codeIndent = (code: string, repeatNumber: number) =>
	code.replaceAll('    '.repeat(repeatNumber), '');
