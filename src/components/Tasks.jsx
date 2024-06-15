import TaskCard from "./TaskCard";

function Tasks() {
  return (
    <section className="tasks">
      <h2 className="tasks__title">Here's What You Can Do</h2>
      <div className="tasks__cards-container">
        <TaskCard
          img="tasks1.gif"
          title="Earn Prestige Points"
          text=" You earn Prestige Points by completing quests and referring players. The
        more points you rack up, the better your chances of getting a Whitelist
        spot."
        />
        <TaskCard
          img="tasks2.gif"
          title="Complete Quests"
          text=" There are all sorts of quests, from in-game challenges, social media interactions, to even some blockchain tasks. The tougher the mission, the more points you earn."
        />
        <TaskCard
          img="tasks3.gif"
          title="Climb the Ranks"
          text=" As you gather Prestige Points, your rank increases. The higher your rank, the better your chances of earning a Whitelist spot in the final draft. Plus, a small amount of token allocation will be distributed among the different ranks."
        />
        <TaskCard
          img="tasks4.gif"
          title="Get Rewards"
          text=" With Prestige Points you can also unlock Chests filled with event-exclusive items, Medallions (representing future Token Allocation), Arb Tokens, and other cool rewards."
        />
      </div>
    </section>
  );
}

export default Tasks;
