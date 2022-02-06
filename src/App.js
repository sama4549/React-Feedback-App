import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteList = (id) => {
        if(window.confirm('Are you sure you would like to delete this item?')) {
            setFeedback(feedback.filter((item) => {
                return item.id !== id
            }))
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleList={deleteList} />
            </div>
        </>
    )
}

export default App;