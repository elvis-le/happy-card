import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    setTitle, setSender, setReceiver, setCurrentPage,
    addPage, updateCurrentPageContent, removePage,
    prevPage, nextPage, setActivePage, goToCreateCard, updateCurrentPageImage,
} from "../../redux/editCardSlice";
import Footer from "../Footer";
import ContentForm from "./ContentForm";
import TitleForm from "./TitleForm";
import Navigation from "../Navigation";
import './EditCard.scss'

const EditCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Lấy dữ liệu từ Redux Store
    const { title, sender, receiver, pages, currentPage, activePage } = useSelector(state => state.editCard);

    const handlePageClick = (option) => {
        dispatch(setActivePage(option));
    };

    const handleClickTitle = (e) => {
        dispatch(setTitle(e.target.textContent));
    };

    const handleClick = () => {
        dispatch(goToCreateCard());
        dispatch(setCurrentPage(0));
        navigate(`/CreateCard`, {
            state: { title, sender, receiver, pages}
        });

    };

    return (
        <div className="edit-card-wrapper">
            <div className="edit-card-wrap">
                <Navigation />
                <div className="edit-card-wrap-component">
                    <div className="edit-card-form-wrapper">
                        {activePage === "titlePage" && (
                            <TitleForm
                                title={title}
                                setTitle={(val) => dispatch(setTitle(val))}
                                goToNext={() => handlePageClick("contentPage")}
                                handleClickTitle={handleClickTitle}
                            />
                        )}
                        {activePage === "contentPage" && (
                            <ContentForm
                                updateCurrentPageContent={(val) => dispatch(updateCurrentPageContent(val))}
                                removeCurrentPage={() => dispatch(removePage())}
                                prevPage={() => dispatch(prevPage())}
                                nextPage={() => dispatch(nextPage())}
                                sender={sender}
                                setSender={(val) => dispatch(setSender(val))}
                                pages={pages}
                                currentPage={currentPage}
                                receiver={receiver}
                                setReceiver={(val) => dispatch(setReceiver(val))}
                                goToPrevious={() => handlePageClick("titlePage")}
                                addNewPage={() => dispatch(addPage())}
                            />
                        )}
                        <div className="create-card-btn-wrap">
                            <div
                                className={`previous-card-btn ${currentPage === 0 ? "disabled" : ""}`}
                                onClick={currentPage === 0 ? () => handlePageClick("titlePage") : () => dispatch(prevPage())}
                            >
                                Previous
                            </div>
                            <div className="add-new-card-btn" onClick={() => dispatch(addPage())}>
                                Add new page
                            </div>
                            <div
                                className={`delete-card-btn ${pages.length === 1 ? "disabled" : ""}`}
                                onClick={pages.length === 1 ? null : () => dispatch(removePage())}
                            >
                                Delete page
                            </div>
                            <div className="view-card-btn">View</div>
                            <div className="create-card-btn" onClick={handleClick}>
                                Create
                            </div>
                            <div
                                className="next-card-btn"
                                onClick={
                                    activePage === "titlePage"
                                        ? () => handlePageClick("contentPage")
                                        : currentPage === pages.length - 1
                                            ? null
                                            : () => dispatch(nextPage())
                                }
                            >
                                Next
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default EditCard;
