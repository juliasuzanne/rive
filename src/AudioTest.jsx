import useSound from "use-sound";
import sound1 from "../src/assets/sound1.wav";
import sound2 from "../src/assets/sound2.wav";

export function AudioTest() {
  const [play] = useSound(sound1);
  return <button onClick={play}>Test!</button>;
}
