import { ideas } from "./main"

const ideasContainer = document.querySelector("#ideas-container") as HTMLDivElement

export function renderIdeas() {
    // innerHTML or createElement & appendChild
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