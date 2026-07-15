import { Divider } from "antd"

export const DefaultDivider: React.FC = () => {
    return (
        <Divider
            styles={{
                rail: {
                    backgroundColor: "gray",
                }
            }}>
        </Divider>
    )
}