import React from 'react';

const FallbackPage: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Oops! Something went wrong.</h1>
            <p style={styles.text}>Please refresh the page or try again later.</p>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '1rem',
    },
    text: {
        fontSize: '1rem',
        textAlign: 'center',
    },
};

export default FallbackPage;
