import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// import Header from '../../components/Header' import MainSection from
// '../../components/MainSection' import * as TodoActions from
// '../../actions/todos' import style from './style.less' import style from
// '../../../node_modules/font-awesome/css/font-awesome.min.css';
import * as TagActions from '../../actions/tags';
import ArticleControl from '../../components/AtiticleControl/articleControl';
import FontAwesome from 'react-fontawesome';

class Backend extends Component {
    render() {
        const {children, tags, actions} = this.props
        return (
            <div style={{
                height: '100%'
            }}>
                <ArticleControl actions={actions} tags={tags}/> {children}
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

function mapStateToProps(state) {
    // return {todos: state.todos}
    return {tags: state.tags};
}

function mapDispatchToProps(dispatch) {
    return {
        // actions: bindActionCreators(TodoActions, dispatch)
        actions: bindActionCreators(TagActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Backend)
