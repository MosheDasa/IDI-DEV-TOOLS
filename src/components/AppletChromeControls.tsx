import React from 'react';
import { Button, Select, Checkbox } from 'antd';
import { LinkOutlined, DownOutlined } from '@ant-design/icons';

const { Option } = Select;

interface AppletChromeControlsProps {
    isAppletChecked: boolean;
    isNewChromeChecked: boolean;
    onAppletChange: (checked: boolean) => void;
    onNewChromeChange: (checked: boolean) => void;
}

const AppletChromeControls: React.FC<AppletChromeControlsProps> = ({
    isAppletChecked,
    isNewChromeChecked,
    onAppletChange,
    onNewChromeChange
}) => {
    return (
        <div className="control-section">
            <Button
                type="default"
                className="control-button link-button"
                icon={<LinkOutlined style={{ color: '#666', fontSize: '14px' }} />}
            >
                LINK
            </Button>

            <Select
                defaultValue="UT"
                className="full-width"
                size="small"
                dropdownMatchSelectWidth={false}
                suffixIcon={<DownOutlined style={{ color: 'var(--color-light-gray)', fontSize: '14px' }} />}
            >
                <Option value="UT">UT</Option>
                <Option value="STAGING">STAGING</Option>
                <Option value="PROD">PROD</Option>
            </Select>

            <label className="control-checkbox-label applet">
                <Checkbox checked={isAppletChecked} onChange={e => onAppletChange(e.target.checked)} />
                <span>APPLET</span>
            </label>

            <label className="control-checkbox-label new-chrome">
                <Checkbox checked={isNewChromeChecked} onChange={e => onNewChromeChange(e.target.checked)} />
                <span>NEW CHROME</span>
            </label>
        </div>
    );
};

export default AppletChromeControls; 