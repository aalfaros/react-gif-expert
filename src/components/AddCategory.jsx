import { useState } from 'react'
import { PropTypes } from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onFormSubmit = e => {
    e.preventDefault()
    const category = inputValue.trim()

    if (!category) {
      setInputValue('')
      return
    }

    onNewCategory(category)
    setInputValue('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
