import { useState } from "react";

const TicketPage = () => {
  const [formData, setFormData] = useState({
    status: "not started",
    progress: 0,
    timestamp: new Date().toISOString(),
  });

  const editMode = false;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const categories = ["bug", "feature", "question"];

  console.log(formData);
  return (
    <div className="ticket">
      <h1>{editMode ? "Update your Ticket" : "Create a Ticket"}</h1>
      <div className="ticket-container">
        <form onSubmit={submitHandler}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              required={true}
              value={FormData.title}
            />
            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />

            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories?.map((category, _index) => (
                <option value={category}>{category}</option>
              ))}
            </select>

            <label htmlFor="new-category">New Category</label>
            <input
              id="new-category"
              name="category"
              type="text"
              onChange={handleChange}
              value={formData.category}
            />
            <label>Priority</label>
            <div className="multiiple-input-container">
              <input
                id="priority-1"
                name="priority"
                type="radio"
                value={1}
                onChange={handleChange}
              />
              <label htmlFor="priority-1">1</label>
              <input
                id="priority-2"
                name="priority"
                type="radio"
                value={2}
                onChange={handleChange}
              />
              <label htmlFor="priority-2">2</label>
              <input
                id="priority-3"
                name="priority"
                type="radio"
                value={3}
                onChange={handleChange}
              />
              <label htmlFor="priority-3">3</label>
              <input
                id="priority-4"
                name="priority"
                type="radio"
                value={4}
                onChange={handleChange}
              />
              <label htmlFor="priority-4">4</label>
              <input
                id="priority-5"
                name="priority"
                type="radio"
                value={5}
                onChange={handleChange}
              />
              <label htmlFor="priority-5">5</label>
            </div>
            {editMode && (
              <>
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  min="0"
                  max="100"
                  onChange={handleChange}
                />
                <label htmlFor="progress">Progress</label>

                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option selected={formData.status === "done"} value="done">
                    Done
                  </option>
                  <option
                    selected={formData.status === "in progress"}
                    value="in progress"
                  >
                    In Progress
                  </option>
                  <option selected={formData.status === "stuck"} value="stuck">
                    Stuck
                  </option>
                  <option
                    selected={formData.status === "not started"}
                    value="not started"
                  >
                    Not Started
                  </option>
                </select>
              </>
            )}
            <input type="submit" />
          </section>
          <section>
            <label htmlFor="owner">Owner</label>
            <input
              type="text"
              name="owner"
              id="owner"
              onChange={handleChange}
              required={true}
              value={FormData.owner}
            />{" "}
            <label htmlFor="avatar">Avatar</label>
            <input
              type="url"
              name="avatar"
              id="avatar"
              onChange={handleChange}
              required={true}
              value={FormData.avatar}
            />
            <div className="img-preview">
              {formData.avatar && <img src={formData.avatar} alt="avatar" />}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default TicketPage;
