import Navigation from "../Navigation";
import birthdayCard from '../../assets/birthdaycard.png'
import birthdayCardCover from '../../assets/birthdaycard-cover.png'
import './EditCard.scss'
import Footer from "../Footer";
import {useState} from "react";
import TitleForm from "./TitleForm";
import ContentForm from "./ContentForm";
import {GrFormNextLink, GrFormPreviousLink} from "react-icons/gr";
import {IoMdAdd} from "react-icons/io";
import {MdDeleteForever} from "react-icons/md";
import {useNavigate} from "react-router-dom";

const EditCard = () => {
    const [title, setTitle] = useState("");
    const [sender, setSender] = useState("");
    const [receiver, setReceiver] = useState("");
    const [content, setContent] = useState("");
    const [pages, setPages] = useState([content]);
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();

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

    const handleClickTitle = (e) => {
        setTitle(e.target.textContent);
    };

    const addNewPage = () => {
        setPages([...pages, ""]);
        setCurrentPage(pages.length);
    };
    const createCard = () => {
        console.log("Creating card with pages:", pages);
    };

    const updateCurrentPageContent = (value) => {
        const updatedPages = [...pages];
        updatedPages[currentPage] = value;
        setPages(updatedPages);
    };

    const removeCurrentPage = () => {
        if (pages.length > 1) {
            const updatedPages = pages.filter((_, index) => index !== currentPage);
            setPages(updatedPages);
            setCurrentPage(Math.max(0, currentPage - 1));
        }
    };

    const prevPage = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    const nextPage = () => {
        if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
    };

    const handleClick = () => {
        navigate(`/CreateCard`, {
            state: { title, sender, receiver, pages }
        });
    };


    return (
        <div className="edit-card-wrapper">
            <div className="edit-card-wrap">
                <Navigation/>
                <div className="edit-card-wrap-component">
                    <div className="edit-card-form-wrapper">
                        {activePage.titlePage &&
                            <TitleForm title={title} setTitle={setTitle} goToNext={handlePageClick}
                                       handleClickTitle={handleClickTitle}/>
                        }
                        {activePage.contentPage &&
                            <ContentForm updateCurrentPageContent={updateCurrentPageContent}
                                         removeCurrentPage={removeCurrentPage}
                                         prevPage={prevPage} nextPage={nextPage} sender={sender} setSender={setSender}
                                         pages={pages}
                                         currentPage={currentPage} receiver={receiver} setReceiver={setReceiver}
                                         goToPrevious={handlePageClick}
                                         content={content} setContent={setContent} addNewPage={addNewPage}
                                         createCard={createCard}
                                         setCurrentPage={setCurrentPage}/>
                        }
                        {activePage.createPage &&
                            <div></div>
                        }
                        {activePage.previewPage &&
                            <div></div>
                        }
                        <div className="create-card-btn-wrap">
                            <div
                                className={`previous-card-btn ${currentPage === 0 ? "disabled" : ""}`}
                                onClick={currentPage === 0 ? () => handlePageClick("titlePage") : () => setCurrentPage(currentPage - 1)}
                            >
                                <GrFormPreviousLink/>{"   "}Previous
                            </div>
                            <div className="add-new-card-btn" onClick={addNewPage}>
                                Add new page <IoMdAdd/>
                            </div>
                            <div
                                className={`delete-card-btn ${pages.length === 1 ? "disabled" : ""}`}
                                onClick={pages.length === 1 ? null : removeCurrentPage}
                            >
                                Delete page <MdDeleteForever/>
                            </div>
                            <div className="view-card-btn">
                                View
                            </div>
                            <div className="create-card-btn" onClick={handleClick}>
                                Create
                            </div>
                            <div
                                className="next-card-btn"
                                onClick={activePage.titlePage ? () => handlePageClick("contentPage") : currentPage === pages.length - 1 ? () => setCurrentPage(currentPage) : () => setCurrentPage(currentPage + 1)}
                            >Next{"   "}<GrFormNextLink/>
                            </div>
                        </div>

                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default EditCard;