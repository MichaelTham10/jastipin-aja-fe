import { Button, Card, Divider, Image } from 'antd';
import exampleAsset from '../assets/example_asset.jpg';
import { GlobalText } from "./ui/GlobalText";
import { StepsCards } from './features/StepsCards';
import { Header } from './ui/Header';
import { FeatureCard } from './features/FeatureCard';


export default function Home() {


  return (
    <div className="flex-1 p-10">
      <Header
        title="JastipinAja"
        rightContent={
          <div className="flex flex-row items-center justify-center gap-5">
            <GlobalText variant="secondary" className="text-xl">
              Cara Kerja
            </GlobalText>
            <GlobalText variant="secondary" className="text-xl">
              Jadi Jastiper
            </GlobalText>
            <Button color="blue" variant="solid" href="/product" style={{ padding: 20 }}>
              <span className="text-xl">Coba Sekarang</span>
            </Button>
          </div>
        }
      />
      <div className="flex flex-1 flex-col items-center justify-center mt-10">
        <GlobalText variant="primary" className="text-7xl">
          Titip beli, aman sampai tangan
        </GlobalText>
        <GlobalText variant="secondary" className="text-3xl">
          Dana kamu ditahan sampai barang diterima. Jastip tanpa was-was ditipu
        </GlobalText>
        <img
          src={exampleAsset.src}
          alt="Example asset"
          className="mt-6 w-full max-w-2xl rounded-xl"
        />
        <div className="flex flex-row items-center justify-center mt-10 gap-5">
          <Button color="blue" variant="solid" style={{
            padding: 20
          }}>
            <span className="text-xl p-2">
              Cari Jastiper
            </span>
          </Button>
          <Button color="green" variant="solid" style={{
            padding: 20
          }} >
            <span className="text-xl p-2">
              Jadi Jastiper
            </span>
          </Button>
        </div>

        <div className="flex flex-row items-center justify-center mt-10">
          <FeatureCard title={<span>Dana ditahan aman</span>} icon="lock">
            <GlobalText variant="secondary" className="text-lg">
              Baru cair ke jastiper setelah kamu konfirmasi barang diterima.
            </GlobalText>
          </FeatureCard>
          <FeatureCard title={<span>Lacak tiap tahap</span>} icon="location">
            <GlobalText variant="secondary" className="text-lg">
              Dari dipesan sampai sampai di tangan, semua status jelas.
            </GlobalText>
          </FeatureCard>
          <FeatureCard title={<span>Jastiper terverifikasi</span>} icon="star">
            <GlobalText variant="secondary" className="text-lg">
              Rating dan ulasan asli dari pelanggan sebelumnya.
            </GlobalText>
          </FeatureCard>
        </div>
        <GlobalText variant='primary' withSpace={false} className='text-center text-2xl font-bold mt-4'>Cara Kerjanya</GlobalText>
        <div className='flex flex-row items-center justify-center mt-4 gap-10'>
          <StepsCards variant='primary' step='1' title='Pilih Trip' subtitle='Cari jastiper yang cocok' />
          <StepsCards variant='primary' step='2' title='Pesan & bayar' subtitle='Dana ditahan otomatis' />
          <StepsCards variant='primary' step='3' title='Barang dikirim' subtitle='Terima & selesai' />
          <StepsCards variant='secondary' step='4' title='Terima & selesai' subtitle='Dana cair ke jastiper' />
        </div>
      </div>
    </div>
  );
}
