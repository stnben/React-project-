import React from 'react';
import InterviewPreferences from './InterviewPreferences';

const InterviewSections = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <InterviewPreferences />
                </div>
                <div className="col-md-6">
                    <div id="interview" style={{ display: 'none' }}>
                        <h2>Interview</h2>
                        <div id="messages"></div>
                        <form id="send-message" className="mt-3">
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="user-input"
                                    placeholder="Type your answer..."
                                    className="form-control"
                                    required
                                />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                        <button
                            id="analyze-performance"
                            className="btn btn-primary mt-3"
                            style={{ display: 'none' }}
                        >
                            Analyze Performance
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InterviewSections;


