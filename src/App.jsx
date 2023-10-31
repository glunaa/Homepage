
import './App.css';
import Card from './components/Card';

const websites = [
  {
    name:'Youtube',
    url: 'https://www.youtube.com',
    imageSrc: 'youtube-logo.png',
    altText:'Youtube'
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    imageSrc: 'github-logo.png',
    altText: 'GitHub',
  },
  {
    name: 'ChatGPT',
    url: 'https://www.chatgpt.com',
    imageSrc: 'chatgpt-logo.png',
    altText: 'ChatGPT Open AI',
  },
  {
    name: 'LAVC Canvas',
    url: 'https://sso.laccd.edu/adfs/ls/idpinitiatedsignon.aspx?loginToRp=csprd.laccd.edu',
    imageSrc: 'school-logo.png',
    altText: 'LAVC Canvas',
  },
  // Add more websites as needed
];

function App() {
  return (
    <div id="root">
      <h4>Website cards for GitHub, ChatGPT, School, etc.</h4>
      <div className="card-grid">
        {websites.map((website, index) => (
          <Card key={index} {...website} />
        ))}
      </div>
    </div>
  );
}

export default App;
