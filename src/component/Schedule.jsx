import languages from "../data/languages"

export default function Schedule({ title, description }) {
    // let titleCard = languages.find(languages => languages.title === title)

    console.log(title)

    // let titleh1 = titleCard ? titleCard.title : 'nessun linguaggio selezionato'
    // let descriptionCard = titleCard ? titleCard.description : ''
    // console.log(titleh1)
    let titleh1 = title ? title.title : 'nessun linguaggio selezionato'
    let descriptionCard = title ? title.description : ''


    return (
        <>
            <div>
                <div>
                    <h1>{titleh1}</h1>
                    <p>{descriptionCard}</p>
                </div>

            </div>

        </>
    )
}
