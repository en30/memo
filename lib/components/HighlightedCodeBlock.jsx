import React, {Component, PropTypes} from 'react'
import Prism from "prismjs"
import ruby from "prismjs/components/prism-ruby"
Prism.languages.extend({ruby})

export default ({language, literal}) => {
  const syntax = Prism.languages[language];
  if(!syntax) return (
    <pre>
      <div style={{color: 'red'}}>"{language}" is not supported. Extend Prism.languages.</div>
      <code>{literal}</code>
    </pre>
  )
  return (
    <pre className={`language-${language}`}>
      <code dangerouslySetInnerHTML={{__html: Prism.highlight(literal, syntax)}} />
    </pre>
  )
}
