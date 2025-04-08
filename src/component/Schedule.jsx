export default function Schedule({ title, description }) {
    let titleCard = title ?? 'nessun linguaggio selezionato'
    let descriptionCard = description ?? ' '


    return (
        <>
            <div>
                <div>
                    <h1>{titleCard}</h1>
                    <p>{descriptionCard}</p>
                </div>

            </div>

        </>
    )
}
