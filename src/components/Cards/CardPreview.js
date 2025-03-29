import birthdayCard from "../../assets/birthdaycard.png";
import birthdayCardCover from "../../assets/birthdaycard-cover.png";
import './CardPreview.scss'
import {GrFormNextLink, GrFormPreviousLink} from "react-icons/gr";
import {nextPage, prevPage} from "../../redux/editCardSlice";

const CardPreview = ({title, sender, receiver, pages, currentPage, setCurrentPage, handlePageClick, activePage, prevPage, nextPage }) => {

    console.log("currentPage:", currentPage);
    console.log("pages:", pages);
    console.log("pages.length:", pages.length);

    return (
        <div className="card-preview-wrapper">
            <div className="card-preview-wrap">
                {activePage === "titlePage" &&
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
                {activePage === "contentPage" &&
                    <div className="card-view-edit-wrap">
                        <div className="card-view-edit-image">
                            <img src={birthdayCardCover} alt="card-view"/>
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
                                <p>{pages[currentPage].content}</p>
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
                        className={`previous-card-btn ${activePage === "titlePage" ? "disabled" : ""}`}
                        onClick={currentPage === 0 ? () => handlePageClick("titlePage") : () => prevPage()}
                    >
                        <GrFormPreviousLink/>{"   "}Previous
                    </div>
                    <div
                        className={`next-card-btn ${currentPage === pages.length - 1 ? "disabled" : ""}`}
                        onClick={
                            activePage === "titlePage"
                                ? () => handlePageClick("contentPage")
                                : currentPage === pages.length - 1
                                    ? null
                                    : () => nextPage()
                        }
                    >Next{"   "}<GrFormNextLink/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPreview;
