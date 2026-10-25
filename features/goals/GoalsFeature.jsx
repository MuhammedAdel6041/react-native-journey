import { useState } from 'react';
import { View } from 'react-native';

import GoalForm from './components/GoalForm';
import GoalsHeader from './components/GoalsHeader';
import GoalsList from './components/GoalsList';

export default function GoalsFeature() {
  const [goalList, setGoalList] = useState([]);

  function handleAddGoal(goal) {
    if (!goal.trim()) return;
    setGoalList((currentList) => [...currentList, goal]);
  }

  return (
    <View className="flex-1 bg-slate-50 px-5 pt-16">
      <GoalsHeader />
      <GoalForm onAddGoal={handleAddGoal} />
      <GoalsList goals={goalList} />
    </View>
  );
}