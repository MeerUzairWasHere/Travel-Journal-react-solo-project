import React from "react"
import Nav from "./Nav"
import Cards from "./Cards"
import data from "./data"

export default function App() {

    const CardElement = data.map(item => {
        return <Cards
            key={item.id}
            {...item}
        />
    })

    return (<div>
        <Nav />
        <main>
        {CardElement}
        </main>
    </div>)
}