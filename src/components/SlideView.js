export default function SlideView() {
    const paragraph = <p>I'm a paragraph { `The answer is: ${1 + 1}` }</p>

    return (
        <div className="col p-4">SlideView { 8 + 5 }
            { paragraph }
        </div>
    )
}