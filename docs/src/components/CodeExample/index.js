import React, { Component, PropTypes } from 'react';
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
   exampleBlockStyle: React.PropTypes.object,
   layoutSideBySide: PropTypes.bool,
   title: PropTypes.string,
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
   } = this.props;

  //  const palette = this.context.muiTheme.rawTheme.palette;
  //  const canvasColor = palette.canvasColor;

   const styles = {
     root: {
       backgroundColor: 'white',
       border: '1px solid lightGrey',
       marginBottom: 32,
       borderRadius: '3px',
     },
     exampleBlock: {
       padding: '14px 24px 24px',
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
         description={this.props.description || 'description'}
       >
         {code}
       </CodeBlock>
       <div style={Object.assign(styles.exampleBlock, exampleBlockStyle)}>{children}</div >
     </DivPadding>
   );
 }
}

export default CodeExample;
