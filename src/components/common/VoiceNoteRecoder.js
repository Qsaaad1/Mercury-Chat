import { Mic, SendRounded } from "@material-ui/icons";
import React from "react";
import gsap from "gsap";
import "../../styles/voiceNoteRecoder.css";
import { setVoiceNoteToDb } from "../backend/get&SetDataToDb";
import { useStateValue } from "../global-state-provider/StateProvider";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function VoiceNoteRecoder({}) {
  const [{ isUserOnDarkMode }] = useStateValue();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className={"voiceNoteRecoder"}>
      
      
    </div>
  );
}

export default React.memo(VoiceNoteRecoder);
