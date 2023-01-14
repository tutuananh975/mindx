
import SearchBar from "./components/SearchBar";
import TaskListContainer from "./components/TasksListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        width: '30%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '50px',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div 
        style={{
          width: '100%',

        }}
      >
        <TaskListContainer></TaskListContainer>
        <Footer></Footer>
      </div>

    </div>
  )
}

export default App