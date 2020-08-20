export function photoApi() {
	return new Promise((resolve, reject) => {
		setTimeout(
			resolve([
				{
					img: 'images',
					alt: 'images1',
				},
				{
					img: 'images',
					alt: 'images2',
				},
				{
					img: 'images',
					alt: 'images3',
				},
			]),
			5000
		);
	});
}
