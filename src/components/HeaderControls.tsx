import React from 'react';
import { Button, Tooltip } from 'antd';
import { StepForwardOutlined, TeamOutlined, MailOutlined, StarOutlined } from '@ant-design/icons';

const HeaderControls: React.FC = () => {
    return (
        <div className="header-section">
            <Tooltip title="סקייפ" placement="bottom">
                <Button
                    type="text"
                    className="header-button"
                    icon={<StepForwardOutlined style={{ fontSize: '20px', color: 'var(--color-indigo-500)' }} />}
                />
            </Tooltip>
            <Tooltip title="TEAM" placement="bottom">
                <Button
                    type="text"
                    className="header-button"
                    icon={<TeamOutlined style={{ fontSize: '20px', color: 'var(--color-indigo-500)' }} />}
                />
            </Tooltip>
            <Tooltip title="מייל" placement="bottom">
                <Button
                    type="text"
                    className="header-button"
                    icon={<MailOutlined style={{ fontSize: '20px', color: 'var(--color-indigo-500)' }} />}
                />
            </Tooltip>
            <Tooltip title="מועדפים" placement="bottom">
                <Button
                    type="text"
                    className="header-button"
                    icon={<StarOutlined style={{ fontSize: '20px', color: 'var(--color-indigo-500)' }} />}
                />
            </Tooltip>
        </div>
    );
};

export default HeaderControls; 