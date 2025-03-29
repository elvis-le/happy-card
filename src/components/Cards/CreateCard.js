import Navigation from "../Navigation";
import Footer from "../Footer";
import './CreateCard.scss'
import {GrNext, GrPrevious} from "react-icons/gr";
import {useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import CardPreview from "./CardPreview";
import {BiHide, BiShow} from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
    setImageIndex,
    toggleShowPassword,
    setMusic,
    setCurrentPage,
    setActivePage,
    nextImage,
    prevImage,
} from "../../redux/createCardSlice";
import { updateCurrentPageImage,
    nextPage,
    prevPage, } from "../../redux/editCardSlice";

const CreateCard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const {title, sender, receiver, pages } = location.state || {};
    const currentPage = useSelector((state) => state.editCard.currentPage);

    const {
        imageIndex,
        showPassword,
        musicName,
        musicSrc,
        activePage
    } = useSelector((state) => state.createCard);

    const images = ["https://picsum.photos/200/300?random=1",
        "https://picsum.photos/200/300?random=2", "https://picsum.photos/200/300?random=3",
        "https://picsum.photos/200/300?random=4", "https://picsum.photos/200/300?random=5",
        "https://picsum.photos/200/300?random=6", "https://picsum.photos/200/300?random=7",
        "https://picsum.photos/200/300?random=8", "https://picsum.photos/200/300?random=9",
        "https://picsum.photos/200/300?random=10", "https://picsum.photos/200/300?random=11",
        "https://picsum.photos/200/300?random=12", "https://picsum.photos/200/300?random=13",
        "https://picsum.photos/200/300?random=14", "https://picsum.photos/200/300?random=15",];

    const totalImages = images.length;

    const listRef = useRef(null);

    const handlePageClick = (option) => {
        dispatch(setActivePage(option));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            dispatch(setMusic({ name: file.name, src: URL.createObjectURL(file) }));
        }
    };

    const [updatedPages, setUpdatedPages] = useState(pages);

    const handleUpdateImage = (index, src) => {
        dispatch(updateCurrentPageImage({ index, src }));
    };

    const handleBack = () => {
        navigate(-1);
    };

    console.log("Pages:", pages);
    console.log("Total Pages:", pages?.length);
    console.log("Current Page Before Dispatch:", currentPage);

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
                                        <div className="previous-btn" onClick={() => dispatch(prevImage())}>
                                            <GrPrevious/>
                                        </div>
                                        <div className="background-image-container">
                                            <div className="background-option"
                                                 ref={listRef}
                                                 style={{transform: `translateX(-${imageIndex * 20.12}%)`}}>
                                                {images.map((src, i) => (
                                                    <img key={i} src={src} alt={`preview-${i}`} onClick={() => handleUpdateImage(currentPage, src)}/>))}
                                                <div className="import-new-image">
                                                    +
                                                </div>
                                            </div>
                                        </div>
                                        <div className="next-btn" onClick={() => dispatch(nextImage())}>
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
                                    <form>
                                        <input type={showPassword ? "text" : "password"}
                                               id="password"/>
                                    </form>
                                        <div className="create-card-show-hide-btn"
                                             onClick={() => dispatch(toggleShowPassword())}
                                             style={{cursor: "pointer"}}>
                                            {showPassword ? <BiHide/> : <BiShow/>}
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
                                <CardPreview
                                    title={title} sender={sender} receiver={receiver} pages={pages}
                                    currentPage={currentPage} setCurrentPage={(page) => dispatch(setCurrentPage(page))}
                                    handlePageClick={handlePageClick} activePage={activePage}
                                    prevPage={() => dispatch(prevPage())} nextPage={() => dispatch(nextPage())}
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