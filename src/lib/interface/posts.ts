export interface index {
	[years: string]: {
		[months: string]: {
			[days: string]: {
				tag: string[];
				title: string;
				image: {
					src: string;
					alt: string;
				};
			};
		};
	};
}

export interface post {
	lastUpdate: string;
	status: ['Published', 'In progress'];
	codeHighlight:
		| {
				[language: string]: { fileName: string; body: string }[];
		  }
		| Record<string, never>;
}
