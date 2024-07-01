import React from 'react';

const equipmentDetails = {
    '112QD17': {
        '112MC26': [
            '112BA10M', '112BA11M', '112TAE06', '112TH02M', '112TR51I',
            // Adicione o restante dos equipamentos aqui
        ],
    },
    // Adicione o restante dos equipamentos aqui
};

function EquipmentPage({ equipment, onEquipmentClick }) {
    return (
        <div>
            <h2>{equipment}</h2>
            <ul>
                {equipmentDetails[equipment].map((eq) => (
                    <li key={eq} onClick={() => onEquipmentClick(eq)}>
                        {eq}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EquipmentPage;
