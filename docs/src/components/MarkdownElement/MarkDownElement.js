import React, { Component, PropTypes } from 'react';
import marked from 'marked';
import { highlight } from 'highlight.js';
// import markDownCSSString from './mui-github-markdown';

const styles = {
  root: {
    marginTop: 20,
    marginBottom: 20,
    padding: '0 10px',
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

  componentWillMount() {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      //  highlight(code, lang) {
      //    const r = highlight(lang, code).value;
      //    console.log(r");
      //    return r;
      //  },
      highlight(code) {
        return require('highlight.js').highlightAuto(code).value;
      },
      // highlight: function (code, lang, callback) {
      //   require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function (err, result) {
      //     callback(err, result.toString());
      //   });
      // }
    });
  }

  // componentDidMount() {
  //   if (this.ref) {
  //     // console.log(highlight('javascript', this.props.text).value);
  //     // highlight('js', this.ref);
  //   }
  // }

  render() {
    const {
      style,
      lang,
      text,
    } = this.props;
    // console.log(highlight);
    // console.log(lang && highlight(lang, text).value);

    console.log(highlight);
    /* eslint-disable react/no-danger */
    return (
      <div>
        {/* <style dangerouslySetInnerHTML={{ __html: markDownCSSString }} /> */}
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
