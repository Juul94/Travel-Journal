import React from "react"

export default function Card(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-12 col-12">

                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-4">
                            <div className="card--image-container">
                                <img src={props.item.imageUrl} className="card--image" />
                            </div>
                        </div>

                        <div className="col-md-9 col-sm-8  col-8 mt-4">
                            <div className="row">
                                <div className="col-12">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <span className="card--location">{props.item.location}</span>
                                    {
                                        'googleMapsUrl' in props.item && props.item.googleMapsUrl.length > 0 &&
                                            <a href={props.item.googleMapsUrl} className="card--map" target="_blank">View on Google Maps</a> 
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <h2 className="card--title">{props.item.title}</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>

                                    <p>{props.item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <hr className="card--hr" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}