let players = [
    {
        name: "Maurice",
        score: 140,
        id: 1
    },
    {
        name: "David",
        score: 30,
        id: 2
    },
    {
        name: "Job",
        score: 130,
        id: 3
    },
]

const Header = (props) => {
    return (
        <header id="test">
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    )
};

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">{props.name}</span>
            <Counter score={props.score} id={props.id} />
        </div>
    )
}

const Counter = (props) => {

    const [score, setScore] = React.useState(props.score);

    function removeFromScore() {
        setScore(score - 10);
    }

    function addToScore() {
        setScore(score + 10);
    }

    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={removeFromScore}> - </button>
            <span className="counter-score">{score}</span>
            <button className="counter-action increment" onClick={addToScore}> + </button>
        </div>
    )
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={3} />
            {players.map(player => <Player name={player.name} score={player.score} key={player.id} id={player.id} />)}
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <App />,
);