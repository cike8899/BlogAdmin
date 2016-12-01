import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import Header from '../../components/Header' import MainSection from
// '../../components/MainSection' import * as TodoActions from
// '../../actions/todos' import style from './style.less' import style from
// '../../../node_modules/font-awesome/css/font-awesome.min.css';
import * as TagActions from '../../actions/tags';
import * as CurArticleActions from '../../actions/currentArticle';
import * as NoteActions from '../../actions/notes';
import * as UserActions from '../../actions/users';
import ArticleControl from '../../components/AtiticleControl/articleControl';
import FontAwesome from 'react-fontawesome';

class Backend extends Component {
    render() {
        const {children, tags, actions, currentArticle, notes} = this.props
        return (
            <div style={{
                height: '100%'
            }}>
                <ArticleControl actions={actions} tags={tags}
                    currentArticle={currentArticle} notes={notes} />
                {children}
            </div>
        )
    }
}
Backend.propTypes = {
    // todos: PropTypes.array, actions: PropTypes.object,
    actions: PropTypes.object,
    children: PropTypes.node,
    tags: PropTypes.array
}

const TargetActions = {};
Object.assign(TargetActions, TagActions, CurArticleActions, NoteActions, UserActions);


function mapStateToProps(state) {
    // return {todos: state.todos}
    return { tags: state.tags, currentArticle: state.currentArticle, notes: state.notes };
}

function mapDispatchToProps(dispatch) {
    return {
        // actions: bindActionCreators(TodoActions, dispatch)
        actions: bindActionCreators(TargetActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Backend)
