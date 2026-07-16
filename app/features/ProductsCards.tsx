
import React from 'react';
import exampleAsset from '../../assets/example_asset.jpg';
import { GlobalText } from '../ui/GlobalText';

export const ProductsCards: React.FC = () => {
    return (
        <a
            href="/product"
            className="mt-3 block w-full max-w-sm cursor-pointer rounded-xl border border-white/20 bg-white/10 p-3 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
        >
            <img
                src={exampleAsset.src}
                alt="Example asset"
                className="my-4 w-full max-w-2xl rounded-lg"
            />
            <div className="flex flex-col gap-2">
                <GlobalText variant="primary" className="text-xl font-bold">
                    Black Essential Serum - Korean Standard
                </GlobalText>
                <GlobalText variant="secondary" className="text-lg">
                    Koreani Jastip
                </GlobalText>
                <GlobalText variant="secondary" className="text-md">
                    Rp 150.000
                </GlobalText>
                <div className="flex flex-row gap-2">
                    <GlobalText variant="secondary" className="text-md">
                        4.7 |
                    </GlobalText>
                    <GlobalText variant="secondary" className="text-md">
                        10+ terjual
                    </GlobalText>
                </div>
            </div>
        </a>
    );
};