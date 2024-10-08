import { useTranslation } from 'next-i18next';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useMeQuery } from '@/data/user';
import { useRouter } from 'next/router';

const PricingCards = () => {
  const { t } = useTranslation('pricing');
  const { data, isLoading: loading, error } = useMeQuery();
  const router = useRouter();

  const pricingPlans = [
    {
      name: 'Personal',
      price: 15000,
      description: 'Small businesses who only need the basics to start selling online',
      features: [
        'No commission fees',
        '1 shop',
        'Up to 50 products',
        'Unlimited Sales',
        'Basic reporting',
        'Email support'
      ],
      buttonText: t("GET STARTED FOR FREE"),
      href: '/signup/starter',
      isPopular: false,
      isCustom: false,
    },
    {
      name: 'Growth',
      price: 30000,
      description: 'Online businesses with bigger order volume, fulfillment & marketing needs',
      features: [
        'No commission fees',
        'Up to 5 shops',
        'Up to 500 products',
        'A.I product recommendations',
        'Advanced analytics',
        'Priority support'
      ],
      buttonText: t("GET STARTED FOR FREE"),
      href: '/signup/professional',
      isPopular: true,
      isCustom: true,
    },
    {
      name: 'Pro',
      price: 60000,
      description: 'Designed for large enterprises managing multiple shops and thousands of products across various locations.',
      features: [
        'No commission fees',
        'Unlimited shops',
        'Unlimited products',
        'Custom A.I features',
        'Full API access',
        'Dedicated account manager',
        '24/7 priority support'
      ],
      buttonText: t("GET STARTED FOR FREE"),
      href: '/signup/enterprise',
      isPopular: false,
      isCustom: true,
    },
  ];

  const handlePayment = (plan) => {
    if (!data) {
      router.push('/login');
      return;
    }
  
    const config = {
      public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY,
      tx_ref: Date.now(),
      amount: plan.price,
      currency: 'UGX',
      payment_options: 'card,mobilemoneyuganda',
      customer: {
        email: data.email,
        phonenumber: data.phoneNumber,
        name: data.name,
      },
      customizations: {
        title: plan.name,
        description: plan.description,
        logo: '/logo.png',
      },
    };
  
    const handleFlutterPayment = useFlutterwave(config);
  
    handleFlutterPayment({
      callback: async (response) => {
        if (response.status === 'successful') {
          // Prepare data for the API call
          const planDurationDays = plan.name === 'Personal' ? 30 : plan.name === 'Growth' ? 90 : 180; // Example logic for duration
  
          // Make API call to update user subscription
          try {
            await fetch('http://[::1]:9000/api/payments/update-subscription', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userId: data.id,
                subscription_status: 'active',
                payment_status: true,
                plan_type: plan.name.toLowerCase(), // Plan type (e.g., 'personal', 'growth', 'pro')
                plan_duration_days: planDurationDays,
              }),
            });
            console.log('Subscription updated successfully');
            router.push('/')
          } catch (error) {
            console.error('Error updating subscription', error);
          }
        }
        closePaymentModal(); // Close modal after successful payment
      },
      onClose: () => {
        console.log('Payment closed');
      },
    });
  };
  

  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col shadow-md border w-full max-w-sm mx-auto text-gray-900 rounded-2xl transition-all duration-500 
                ${plan.isPopular ? 'bg-[rgb(254,51,0,0.1)] hover:bg-[rgb(254,51,0,0.2)]' : 'bg-gray-50 hover:bg-gray-100'}
              `}
            >
              {/* Free Stamp */}
              <img
                src="/stamp.png"
                alt="Free Stamp"
                className="absolute top-0 right-0 w-16 h-16 m-2"
              />

              {/* Recommended Badge */}
              {plan.isPopular && (
                <div className="uppercase font-bold bg-gradient-to-r from-[rgb(254,51,0)] to-[rgb(254,51,0)] rounded-t-2xl p-3 text-center text-white">
                  {t("RECOMMENDED")}
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 xl:py-9 xl:px-6 flex-grow">
                <h3 className="font-manrope text-2xl font-bold mb-3">{plan.name}</h3>
                <p className="text-lg my-2">{plan.description}</p>

                <div className="flex items-center mb-6">
                  <span className="font-manrope mr-2 text-4xl font-semibold text-[rgb(254,51,0)]">
                    {plan.price} UGX
                  </span>
                  <span className="text-xl text-gray-500">/ {t("month")}</span>
                </div>

                {/* Features List */}
                <ul className="mb-12 space-y-6 text-left text-lg text-gray-500">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-4">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-[rgb(254,51,0)]"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="text-center mt-auto p-6">
                <button
                  onClick={() => handlePayment(plan)}
                  className="py-2.5 px-5 bg-[rgb(254,51,0)] shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-fit mx-auto hover:bg-[rgb(230,45,0)]"
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
