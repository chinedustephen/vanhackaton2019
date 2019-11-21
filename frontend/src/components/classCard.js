import React from 'react';

function classCard(props) {
    return (
        <div className="card product-card">
            <div className="card-body">

                <div className="card-body">
                    <h4 className="card-title">{props.data.title}</h4>
                    <p className="card-text">{props.data.description}</p>

                    <a href={props.data.prepkitLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary space-btn">Prepkit</a>

                    <button onClick={() => props.attendClassHandle(props.data.id)} className="btn btn-primary">Attend</button>
                </div>


            </div>
        </div>
    );
}

export default classCard;