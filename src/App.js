import React from 'react';
import InterviewPreferences from './InterviewPreferences';
import InterviewSection from './InterviewSection';

function App() {
    return (
        <div className="App">
            <header className="bg-primary py-5">
                <nav className="navbar navbar-expand-lg container">
                    <a className="navbar-brand text-white" href="#">
                        Interview Bot
                    </a>
                </nav>
            </header>

            <InterviewPreferences />
            <InterviewSection />
        </div>
    );
}

export default App;

