import logo from "../assets/logo.png";
import './ListProduct.scss'
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const products = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Card ${index + 1}`,
    image: logo,
}));

const ITEMS_PER_PAGE = 20;

const ListProduct = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const currentProducts = products.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleClick = (productId) => {
        navigate(`/card/${productId}`);
    };

    return (
        <div className="product-menu-wrapper">
            <div className="product-item-wrapper">
                <div className="product-item-wrap">
                    {currentProducts.map((product) => (
                        <div key={product.id} onClick={() => handleClick(product.id)} className="product-item">
                            <div className="product-image">
                                <img src={product.image} alt={product.name}/>
                            </div>
                            <div className="product-name">
                                <span>{product.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pagination">
                {Array.from({length: totalPages}, (_, index) => (
                    <button
                        key={index}
                        className={currentPage === index + 1 ? "active" : ""}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ListProduct;