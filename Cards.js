import React from "react"


export default function Cards(props) {
    return (<section>
        <div className="card-container">
            <div >
                <img src={props.imageUrl} className="cover-img" />
            </div>
            <div className="card-body">
                <div className="card-location">
                    <img src="./location-logo.svg"  alt="location-logo" className="location-logo" />
                    <span className="location-title">{props.location}</span>
                    <a href={props.googleMapsUrl} className="location-link">View on Google Maps</a>
                </div>

                <h1 className="place-name">{props.title}</h1>

                <div className="dates"><span>{props.startDate}</span> <span className="dash">-</span> <span>{props.endDate}</span></div>

                <p className="description">{props.description}</p>

            </div>
        </div>


    </section>)
}



/* 
 {
        title: "Tulip Garden",
        location: "Jammu & Kashmir",
        googleMapsUrl: "https://goo.gl/maps/TuBSdzrAzSLRWVvd9",
        startDate: "19 Mar, 2023",
        endDate: "27 April, 2023",
        description: "Indira Gandhi Memorial Tulip garden, previously Model Floriculture Center, is a tulip garden in Srinagar. It is the largest tulip garden in Asia spread over an area of about 30 hectares. It is situated on the foothills of Zabarwan Range with an overview of Dal Lake. The garden was opened in 2007 with the aim to boost floriculture and tourism in Kashmir Valley. The garden is built on a sloping ground in a terraced fashion consisting of seven terraces. Apart from tulips, many other species of flowers – hyacinths, daffodils and ranunculus have been added as well Tulip festival is an annual celebration that aims to showcase the range of flowers in the garden as a part of tourism efforts by the Government of Jammu and Kashmir. It is organized during the onset of spring season in Kashmir valley.",
        imageUrl: "https://images.hindustantimes.com/img/2021/03/24/1600x900/ExOh4dJWUAcNbRt_1616584938975_1616584954360.jpg"
    }
*/