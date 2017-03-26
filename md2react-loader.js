
module.exports = function(source) {
  this.cacheable(true);
  return `
import React from "react"
import ReactMarkdown from "react-markdown"
import HighlightedCodeBlock from "../lib/components/HighlightedCodeBlock"

const source = ${JSON.stringify(source)};
export default () => <ReactMarkdown source={source} renderers={{CodeBlock: HighlightedCodeBlock}} />
`;
}
