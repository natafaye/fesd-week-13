// Every css file and javascript file that I want included
// has to be imported into main.ts or imported into something 
// that's imported into something... that's imported into main.ts

import "../node_modules/bootstrap/dist/bootstrap.min.css"
// import says we want to use this thing in this specific file
import myOwnName from "./myspecialfile"



myOwnName // this will be secretNumber (3)


// React instead of normal HTML
// Typescript instead of normal Javascript
// Vite instead of the Live Server Extension