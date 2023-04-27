import React from 'react';
import './App.css';

function App() {
    return (
        <>
            {/*
    <header className="bg-primary py-5">
        <nav className="navbar navbar-expand-lg container">
            <a className="navbar-brand text-white" href="#">Interview Bot</a>
        </nav>
    </header>

    <section className="main-content">
        <h1>Interview Bot</h1>
        <p>
            Welcome to the Interview Bot, your personal interview training platform. Improve your interview skills by practicing with our AI-powered bot, tailor the experience to your needs, and get personalized feedback on your performance.
        </p>
        <a href="#preferences-form" class="get-started-btn">Get Started</a>
    </section>

    <section className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <div id="preferences-form">
                    <h2>Set your interview preferences</h2>
                    <form id="set-preferences">
                        <!-- Add form groups and form controls -->
                    </form>
                </div>
            </div>
            <div className="col-md-6">
                <div id="interview" style="display:none;">
                    <h2>Interview</h2>
                    <div id="messages"></div>
                    <form id="send-message">
                        <input type="text" id="user-input" placeholder="Type your answer..." required>
                            <button type="submit">Send</button>
                    </form>
                    <button id="analyze-performance" style="display:none;">Analyze Performance</button>
                </div>
            </div>
        </div>
    </section>

    <section className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <div id="preferences-form">
                    <h2>Set your interview preferences</h2>
                    <form id="set-preferences">
                        <div className="form-group">
                            <label for="position">Position:</label>
                            <input type="text" id="position" name="position" class="form-control" required>
                        </div>
                        <div className="form-group">
                            <label for="num_questions">Number of questions:</label>
                            <input type="number" id="num_questions" name="num_questions" class="form-control" required>
                        </div>
                        <div className="form-group">
                            <label for="difficulty">Difficulty:</label>
                            <select id="difficulty" name="difficulty" class="form-control">
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="category">Category:</label>
                            <select id="category" name="category" class="form-control">
                                <option>None</option>
                                <option>Technical</option>
                                <option>Behavioral</option>
                                <option>Situational</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="user_name">Name:</label>
                            <input type="text" id="user_name" name="user_name" class="form-control" required>
                        </div>
                        <div className="form-group">
                            <label for="interview_duration">Interview Duration (minutes):</label>
                            <input type="number" id="interview_duration" name="interview_duration" class="form-control" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Start Interview</button>
                    </form>
                </div>
            </divName
            <div className="col-md-6">
                <div id="interview" style="display:none;">
                    <h2>Interview</h2>
                    <div id="messages"></div>
                    <form id="send-message" className="mt-3">
                        <div className="input-group">
                            <input type="text" id="user-input" placeholder="Type your answer..." className="form-control" required>
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </div>
                        </div>
                    </form>
                    <button id="analyze-performance" className="btn btn-primary mt-3" style="display:none;">Analyze Performance</button>
                </div>
            </div>
        </div>
    </section>

    <footer className="bg-dark py-5 mt-5">
        <div className="container text-white">
            <div className="row">
                <div className="col-md-4">
                    <!-- Add the first footer column content -->
                </divName
                <div className="col-md-4">
                    <!-- Add the second footer column content -->
                </div>
                <div className="col-md-4">
                    <!-- Add the third footer column content -->
                </div>
            </div>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="{{ url_for('static', filename='js/script.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="{{ url_for('static', filename='js/bootstrap.min.js') }}"></script>
    }
}

const user_id = "user1"; // Replace with a unique user ID

$("#set-preferences").on("submit", function (event) {
    event.preventDefault();

    const userName = $("#user_name").val();
    const interviewDuration = $("#interview_duration").val();
    const position = $("#position").val();
    const num_questions = $("#num_questions").val();
    const difficulty = $("#difficulty").val();
    const category = $("#category").val();

    $.ajax({
        url: '/api/set_preferences',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            user_id,
            userName,
            interviewDuration,
            position,
            num_questions,
            difficulty,
            category
        }),
        success: function () {
            $("#preferences-form").hide();
            $("#interview").show();
        }
    });
});

$("#send-message").on("submit", function (event) {
    event.preventDefault();

    const input = $("#user-input").val();
    $("#user-input").val("");

    $("#messages").append(`<p>User: ${input}</p>`);

    const data = {
        user_id,
        input
    };

    console.log("Sending data:", data);

    $.ajax({
        url: '/api/handle_message',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data) {
            if (data.action === "analyze_performance") {
                $("#analyze-performance").show();
            } else {
                const ai_response = data.response;
                $("#messages").append(`<p>AI: ${ai_response}</p>`);
            }
        }
    });
});
*/}
        </>
    );
}

export default App;