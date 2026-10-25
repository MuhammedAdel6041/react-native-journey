import { StatusBar } from 'expo-status-bar';
import { Text, View,ScrollView ,FlatList} from 'react-native';
import './global.css';

import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { useState } from 'react';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  function inputChangeHandler(text) {
    setGoal(text);
  }

  function handleAddGoal() {
    if (!goal.trim()) return;

    setGoalList((currentList) => [...currentList, goal]);
    setGoal('');
  }

  return (
    <>
      <StatusBar style="dark" />

      <View className="flex-1 bg-slate-50 px-5 pt-16">

        {/* Header */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-slate-900">
            My Goals
          </Text>

          <Text className="mt-2 text-base text-slate-500">
            Add your goals and keep track of them.
          </Text>
        </View>

        {/* Input Card */}
        <View className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <Text className="mb-3 text-sm font-semibold text-slate-700">
            Add a new goal
          </Text>

          <View className="flex-row items-center gap-3">
            <Input
              value={goal}
              placeholder="Enter your goal..."
              onChangeText={inputChangeHandler}
              className="flex-1 rounded-xl border-slate-200 bg-slate-50"
            />

            <Button
              onPress={handleAddGoal}
              className="h-10 rounded-xl px-5"
            >
              <Text className="font-semibold text-white">
                Add
              </Text>
            </Button>
          </View>
        </View>

        {/* Goals Section */}
        <View className="mt-8 flex-1">
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-xl font-bold text-slate-900">
              Your Goals
            </Text>

            <Text className="text-sm text-slate-400">
              {goalList.length} goals
            </Text>
          </View>

          {/* Empty State */}
          {goalList.length === 0 && (
            <View className="items-center rounded-2xl border border-dashed border-slate-300 bg-white py-10">
              <Text className="text-base font-semibold text-slate-600">
                No goals yet
              </Text>

              <Text className="mt-1 text-sm text-slate-400">
                Add your first goal above.
              </Text>
            </View>
          )}

          {/* Goal List */}
          <FlatList
            data={goalList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View
                key={index}
                className="flex-row items-center rounded-2xl border border-slate-200 bg-white p-4 mb-2"
              >
              
                <View className="mr-3 h-3 w-3 rounded-full bg-blue-500" />

                <Text className="flex-1 text-base font-medium text-slate-700">
                  {item}
                </Text>

                <Text className="text-sm text-slate-400">
                  #{index + 1}
                </Text>
              </View>
            )}
          />
        </View>
             
            
        

      </View>
    </>
  );
}