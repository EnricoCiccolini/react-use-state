import Schedule from "./Schedule"
import { useState } from "react"

import languages from "../data/languages"

export default function Main() {

    let [object, setObject] = useState(null)
    let [clicked, setClicked] = useState(null)


    return (
        <>

            <h1>Learn Web Deplovement</h1>
            <div className="container">
                {/* <button onClick={() => setTitle(title = 'HTML')}>HTML</button>

                <button onClick={() => setTitle(title = 'CSS')}>CSS</button>

                <button onClick={() => setTitle(title = 'JavaScript')}>JavaScript</button>

                <button onClick={() => setTitle(title = 'Node.js')}>Node.js</button>

                <button onClick={() => setTitle(title = 'Express')}>Express</button>

                <button onClick={() => setTitle(title = 'ReactJS')}>ReactJS</button> */}

                {languages.map(item => (<button key={item.id} className={clicked === item.id ? 'orange' : ''} onClick={() => { setObject(item); setClicked(item.id) }} >{item.title}</button>))}



                {/* <Schedule title={title} description={description} /> */}

                <Schedule object={object} />
            </div >



        </>
    )
}


