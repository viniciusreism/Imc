import React, { useState } from 'react';

function Home({ onLogin }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username);
    };

    return (
        <div>
            <h1>Proteção Contra Risco de Choque e Arco Elétrico</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Login"
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Home;
