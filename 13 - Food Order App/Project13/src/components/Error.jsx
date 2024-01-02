export default function Error ({title, message}) {
    return (
        // missing a css class in the stylesheet
        <div className="error">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}