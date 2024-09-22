import PricingCards from '@/components/pricing/pricing-cards';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import FAQSection from '@/components/faq';
import Navbar from '@/components/layouts/navigation/top-navbar';
import CustomNavbar from '@/components/layouts/navigation/custom-navbar';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common', 'pricing'])),
  },
});

export default function PricingPage() {
  const router = useRouter();
  const { t } = useTranslation(['common', 'pricing']);

  return (
    <section className="pricing-section py-24">
      <CustomNavbar />
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-center  text-3xl font-semibold">
          Pricing suited for every business
        </h1>
        <p className="text-center  text-lg text-gray-600">
          All our features are currently freeeeee!
        </p>
        {/* <h3 className='text-center'>All features are currently free</h3> */}
        <PricingCards />

        {/* SnapnBuy Vendor FAQ Section */}
        <FAQSection />

      </div>
    </section>
  );
}
