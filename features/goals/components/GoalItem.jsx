import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../../components/ui/button';
import { Card } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';

export default function GoalItem({ goal, index, onDeleteGoal, onUpdateGoal }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(goal.text);

  function handleSave() {
    if (!draft.trim()) return;
    onUpdateGoal(goal.id, draft);
    setIsEditing(false);
  }

  return (
    <Card className="mb-2 gap-3 rounded-2xl border-slate-200 bg-white p-4">
      <View className="flex-row items-center gap-3">
        <View className="h-3 w-3 rounded-full bg-blue-500" />
        {isEditing ? (
          <Input
            value={draft}
            onChangeText={setDraft}
            onSubmitEditing={handleSave}
            returnKeyType="done"
            autoFocus
            accessibilityLabel="Edit goal"
            className="flex-1 rounded-xl border-slate-200 bg-slate-50"
          />
        ) : (
          <Text className="flex-1 text-base font-medium text-slate-700">
            {goal.text}
          </Text>
        )}
        <Text className="text-sm text-slate-400">#{index + 1}</Text>
      </View>
      <View className="flex-row flex-wrap justify-end gap-2">
        {isEditing ? (
          <>
            <Button
              onPress={() => setIsEditing(false)}
              variant="outline"
              className="h-11 rounded-xl"
            >
              <Text className="font-semibold text-slate-700">Cancel</Text>
            </Button>
            <Button
              onPress={handleSave}
              disabled={!draft.trim()}
              className="h-11 rounded-xl"
            >
              <Text className="font-semibold text-white">Save</Text>
            </Button>
          </>
        ) : (
          <>
            <Button
              onPress={() => {
                setDraft(goal.text);
                setIsEditing(true);
              }}
              accessibilityLabel={`Update goal: ${goal.text}`}
              variant="outline"
              className="h-11 rounded-xl"
            >
              <Text className="font-semibold text-blue-600">Update</Text>
            </Button>
            <Button
              onPress={() => onDeleteGoal(goal.id)}
              accessibilityLabel={`Delete goal: ${goal.text}`}
              variant="destructive"
              className="h-11 rounded-xl"
            >
              <Text className="font-semibold text-white">Delete</Text>
            </Button>
          </>
        )}
      </View>
    </Card>
  );
}
