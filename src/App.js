import Lottie, {LottieRefCurrentProps} from "lottie-react";
import animationData from './Assets/taakLoading.json';
import { useRef } from "react";

function App() {
  const taakLoader = useRef();
  return (
    <div className="App" style={{width: 150}}>
      <Lottie autoPlay="true" lottieRef={taakLoader} animationData={animationData} />
    </div>
  );
}

export default App;
