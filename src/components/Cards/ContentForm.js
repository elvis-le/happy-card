import birthdayCardCover from "../../assets/birthdaycard-cover.png";
import birthdayCard from "../../assets/birthdaycard.png";
import {GrFormNextLink, GrFormPreviousLink} from "react-icons/gr";
import {IoMdAdd} from "react-icons/io";
import {MdDeleteForever} from "react-icons/md";

const ContentForm = ({
                         sender,
                         setSender,
                         receiver,
                         setReceiver,
                         content,
                         setContent,
                         addNewPage,
                         handleClickContent,
                         goToPrevious,
                         currentPage,
                         pages,
                         updateCurrentPageContent,
                         removeCurrentPage,
                         prevPage,
                         nextPage,
                         setCurrentPage
                     }) => {
    return (
        <>
            <div className="edit-card-form-wrap">
                <div className="edit-card-form-header">
                    <h3>Birthday Card</h3>
                </div>
                <div className="edit-form-content-wrapper">
                    <div className="edit-card-form-sender-wrap">
                        <div className="edit-card-form-sender">
                            Sender:
                        </div>
                        <input type="text" name="sender" className="sender-name"
                               value={sender} onChange={(e) => setSender(e.target.value)}/>
                    </div>
                    <div className="edit-card-form-receiver-wrap">
                        <div className="edit-card-form-receiver">
                            Receiver:
                        </div>
                        <input type="text" name="receiver" className="receiver-name"
                               value={receiver} onChange={(e) => setReceiver(e.target.value)}/>
                    </div>
                    <div className="edit-card-form-content-wrap">
                        <div className="edit-card-form-content">
                            Content:
                        </div>
                        <textarea name="content" className="content"
                                  value={pages[currentPage].content}
                                  onChange={(e) => updateCurrentPageContent(e.target.value)}/>
                    </div>
                </div>
                <div className="suggest-content-option-wrap">
                    <div className="suggest-content-type-option">
                        <div className="content-type-option">Choose content</div>
                        <div className="content-type-option">Love</div>
                        <div className="content-type-option">Husband</div>
                        <div className="content-type-option">Wife</div>
                        <div className="content-type-option">Friend</div>
                    </div>
                    <div className="suggest-content-option">
                        <div className="content-option" onClick={(e) => updateCurrentPageContent(e.currentTarget.textContent || "")}>🎉 Happy
                            Birthday! May
                            this
                            year bring you happiness,
                            success, and all your heart’s desires. 🎂🎁
                        </div>
                        <div className="content-option" onClick={(e) => updateCurrentPageContent(e.currentTarget.textContent || "")}
                        >🤣 Happy
                            Birthday!
                            Don’t
                            count
                            the candles, just
                            enjoy
                            the glow. Wishing you a fantastic year ahead! 🎂🔥
                        </div>
                        <div className="content-option" onClick={(e) => updateCurrentPageContent(e.currentTarget.textContent || "")}>💖 Happy
                            Birthday, my
                            love!
                            Every moment with you is
                            special, and I’m so lucky to have you by my side. Love you forever! 😘🎈
                        </div>
                        <div className="content-option" onClick={(e) => updateCurrentPageContent(e.currentTarget.textContent || "")}>🎊 Happy
                            Birthday,
                            bestie! May
                            your day be as amazing
                            as you are. Let’s make unforgettable memories together! 🥳🎁
                        </div>
                        <div className="content-option" onClick={(e) => updateCurrentPageContent(e.currentTarget.textContent || "")}>🎉 Wishing you a
                            wonderful
                            birthday filled with joy
                            and success. May this year bring you prosperity and happiness! 🎂🎈
                        </div>
                        <div className="content-option" onClick={(e) => updateCurrentPageContent(e.currentTarget.textContent || "")}>🍀 Happy
                            Birthday!
                            Wishing you
                            a year full of good
                            health, laughter, and endless happiness. Stay amazing! 💪🎉
                        </div>
                        <div className="content-option" onClick={(e) => updateCurrentPageContent(e.currentTarget.textContent || "")}>🚀 Happy
                            Birthday! May
                            you
                            reach new heights in your
                            career and personal life. Keep shining! ✨🎂
                        </div>
                        <div className="content-option" onClick={(e) => updateCurrentPageContent(e.currentTarget.textContent || "")}>❤️ Wishing you
                            a day
                            filled
                            with love, laughter, and
                            everything that brings you joy. Happy Birthday! 🎁🎈
                        </div>
                        <div className="content-option" onClick={(e) => updateCurrentPageContent(e.currentTarget.textContent || "")}>🎶 Another year,
                            another
                            adventure! May your birthday
                            be the start of a fantastic journey ahead. 🥂🎂
                        </div>
                        <div className="content-option" onClick={(e) => updateCurrentPageContent(e.currentTarget.textContent || "")}>🌟 You are one
                            of a
                            kind, and
                            today is the perfect
                            day to celebrate you! Wishing you a birthday as special as you are. 🎉💖
                        </div>
                    </div>
                </div>
            </div>
            <div className="edit-card-view-wrap">
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
                            <span>{currentPage+1}/{pages.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        ;
};

export default ContentForm;
