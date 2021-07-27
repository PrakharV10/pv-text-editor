import Editor from './Components/Editor';
import NavBar from './Components/NavBar';

function App() {
	return (
		<div className='App bg-white w-screen h-screen'>
			<NavBar />
			<main className='w-full font-body px-4 md:px-0 md:w-8/12 h-5/6 m-auto mt-8'>
				<div className='text-xl font-bold text-gray-500'>What's on your mind today?</div>
				<Editor />
			</main>
		</div>
	);
}

export default App;
