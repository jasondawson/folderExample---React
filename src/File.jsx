import React from 'react';

const File = React.createClass({
    render() {
        var styles = {
            file: {
                fontSize: '18px',
                fontStyle: 'italic'
            }
        }
        return (
            <div style={styles.file}><span><i className="fa fa-file"></i></span> {this.props.item.name} </div>   
        )
    }
})

export default File;