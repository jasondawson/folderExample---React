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
const folder1 = {
    type: 'folder',
    name: 'stuff',
    items: [file2, file3]
}

const folder = {
    type: 'folder',
    name: 'root',
    items: [folder1, folder1, file1, file2]
}

console.log(folder);

const App = React.createClass({
    render: function () {
        return (
            <Folder item={folder} />
        )
    }
});

export default App;
