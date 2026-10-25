import { FlatList, Text, View } from 'react-native';

import GoalItem from './GoalItem';

export default function GoalsList({ goals, onDeleteGoal, onUpdateGoal }) {
  return (
    <View className="mt-8 flex-1">
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-xl font-bold text-slate-900">Your Goals</Text>
        <Text className="text-sm text-slate-400">{goals.length} goals</Text>
      </View>

      {goals.length === 0 && (
        <View className="items-center rounded-2xl border border-dashed border-slate-300 bg-white py-10">
          <Text className="text-base font-semibold text-slate-600">
            No goals yet
          </Text>
          <Text className="mt-1 text-sm text-slate-400">
            Add your first goal above.
          </Text>
        </View>
      )}

      <FlatList
        data={goals}
        keyboardShouldPersistTaps="handled"
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <GoalItem
            goal={item}
            index={index}
            onDeleteGoal={onDeleteGoal}
            onUpdateGoal={onUpdateGoal}
          />
        )}
      />
    </View>
  );
}
