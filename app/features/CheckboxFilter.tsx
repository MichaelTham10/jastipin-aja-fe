import Checkbox from "antd/es/checkbox/Checkbox"
import { GlobalText } from "../ui/GlobalText"


type CheckboxFilterProps = {
    children: React.ReactNode;
}


export const CheckboxFilter: React.FC<CheckboxFilterProps> = ({ children }) => {
    return (
        <div className="flex flex-row flex-1 justify-between items-center">
            <div>
                <Checkbox>
                    {children}
                </Checkbox>
            </div>
            <GlobalText variant="secondary" className="text-xl">(2)</GlobalText>
        </div>
    )
}