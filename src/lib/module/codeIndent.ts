export const codeIndent = (code: string, repeatNumber: number) =>
	code.replaceAll('\t'.repeat(repeatNumber), '');
