import React from 'react'
import { FlatButton } from 'uxi/Button'
import { Github } from 'uxi/Icons'

const SuggestAnEdit = props => {
  return (
    <FlatButton
      icon={<Github />}
      text="suggest an Edit"
      onClick={(e) => {
        const href = window.location && window.location.href

        window.open(
          encodeURI(
            `https://github.com/uxilab/uxi/issues/new?title=Suggestion&body=${href}`
          )
        )
      }}
    />
  )
}

export default SuggestAnEdit
