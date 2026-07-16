"use client";

import { ConfigProvider, Select, type SelectProps } from "antd";

export const DefaultSelection: React.FC = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };


    return (
        <div className="mt-2">
            <ConfigProvider
                theme={{
                    components: {
                        Select: {
                            optionActiveBg: 'gray', // warna background pas hover
                            optionSelectedBg: '#24A0ED', // warna background pas selected
                            optionSelectedColor: "gray",
                        },
                    },
                }}
            >
                <Select
                    className="custom-select"
                    defaultValue=""
                    style={{ width: "100%" }}
                    styles={{
                        root: {
                            backgroundColor: "black",
                            color: "white"
                        },
                        popup: {
                            root: {
                                backgroundColor: "black"
                            },
                            list: {
                                backgroundColor: "black",
                            },
                            listItem: {
                                color: "white"
                            }
                        },
                        suffix: {
                            color: "white"
                        }

                    }}
                    onChange={handleChange}
                    options={[
                        { value: "Harga Tertinggi", label: "Harga Tertinggi" },
                        { value: "Harga Terendah", label: "Harga Terendah" },
                        { value: "Paling banyak dibeli", label: "Paling banyak dibeli" },
                        { value: "Paling sedikit dibeli", label: "Paling sedikit dibeli" },
                    ]}
                />
            </ConfigProvider>

        </div>
    );
};