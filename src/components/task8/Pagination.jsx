import { useEffect, useState } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/posts';
const ITEMS_PER_PAGE = 10;

const Pagination = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        try {
            const response = await fetch(`${URL}?_page=${currentPage}&_limit=${ITEMS_PER_PAGE}`);
            setData(await response.json());
            // Retrieving total count of items from the API response headers
            const totalCount = response.headers.get('X-Total-Count');
            setTotalPages(Math.ceil(totalCount /ITEMS_PER_PAGE));
        } catch(error) { console.error("Error fetching data:", error);}
    };

    const handlePageChange = (newPage) => setCurrentPage(newPage);

    return (
        <div>
            <ol>
                {
                    data?.map(({ id, title}) => (
                        <li key={id}>{title}</li>
                    ))
                }
            </ol>
            <div>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>
                    Page { currentPage } of {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;