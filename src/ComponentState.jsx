/**
 * Component ---
 * Any function that return a jsx is a function component
 * - Name must be capital **Required
 * - Must return a piece of HTML (JSX) **Required
 * - It always accept an object as an argument **Optional
 * - we can't call or invoke this function
 * - we have use the component as a HTML tag
 * 
 * Props ---
 * - Anything that us dynamic can be dynamic using props
 * - 
 */

const ListItem = (props) => {
    return (
        <li style={{ listStyleType: 'none',display:"flex",alignItems:'center' }}>
            <input type="checkbox" checked={ props.checked} />
            <p>{ props.title}</p>
            <button style={{marginLeft:"auto"}}>Delete</button>
        </li>

    )
}

const taskLists = [
    {
        id: 1,
        text: 'Title 1',
        checked:false
    },
    {
        id: 2,
        text: 'Title 2',
        checked:false
    },  {
        id: 3,
        text: 'Title 3',
        checked:false
    },  {
        id: 4,
        text: 'Title 1',
        checked:true
    },
    {
        id: 5,
        text: 'Title 5',
        checked:false
    },
    {
        id: 6,
        text: 'Title 6',
        checked:true
    },
]




function ComponentState() {
    const listArr = taskLists.map((item) => <ListItem key={item.id} title={item.text} checked={item.checked} />)

    return (<div>
        <ul>
      {listArr}
        </ul>
    </div>
    );
}



// function App() {
//     return (<div>
//         <ul>
//             <ListItem title={'Title 1'} />
//             <ListItem title={'Title 2'} />
//             <ListItem title={'Title 3'} />
//             <ListItem title={'Title 4'} />
//             <ListItem title={'Title 5'} />
//             <ListItem title={'Title 6'} />
//             <ListItem title={'Title 7'} />
//             <ListItem title={'Title 8'} />
//             <ListItem title={'Title 9'} />
//             <ListItem title={'Title 10'} />

//         </ul>
//     </div>
//     );
// }

export default ComponentState