import * as React from "react";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


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

export default DialogsContainer;
