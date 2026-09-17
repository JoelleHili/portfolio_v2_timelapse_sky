interface IPoem {
	title: string;
	slug: string;
	theme: string;
	dateCreated: {
		month: number;
		year: number;
	};
	poem: string;
}

interface IOrderPoems {
	poems: IPoem[];
	type: string;
	direction: string;
}

interface IOrderPoemsFunction {
	poems: IPoem[];
	direction: string;
}

export const orderPoems = ({ poems, type, direction }: IOrderPoems) => {
	switch (type) {
		case 'date':
			return orderPoemsByDate({ poems, direction });
		case 'title':
			return orderPoemsByTitle({ poems, direction });
		default:
			throw new Error('Incorrect Order Type');
	}
};

export const orderPoemsByDate = ({ poems, direction }: IOrderPoemsFunction) => {
	return poems.sort((a: IPoem, b: IPoem) => {
		const poemADate =
			a.dateCreated.year.toString() +
			a.dateCreated.month.toLocaleString('numeric', { minimumIntegerDigits: 2 });
		const poemBDate =
			b.dateCreated.year.toString() +
			b.dateCreated.month.toLocaleString('numeric', { minimumIntegerDigits: 2 });

		switch (direction) {
			case 'asc':
				return +poemADate - +poemBDate;
			case 'dsc':
				return +poemBDate - +poemADate;
			default:
				throw new Error('Incorrect Order Direction');
		}
	});
};

export const orderPoemsByTitle = ({ poems, direction }: IOrderPoemsFunction) => {
	return poems.sort((a: IPoem, b: IPoem) => {
		switch (direction) {
			case 'asc':
				return a.title.localeCompare(b.title);
			case 'dsc':
				return -1 * a.title.localeCompare(b.title);
			default:
				throw new Error('Incorrect Order Direction');
		}
	});
};
