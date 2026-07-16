"use client";

import { DownOutlined, FilterOutlined, UpOutlined } from "@ant-design/icons"
import { GlobalText } from "../ui/GlobalText"
import type { CollapseProps } from 'antd';
import { Collapse, Divider, Slider } from 'antd';
import { CheckboxFilter } from "./CheckboxFilter";
import { DefaultAccordion } from "../ui/DefaultAccordion";
import { useState } from "react";
import { DefaultDivider } from "../ui/DefaultDivider";





export const FilterPanel: React.FC = () => {
    const [startPrice, setStartPrice] = useState<number>(0);
    const [endPrice, setEndPrice] = useState<number>(50);

    const categoryItems: CollapseProps['items'] = [
        {
            key: '1',
            label: <GlobalText>Kategori Produk Populer</GlobalText>,
            children:
                <div className="flex flex-col gap-2">
                    <CheckboxFilter>
                        <GlobalText variant="primary" className="text-xl">Skincare</GlobalText>
                    </CheckboxFilter>
                    <CheckboxFilter>
                        <GlobalText variant="primary" className="text-xl">Makanan</GlobalText>
                    </CheckboxFilter>
                    <CheckboxFilter>
                        <GlobalText variant="primary" className="text-xl">Baju</GlobalText>
                    </CheckboxFilter>
                    <CheckboxFilter>
                        <GlobalText variant="primary" className="text-xl">Mainan</GlobalText>
                    </CheckboxFilter>
                </div>,
        },
    ];

    const priceRangeItems: CollapseProps['items'] = [
        {
            key: '1',
            label: <GlobalText>Rentang Harga</GlobalText>,
            children:
                <div className="flex flex-col flex-1">
                    <Slider range defaultValue={[0, 50]} onChange={(props) => {
                        setStartPrice(props[0]);
                        setEndPrice(props[1]);
                    }} />
                    <div className="flex flex-row flex-1 justify-between items-center">
                        <GlobalText variant="primary" className="text-xl">{startPrice}</GlobalText>
                        <GlobalText variant="primary" className="text-xl">{endPrice}</GlobalText>
                    </div>
                </div>,
        },
    ];

    const countryItems: CollapseProps['items'] = [
        {
            key: '1',
            label: <GlobalText>Negara Populer yang di Jastipin!</GlobalText>,
            children:
                <div className="flex flex-col gap-2">
                    <CheckboxFilter>
                        <GlobalText variant="primary" className="text-xl">Jepang</GlobalText>
                    </CheckboxFilter>
                    <CheckboxFilter>
                        <GlobalText variant="primary" className="text-xl">China</GlobalText>
                    </CheckboxFilter>
                    <CheckboxFilter>
                        <GlobalText variant="primary" className="text-xl">Australia</GlobalText>
                    </CheckboxFilter>
                    <CheckboxFilter>
                        <GlobalText variant="primary" className="text-xl">Singapore</GlobalText>
                    </CheckboxFilter>
                </div>,
        },
    ];

    const jastipStatusItems: CollapseProps['items'] = [
        {
            key: '1',
            label: <GlobalText>Status Jastip</GlobalText>,
            children:
                <div className="flex flex-col gap-2">
                    <CheckboxFilter>
                        <GlobalText variant="primary" className="text-xl">Open PO</GlobalText>
                    </CheckboxFilter>
                    <CheckboxFilter>
                        <GlobalText variant="primary" className="text-xl">Batch Selesai</GlobalText>
                    </CheckboxFilter>
                    <CheckboxFilter>
                        <GlobalText variant="primary" className="text-xl">Flash Sale</GlobalText>
                    </CheckboxFilter>
                </div>,
        },
    ];



    return (
        <div className="flex flex-1 flex-col border border-white/20 bg-white/10 min-h-screen rounded-xl p-6">
            <div className="flex flex-row items-center justify-between mb-2">
                <GlobalText variant="primary" className="text-2xl font-bold">
                    Filter Hasil
                </GlobalText>
                <FilterOutlined style={{ color: 'gray', fontSize: 24 }} />
            </div>
            <DefaultAccordion items={categoryItems} activeImmediate={true} />
            <DefaultDivider />
            <DefaultAccordion items={priceRangeItems} />
            <DefaultDivider />
            <DefaultAccordion items={countryItems} />
            <DefaultDivider />
            <DefaultAccordion items={jastipStatusItems} />
        </div>
    )
}