import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { parse } from 'react-docgen';
import CodeBlock from './CodeBlock';
// import ClearFix from 'material-ui/internal/ClearFix';
import { DivPadding } from '../../../../src/Base';
/* eslint-disable */

class CodeExample extends Component {
 static propTypes = {
   children: PropTypes.node,
   code: PropTypes.string.isRequired,
   component: PropTypes.bool,
   description: PropTypes.string,
   exampleBlockStyle: PropTypes.object,
   layoutSideBySide: PropTypes.bool,
   title: PropTypes.string,
   fullWidth: PropTypes.bool,
   hasPadding: PropTypes.bool,
 };

 static defaultProps = {
   component: true,
 };

 static contextTypes = {
   muiTheme: PropTypes.object,
 };

 render() {
   const {
     children,
     code,
     component,
     exampleBlockStyle,
     layoutSideBySide,
     hasPadding,
   } = this.props;

  const styles = {
    root: {
      backgroundColor: 'white',
      border: '1px solid lightGrey',
      marginBottom: 32,
      borderRadius: '3px',
    },
    exampleBlock: {
      padding: hasPadding ? '14px' : 0,
      margin: 0,
      width: layoutSideBySide ? '45%' : null,
      float: layoutSideBySide ? 'right' : null,
    },
  };

  //  const docs = component ? parse(code) : {};

   return (
     <DivPadding style={styles.root}>
       <CodeBlock
         title={this.props.title}
         description={this.props.description}
       >
         {code}
       </CodeBlock>
       <div style={Object.assign(styles.exampleBlock, exampleBlockStyle)}>{children}</div >
     </DivPadding>
   );
 }
}

export default CodeExample;
