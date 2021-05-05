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
        <div className="card-deck">
            {/* each result will generate a card within the card-deck */}
            {props.results.map(result => (
                <div key={result.id} className="card">
                    <img className="card-img-top" style={{width: "75px"}} src={result.picture.thumbnail} alt={result.firstName}/>
                    <div className="card-body">
                        <h5 className="card-title text-danger">{result.name.first}{result.name.last}</h5>
                        <p className="card-text">{result.email}</p>
                        <p className="card-text">{result.phone}</p>
                        <p className="card-text"><small className="text-muted">{result.registered.date}</small></p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ResultCards;