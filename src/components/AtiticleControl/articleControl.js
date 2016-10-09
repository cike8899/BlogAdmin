import React, {Component} from 'react';
import style from '../../styles/article.less';
import FontAwesome from 'react-fontawesome';
import Editor from 'react-simplemde-editor';
import SidebarControl from '../Sidebar/sidebarControl';
import TabControl from '../Taber/tabControl';
import Tab from '../Taber/tab';
import ArticlePane from '../ArticlePane/articlePane';
import TagSummary from '../Tag/tagSummary';
// import  from 'module';

class ArticleControl extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <TabControl>
                <Tab name="file-text">
                    <ArticlePane/>
                </Tab>
                <Tab name="tags">
                    <TagSummary actions={this.props.actions} tags={this.props.tags}/>
                </Tab>
            </TabControl>
        );
    }
}

export default ArticleControl;