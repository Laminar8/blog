import { capitalize } from '../module/capitalize';

const group = {
	_01: 'Blog',
	_02: 'Language'
};
const tag = {
	Blog: {
		_01: 'Information'
	},
	Language: {
		_01: 'Svelte'
	}
};

export const index = {
	_2022: {
		_07: {
			_14: {
				group: group._01,
				tag: tag.Blog._01,
				title: capitalize('5 Reasons to start my blog'),
				lastUpdate: '2022-08-02'
			}
		}
	}
};
