import { SafeAreaView,  FlatList } from 'react-native';
import Person from './src/components/Person/Person.js';

export default function App() {

  const peopleList = [
    {id: 1, name: 'Gustavo',age: 18},
    {id: 2, name: 'Eduardo',age: 18},
    {id: 3, name: 'Joao',age: 19},
    {id: 4, name: 'Gabriel',age: 17},
  ]

  return (

      <SafeAreaView>
        
        <FlatList
        data={peopleList}
        keyExtractor={(item) => item.id} 

        renderItem={({item}) =>(
          <Person name={item.name} age={item.age} />
        )}
        />
       
      </SafeAreaView>

  );
}