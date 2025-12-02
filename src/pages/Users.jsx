import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams(); //Query Params
    const [query, setQuery] = React.useState({
        name: searchParams.get('name') || '',
        age: searchParams.get('age') || ''
    });
    const {name, age} = query;

    const handleChnage = (e) => {
        setQuery({
            ...query, 
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({name: name, age: age});
    }

  return (
    <div>
        <h2>Search User By: {searchParams.get('name')}, {searchParams.get('age')}</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Enter Name' onChange={handleChnage} value={name} />
            <input type="number" name="age" placeholder='Enter Age' onChange={handleChnage} value={age} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Users