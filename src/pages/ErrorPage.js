import React from 'react';

function ErrorPage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>404</h1>
            <p style={styles.message}>Page Not Found</p>
            <a href="/" style={styles.link}>Go Back Home</a>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        color: '#343a40',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
    },
    header: {
        fontSize: '6rem',
        margin: '0',
    },
    message: {
        fontSize: '1.5rem',
        margin: '1rem 0',
    },
    link: {
        fontSize: '1.2rem',
        color: '#007bff',
        textDecoration: 'none',
        marginTop: '1rem',
    },
};

export default ErrorPage;
