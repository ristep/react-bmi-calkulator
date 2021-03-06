import ReactMarkdown from 'react-markdown'

const xtend = require('xtend')
const htmlParser = require('./plugins/html-parser')

const parseHtml = htmlParser()

function ReactMarkdownWithHtml(props) {
  const astPlugins = [parseHtml].concat(props.astPlugins || [])
  return ReactMarkdown(xtend(props, {astPlugins}))
}

ReactMarkdownWithHtml.defaultProps = ReactMarkdown.defaultProps
ReactMarkdownWithHtml.propTypes = ReactMarkdown.propTypes
ReactMarkdownWithHtml.types = ReactMarkdown.types
ReactMarkdownWithHtml.renderers = ReactMarkdown.renderers
ReactMarkdownWithHtml.uriTransformer = ReactMarkdown.uriTransformer

export default ReactMarkdownWithHtml
