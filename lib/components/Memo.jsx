import React, {Component, PropTypes} from 'react'
import {css} from 'glamor'
import moment from 'moment'

const style = css({
  padding: '10px',
  '& > time': {
    float: 'right',
    fontSize: '12px',
    fontFamily: "'Bitter', serif",
    color: '#333',
  }
})

const mainStyle = css({
  margin: '4px 0',
  fontSize: 14,
  lineHeight: 1.3,
})

export default ({component, createdAt}) => {
  const Comp = component;
  return (
    <div className={style}>
      <time>{moment(createdAt).format('MMMM Do YYYY, HH:mm')}</time>
      <div className={mainStyle}>
        <Comp />
      </div>
    </div>
  )
}
