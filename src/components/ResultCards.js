import React from "react";

function ResultCards(props) {
    return (
        <div className="container">
            {/* each result will display a card */}
            {props.results.map(result => (
            <div className="row my-1">
                <div key={result.id} className="card w-100 text-light bg-secondary">
                    <div className="card-body">
                        <h5 className="card-title bg-dark text-light p-3">{result.name.first} {result.name.last}</h5>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="card-img-top" style={{width: "100px"}} src={result.picture.thumbnail} alt={result.firstName}/>
                            </div>
                            <div className="col-md-4">
                                <p className="card-text">{result.email}</p>
                                <p className="card-text">{result.phone}</p>
                            </div>
                            <div className="col-md-4">
                                <p className="card-text">Hire Date</p>
                                <p className="card-text">{result.registered.date}</p>
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