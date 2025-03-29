import Navigation from "../Navigation";
import Footer from "../Footer";
import './CreateCard.scss'
import {GrNext, GrPrevious} from "react-icons/gr";
import {useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import CardPreview from "./CardPreview";
import {BiHide, BiShow} from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const CreateCard = () => {


    const navigate = useNavigate();
    const location = useLocation();

    const {title, sender, receiver, pages} = location.state || {};
    const [currentPage, setCurrentPage] = useState(0);
    const [showPassword, setShowPassword] = useState(false);

    const [activePage, setActivePage] = useState({
        titlePage: true,
        contentPage1: false,
        createPage: false,
        previewPage: false,
    });

    const handlePageClick = (option) => {
        setActivePage({
            titlePage: false,
            contentPage: false,
            createPage: false,
            previewPage: false,
            [option]: true,
        });
    };

    const prevPage = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    const nextPage = () => {
        if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
    };

    const images = ["https://picsum.photos/200/300?random=1", "https://picsum.photos/200/300?random=2", "https://picsum.photos/200/300?random=3", "https://picsum.photos/200/300?random=4", "https://picsum.photos/200/300?random=5", "https://picsum.photos/200/300?random=6", "https://picsum.photos/200/300?random=7", "https://picsum.photos/200/300?random=8", "https://picsum.photos/200/300?random=9"];

    const totalImages = images.length;

    const [index, setIndex] = useState(0);
    const listRef = useRef(null);

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

    const [musicName, setMusicName] = useState("");
    const [musicSrc, setMusicSrc] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setMusicName(file.name);
            setMusicSrc(URL.createObjectURL(file));
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="create-card-wrapper">
            <div className="create-card-wrap">
                <Navigation/>
                <div className="create-card-design">
                    <div className="create-card-overview-wrapper">
                        <div className="create-card-overview-wrap">
                            <div className="create-card-image-option">
                                <div className="background-image-option-card">
                                    <div className="background-image-type-option">
                                        <div className="background-image-type">
                                            New Year
                                        </div>
                                        <div className="background-image-type">
                                            Valentine
                                        </div>
                                        <div className="background-image-type">
                                            International Women's Day
                                        </div>
                                        <div className="background-image-type">
                                            Moon Festival
                                        </div>
                                        <div className="background-image-type">
                                            Vietnamese Women's Day
                                        </div>
                                        <div className="background-image-type">
                                            Christmas
                                        </div>
                                        <div className="background-image-type">
                                            Birthday
                                        </div>
                                    </div>
                                    <div className="background-option-choice">
                                        <div className="previous-btn" onClick={prevImage}>
                                            <GrPrevious/>
                                        </div>
                                        <div className="background-image-container">
                                            <div className="background-option"
                                                 ref={listRef}
                                                 style={{transform: `translateX(-${index * 20.17}%)`}}>
                                                {images.map((src, i) => (
                                                    <img key={i} src={src} alt={`preview-${i}`}/>))}
                                                <div className="import-new-image">
                                                    +
                                                </div>
                                            </div>
                                        </div>
                                        <div className="next-btn" onClick={nextImage}>
                                            <GrNext/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="create-card-music-wrap">
                                <div className="create-card-music-head">
                                    <span>Create music: </span>
                                </div>
                                <div className="upload-card-music">
                                    <div className="import-music-file">
                                        Input file music
                                        <input
                                            id="music-upload"
                                            type="file" accept=".mp3, .wav, .flac"
                                            onChange={handleFileChange}/>
                                    </div>
                                    <div className="file-music-wrap">
                                        <div className="file-music-name">
                                        {musicName || "Chưa chọn file"}
                                        </div>
                                        <div className="file-music-action">
                                            {musicSrc && <audio controls src={musicSrc}></audio>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="create-card-password-wrap">
                                <div className="create-card-password-head">
                                    <span>Create password: </span>
                                </div>
                                <div className="create-card-password">
                                    <input type={showPassword ? "text" : "password"}
                                           id="password" />
                                    <div className="create-card-show-hide-btn"
                                         onClick={() => setShowPassword(!showPassword)}
                                         style={{ cursor: "pointer" }}>
                                        {showPassword ? <BiHide /> : <BiShow />}
                                    </div>
                                </div>
                            </div>
                            <div className="create-card-link-btn-wrap">
                                <div className="create-card-link-btn">
                                    Create Link
                                </div>
                                <div
                                    className="create-card-back-btn"
                                    onClick={handleBack}
                                    style={{cursor: "pointer"}}
                                >
                                    Back
                                </div>
                            </div>
                        </div>
                        <div className="watch-over-card">
                            <div className="overview-card">
                                <CardPreview title={title} sender={sender}
                                             receiver={receiver} pages={pages}
                                             currentPage={currentPage} setCurrentPage={setCurrentPage}
                                             handlePageClick={handlePageClick} activePage={activePage}
                                             prevPage={prevPage} nextPage={nextPage}
                                />
                            </div>
                        </div>
                    </div>

                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default CreateCard;