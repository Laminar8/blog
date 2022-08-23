export interface posts {
	[years: string]: {
		[months: string]: {
			[days: string]: {
				tag: string[];
				title: string;
				lastUpdate: string;
				status: string[];
				image: {
					src: string;
					alt: string;
				};
			};
		};
	};
}
