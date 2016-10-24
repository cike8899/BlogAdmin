import React, { Component } from 'react';
import { ContextMenu, MenuItem, ContextMenuLayer } from "react-contextmenu";

class TitleContextMenu extends Component {
    constructor(props, context) {
        super(props, context);
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, data) {
        console.log(data);
    }
    handleClick1(e, data) {
        console.log(data);
    }
    handleClick2(e, data) {
        console.log(data);
    }

    render() {
        return (
            <ContextMenu identifier="some_unique_identifier" currentItem={this.currentItem}>
                <MenuItem data={{ o: "o" }} onClick={this.handleClick}>
                    ContextMenu Item 1
                </MenuItem>
                <MenuItem data={{ p: "p" }} onClick={this.handleClick1}>
                    ContextMenu Item 2
                </MenuItem>
                <MenuItem divider />
                <MenuItem data={{ q: "q" }} onClick={this.handleClick2}>
                    ContextMenu Item 3
                </MenuItem>
            </ContextMenu>
        );
    }
}

export default TitleContextMenu;