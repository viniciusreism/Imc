import React from 'react';

const subAccesses = {
    '143QD01C2': ['112QD02C1', '112QD02C2', '112QD02C3'],
    // Adicione o restante dos sub-acessos aqui
};

function SubAccessPage({ access, onSubAccessClick }) {
    return (
        <div>
            <h2>{access}</h2>
            <ul>
                {subAccesses[access].map((subaccess) => (
                    <li key={subaccess} onClick={() => onSubAccessClick(subaccess)}>
                        {subaccess}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SubAccessPage;
