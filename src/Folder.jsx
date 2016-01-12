import React from 'react';
import File from './File';

const Folder = React.createClass({
    getInitialState: function() {
      return {
          showContent: false
      }  
    },
    handleToggle () {
       const newState = !this.state.showContent;
       this.setState({
           showContent: newState
       })  
    },
    render () {
        const styles = {
            folder: {
                fontWeight: 'bold',
                fontSize: '24px'
            },
            indent: {
                marginLeft: '10px'
            }
        }
        // var item = this.props.item;
        // var name = item.name;
    const items = this.props.item.items ? this.props.item.items.map(function(treeItem, index) {
        console.log('treeItem', treeItem);
        if (treeItem.type === 'file') {
            return <File key={index} item={treeItem}/>
        }
        if (treeItem.type === 'folder') {
            return <Folder key={index} item={treeItem} />
        }
    }) : [];
    
    const icon = this.state.showContent ? <i className="fa fa-folder-open-o"></i> : <i className="fa fa-folder-o"></i>
    const content = this.state.showContent ? items : null;
    console.log('folderContent', content);
        return (
            <div>
                <div onClick={this.handleToggle} style={styles.folder}> <span>{icon}</span> {this.props.item.name} </div>
                <div style={styles.indent}> {content} </div>
            </div>
            
        )
    }
})

export default Folder;