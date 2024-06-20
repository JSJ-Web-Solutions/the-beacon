import DungeonModal from "../components/DungeonModal";

export default function WeeklyDungeon() {
  return (
    <>
      <section className="dungeon">
        <div className="section-title">
          <h1>Weekly Dungeons</h1>
        </div>
        <div className="dungeon__links-container">
          <DungeonModal title="Weekly Dungeon 1/2" video="wdungeon-1.mp4" />
          <DungeonModal title="Weekly Dungeon 2/2" video="wdungeon-2.mp4" />
        </div>
      </section>
    </>
  );
}
