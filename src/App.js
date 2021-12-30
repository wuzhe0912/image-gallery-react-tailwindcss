import "./App.css";

function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl-mb-2">
          Photo by John Name
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            100000
          </li>
          <li>
            <strong>Downloads:</strong>
            300
          </li>
          <li>
            <strong>Likes:</strong>
            9000
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inlin-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semiblod text-gray-700 mr-2">
          # tag1
        </span>
        <span className="inlin-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semiblod text-gray-700 mr-2">
          # tag2
        </span>
        <span className="inlin-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semiblod text-gray-700 mr-2">
          # tag3
        </span>
      </div>
    </div>
  );
}

export default App;
