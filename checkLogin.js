window.loggedIn = false

function checkLogIn() {
	const token = localStorage.getItem("token")
	const url = "http://localhost:3000/api/users/check"
	//console.log(token)

	fetch(url, {
		method: "POST",
		headers: {
			"x-api-key": "secret_phrase_here",
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({ msg: "auth" }),
	})
		.then((res) => {
			if (!res.ok) {
				console.log(res)

				throw new Error("Identifiants incorrects")
			}
			return res.json().then((data) => {
				// console.log(data)
				loggedIn = true
				console.log(loggedIn)
				if (window.location.pathname != "/") {
					return (window.location = "/")
				}
				const loggedInBtn = (document.querySelector("header").innerHTML = `
						<a
				href="/"
				class="d-flex align-items-center text-white text-decoration-none text-bg-secondary p-3"
			>
				<span class="fs-4 text-center">Games</span>
			</a>
			<button
				class="d-flex align-items-center text-white text-decoration-none btn p-3 log-out"
			>
				<span class="fs-4 text-center">Log Out</span></button
			>
				`)

				const logOutBtn = document.querySelector(".log-out")
				logOutBtn.addEventListener("click", () => {
					localStorage.removeItem("_id")
					localStorage.removeItem("token")
					window.location.pathname = "/login.html"
				})

				return data
			})
		})
		.catch((error) => {
			console.log(error)
		})

	//console.log(token)
}

checkLogIn()

const editButton = () => {
	const divBtn = document.createElement("button")
	divBtn.setAttribute("type", "button")
	divBtn.setAttribute("data-bs-toggle", "modal")
	divBtn.setAttribute("data-bs-target", "#exampleModal")
	divBtn.setAttribute("data-edit-id", "2")
	divBtn.innerText = "Edit"
	return divBtn
}

console.log(editButton())

// ;`
// 											<button
// 												type="button"
// 												class="btn btn-sm btn-outline-secondary edit"
// 												data-bs-toggle="modal" data-bs-target="#exampleModal"
// 												data-edit-id="${game.id}"
// 											>
// 												Edit
// 											</button>`
