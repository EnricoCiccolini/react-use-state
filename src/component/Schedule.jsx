import languages from "../data/languages"

export default function Schedule({ title, description }) {
    let titleCard = languages.find(languages => languages.title === title)



    let titleh1 = titleCard ? titleCard.title : 'nessun linguaggio selezionato'
    let descriptionCard = titleCard ? titleCard.description : ''
    console.log(titleh1)


    return (
        <>
            <div>
                <div>
                    <h1>{titleh1}</h1>
                    <p>{descriptionCard}''</p>
                </div>

            </div>

        </>
    )
}
