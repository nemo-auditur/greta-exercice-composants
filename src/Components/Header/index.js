// import des styles
import "./index.css"

const Header = () => {
    return (
        <div className="containerHeader">
            <div className="sidesItemsContainer">
                <span>Trendy bags</span>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg></div>
            </div>
            <div>
                <nav className="sidesItemsContainer">
                    <span>Collection</span>
                    <span>Product</span>
                    <span>Philosophy</span>
                </nav>
            </div>
        </div>
    )
}

export default Header