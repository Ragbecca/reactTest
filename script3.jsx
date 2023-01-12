const ShoppingItem = (item) => {
    return (
        <div></div>
    )
}

const ShoppingBasket = () => {
    const shoppingJSON = require('../json/shoppingList.json');

    console.log(shoppingJSON);

    return (
        <div className="shopping-basket-middle">
            TEST
        </div>
    )
}

const Hexagons = () => {
    const rowsContent = [];
    for (let i = 0; i < 16; i++) {
        rowsContent.push(<div className="hexagon" key={i} />);
    }
    const rows = [];
    for (let i = 0; i < 9; i++) {
        rows.push(<div className="row" key={i}>{rowsContent}</div>)
    }
    return <div className="container">
        {rows}
    </div>;
}

const App = () => {
    return (
        <div>
            <Hexagons />
            <ShoppingBasket />
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <App />,
);
