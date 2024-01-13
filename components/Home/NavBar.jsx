import React from 'react';

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-around',
        listStyle: 'none',
        padding: '20px',
        backgroundColor: '#333',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
};

const NavBar = () => {
    return (
        <nav>
            <ul style={styles.nav}>
                <li>
                    <a style={styles.link} href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a style={styles.link} href="#">
                        About
                    </a>
                </li>
                <li>
                    <a style={styles.link} href="#">
                        Services
                    </a>
                </li>
                <li>
                    <a style={styles.link} href="#">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
