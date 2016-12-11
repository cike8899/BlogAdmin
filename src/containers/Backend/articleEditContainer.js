import React, { Component } from 'react';
import ArticleEditWrap from '../../components/ArticlePane/articleEditWrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NoteActions from '../../actions/notes';


class ArticleEditContainer extends Component {
    render() {
        const {note, notesActions, allTags} = this.props;
        return (
            <ArticleEditWrap note={note} notesActions={notesActions} allTags={allTags} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        note: state.notes.selectedNote,
        allTags: state.allTags
    }
}

const mapDispatchToProps = (dispatch) => ({
    notesActions: bindActionCreators(NoteActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditContainer);