import { Text, View } from 'react-native';

export default function GoalsHeader() {
  return (
    <View className="mb-8">
      <Text className="text-3xl font-bold text-slate-900">My Goals</Text>
      <Text className="mt-2 text-base text-slate-500">
        Add your goals and keep track of them.
      </Text>
    </View>
  );
}