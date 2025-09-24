import { View } from 'react-native';
import { Text } from '~/components/ui';
import { Minus, Plus, Sparkles } from 'lucide-react-native';
import { Transaction as TransactionType, transactions } from '~/lib/transactions';
import { formatBalance } from '~/lib/formatBalance';

export function Transactions() {
  return (
    <View className="mt-6 w-full items-start justify-center px-8">
      <Text variant="subheading" className="text-fg">
        Transactions
      </Text>
      <View className="mt-4 w-full rounded-lg border border-fg/20">
        {transactions.map((transaction, index) => (
          <View key={index}>
            <Transaction
              transaction={transaction}
              date={new Date().toLocaleDateString()}
              amount={200}
            />
            {index < transactions.length - 1 && <View className="h-[1px] bg-fg/20" />}
          </View>
        ))}
      </View>
    </View>
  );
}

function Transaction({
  transaction,
  date,
  amount,
}: {
  transaction: TransactionType;
  date: string;
  amount: number;
}) {
  const Icon = () => {
    switch (transaction) {
      case 'Deposit':
        return <Plus color="black" size={18} strokeWidth={3.5} />;
      case 'Withdraw':
        return <Minus color="black" size={18} strokeWidth={3.5} />;
      case 'Reward':
        return <Sparkles color="black" size={16} strokeWidth={1.5} fill={'black'} />;
    }
  };

  const TextColor = () => {
    switch (transaction) {
      case 'Deposit':
        return 'text-blue-900';
      case 'Withdraw':
        return 'text-red-900';
      case 'Reward':
        return 'text-green-900';
    }
  };

  const Sign = () => {
    switch (transaction) {
      case 'Deposit':
        return '+';
      case 'Withdraw':
        return '-';
      case 'Reward':
        return '+';
    }
  };

  return (
    <View className="w-full flex-row items-center justify-between p-3">
      <View className="flex-row items-center gap-2">
        <View className="w-[16px] items-center justify-center">
          <Icon />
        </View>
        <View>
          <Text variant="heading" className="text-base">
            {transaction}
          </Text>
          <Text variant="subheading" className="font-inter-semibold text-xs">
            {date}
          </Text>
        </View>
      </View>
      <Text variant="heading" className={`text-base `}>
        {Sign()} {formatBalance(amount)} $
      </Text>
    </View>
  );
}
