import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@components/AdminComponents/common/Header';
import StatCard from '@components/AdminComponents/common/StatCard';
import SalesOverviewChart from '@components/AdminComponents/overview/SalesOverviewChart';
import CategoryDistributionChart from '@components/AdminComponents/overview/CategoryDistributionChart';
import SalesChannelChart from '@components/AdminComponents/overview/SalesChannelChart';

const OverviewPage = () => {
  return (
    <div className='relative z-10 flex-1 overflow-auto'>
      <Header title='Overview' />

      <main className='mx-auto max-w-7xl px-4 py-6 lg:px-8'>
        {/* STATS */}
        <motion.div
          className='mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name='Total Sales' icon={Zap} value='$12,345' color='#6366F1' />
          <StatCard name='New Users' icon={Users} value='1,234' color='#8B5CF6' />
          <StatCard name='Total Products' icon={ShoppingBag} value='567' color='#EC4899' />
          <StatCard name='Conversion Rate' icon={BarChart2} value='12.5%' color='#10B981' />
        </motion.div>

        {/* CHARTS */}

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};
export default OverviewPage;
