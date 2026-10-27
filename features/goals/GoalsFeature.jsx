import { useRef, useState } from 'react';
import { View } from 'react-native';

import GoalForm from './components/GoalForm';
import GoalsHeader from './components/GoalsHeader';
import GoalsList from './components/GoalsList';

export default function GoalsFeature() {
  const [goalList, setGoalList] = useState([]);
  const nextGoalId = useRef(0);

  function handleAddGoal(goal) {
    if (!goal.trim()) return;
    const newGoal = { id: String(nextGoalId.current++), text: goal.trim() };
    setGoalList((currentList) => [...currentList, newGoal]);
  }

  function handleDeleteGoal(id) {
    setGoalList((currentList) => currentList.filter((goal) => goal.id !== id));
  }

  function handleUpdateGoal(id, text) {
    if (!text.trim()) return;
    setGoalList((currentList) =>
      currentList.map((goal) =>
        goal.id === id ? { ...goal, text: text.trim() } : goal
      )
    );
  }

  return (
    <View className="flex-1 bg-slate-50 px-5 pt-16">
      <GoalsHeader />
      <GoalForm onAddGoal={handleAddGoal} />
      <GoalsList
        goals={goalList}
        onDeleteGoal={handleDeleteGoal}
        onUpdateGoal={handleUpdateGoal}
      />
    </View>
  );
}
