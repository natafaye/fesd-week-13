import { ideas } from "./main"

const ideasContainer = document.querySelector("#ideas-container") as HTMLDivElement

export default function renderIdeas() {
    ideasContainer.innerHTML = `
        <div>
            ${ideas.map(idea => `
                <p>
                    ${idea.shortDescription}
                </p>
            ` ).join("")}
        </div>
    `
}