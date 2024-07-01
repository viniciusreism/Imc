import React from 'react';

const accesses = [
    '143QD01C1', '143QD01C2', '143QD01C3', '143QD01C4', '143QD01C5',
    '143QD01C6', '143QD01C7', '143QD01C8', '143QD01C9', '143QD01C10',
    // Adicione o restante dos acessos aqui
];

function AccessPage({ onAccessClick }) {
    return (
        <div>
            <h2>Selecione um Acesso</h2>
            <ul>
                {accesses.map((access) => (
                    <li key={access} onClick={() => onAccessClick(access)}>
                        {access}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AccessPage;
