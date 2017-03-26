import React, {Component, PropTypes} from 'react'
import {css} from 'glamor'
import {style as mainStyle} from './Main'

const style ={
  backgroundColor: 'black',
  color: 'white',
  padding: '8px 0',
  '& > h1': {
    maxWidth: mainStyle.maxWidth,
    padding: '0 4px',
    margin: '0 auto',
    fontSize: 18,
    fontWeight: 'normal',
    fontFamily: "'Abel', sans-serif"
  }
}

export default () => (
 <header className={css(style)}>
   <h1>en30's memo</h1>
 </header>
)
