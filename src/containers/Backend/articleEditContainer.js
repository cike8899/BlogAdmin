import React, { Component } from 'react';
import ArticleEditWrap from '../../components/ArticlePane/articleEditWrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NoteActions from '../../actions/notes';


class ArticleEditContainer extends Component {
    render() {
        const {note, notesActions} = this.props;
        return (
            <ArticleEditWrap note={note} notesActions={notesActions} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        note: state.notes.selectedNote
    }
}

const mapDispatchToProps = (dispatch) => ({
    notesActions: bindActionCreators(NoteActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditContainer);