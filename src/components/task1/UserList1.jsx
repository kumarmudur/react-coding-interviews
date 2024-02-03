import { useEffect, useState } from "react";

const URL = 'https://jsonplaceholder.typicode.com/users';

const UserList1 = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch(URL)
            .then(response => response.json())
            .then(users => setUsers(users))
            .catch(error => console.error(error));
    };

    return (
        <div style={{ textAlign: 'center'}}>
            <h1>Users Details Table</h1>
            <table>
                <thead>
                   <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                   </tr>
                </thead>
                <tbody>
                    {
                        users?.map((id, name, email, phone) => (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserList1;