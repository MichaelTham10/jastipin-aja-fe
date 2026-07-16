import { Button, Input } from 'antd';
import { Header } from '../ui/Header';
import { GlobalText } from '../ui/GlobalText';
import { ProductsCards } from '../features/ProductsCards';
import { FilterPanel } from '../features/FilterPanel';
import { DefaultSelection } from '../ui/DefaultSelection';

export default function ProductPage() {
    return (
        <div className="p-10 pb-24 text-white flex flex-col">
            <Header
                title="JastipinAja"
                midContent={
                    <div className="flex flex-row items-center justify-center gap-5">
                        <a href="/">
                            <GlobalText variant="secondary" className="text-xl font-bold">
                                Home
                            </GlobalText>
                        </a>
                        <a href="/">
                            <GlobalText variant="secondary" className="text-xl">
                                Cara Titip
                            </GlobalText>
                        </a>
                        <a href="/">
                            <GlobalText variant="secondary" className="text-xl">
                                Open PO
                            </GlobalText>
                        </a>
                        <a href="/">
                            <GlobalText variant="secondary" className="text-xl">
                                Testimoni
                            </GlobalText>
                        </a>
                    </div>
                }
                rightContent={
                    <>
                        <Button color="default" variant="outlined" href="/product" style={{ padding: 20 }}>
                            <span className="text-xl">Hubungi Admin</span>
                        </Button>
                    </>
                }
            />

            <div className="flex flex-col flex-1 items-center justify-center mt-8 text-center">
                <GlobalText variant="primary" className="text-6xl font-bold">
                    Cari Barang
                </GlobalText>
                <GlobalText variant="secondary" className="text-xl mt-4 max-w-2xl">
                    Masukkan nama barang yang ingin kamu titip beli, dan kami akan mencarikan jastiper terbaik untukmu.
                </GlobalText>

                <div className="mt-8 w-full max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-3 shadow-lg backdrop-blur">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <input
                            type="text"
                            placeholder="Cari barang, produk, atau kategori"
                            className="flex-1 rounded-xl border border-gray-600 px-4 py-3 text-base text-gray-800 outline-none focus:border-gray-500"
                        />
                        <Button type="primary" size="large" className="h-[48px] px-6">
                            Cari
                        </Button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 mt-5">
                <div className="col-span-1">
                    <FilterPanel />
                </div>
                <div className="ml-5 col-span-3">
                    <div className="flex flex-row items-center justify-between  px-4 py-2">
                        <GlobalText variant="primary">Menampilkan 15 dari 60 item</GlobalText>
                        <div>
                            <GlobalText className="mb-5">Urutkan Berdasarkan</GlobalText>
                            <DefaultSelection />
                        </div>
                    </div>
                    <div className=" flex flex-wrap items-center-justify-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                        <ProductsCards />
                        <ProductsCards />
                        <ProductsCards />
                        <ProductsCards />
                        <ProductsCards />
                        <ProductsCards />
                        <ProductsCards />
                        <ProductsCards />
                        <ProductsCards />
                        <ProductsCards />
                        <ProductsCards />
                        <ProductsCards />
                        <ProductsCards />
                        <ProductsCards />
                        <ProductsCards />
                    </div>

                </div>
            </div>

        </div>
    );
}