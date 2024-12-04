const gamesList = [
	{
		title: "Tekken",
		year: 1994,
		imageUrl:
			"https://cdn.dashfight.com/bcf6a9046a9ea4c1070d4aedb2981103c978a704.png",
		id: 1,
	},
	{
		title: "Minecraft",
		year: 2009,
		imageUrl:
			"https://m.media-amazon.com/images/I/61smNbXSW1L._AC_UF1000,1000_QL80_.jpg",
		id: 2,
	},
	{
		title: "Elden Ring",
		year: 2022,
		imageUrl:
			"https://pic.clubic.com/v1/images/1934271/raw?fit=smartCrop&width=1200&height=675&hash=e7519a9577a2b7291fa26880bb22bed6740836be",
		id: 3,
	},
	{
		title: "Street Fighter V",
		year: 2015,
		imageUrl:
			"https://gaming-cdn.com/images/products/671/orig/street-fighter-v-pc-jeu-steam-cover.jpg?v=1662539255",
		id: 4,
	},
	{
		title: "Half Life 2",
		year: 2004,
		imageUrl:
			"https://gaming-cdn.com/images/products/2284/orig/half-life-2-pc-mac-game-steam-cover.jpg?v=1650555068",
		id: 5,
	},
	{
		title: "Skyrim",
		year: 2011,
		imageUrl:
			"https://gaming-cdn.com/images/products/146/orig/the-elder-scrolls-v-skyrim-pc-jeu-steam-europe-cover.jpg?v=1661270991",
		id: 6,
	},
]

writeDom()

let editButtons = document.querySelectorAll(".edit")
editButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		editModal(e.target.getAttribute("data-edit-id"))
	})
})

let viewButtons = document.querySelectorAll(".view")
viewButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		viewModal(e.target.getAttribute("data-edit-id"))
	})
})

function viewModal(gameId) {
	// console.log(gameId, gamesList)
	// Trouvez le jeu en fonction de son identifiant
	const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
	// passer une image comme corps du modal
	const modalBody = `<img src="${gamesList[result].imageUrl}" alt="${gamesList[result].title}" class="img-fluid" />`
	modifyModal(gamesList[result].title, modalBody)
	// edit footer
	// Écrire dans le footer
	document.querySelector(".modal-footer").innerHTML = `
		<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
			Close
		</button>
</form>`
}

function editModal(gameId) {
	// Trouvez le jeu en fonction de son identifiant
	const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
	// Injectez le formulaire dans le corps du modal
	fetch("./form.html").then((data) => {
		data.text().then((form) => {
			// Modifiez le titre et le corps du modal
			const selectedGame = gamesList[result]
			modifyModal("Mode Edition", form)
			modifyFom({
				title: selectedGame.title,
				year: selectedGame.year,
				imageUrl: selectedGame.imageUrl,
			})
			document
				.querySelector('button[type="submit"]')
				.addEventListener("click", () =>
					updateGames(title.value, year.value, imageUrl.value, gameId)
				)
		})
	})
}

function modifyFom(gameData) {
	const form = document.querySelector("form")
	form.title.value = gameData.title
	form.year.value = gameData.year
	form.imageUrl.value = gameData.imageUrl
}

function modifyModal(modalTitle, modalBody) {
	// Écrire le nom du jeu dans le titre du modal
	document.querySelector(".modal-title").textContent = modalTitle
	// Écrire dans le corps du modal
	document.querySelector(".modal-body").innerHTML = modalBody
	// Écrire dans le footer
	document.querySelector(".modal-footer").innerHTML = `
		<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
			Close
		</button>
		<button type="submit" data-bs-dismiss="modal" class="btn btn-primary">Submit</button>
</form>`
}

function writeDom() {
	gamesList.forEach((game) => {
		const articleContainer = document.querySelector(".row")
		articleContainer.innerHTML += `<article class="col">
							<div class="card shadow-sm">
								<img src="${game.imageUrl}" alt="${game.title}" class="card-img-top" />

								<div class="card-body">
								<h3 class="card-title">${game.title}</h3>
									<p class="card-text">
										${game.year}
									</p>
									<div
										class="d-flex justify-content-between align-items-center"
									>
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary view"
												data-bs-toggle="modal" data-bs-target="#exampleModal"
												data-edit-id="${game.id}"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary edit"
												data-bs-toggle="modal" data-bs-target="#exampleModal"
												data-edit-id="${game.id}"
											>
												Edit
											</button>
										</div>
									</div>
								</div>
							</div>
						</article>`
	})
}

function updateGames(title, year, imageUrl, gameId) {
	// Trouvez le jeu en fonction de son identifiant
	const index = gamesList.findIndex((game) => game.id === parseInt(gameId))

	gamesList[index].title = title
	gamesList[index].year = year
	gamesList[index].imageUrl = imageUrl
	document.querySelector(".row").innerHTML = "" // Nous supprimons toutes les données des jeux dans le DOM.
	writeDom()
	editButtons = document.querySelectorAll(".edit")
	editButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			editModal(e.target.getAttribute("data-edit-id"))
		})
	})

	viewButtons = document.querySelectorAll(".view")
	viewButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			viewModal(e.target.getAttribute("data-edit-id"))
		})
	})
}

/*  modal  */
const modalTitle = document.querySelector(".modal-title")
const modalBody = document.querySelector(".modal-body")
const modalFooter = document.querySelector(".modal-footer")

/* ELEMENT DYNAMIQUE DU DOM  */

const viewBtnList = document.querySelectorAll(".view")
const editBtnList = document.querySelectorAll(".edit")
