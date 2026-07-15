"use client";
import { DownOutlined } from "@ant-design/icons";
import { Collapse, CollapseProps } from "antd";

const collapseStyles: CollapseProps['styles'] = {
    body: {
        color: "white",
    },
    header: {
        fontSize: 24,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        color: "white",
        marginLeft: -10,
    },
    icon: {
        color: "white",
        fontSize: 40
    }

}

type DefaultAccordionProps = {
    items: CollapseProps['items'];
    activeImmediate?: boolean;
}

export const DefaultAccordion: React.FC<DefaultAccordionProps> = ({
    items,
    activeImmediate = false
}) => {
    return (
        <Collapse
            defaultActiveKey={activeImmediate ? ['1'] : undefined}
            ghost
            expandIcon={(props) => (
                <span className={`collapse-icon ${props.isActive ? 'active' : ''}`}>
                    <DownOutlined style={{ color: 'white', fontSize: 24 }} />
                </span>
            )}
            styles={collapseStyles}
            expandIconPlacement="end"
            items={items}
        />
    )
}