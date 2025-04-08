import Schedule from "./Schedule"
import { useState } from "react"
export default function Main() {



    let [title, setTitle] = useState(null)
    const [description, setdescription] = useState(null)






    return (
        <>

            <h1>Learn Web Deplovement</h1>
            <div>
                <button onClick={() => setTitle(title = 'HTML')}>HTML</button>

                <button onClick={() => setTitle(title = 'CSS')}>CSS</button>

                <button onClick={() => setTitle(title = 'JavaScript')}>JavaScript</button>

                <button onClick={() => setTitle(title = 'Node.js')}>Node.js</button>

                <button onClick={() => setTitle(title = 'Express')}>Express</button>

                <button onClick={() => setTitle(title = 'ReactJS')}>ReactJS</button>

                <Schedule title={title} description={description} />

            </div>



        </>
    )
}


