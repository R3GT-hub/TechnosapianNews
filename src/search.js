import React from 'react'
import { useGlobalContext } from './context'


const Search = () => {
    const {query,searchPost}=useGlobalContext();
  return (
    <>
    <h1>Hacker NEWS</h1>
    <form onSubmit={(e)=>e.preventDefault}>
        <div>
            <input type="text" name="" id="" placeholder='search here'value={query} onChange={(e=>searchPost(e.target.value))} />
        </div>
    </form>
    </>
  )
}

export default Search