import React from 'react';
import { Card, Avatar, Tooltip, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface FavoriteItem {
    id: string;
    name: string;
    role: string;
}

interface FavoritesDisplayProps {
    favorites: FavoriteItem[];
}

const FavoritesDisplay: React.FC<FavoritesDisplayProps> = ({ favorites }) => {
    return (
        <div className="favorites-section">
            <h3 className="favorites-title">מועדפים</h3>
            <div className="favorites-grid">
                {favorites.map((fav, index) => (
                    <Tooltip
                        key={index}
                        overlayInnerStyle={{
                            backgroundColor: 'white',
                            color: 'black',
                            borderRadius: '6px',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                            padding: '8px 12px',
                            textAlign: 'right',
                            fontSize: '12px'
                        }}
                        title={
                            <div dir="rtl" className="text-black">
                                <Text strong className="text-black text-xs">{fav.name}</Text><br/>
                                <Text className="text-black text-xs">{fav.role}</Text>
                            </div>
                        }
                        placement="top"
                    >
                        <Card
                            className="favorite-card"
                            bordered={false}
                            hoverable
                            bodyStyle={{ padding: '0px', display: 'flex', alignItems: 'center', gap: '6px', width: '100%' }}
                        >
                            <Avatar
                                size={32}
                                src={`https://placehold.co/32x32/D1C4E9/7B1FA2?text=${fav.id.charAt(0).toUpperCase()}`}
                                alt={`[Image of ${fav.name}]`}
                                className="favorite-avatar"
                                icon={<UserOutlined style={{ fontSize: '16px', color: 'var(--color-purple-700)' }} />}
                            />
                            <span className="favorite-text">
                                {fav.id}
                            </span>
                        </Card>
                    </Tooltip>
                ))}
            </div>
        </div>
    );
};

export default FavoritesDisplay; 