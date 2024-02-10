import { useEffect, useState } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/users';

const OptimizedSearch = () => {
    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredUser, setFilteredUser] = useState({});

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(users => setUsers(users))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        const abortController = new AbortController();
        const filterTimer = setTimeout(() => {
            try {
                fetch(`https://jsonplaceholder.typicode.com/users?username=${searchText}`, {
                    signal: abortController.signal
                })
                .then(response => response.json())
                .then(users => setFilteredUser(users[0]));
            } catch (error) {   
                if (error.name === 'AbortError') {
                    console.log("Request was aborted");
                } else {
                    console.error("Error fetching user data:", error);
                }
            }
        }, 300);
        return () => {
            abortController.abort();
            clearTimeout(filterTimer);
        }
    }, [searchText]);

    const handleSearchText = event => {
        const { value } = event.target;
        setSearchText(value);
    }

    console.log('filteredUser...', filteredUser);

    return (
        <div style={{ textAlign: 'center'}}>
            <h2>Users Data</h2>
            <input 
                type='text'
                placeholder='Search by username'
                value={searchText}
                onChange={handleSearchText}
            />
            <table style={{ borderCollapse: 'collapse', margin: 'auto', border: '1px solid red'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        users.map(({ id, name, username, email}) => (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <h4>Search Result</h4>
                { filteredUser && filteredUser.name }
            </div>
        </div>
    );
};

export default OptimizedSearch;