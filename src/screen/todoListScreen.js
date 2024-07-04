import React,{useState} from "react";
import { View,Text, StyleSheet,TextInput, TouchableOpacity, FlatList } from "react-native";

const TodoListScreen=()=>{
    const [inputVale,setInputVale]=useState()
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [todoList,setTodoList]=useState(
    [
        {
 name:'vicky kumar',
 email:'vickyray588@gmail.com'      
    },

 {
 name:'rahul',
 email:'vickyray588@gmail.com'      
    },
]
)
const Submit=()=>{
   setTodoList([...todoList,{name,email}
         
        ])
     setName('')  
    setEmail('')
   
}
 
return (
    <View style={Style.parentViewStyle}>   

     <FlatList
         data={todoList}
         keyExtractor={(item,index)=>index.toString()}
         renderItem={({item})=>{
            return(
                <View style={{width:200,height:50}}>
                    <Text>{item.email}</Text>
                    <Text>{item.email}</Text>
                </View>
            )
         }
           
         }
         ></FlatList>
   
       <TextInput
      value={name}
      onChangeText={setName}
      
       style={Style.textInputStyle}
       placeholder="NAME.."
       ></TextInput>

        

        <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="EMAIL"
       style={Style.textInputStyle}
       ></TextInput>

        <TouchableOpacity style={Style.buttonStyle}
        onPress={Submit}
        >
        <Text style={{color:"black"}}>Submit</Text>
       </TouchableOpacity>
        
     
     
    </View>
)
}
const Style=StyleSheet.create({
    parentViewStyle:{
       width:"100%",
       height:'100%',
       alignItems:"center"
    },
    textInputStyle:{
width:200,
height:40,
borderWidth:1,
borderRadius:10,
marginTop:10
    },
    textViewStyle:{
       width:'100%',
       height:'30%',
       backgroundColor:'red'
    },
    buttonStyle:{
width:150,
height:50,
backgroundColor:"pink",
alignItems:"center",
justifyContent:"center",
borderRadius:10,
marginTop:20
    }
})
export default TodoListScreen;