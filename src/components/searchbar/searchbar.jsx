import { useState } from 'react';
import searchIcon from '../../assets/images/layout/icon-search.svg'
import style from './searchbar.module.scss'

export const SearchBar = ({ onSearchChange }) => {
  const [input, setInput] = useState('')

  // handles search when form is submitted and prevents default formsubmit behavior + triggers the onSearchChange prop.
  const handleSearch = (e) => {
    e.preventDefault()
    onSearchChange(input)
  }

  return (
    <div className={style.searchbar}>
    <form onSubmit={handleSearch} className={style.form} >
      <input
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Søg på affald"
        className={style.input}
      />
      <button type="submit" className={style.iconBtn}>
        <img src={searchIcon} alt="search icon"  className={style.img}/>
      </button>
    </form>
    </div>
  )
}
