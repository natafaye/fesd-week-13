
// put this in state later
let boardData = ["1","2","3","4","5","","","","","","","","","","","","","","","","","","","","","","",""]

export default function SudokuBoard() {

    const handleCellClick = () => {
        alert("You won!")
    }

    // const arrayOfDivs = []
    // for(let i = 0; i < boardData.length; i++) {
    //     arrayOfDivs.push(
    //         <div className="p-3 border" onClick={handleCellClick}>
    //             {boardData[i]}
    //         </div>
    //     )
    // }

    return (
        <div>
            { boardData.map(cell => (
                <div className="p-3 border" onClick={handleCellClick}>
                    {cell}
                </div>
            )) }
        </div>
    )
}
