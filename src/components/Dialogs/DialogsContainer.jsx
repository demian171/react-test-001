import * as React from "react";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
//import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

/*
const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage;
                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageCreator(text));
                    console.log(text);
                }
                let addMessage = () => {
                    store.dispatch(addMessageCreator());
                }

                return <Dialogs updateNewMessageBody={onMessageChange} addMessageText={addMessage} state={state}/>
            }
        }

    </StoreContext.Consumer>
}
*/

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageCreator(body));
        },
        addMessageText: () => {
            dispatch(addMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;
