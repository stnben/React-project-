import React from 'react';
import Header from './Header';
import InterviewPreferences from './InterviewPreferences';
import InterviewSection from './InterviewSection';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Header />
            {/* <section class="main-content">
        <h1>Interview Bot</h1>
        <p>
            Welcome to the Interview Bot, your personal interview training platform. Improve your interview skills by practicing with our AI-powered bot, tailor the experience to your needs, and get personalized feedback on your performance.
        </p>
        <a href="#preferences-form" class="get-started-btn">Get Started</a>
    </section> */}
            <InterviewPreferences />
            <InterviewSection />
            <Footer />
        </div>
    );
};

export default App;
