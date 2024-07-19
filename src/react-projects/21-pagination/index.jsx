import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange}) => {

    const generateNoOfPages = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    }

    return (
        <div className="pagination">
            <button 
                className="pagination-btn" 
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Prev
            </button>
             {
                generateNoOfPages().map(pageNo => (
                    <button 
                        key={pageNo} 
                        className={`pagination-btn ${currentPage === pageNo ? 'active' : ''}`} 
                        onClick={() => onPageChange(pageNo)}>
                            {pageNo}
                    </button>
                ))
             }
            <button 
                className="pagination-btn" 
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    )
}

Pagination.propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    onPageChange: PropTypes.func,
}

Pagination.defaultProps = {
    currentPage: 1,
    totalPages: 10,
    onPageChange: () => {}
}

export default Pagination;