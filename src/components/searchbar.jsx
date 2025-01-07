import React from 'react';

const SearchBar = ({ value, onChange }) => {
    return (
        <div style={styles.container}>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search recipes..."
            style={styles.input}
        />
        </div>
    );
};

const styles = {
    container: {
        position: 'fixed',
        top: 0,
        width: '80%',
        padding: '10px',
        zIndex: 1000,
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: 'rgba(148, 233, 87)',
    },
};

export default SearchBar;