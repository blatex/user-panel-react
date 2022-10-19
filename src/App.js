import './App.css';
import User  from "./components/User";
import AddUser from "./components/AddUser";

const users = [
  {
    'id': 1,
    'infos': [
      {
        'label': 'Name',
        'value': 'Gabriel Balbuena Blat'
      },
      {
        'label': 'Birth Date',
        'value': '07/07/1997'
      },
      {
        'label': 'Role',
        'value': 'Java Developer'
      },
      {
        'label': 'Admission Date',
        'value': '19/11/2019'
      },
      {
        'label': 'Salary',
        'value': 5000.56
      }
    ]
  },
  {
    'id': 2,
    'infos': [
      {
        'label': 'Name',
        'value': 'Antonia Elisabete Balbuena'
      },
      {
        'label': 'Birth Date',
        'value': '14/06/1958'
      },
      {
        'label': 'Role',
        'value': 'Manager'
      },
      {
        'label': 'Admission Date',
        'value': '06/04/2005'
      },
      {
        'label': 'Salary',
        'value': 8457.23
      }
    ]
  }
];

function App() {
  return (
    <div>
      <AddUser collapsed={true} />
      {users.map(
        user => <User 
          key = {user.id}
          user = {user}
        />
      )}
    </div>
  );
}

export default App;
