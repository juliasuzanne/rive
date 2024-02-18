import { useRive, EventType, RiveEventType } from "@rive-app/react-canvas";
import useSound from "use-sound";
import sound1 from "../src/assets/sound1.wav";
import { useCallback, useEffect } from "react";

export function MyTextComponent() {
  const [play] = useSound(sound1);

  const { rive, RiveComponent } = useRive({
    src: "./src/assets/rating_animation.riv",
    // src: "https://cdn.rive.app/animations/vehicles.riv",
    // artboard: "my-artboard-name",
    autoplay: true,
    // automaticallyHandleEvents: true, // Automatically handle OpenUrl events
    stateMachines: "State Machine 1",
    // stateMachines: "bumpy",
  });

  const onRiveEventReceived = (riveEvent) => {
    const eventData = riveEvent.data;
    let eventName = riveEvent.data.name;
    const eventProperties = eventData.properties;
    switch (eventName) {
      case "rating4":
        play();
        break;
    }

    if (eventData.type === RiveEventType.General) {
      console.log("Event name", eventData.name);

      // Added relevant metadata from the event
      console.log("Rating", eventProperties.rating);
      console.log("Message", eventProperties.message);
    } else if (eventData.type === RiveEventType.OpenUrl) {
      console.log("Event name", eventData.name);
      // Handle OpenUrl event manually
      window.location.href = data.url;
    }
  };

  // Wait until the rive object is instantiated before adding the Rive
  // event listener
  useEffect(() => {
    if (rive) {
      rive.on(EventType.RiveEvent, onRiveEventReceived);
    }
  }, [rive]);

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
