import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import { highlight } from 'highlight.js';

/** styles comes from global css (check Theme/markdown.js) */

const styles = {
  root: {
    marginTop: 20,
    marginBottom: 20,
    padding: '0 10px',
    borderBottom: '1px solid lightGrey',
  },
};

class MarkdownElement extends Component {
  static propTypes = {
    style: PropTypes.object,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    text: '',
  };

  state = { text: '' }

  componentWillMount() {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight(code) {
        return require('highlight.js').highlightAuto(code).value;
      },
    });
  }
  componentWillMount() {
    const { src } = this.props;
    if ('fetch' in window) {
      fetch(src)
        .then(response => {
          console.log(response)
          console.log(response.html)
          const fileTextContent = response.text()
          console.log(fileTextContent)
          return fileTextContent
        })
        .then(text => {
          this.setState({ text: text })
        })
        .catch(error => console.warn(error));
    }
  }

  render() {
    const {
      style,
      lang,
    } = this.props;
    const { text } = this.state;
    /* eslint-disable react/no-danger */
    return (
      <div>
        <div
          ref={ref => this.ref = ref}
          style={Object.assign({}, styles.root, style)}
          className="hljs markdown-body"
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        />
      </div>
    );
    /* eslint-enable */
  }
}

export default MarkdownElement;
