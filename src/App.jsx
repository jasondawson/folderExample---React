import React from 'react';
import ReactDOM from 'react-dom';

import Folder from './Folder';

const file1 = {
    type: 'file',
    name: 'test.js'
}

const file2 = {
    type: 'file',
    name: 'test2.js'
}

const file3 = {
    type: 'file',
    name: 'test3.js'
}
const file4 = {
    type: 'file',
    name: 'youve-reached-the-end.js'
}
const folder1 = {
    id: 1,
    type: 'folder',
    name: 'stuff',
    contents: [file2, file3, file4]
}
const folder2 = {
    id: 2,
    type: 'folder',
    name: 'stuff',
    contents: [file2, file3, folder1]
}
const folder3 = {
    id: 3,
    type: 'folder',
    name: 'stuff',
    contents: [file2, file3, folder2]
}
const folder4 = {
    id: 4,
    type: 'folder',
    name: 'stuff',
    contents: [file2, file3, folder3]
}
const folder7 = {
    id: 7,
    type: 'folder',
    name: 'seven',
    contents: [file2]
}
const folder5 = {
    id: 5,
    type: 'folder',
    name: 'stuff',
    contents: [file2, file3, folder4, folder7]
}
const folder6 = {
    id: 6,
    type: 'folder',
    name: 'stuff',
    contents: [file2, file3, folder5]
}

const folder = {
    id: 0,
    type: 'folder',
    name: 'root',
    contents: [folder6, file1, file2]
}

const App = React.createClass({
    getInitialState: function() {
        return {
            isOpen: {}
        }
    },
    handleToggle (id) {
        let oldVal = this.state.isOpen[id];
        let newState = this.state.isOpen;
        newState[id] = oldVal ? false : true;
        this.setState({
            isOpen: newState
        })
    },
    render: function () {
        return (
            <Folder folderDetails={folder} handleToggle={this.handleToggle} isOpen={this.state.isOpen}/>
        )
    }
});

export default App;
