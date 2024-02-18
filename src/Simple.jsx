import { useRive, EventType, RiveEventType } from "@rive-app/react-canvas";
import { useCallback, useEffect } from "react";

export function Simple() {
  const { rive, RiveComponent } = useRive({
    // src: "https://cdn.rive.app/animations/vehicles.riv",
    src: "./src/assets/rating_animation.riv",
    stateMachines: "bumpy",
    autoplay: false,
  });

  // const onRiveEventReceived = (riveEvent) => {
  //   console.log(riveEvent.data);
  // };

  // useEffect(() => {
  //   if (rive) {
  //     rive.on(EventType.RiveEvent, onRiveEventReceived);
  //   }
  // }, [rive]);

  return (
    <div>
      <RiveComponent
        className="riveBox"
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
      />
    </div>
  );
}
