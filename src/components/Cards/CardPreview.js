import birthdayCard from "../../assets/birthdaycard.png";
import birthdayCardCover from "../../assets/birthdaycard-cover.png";
import './CardPreview.scss'
import {GrFormNextLink, GrFormPreviousLink} from "react-icons/gr";

const CardPreview = ({title, sender, receiver, pages, currentPage, setCurrentPage, handlePageClick, activePage, prevPage, nextPage }) => {
    return (
        <div className="card-preview-wrapper">
            <div className="card-preview-wrap">
                {activePage.titlePage &&
                    <div className="card-view-edit-wrap">
                        <div className="card-view-edit-image">
                            <img src={birthdayCardCover} alt="card-view"/>
                        </div>
                        <div className="view-content-edit">
                            <div className="preview-title">
                                <p>{title}</p>
                            </div>
                        </div>
                    </div>
                }
                {activePage.contentPage &&
                    <div className="card-view-edit-wrap">
                        <div className="card-view-edit-image">
                            <img src={birthdayCard} alt="card-view"/>
                        </div>
                        <div className="view-content-edit">
                            {currentPage === 0 &&

                                < div className="preview-receiver">
                                    Deer{" "}
                                    <span>{receiver}</span>
                                    ,
                                </div>
                            }
                            <div className="preview-content">
                                <p>{pages[currentPage]}</p>
                            </div>
                            {currentPage === pages.length - 1 &&
                                < div className="preview-sender">
                                    From{" "}
                                    <span>{sender}</span>
                                </div>
                            }
                        </div>
                        <div className="card-view-page-number">
                            <div className="page-number">
                                <span>{currentPage + 1}/{pages.length}</span>
                            </div>
                        </div>
                    </div>
                }
                <div className="card-preview-btn">
                    <div
                        className={`previous-card-btn ${activePage.titlePage ? "disabled" : ""}`}
                        onClick={currentPage === 0 ? () => handlePageClick("titlePage") : () => setCurrentPage(currentPage - 1)}
                    >
                        <GrFormPreviousLink/>{"   "}Previous
                    </div>
                    <div
                        className={`next-card-btn ${currentPage === pages.length - 1 ? "disabled" : ""}`}
                        onClick={activePage.titlePage ? () => handlePageClick("contentPage") : currentPage === pages.length - 1 ? () => setCurrentPage(currentPage) : () => setCurrentPage(currentPage + 1)}
                    >Next{"   "}<GrFormNextLink/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPreview;
