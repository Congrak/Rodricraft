import { useStore } from "../hooks/useStore";

export const Menu = () => {
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ]);

  return (
    <div className="menu">
      <button className="button" onClick={() => saveWorld()}>Save</button>
      <button className="button" onClick={() => resetWorld()}>Reset</button>
    </div>
  );
};
