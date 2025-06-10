import React from 'react';
import { Card, Form, Input, Select, Typography, AutoComplete } from 'antd';
import { UserOutlined, SolutionOutlined, DownOutlined } from '@ant-design/icons';
import { useAvatarSize } from '../hooks/useAvatarSize';

const { Option } = Select;
const { Text } = Typography;

interface ProfileSectionProps {
    userAndRoleField: string;
    displayName: string;
    displayRole: string;
    userNameId: string;
    employeeCode: string;
    managerName: string;
    autoCompleteOptions: Array<{ value: string }>;
    onAutoCompleteSearch: (value: string) => void;
    onAutoCompleteChange: (value: string) => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
    userAndRoleField,
    displayName,
    displayRole,
    userNameId,
    employeeCode,
    managerName,
    autoCompleteOptions,
    onAutoCompleteSearch,
    onAutoCompleteChange
}) => {
    const { contentColumnRef, avatarSize } = useAvatarSize();

    return (
        <div className="profile-section">
            <div
                className="avatar-container"
                style={{ width: avatarSize, height: avatarSize }}
            >
                <img
                    src={`https://placehold.co/${avatarSize}x${avatarSize}/DBEAFE/6366F1?text=פרופיל`}
                    alt="[Image of פרופיל]"
                    className="avatar-image"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://placehold.co/${avatarSize}x${avatarSize}/DBEAFE/6366F1?text=תמונה+חסרה`;
                    }}
                />
                <div className="avatar-overlay">
                    <UserOutlined style={{ color: 'var(--color-indigo-500)', fontSize: `${Math.min(90, avatarSize * 0.35)}px` }} />
                </div>
            </div>

            <div ref={contentColumnRef} className="content-column">
                <div className="autocomplete-wrapper">
                    <AutoComplete
                        value={userAndRoleField}
                        options={autoCompleteOptions}
                        onSearch={onAutoCompleteSearch}
                        onChange={onAutoCompleteChange}
                        placeholder="שם עובד ותפקיד (לדוגמה: אמיר שגב | מומחה QA)"
                        className="full-width"
                        size="large"
                        allowClear
                        style={{ width: '100%' }}
                    />
                </div>

                <Card className="employee-details-card" bodyStyle={{ flexGrow: 1 }}>
                    <Form layout="vertical" dir="rtl" className="employee-details-form">
                        <div className="employee-info-band">
                            <UserOutlined style={{ color: '#fff', fontSize: '16px', flexShrink: 0 }} />
                            <Text className="ant-typography">{displayName}</Text>
                            <span className="separator">|</span>
                            <Text className="ant-typography">{displayRole}</Text>
                            <span className="separator">|</span>
                            <Text className="ant-typography">
                                {userNameId} | {employeeCode}
                            </Text>
                        </div>

                        <div className="info-separator"></div>

                        <div className="fields-grid">
                            <Form.Item label="מנהל/ת" className="full-width">
                                <Input
                                    value={managerName}
                                    disabled
                                    className="full-width"
                                    size="small"
                                    suffix={<SolutionOutlined style={{ color: 'var(--color-light-gray)', fontSize: '14px' }} />}
                                />
                            </Form.Item>

                            <Form.Item label="עמיתים" className="full-width">
                                <Select
                                    defaultValue=""
                                    className="full-width"
                                    size="small"
                                    dropdownMatchSelectWidth={false}
                                    suffixIcon={<DownOutlined style={{ color: 'var(--color-light-gray)', fontSize: '14px' }} />}
                                >
                                    <Option value="">בחר עמית</Option>
                                    <Option value="1">איתי</Option>
                                    <Option value="2">דנה</Option>
                                    <Option value="3">יואב</Option>
                                    <Option value="4">נועה</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="עובדים" className="full-width">
                                <Select
                                    defaultValue=""
                                    className="full-width"
                                    size="small"
                                    dropdownMatchSelectWidth={false}
                                    suffixIcon={<DownOutlined style={{ color: 'var(--color-light-gray)', fontSize: '14px' }} />}
                                >
                                    <Option value="">בחר עובד</Option>
                                    <Option value="1">אביב</Option>
                                    <Option value="2">בן</Option>
                                    <Option value="3">גילה</Option>
                                    <Option value="4">דויד</Option>
                                </Select>
                            </Form.Item>
                        </div>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default ProfileSection; 