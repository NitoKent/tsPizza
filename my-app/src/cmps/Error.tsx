
interface ErrorMessageProps {
    error:string
}

export function Error( {error}: ErrorMessageProps ) {

    return (
        <p>{error}</p>
    )
}