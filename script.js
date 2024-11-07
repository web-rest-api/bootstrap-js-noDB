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
												class="btn btn-sm btn-outline-secondary"
												data-bs-toggle="modal" data-bs-target="#exampleModal"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
												data-bs-toggle="modal" data-bs-target="#exampleModal"
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

writeDom()

/*  modal  */
const modalTitle = document.querySelector(".modal-title")
const modalBody = document.querySelector(".modal-body")
const modalFooter = document.querySelector(".modal-footer")

// gamesList.forEach((game) => {
// 	articleContainer.innerHTML += `
//     <article class="col">
//        <div class="card shadow-sm">
//           <img src="${game.imageUrl}" class="card-img-top" alt="${game.title}">
//           <div class="card-body">
//               <h3 class="card-title">${game.title}</h3>
//               <p class="card-text">Year: ${game.year}</p>
//               <div class="btn-group">
//                 <button
//                     type="button"
//                     class="btn btn-sm btn-outline-dark view"
//                     data-bs-toggle="modal"
// 			        data-bs-target="#gameModal"
//                 >
//                     View
//                 </button>
//                 <button
//                     type="button"
//                     class="btn btn-sm btn-outline-dark edit"
//                     data-bs-toggle="modal"
// 			        data-bs-target="#gameModal"
//                 >
//                     Edit
//                 </button>
//             </div>
//           </div>
//        </div>
//     </article>

//     `
// })

/* ELEMENT DYNAMIQUE DU DOM  */

const viewBtnList = document.querySelectorAll(".view")
const editBtnList = document.querySelectorAll(".edit")

// viewBtnList.forEach((truc, index) => {
// 	truc.addEventListener("click", () => {
// 		console.log("tu as clicke mon gars " + gamesList[index].title)
// 		modalTitle.innerHTML = gamesList[index].title
// 		modalBody.innerHTML = `<img src="${gamesList[index].imageUrl}" class="img-fluid" alt="${gamesList[index].title}">`
// 		modalFooter.innerHTML = `
//             <button type="button" class="btn btn-secondary"
//                 data-bs-dismiss="modal"
//             >Close
//             </button>
//         `
// 	})
// })

// editBtnList.forEach((btn, index) => {
// 	btn.addEventListener("click", () => {
// 		modalTitle.innerHTML = "Edit mode"
// 		modalBody.innerHTML = `
//             <form>
//                 <div class="mb-3">
//                     <label for="title" class="form-label">Title</label>
//                     <input type="text" class="form-control" id="title" aria-describedby="titleHelp" value="${gamesList[index].title}" >

//                 </div>
//                 <div class="mb-3">
//                     <label for="year" class="form-label">Year</label>
//                     <input type="number" class="form-control" id="year" aria-describedby="titleYear" value="${gamesList[index].year}" >

//                 </div>
//                 <div class="mb-3">
//                     <label for="imageUrl" class="form-label">Image Url</label>
//                     <input type="text" class="form-control" id="imageUrl" aria-describedby="titleHelp" value="${gamesList[index].imageUrl}" >
//                     <img class="img-thumbnail mt-2" src="${gamesList[index].imageUrl}" >
//                 </div>

//         `
// 		modalFooter.innerHTML = `
// 		<button type="button"
// 			class="btn btn-secondary" data-bs-dismiss="modal"
// 						>
// 							Close
// 						</button>
// 			<button type="submit" class="btn btn-primary submit"
// 			data-bs-dismiss="modal">Submit</button>
// 			</form>
// 		`
// 		const btnSubmit = document.querySelector(".submit")
// 		btnSubmit.addEventListener("click", () => {
// 			// recuperer les donnes du formulaire
// 			const newTitle = document.querySelector("#title").value
// 			const newYear = document.querySelector("#year").value
// 			const newImgUrl = document.querySelector("#imageUrl").value
// 			/*  empty fields  */
// 			if (newTitle === "" || newYear === "" || newImgUrl === "") {
// 				alert("Certaines parties de votre formulaire sont vides")
// 				return
// 			}
// 			console.log(newTitle, newYear, newImgUrl)
// 			/*  odd characters  */
// 			const alphanumericRegex = /^[a-zA-Z0-9/.:-_ 'éùçà()&?]+$/
// 			if (
// 				!alphanumericRegex.test(newTitle) ||
// 				!alphanumericRegex.test(newYear)
// 			) {
// 				alert("Certaines characters sont pas vailde")
// 				return
// 			}
// 			/*   enregistrer */
// 			// console.log(newTitle, newImage, newYear, indx)
// 			gamesList[index].title = newTitle
// 			gamesList[index].year = newYear
// 			gamesList[index].imageUrl = newImgUrl

// 			document.querySelectorAll(".card-title")[index].innerHTML = newTitle
// 			document.querySelectorAll(".card-text")[index].innerHTML =
// 				"Year: " + newYear
// 			document.querySelectorAll(".card-img-top")[index].src = newImgUrl
// 		})
// 	})
// })
