const EventComponent: React.FC = () => {
  // todo event type 정의
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (evt: React.DragEvent<HTMLDivElement>) => {
    console.log('drag me')
  }

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>Drag me</div>
    </div>
  );
};

export default EventComponent;
