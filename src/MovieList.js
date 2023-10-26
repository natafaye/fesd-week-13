export default function MovieList() {
    const userName = "Ellen"

    const myNumber = 100 + 4

    // Almost never for, while, for-of
    // Almost always .map(), .find(), .filter()

    return (
        // Fragment
        <>
            <h1>
                {userName} is the {100 + 4}th visitor!!!
            </h1>
            <p>This is special to {userName}</p>
        </>
    )
}


