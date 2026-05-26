import HeroSection from '@/components/home/HeroSection';
import TrustBadges from '@/components/home/TrustBadges';
import FeaturedProduct from '@/components/home/FeaturedProduct';
import ProductCollection from '@/components/home/ProductCollection';
import FestiveBanner from '@/components/home/FestiveBanner';
import Testimonial from '@/components/home/Testimonial';
import { getProducts } from '@/lib/mongodb';
import { Product } from '@/types';

export const dynamic = 'force-dynamic';

async function loadProducts() {
  return await getProducts({}, 8, 'created_at', 'desc');
}

export default async function HomePage() {
  const products = await loadProducts();

  return (
    <>
      <HeroSection />
      <TrustBadges />
      <FeaturedProduct />
      <ProductCollection products={products} />
      <FestiveBanner />
      <Testimonial />
    </>
  );
}
