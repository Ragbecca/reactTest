const cities = [
    {
        name: "Rotterdam",
        building: "Markthal",
        img: "rotterdam.jpg",
        river: "Maas",
        person: "Desiderius Erasmus"
    },
    {
        name: "Berlin",
        building: "Brandenburger Tor",
        img: "berlin.jpg",
        river: "Spree",
        person: "Rudi Ball"
    },
    {
        name: "New York",
        building: "Empire State Building",
        img: "newyork.jpg",
        river: "Hudson River",
        person: "Lady Gaga"
    },
    {
        name: "London",
        building: "Big Ben",
        img: "london.jpg",
        river: "Thames",
        person: "Alfred Hitchcock"
    },
    {
        name: "Athens",
        building: "Parthenon",
        img: "athens.jpg",
        river: "Saronic Golf (Zee)",
        person: "Pericles"
    }
]

const City = (props) => {
    return (
        <div className="city">
            <img className="city-img" src={"./img/" + props.img}></img>
            <span className="city-name">{props.name}</span>
            <div className="city-info-container">
                <span className="city-info">Famous Building:</span><span className="city-info-answer">{props.building}</span>
                <span className="city-info">River:</span><span className="city-info-answer">{props.river}</span>
                <span className="city-info">Famous Person:</span><span className="city-info-answer">{props.person}</span>
            </div>
        </div>
    )
}


const App = () => {
    return (
        <div>
            <div className="jumbo-tron">
                <div>
                    <div>Ranked: <span className="bolder-text">top</span></div>
                    <div><span className="bolder-text">5 cities of</span></div>
                    <div>the world!</div>
                </div>
            </div>
            <div className="city-container">
                {cities.map(city => {
                    return <City key={city.name} img={city.img} name={city.name} building={city.building} river={city.river} person={city.person} />
                })}
            </div>
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <App />,
);