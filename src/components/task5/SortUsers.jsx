import { useEffect, useState } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/users';

const SortUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(users => setUsers(users))
            .catch(error => console.error(error));
    }, []);

    const handleAscendingSort = () => {
        sortUsers('ASCENDING');
    };

    const handleDescendingSort = () => {
        sortUsers('DESCENDING');
    }

    const sortUsers = (sortType) => {
       const usersData = [...users].sort((a, b) => {
            if (sortType === 'ASCENDING') {
              return a.username.localeCompare(b.username)
            } else {
              return b.username.localeCompare(a.username)
            }
       });
       setUsers(usersData);
    }
    
    return (
        <div>
            <h1>Example of short by username</h1>
            <button onClick={handleAscendingSort}>
                Sort by Ascending
            </button>
            <button onClick={handleDescendingSort}>
                Sort by Descending
            </button>
            {
                users?.map(({ id, username}) => (
                    <div key={id}>
                        <p>{username}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default SortUsers;