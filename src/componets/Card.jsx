const Card = ({ el }) => {
    return (
        <div className="card">
            <img src={el.photo} alt="" />
            <div className="description">
                {el.superHost && <h4 className="superHost">superHost</h4>}
                <p className="parrafo">{el.type}</p>
                <p className="calificacion">
                    <span className="material-symbols-sharp">
                        star
                    </span>
                    {el.rating}</p>
            </div>
            <h3 className="lugar">{el.title}</h3>
        </div>
    )
}

export default Card;