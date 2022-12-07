import { useRive } from "@rive-app/react-canvas";

function App() {
  const { RiveComponent } = useRive({
    src: "dog.riv",
    autoplay: true,
  });

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <RiveComponent />
    </div>
  );
}

export default App;
