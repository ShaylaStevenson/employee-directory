import React from "react";

//use the npm package to format the hire date
import dateFormat from 'dateformat'

function ResultCards(props) {
    return (
        <div className="container">
            {/* each result will display a card */}
            {props.results.map((result, i) => (
            <div key={i} className="row my-1">
                <div className="card w-100 text-dark">
                    <div className="card-body">
                        <h5 className="card-title bg-dark text-light p-3">{result.name.first} {result.name.last}</h5>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="card-img-top" src={result.picture.large} alt={result.firstName}/>
                            </div>
                            <div className="col-md-5">
                                <p className="card-text mt-1">{result.email}</p>
                                <p className="card-text mt-3">{result.phone}</p>
                                <p className="card-text mt-3">{result.location.city}, {result.location.state}</p>
                            </div>
                            <div className="col-md-3">
                                <p className="card-text mb-0">Hire Date</p>
                                {/* use dateFormat to apply mask to returned date */}
                                <p className="card-text">{dateFormat(result.registered.date, "mm / dd / yyyy")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
            {/* end card */}
        </div>
    );
};

export default ResultCards;  