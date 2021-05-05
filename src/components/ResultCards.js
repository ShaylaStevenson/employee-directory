import React from "react";

// function ResultList(props) {
//   return (
//     <ul className="list-group">
//       {props.results.map(result => (
//         <li className="list-group-item" key={result.id}>
//         {/* result.id.value? */}
//           <img alt={result.name.first} className="img-fluid" src={result.picture.thumbnail} />
//           <p>{result.name.first} {result.name.last}</p>
//           <p>Email: {result.email}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }

function ResultCards(props) {
    return (
        <div className="container">
            {/* each result will display a card */}
            {props.results.map(result => (
            <div className="row my-1">
                <div key={result.id} className="card w-100 text-light bg-secondary">
                    <div className="card-body">
                        <h5 className="card-title bg-dark text-light p-3">{result.name.first}{result.name.last}</h5>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="card-img-top" style={{width: "100px"}} src={result.picture.thumbnail} alt={result.firstName}/>
                            </div>
                            <div className="col-md-4">
                                <p className="card-text">{result.email}</p>
                                <p className="card-text">{result.phone}</p>
                            </div>
                            <div className="col-md-4">
                                <p className="card-text">Member Since</p>
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


//{/* each result will generate a card within the card-deck */}
// {props.results.map(result => (
//     <div key={result.id} className="row">
//     <div className="col-md">
//         <div  className="card" style={{width: "100%"}}>
//             <img className="card-img-top" style={{width: "75px"}} src={result.picture.thumbnail} alt={result.firstName}/>
//             <div className="card-body">
//                 <h5 className="card-title text-danger">{result.name.first}{result.name.last}</h5>
//                 <p className="card-text">{result.email}</p>
//                 <p className="card-text">{result.phone}</p>
//                 <p className="card-text"><small className="text-muted">{result.registered.date}</small></p>
//             </div>
//         </div>
//     </div>
//     </div>
//     ))}    