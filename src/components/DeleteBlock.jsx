const DeleteBlock = () => {
  const deleteTicket = () => {
    console.log("delete ticket");
  };
  return (
    <div className="delete-block">
      <div className="delete-icon" onClick={deleteTicket}>
        X
      </div>
    </div>
  );
};

export default DeleteBlock;
