"use client";

import { Card } from 'antd';
import React from 'react';
import { LockOutlined, EnvironmentOutlined, StarOutlined } from '@ant-design/icons';

export type FeatureCardProps = React.PropsWithChildren<{
    title: React.ReactNode;
    icon?: 'lock' | 'location' | 'star' | React.ReactNode;
    className?: string;
}>;

export function FeatureCard({ title, icon, children, className }: FeatureCardProps) {
    const renderIcon = () => {
        if (!icon) return null;
        if (typeof icon === 'string') {
            if (icon === 'lock') return <LockOutlined style={{ color: '#24A0ED', fontSize: 20 }} />;
            if (icon === 'location') return <EnvironmentOutlined style={{ color: '#24A0ED', fontSize: 20 }} />;
            if (icon === 'star') return <StarOutlined style={{ color: '#24A0ED', fontSize: 20 }} />;
            return null;
        }
        return icon;
    };
    return (
        <Card
            size='middle'
            style={
                {
                    width: 300,
                    background: '#0b0b0b',
                    color: '#fff',
                    borderRadius: 8,
                    margin: 12,
                    height: 200,
                }
            }
            title={
                <div className="">
                    {renderIcon() && <span className="mr-3">{renderIcon()}</span>}
                    <span style={{ color: '#fff', fontWeight: 700 }}>{title}</span>
                </div>
            }
        >
            <div style={{ color: 'rgba(255,255,255,0.85)' }}>
                {children}
            </div>
        </Card>
    );
}
