import {sendMessageCreator, deleteMessageCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router";

const mapStateToProps = (state) => {
    return {
        usersData: state.dialogsPage.usersData,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (messageBody, userId) => {
            dispatch(sendMessageCreator(messageBody, userId))
        },
        onDeleteMessageClick: (numMsg, userId) => {
            dispatch(deleteMessageCreator(numMsg, userId))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect, withRouter)(Dialogs)