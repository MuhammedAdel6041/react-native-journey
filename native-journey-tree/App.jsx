import { StatusBar } from 'expo-status-bar';
import './global.css';

import GoalsFeature from './features/goals/GoalsFeature';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <GoalsFeature />
    </>
  );
}