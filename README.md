<h1>Lioncode Assignment</h1>

<h2>Features</h2>

<ul>
  <li>Display a list of events from an endpoint</li>
  <li>Select an event to view its topics on a second page</li>
  <li>Select a topic to view its lessons</li>
</ul>

<h2>Installation</h2>

<ol>
  <li>Clone the repository:</li>
  <code>git clone https://github.com/Stratos359/Lioncode.git</code>
  <li>Navigate to the project directory:</li>
  <code>cd lioncode-app</code>
  <li>Install dependencies:</li>
  <code>npm install</code>
  <li>Run the development server:</li>
  <code>npm start</code>
  <li>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a> to view the application.</li>
</ol>

<h2>Technologies Used</h2>

<ul>
    <li>React</li>
    <li>React Router</li>
    <li>React Query</li>
    <li>Javascript</li>
    <li>CSS</li>
    <li>HTML</li>
</ul>

<h2>Project Structure</h2>

<p>The project is organized into the following directories:</p>
<ul>
    <li><code>src/App.js</code>: Main App component</li>
    <li><code>src/index.js</code>: Entry point of the application</li>
    <li><code>src/components</code>: Contains components for different parts of the application</li>
    <ul>
        <li><code>src/components/EventsList.jsx</code>: Component for listing all events</li>
        <li><code>src/components/EventDetail.jsx</code>: Component for event details page</li>
        <li><code>src/components/EventCard.jsx</code>: Component for individual event card</li>
        <li><code>src/components/EventTopics.jsx</code>: Component for individual event topic</li>
        <li><code>src/components/TopicLessons.jsx</code>: Component for indivisual topic lesson</li>
        <li><code>src/components/Footer.jsx</code>: Footer component</li>
        <li><code>src/components/Skeleton.jsx</code>: Skeleton component used while data are loading</li>
    </ul>
    <li><code>src/css</code>: Contains CSS styling for each of the components</li>
    <li><code>src/assets</code>: Contains images used in the application</li>
</ul>