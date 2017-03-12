import React, {Component, PropTypes} from 'react'
import 'glamor/reset'
import {css} from 'glamor'
import Header from './Header'
import Main from './Main'

css.global('html, body', {
  fontFamily: "'HiraginoSans-W2', 'Yu Gothic', YuGothic, sans-serif",
  fontSize: 14,
})
css.global(' code, pre', {
  fontFamily: "Ricty, Inconsolata, monospace"
})
css.global('h2', {
  fontSize: 18,
  fontWeight: 400,
  fontFamily: "'Osaka', 'HiraginoSans-W4', 'Yu Gothic', YuGothic, sans-serif",
})

export default () => (
  <div >
    <Header />

    <Main />
  </div>
)
