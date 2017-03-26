import React, {Component, PropTypes} from 'react'
import Memos from './Memos'
import {css} from 'glamor'

export const style = {
  maxWidth: 720,
  margin: '32px auto',
}

export default () => (
  <main className={css(style)}>
    <Memos />
  </main>
)
