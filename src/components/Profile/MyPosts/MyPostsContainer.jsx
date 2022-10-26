import * as React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addMessageCreator, updateNewMessageCreator} from "../../../redux/dialogs-reducer";
// import StoreContext from "../../../StoreContext";

/*
const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostActionCreator(text)
                        store.dispatch(action);
                        console.log(text);
                    }
                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    );
}
*/

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        addMessageText: (text) => {
            dispatch(updateNewPostActionCreator(text));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
