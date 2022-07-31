import shoe from "./../assets/Sneakers.png"

const Introduction = () => {
    return (
        <div className="Container">
            <div className="Left">
                <h1 className="Header">SNEAKERS MARKET</h1>
                <p className="Text">Lorem ipsum dolor sit amet,<br></br>
                    consectetuer adipiscing elit.<br></br>
                    Maecenas porttitor congue massa.<br></br>
                    Fusce posuere, magna sed pulvinar<br></br>
                    ultricies, purus lectus malesuada<br></br>
                    libero, sit amet commodo magna<br></br>
                    eros quis urna.</p>
                <a className="Button" href="/">Shop Now</a>
            </div>
            <div className="Right">
                <img className="Shoe" src={shoe}></img>
            </div>
        </div>
    )
}

export default Introduction