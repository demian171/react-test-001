import s from './Dialogs.module.css';

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className="item">Dialog_1</div>
            <div className="item">Dialog_2</div>
            <div className="item">Dialog_3</div>
            <div className="item">Dialog_4</div>
            <div className="item">Dialog_5</div>
        </div>
    );
}

export default Dialogs;
