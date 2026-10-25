import { Text, View } from 'react-native';
import { Card } from '../../../components/ui/card';

export default function GoalItem({ goal, index }) {
  return (
    <Card className="mb-2 flex-row items-center gap-0 rounded-2xl border-slate-200 bg-white p-4">
      <View className="mr-3 h-3 w-3 rounded-full bg-blue-500" />
      <Text className="flex-1 text-base font-medium text-slate-700">
        {goal}
      </Text>
      <Text className="text-sm text-slate-400">#{index + 1}</Text>
    </Card>
  );
}