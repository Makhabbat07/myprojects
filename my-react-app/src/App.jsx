import { useState } from "react";
const App = () => {
  const [feedbackList, setFeedbackList] = useState([
  ]);

  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim() && newComment.trim()) {
      const newFeedback = {
        id: feedbackList.length + 1,
        name: newName.trim(),
        comment: newComment.trim(),
      };
      setFeedbackList([newFeedback, ...feedbackList]);
      setNewName('');
      setNewComment('');
    }
  };

  return (
    <div style={styles.container}>
      <h1>📢Student Feedback App</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Атыныз"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Пыкырынызды жазыныз..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows="3"
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>
          Жыберу
        </button>
      </form>

      <div style={styles.feedbackList}>
        {feedbackList.map((feedback) => (
          <div key={feedback.id} style={styles.card}>
            <h3 style={styles.name}>{feedback.name}</h3>
            <p style={styles.comment}>{feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  feedbackList: {
    marginTop: '20px',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  name: {
    margin: '0 0 5px',
    fontWeight: 'bold',
  },
  comment: {
    margin: 0,
  },
};


export default App;
