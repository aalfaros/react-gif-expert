import { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {
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

export { AddCategory }
