import { useState } from 'react';
import { Text, View } from 'react-native';

import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';

export default function GoalForm({ onAddGoal }) {
  const [goal, setGoal] = useState('');

  function handleSubmit() {
    if (!goal.trim()) return;

    onAddGoal(goal);
    setGoal('');
  }

  return (
    <View className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <Text className="mb-3 text-sm font-semibold text-slate-700">
        Add a new goal
      </Text>

      <View className="flex-row items-center gap-3">
        <Input
          value={goal}
          placeholder="Enter your goal..."
          onChangeText={setGoal}
          className="flex-1 rounded-xl border-slate-200 bg-slate-50"
        />

        <Button onPress={handleSubmit} className="h-10 rounded-xl px-5">
          <Text className="font-semibold text-white">Add</Text>
        </Button>
      </View>
    </View>
  );
}