import React from "react"
const Card = () => {
    return (
        <div className="card mt-3" style= {{width: "16rem"}}>
            <img src="https://tse3.mm.bing.net/th/id/OIP.L2ATWgynNJtaRWeso7q7CQHaE8?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>

    )
}
export default Card