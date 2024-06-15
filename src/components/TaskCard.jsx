function TaskCard(props) {
  return (
    <div className="task__card">
      <img src={props.img} alt="" className="task__card-img" />
      <h3 className="task__card-title">{props.title}</h3>
      <p className="task__card-text">{props.text}</p>
    </div>
  );
}

export default TaskCard;
