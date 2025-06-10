import React, { useState } from 'react';
import HeaderControls from './components/HeaderControls';
import ProfileSection from './components/ProfileSection';
import FavoritesDisplay from './components/FavoritesDisplay';
import AppletChromeControls from './components/AppletChromeControls';
import { useProfileLogic } from './hooks/useProfileLogic';
import { useRoleModal } from './hooks/useRoleModal';
import { favorites } from './data/users';
import { Card, Modal, Spin } from 'antd';
import './styles.css';

const EmployeeScreen = () => {
    const {
        userAndRoleField,
        displayName,
        displayRole,
        userNameId,
        employeeCode,
        managerName,
        autoCompleteOptions,
        handleAutoCompleteSearch,
        handleAutoCompleteChange
    } = useProfileLogic();

    const { isModalOpen, modalContent, isLoading, openModal, closeModal } = useRoleModal();

    const [isAppletChecked, setIsAppletChecked] = useState(false);
    const [isNewChromeChecked, setIsNewChromeChecked] = useState(false);

    return (
        <div className="app-container" dir="rtl">
            <Card className="main-card" dir="rtl" bordered={false}>
                <HeaderControls />
                <ProfileSection
                    userAndRoleField={userAndRoleField}
                    displayName={displayName}
                    displayRole={displayRole}
                    userNameId={userNameId}
                    employeeCode={employeeCode}
                    managerName={managerName}
                    autoCompleteOptions={autoCompleteOptions}
                    onAutoCompleteSearch={handleAutoCompleteSearch}
                    onAutoCompleteChange={handleAutoCompleteChange}
                />
                <AppletChromeControls
                    isAppletChecked={isAppletChecked}
                    isNewChromeChecked={isNewChromeChecked}
                    onAppletChange={setIsAppletChecked}
                    onNewChromeChange={setIsNewChromeChecked}
                />
                <FavoritesDisplay favorites={favorites} />
            </Card>
            <Modal
                title={<span dir="rtl">תיאור תפקיד מורחב</span>}
                open={isModalOpen}
                onCancel={closeModal}
                footer={null}
                centered
                width={600}
                className="ant-modal-custom"
            >
                {isLoading ? (
                    <div className="modal-loading-spinner">
                        <Spin size="small" tip="טוען תיאור תפקיד..." />
                    </div>
                ) : (
                    <div className="modal-content-text" dangerouslySetInnerHTML={{ __html: modalContent }}></div>
                )}
            </Modal>
        </div>
    );
};

export default EmployeeScreen;
