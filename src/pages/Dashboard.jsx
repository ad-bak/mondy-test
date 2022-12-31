import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2023",
      color: "red",
      title: "First task!",
      owner: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      status: "done",
      priority: 5,
      progress: 100,
      description: "A very simple task for a very complicated person",
      timestamp: "2023-01-01T00:00:00+0000",
    },
    {
      category: "Q1 2023",
      color: "black",
      title: "Third task!",
      owner: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      status: "done",
      priority: 3,
      progress: 100,
      description: "A very simple task for a very complicated person",
      timestamp: "2023-01-01T00:00:00+0000",
    },
    {
      category: "Q2 2023",
      color: "blue",
      title: "Second task!",
      owner: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      status: "in progress",
      priority: 1,
      progress: 40,
      description: "Another simple task for a very complicated person",
      timestamp: "2023-01-01T00:00:00+0000",
    },
  ];

  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(255,255,186)",
    "rgb(186,255,201)",
    "rgb(186,225,255)",
  ];
  const uniqueCategories = [
    ...new Set(tickets.map((ticket) => ticket.category)),
  ];
  return (
    <div className="dashboard">
      <h1>My Project</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
