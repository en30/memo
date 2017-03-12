import React, {Component, PropTypes} from 'react'
import Memo from './Memo'
import {css} from 'glamor'
import memos from '../memos'

const style = css({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  '& > li': {
    padding: '8px 4px',
  },
  '& li + li': {
    borderTop: '1px solid #999'
  }
})

export default () => (
  <ul className={style}>
    {memos.map((memo) => <li key={memo.id}><Memo {...memo} /></li>)}
  </ul>


)
