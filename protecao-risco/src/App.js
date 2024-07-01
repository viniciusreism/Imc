import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import SplashScreen from './SplashScreen';
import Home from './pages/Home';
import AccessPage from './pages/AccessPage';
import SubAccessPage from './pages/SubAccessPage';
import EquipmentPage from './pages/EquipmentPage';
import EquipmentDetailsPage from './pages/EquipmentDetailsPage';
import AlimentacaoPage from './pages/AlimentacaoPage';

const App = () => {
    const [page, setPage] = useState('splash');
    const [selectedAccess, setSelectedAccess] = useState(null);
    const [selectedSubAccess, setSelectedSubAccess] = useState(null);
    const [selectedEquipment, setSelectedEquipment] = useState(null);

    const handleSplashComplete = () => {
        setPage('home');
    };

    const handleLogin = (username) => {
        if (username === 'C6001746' || username === 'C6001730') {
            setPage('access');
        } else {
            alert('Login inválido');
        }
    };

    const handleAccessClick = (access) => {
        setSelectedAccess(access);
        setPage('subaccess');
    };

    const handleSubAccessClick = (subAccess) => {
        setSelectedSubAccess(subAccess);
        setPage('equipment');
    };

    const handleEquipmentClick = (equipment) => {
        setSelectedEquipment(equipment);
        setPage('equipmentDetails');
    };

    const handleFeedClick = () => {
        setPage('alimentacao');
    };

    const handleBack = () => {
        if (page === 'subaccess') setPage('access');
        if (page === 'equipment') setPage('subaccess');
        if (page === 'equipmentDetails') setPage('equipment');
        if (page === 'alimentacao') setPage('equipmentDetails');
    };

    return (
        <View style={styles.app}>
            <StatusBar barStyle="light-content" />
            {page === 'splash' && <SplashScreen onComplete={handleSplashComplete} />}
            {page === 'home' && <Home onLogin={handleLogin} />}
            {page === 'access' && <AccessPage onAccessClick={handleAccessClick} onBack={handleBack} />}
            {page === 'subaccess' && selectedAccess && (
                <SubAccessPage access={selectedAccess} onSubAccessClick={handleSubAccessClick} onBack={handleBack} />
            )}
            {page === 'equipment' && selectedSubAccess && (
                <EquipmentPage subAccess={selectedSubAccess} onEquipmentClick={handleEquipmentClick} onBack={handleBack} />
            )}
            {page === 'equipmentDetails' && selectedEquipment && (
                <EquipmentDetailsPage equipment={selectedEquipment} onBack={handleBack} onFeed={handleFeedClick} />
            )}
            {page === 'alimentacao' && (
                <AlimentacaoPage onBack={handleBack} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#282c34',
    },
});

export default App;
