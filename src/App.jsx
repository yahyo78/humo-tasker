import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'




function App() {
  return (
    <>
      <main className='flex xl:flex-row flex-col w-[100%]'>
        <TaskList />
        <TaskForm />
      </main>
    </>
  )
}

export default App
