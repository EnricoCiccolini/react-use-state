

export default function Schedule({ object }) {
    // let titleCard = languages.find(languages => languages.title === title)


    // let titleh1 = titleCard ? titleCard.title : 'nessun linguaggio selezionato'
    // let descriptionCard = titleCard ? titleCard.description : ''
    // console.log(titleh1)
    let titleh1 = object ? object.title : 'nessun linguaggio selezionato'
    let descriptionCard = object ? object.description : ''


    return (
        <>
            <div>
                <div className="container card">
                    <h1>{titleh1}</h1>
                    <p>{descriptionCard}</p>
                </div>

            </div>

        </>
    )
}
