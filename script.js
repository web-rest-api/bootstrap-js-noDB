const gamesList = [
	{
		title: "Tekken",
		year: 1994,
		imgaueUrl:
			"https://cdn.dashfight.com/bcf6a9046a9ea4c1070d4aedb2981103c978a704.png",
	},
	{
		title: "Minecraft",
		year: 2009,
		imgaueUrl:
			"https://m.media-amazon.com/images/I/61smNbXSW1L._AC_UF1000,1000_QL80_.jpg",
	},
	{
		title: "Assasin's Creed Unity",
		year: 2014,
		imgaueUrl:
			"https://www.trustedreviews.com/wp-content/uploads/sites/54/2014/06/AC-Unity-8-1-1.jpg",
	},
	{
		title: "Elden Ring",
		year: 2022,
		imgaueUrl:
			"https://pic.clubic.com/v1/images/1934271/raw?fit=smartCrop&width=1200&height=675&hash=e7519a9577a2b7291fa26880bb22bed6740836be",
	},
	{
		title: "Street Fighter V",
		year: 2015,
		imgaueUrl:
			"https://gaming-cdn.com/images/products/671/orig/street-fighter-v-pc-jeu-steam-cover.jpg?v=1662539255",
	},
	{
		title: "Half Life 2",
		year: 2004,
		imgaueUrl:
			"https://gaming-cdn.com/images/products/2284/orig/half-life-2-pc-mac-game-steam-cover.jpg?v=1650555068",
	},
	{
		title: "Skyrim",
		year: 2011,
		imgaueUrl:
			"https://gaming-cdn.com/images/products/146/orig/the-elder-scrolls-v-skyrim-pc-jeu-steam-europe-cover.jpg?v=1661270991",
	},
]

/*  DOM ELEMENTS  */
const articleContainer = document.querySelector(".row")
/*  modal  */
const modalTitle = document.querySelector(".modal-title")
const modalBody = document.querySelector(".modal-body")
const modalFooter = document.querySelector(".modal-footer")

gamesList.forEach((game) => {
	articleContainer.innerHTML += `
    <article class="col">
       <div class="card shadow-sm">
          <img src="${game.imgaueUrl}" class="card-img-top" alt="${game.title}">
          <div class="card-body">
              <h3 class="card-title">${game.title}</h3>
              <p class="card-text">Year: ${game.year}</p>
              <div class="btn-group">
                <button
                    type="button"
                    class="btn btn-sm btn-outline-dark view"
                    data-bs-toggle="modal"
			        data-bs-target="#gameModal"
                >
                    View
                </button>
                <button
                    type="button"
                    class="btn btn-sm btn-outline-dark edit"
                    data-bs-toggle="modal"
			        data-bs-target="#gameModal"
                >
                    Edit
                </button>
            </div>
          </div>
       </div>    
    </article>

    `
})

/* ELEMENT DYNAMIQUE DU DOM  */

const viewBtnList = document.querySelectorAll(".view")
const editBtnList = document.querySelectorAll(".edit")

viewBtnList.forEach((truc, index) => {
	truc.addEventListener("click", () => {
		console.log("tu as clicke mon gars " + gamesList[index].title)
		modalTitle.innerHTML = gamesList[index].title
		modalBody.innerHTML = `<img src="${gamesList[index].imgaueUrl}" class="img-fluid" alt="${gamesList[index].title}">`
		modaFooter.innerHTML = `
            <button type="button" class="btn btn-secondary"
                data-bs-dismiss="modal"
            >Close
            </button>
        `
	})
})

editBtnList.forEach((btn, index) => {
	btn.addEventListener("click", () => {
		modalTitle.innerHTML = "Edit mode"
		modalBody.innerHTML = `        
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" aria-describedby="titleHelp" value="${gamesList[index].title}" >
                    
                </div>
                <div class="mb-3">
                    <label for="year" class="form-label">Year</label>
                    <input type="number" class="form-control" id="year" aria-describedby="titleYear" value="${gamesList[index].year}" >
                    
                </div>
                <div class="mb-3">
                    <label for="imageUrl" class="form-label">Image Url</label>
                    <input type="text" class="form-control" id="imageUrl" aria-describedby="titleHelp" value="${gamesList[index].imgaueUrl}" >
                    <img class="img-thumbnail mt-2" src="${gamesList[index].imgaueUrl}" >
                </div>
            
        `
		modalFooter.innerHTML = `
		<button type="button"
			class="btn btn-secondary" data-bs-dismiss="modal"
						>
							Close
						</button>
			<button type="submit" class="btn btn-primary submit"
			data-bs-dismiss="modal">Submit</button>
			</form>
		`
		const btnSubmit = document.querySelector(".submit")
		btnSubmit.addEventListener("click", () => {
			// recuperer les donnes du formulaire
			const newTitle = document.querySelector("#title").value
			const newYear = document.querySelector("#year").value
			const newImgUrl = document.querySelector("#imageUrl").value
			console.log(newTitle, newYear, newImgUrl)
		})
	})
})
