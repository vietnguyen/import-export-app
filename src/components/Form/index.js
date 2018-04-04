import React from 'react'
import s from './styles.css'

export const TYPE_FILE = 'fieldType/FILE'
export const TYPE_TEXT = 'fieldType/TEXT'
export const TYPE_SELECT = 'fieldType/SELECT'

export const CTX_DEFAULT = 'ctx/DEFAULT'
export const CTX_MORE_OPTIONS = 'ctx/MORE_OPTIONS'

export class Form extends React.Component {
  render() {
    const { title, style } = this.props
    return (
      <form style={style} className={s.form} onSubmit={this.props.onSubmit}>
        <div className={s.title}>{title}</div>
        <div className={s.content}>{this.props.children}</div>
      </form>
    )
  }
}