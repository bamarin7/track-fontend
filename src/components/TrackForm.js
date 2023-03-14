import { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import Spacer from './Spacer';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  return (
    <>
      <Spacer />
      <Input value={name} onChange={changeName} placeholder="Enter name" />
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
    </>
  );
};

export default TrackForm;
