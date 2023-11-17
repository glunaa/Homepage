
import './App.css';
import Card from './components/Card';
import youtubelogo from './components/images/youtube-logo.png'
import chat from './components/images/chat.png'
import githublogo from './components/images/githublogo.png'
import schoolicon from './components/images/schoolicon.png'

const websites = [
  {
    name:'Youtube',
    url: 'https://www.youtube.com',
    imageSrc: youtubelogo,
    altText:'Youtube'
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    imageSrc: githublogo,
    altText: 'GitHub',
  },
  {
    name: 'ChatGPT',
    url: 'https://www.chatgpt.com',
    imageSrc: chat,
    altText: 'ChatGPT Open AI',
  },
  {
    name: 'LAVC Canvas',
    url: 'https://sso.laccd.edu/adfs/ls/idpinitiatedsignon.aspx?loginToRp=csprd.laccd.edu',
    imageSrc: schoolicon,
    altText: 'LAVC Canvas',
  },
  // Add more websites as needed
];

function App() {
  return (
    <div id="root">
      <h2>Welcome back </h2>
      <div className="card-grid">
        {websites.map((website, index) => (
          <Card key={index} {...website} />
        ))}
      </div>
    </div>
  );
}

export default App;
