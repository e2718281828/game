const data = {
	"rating": [
		{
			"id": "123",
			"name": "Владимир",
			"lastName": "Ларионов",
			"img": "./male.png",
			"points": "463"
		},
		{
			"id": "9",
			"name": "Владимир",
			"lastName": "Сергеев",
			"img": "./male.png",
			"points": "521"
		},
		{
			"id": "231",
			"name": "Вениамин",
			"lastName": "Васильев",
			"img": "./male.png",
			"points": "865"
		},
		{
			"id": "321",
			"name": "Мария",
			"lastName": "Логинова",
			"img": "./female.png",
			"points": "865"
		},
		{
			"id": "492",
			"name": "Борис",
			"lastName": "Казанцев",
			"img": "./male.png",
			"points": "784"
		},
		{
			"id": "452",
			"name": "Полина",
			"lastName": "Калинина",
			"img": "./female.png",
			"points": "225"
		},
		{
			"id": "796",
			"name": "Даниил",
			"lastName": "Воробьёв",
			"img": "./male.png",
			"points": "642"
		},
		{
			"id": "4",
			"name": "Эрик",
			"lastName": "Аксёнов",
			"img": "./male.png",
			"points": "150"
		},
		{
			"id": "1155",
			"name": "Иван",
			"lastName": "Иванов",
			"img": "./male.png",
			"points": "100"
		},
		{
			"id": "12145",
			"name": "Артем",
			"lastName": "Алексеев",
			"img": "./male.png",
			"points": "1000"
		}
	],
	"friends": [
		{
			"id": "9",
			"name": "Владимир",
			"lastName": "Сергеев",
			"img": "./male.png"
		},
		{
			"id": "4",
			"name": "Эрик",
			"lastName": "Аксёнов",
			"img": "./male.png"
		},
		{
			"id": "15411",
			"name": "Ирина",
			"lastName": "Чеснокова",
			"img": "./female.png"
		},
		{
			"id": "15564",
			"name": "Дарина",
			"lastName": "Боброва",
			"img": "./female.png"
		}
	]
}

data.rating.sort( (a, b) => {
	return b.points - a.points;
})

document.querySelector('.list').innerHTML = `<table class="rating-players"></table>`

for (let i = 0; i < data.rating.length; i++) {
	let row = document.createElement(`tr`);
	row.innerHTML = `
		<td class="rating-place">${i+1}</td>
		<td class="rating-player-img"><img src="./imgs/rating-player-img.png" ></td>
		<td class="rating-name" id="${i}">${data.rating[i].name + ' ' + data.rating[i].lastName}</td>
		<td class="rating-points">${data.rating[i].points}</td>
	`

	document.querySelector('.list').appendChild(row);

	for (let j = 0; j < data.friends.length; j++) {
		if (JSON.stringify(data.rating[i].id) === JSON.stringify(data.friends[j].id)) {
			document.getElementById(i).className += " friend";
		}
	}
}