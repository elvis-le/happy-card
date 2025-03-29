import logo from "../../assets/logo.png";
import './Card.scss'
import {MdCreate, MdOutlineFavorite, MdOutlineFavoriteBorder} from "react-icons/md";
import Footer from "../Footer";
import {GrNext, GrPrevious} from "react-icons/gr";
import {useEffect, useRef, useState} from "react";
import Navigation from "../Navigation";
import {useNavigate, useParams} from "react-router-dom";

const Card = () => {
    const { cardId } = useParams();
    const visibleImages = 4;
    const images = ["https://picsum.photos/200/300?random=1", "https://picsum.photos/200/300?random=2", "https://picsum.photos/200/300?random=3", "https://picsum.photos/200/300?random=4", "https://picsum.photos/200/300?random=5", "https://picsum.photos/200/300?random=6", "https://picsum.photos/200/300?random=7", "https://picsum.photos/200/300?random=8", "https://picsum.photos/200/300?random=9"];

    const extendedImages = [...images, ...images];
    const totalImages = images.length;

    const [index, setIndex] = useState(0);
    const listRef = useRef(null);
    const navigate = useNavigate();


    useEffect(() => {
        if (index === totalImages) {
            setTimeout(() => {
                listRef.current.style.transition = "none";
                setIndex(0);
            }, 500);
        }
    }, [index, totalImages]);

    const nextImage = () => {
        if (index >= totalImages) return;
        setIndex(index + 1);
        listRef.current.style.transition = "transform 0.5s ease-in-out";
    };

    const prevImage = () => {
        if (index <= 0) {
            setTimeout(() => {
                listRef.current.style.transition = "none";
                setIndex(totalImages - 1);
            }, 500);
        } else {
            setIndex(index - 1);
            listRef.current.style.transition = "transform 0.5s ease-in-out";
        }
    };

    const handleClick = () => {
        navigate(`/EditCard/${cardId}`);
    };

    return (
        <div className="card-wrapper">
            <div className="card-wrap">
                <Navigation/>
                <div className="card-component">
                    <div className="card-detail-wrapper">
                        <div className="card-detail-wrap">
                            <div className="card-video-wrap">
                                <div className="card-video">
                                    <video></video>
                                </div>
                                <div className="card-video-option">
                                    <div className="previous-btn" onClick={prevImage}>
                                        <GrPrevious/>
                                    </div>
                                    <div className="image-container">
                                        <div
                                            className="image-list"
                                            ref={listRef}
                                            style={{transform: `translateX(-${index * 24.95}%)`}}
                                        >
                                            {extendedImages.map((src, i) => (
                                                <img key={i} src={src} alt={`preview-${i}`}/>))}
                                        </div>
                                    </div>
                                    <div className="next-btn" onClick={nextImage}>
                                        <GrNext/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-detail-video-wrap">
                                <div className="card-detail">
                                    <div className="card-detail-header-wrap">
                                        <h3 className="card-detail-header">Birthday Card</h3>
                                    </div>
                                    <div className="card-detail-content">
                                        <span>Welcome to this special birthday card! This is your chance to share heartfelt wishes, meaningful words, and all the best for someone you care about. Let your message bring joy, happiness, and make their birthday even more memorable.
                                        <br/>Write from the heart and turn this card into a beautiful gift of love and kindness! 🎂🎉💖</span>
                                    </div>
                                    <div className="card-detail-btn">
                                        <div className="card-favorite-btn">
                                            <span>Favorite</span>
                                            <MdOutlineFavoriteBorder/>
                                            <MdOutlineFavorite/>
                                        </div>
                                        <div className="card-edit-btn" onClick={() => handleClick()}>
                                            <span>Edit</span>
                                            <MdCreate/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>)
}

export default Card;