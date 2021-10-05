const Item = ({number, children}) =>{
    return (
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
            Item {number} - {children}
        </a>
    )
}

export default Item;