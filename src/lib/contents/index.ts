import { capitalize } from '../module/capitalize';
import { codeIndent } from '../module/codeIndent';

export const index = {
	_2022: {
		_07: {
			_14: {
				tag: ['Blog', 'Information'],
				title: capitalize('5 Reasons to start my blog'),
				lastUpdate: '2022/08/21',
				status: ['Published'],
				image: {
					src: 'https://user-images.githubusercontent.com/52372569/184529071-3d88e019-0a4c-48c5-8245-3ef0cc3ea8cd.png',
					alt: 'Woman Jogging'
				}
			}
		},
		_08: {
			_23: {
				tag: ['Blog', 'Information', 'Svelte', 'HTML', 'CSS'],
				title: capitalize('Time spent completing the first post: 1 Month'),
				lastUpdate: '2022/08/24',
				status: ['In progress'],
				image: {
					src: 'https://user-images.githubusercontent.com/52372569/186199281-0358ffca-d144-431d-a152-82ea4691e343.png',
					alt: 'SP, Brasil'
				},
				codeHighlight: {
					scss: [
						{
							fileName: 'app.scss',
							body: codeIndent(
								`:root {
								// Color
								--color-dark: #1f1f1f;
								--color-dark-bright: #8e8e8e;
								--color-white: #f1f1f1;
								--color-white-dark: #e1e1e1;
								--color-red: #df7861;
								--color-red-dark: #f47c7c;
								--color-yellow: #ffb562;
								--color-yellow-bright: #f8e6d1;
								--color-green: #adcf9f;
								--color-green-dark: #94b49f;
								--color-blue: #607eaa;
								--color-blue-dark: #06113c;
							}`,
								7
							)
						},
						{
							fileName: 'tag.svelte',
							body: codeIndent(
								`.tag {
									.content {
										color: var(--color-white);
										background-color: var(--color-blue);
										border-radius: 1rem;
									}
								}`,
								8
							)
						}
					]
				}
			}
		}
	}
};
