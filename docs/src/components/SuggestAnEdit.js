import React from 'react'
import Button from 'uxi/Button'
import { Github } from 'uxi/Icons'

const SuggestAnEdit = props => {
  return (
    <Button
      icon={<Github />}
      text="suggest an Edit"
      onClick={(e) => {
        const href = window.location && window.location.href

        window.location.assign(
          encodeURI(
            `https://github.com/uxilab/uxi/issues/new?title=Suggestion&body=${href}`
          )
        )
      }}
    />
  )
}

export default SuggestAnEdit
