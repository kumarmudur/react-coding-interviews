import { useEffect, useState } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/users';

const Search = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch(URL)
            .then(response => response.json())
            .then(users => setUsers(users))
            .catch(error => console.log(error));
    };

    const handleChange = event => {
        const { value} = event.target;
        setSearchTerm(value);
    }
    
    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    
    return (
        <div>
            <h2>User List</h2>
            <input 
                type="text"
                placeholder='Search by username'
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                {
                    filteredUsers?.map(({ id, name}) => (
                        <li key={id}>{name}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Search;