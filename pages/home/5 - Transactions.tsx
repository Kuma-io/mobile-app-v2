import { View } from 'react-native';
import { Text } from '~/components/ui';
import { Minus, Plus, Sparkles } from 'lucide-react-native';
import { Transaction as TransactionType, transactions } from '~/lib/transactions';

export function Transactions() {
  return (
    <View className="mt-6 w-full items-start justify-center px-8">
      <Text variant="subheading" className="text-fg">
        Transactions
      </Text>
      <View className="mt-4 w-full rounded-lg border border-fg/20">
        {transactions.map((transaction, index) => (
          <View key={index}>
            <Transaction transaction={transaction} amount="100.00" />
            {index < transactions.length - 1 && <View className="h-[1px] bg-fg/20" />}
          </View>
        ))}
      </View>
    </View>
  );
}

function Transaction({ transaction, amount }: { transaction: TransactionType; amount: string }) {
  const Icon = () => {
    switch (transaction) {
      case 'Deposit':
        return <Plus color="black" size={16} strokeWidth={3.5} />;
      case 'Withdraw':
        return <Minus color="black" size={16} strokeWidth={3.5} />;
      case 'Reward':
        return <Sparkles color="black" size={14} strokeWidth={1.5} fill={'black'} />;
    }
  };

  return (
    <View className="w-full flex-row items-center justify-between p-3">
      <View className="flex-row items-center gap-2">
        <View className="w-[16px] items-center justify-center">
          <Icon />
        </View>
        <Text variant="heading" className="text-sm text-fg/70">
          {transaction}
        </Text>
      </View>
      <Text variant="heading" className="text-sm ">
        {amount} $
      </Text>
    </View>
  );
}
