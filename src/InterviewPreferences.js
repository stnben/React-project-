import React from 'react';

const InterviewPreferences = () => {
    return (
        <div id="preferences-form">
            <h2>Set your interview preferences</h2>
            <form id="set-preferences">
                <div className="form-group">
                    <label htmlFor="position">Position:</label>
                    <input type="text" id="position" name="position" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="num_questions">Number of questions:</label>
                    <input type="number" id="num_questions" name="num_questions" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="difficulty">Difficulty:</label>
                    <select id="difficulty" name="difficulty" className="form-control">
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category" className="form-control">
                        <option>None</option>
                        <option>Technical</option>
                        <option>Behavioral</option>
                        <option>Situational</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="user_name">Name:</label>
                    <input type="text" id="user_name" name="user_name" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="interview_duration">Interview Duration (minutes):</label>
                    <input type="number" id="interview_duration" name="interview_duration" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary">Start Interview</button>
            </form>
        </div>
    );
};

export default InterviewPreferences;
