import birthdayCardCover from "../../assets/birthdaycard-cover.png";
import birthdayCard from "../../assets/birthdaycard.png";

const TitleForm = ({title, setTitle, goToNext, handleClickTitle}) => {
    return (
        <>
            <div className="edit-card-form-wrap">
                <div className="edit-card-form-header">
                    <h3>Birthday Card</h3>
                </div>
                <div className="edit-form-title-wrapper">
                    <div className="edit-card-form-title-wrap">
                        <div className="edit-card-form-title">
                            Title:
                        </div>
                        <input type="text" name="title" className="title-name"
                               value={title} onChange={(e) => setTitle(e.target.value)}/>
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
                        <div className="content-option" onClick={handleClickTitle}>Happy Birthday!
                        </div>
                        <div className="content-option" onClick={handleClickTitle}>🤣 Happy Birthday!
                        </div>
                        <div className="content-option" onClick={handleClickTitle}>💖 Happy Birthday!
                            😘🎈
                        </div>
                        <div className="content-option" onClick={handleClickTitle}>🎊 Happy
                            Birthday,! 🥳🎁
                        </div>
                        <div className="content-option" onClick={handleClickTitle}>🎉 Wishing you a
                            wonderful
                            birthday filled with joy
                            and success! 🎂🎈
                        </div>
                        <div className="content-option" onClick={handleClickTitle}>🍀 Happy Birthday!
                        </div>
                        <div className="content-option" onClick={handleClickTitle}>🚀 Happy Birthday!
                        </div>
                        <div className="content-option" onClick={handleClickTitle}>Happy Birthday!
                            🎁🎈
                        </div>
                        <div className="content-option" onClick={handleClickTitle}>🎶 Another year,
                            another
                            adventure!🥂🎂
                        </div>
                        <div className="content-option" onClick={handleClickTitle}>Wishing you a
                            birthday as special as you are. 🎉💖
                        </div>
                    </div>
                </div>
            </div>
            <div className="edit-card-view-wrap">
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
            </div>
        </>
    )
}

export default TitleForm;