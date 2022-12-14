import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  // Grabbing Values from the App-Global-Context
  const { error, searchTerm, setSearchTerm } = useGlobalContext()

  return (
    <form className="search-form">
      <h2>search movies</h2>
      <input type="text" className='form-input' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      {error.show && <div className='error'>{error.message}</div>}
    </form>
  )
}

export default SearchForm
