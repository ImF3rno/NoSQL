// Setting up dataBase
import {app} from "./firebase.js"
import { getFirestore,doc,setDoc,addDoc,collection,getDoc,getDocs,updateDoc,deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const dataBase=getFirestore(app);
console.log(dataBase);
// Setting dataBase Ends


// Addind first person
const settingWaitTime=async()=>{
    await setDoc(doc(dataBase, "users", "1"),{
        name:"Gabrielius",
        email:"Gabrielius@gmail.com",
        age:23,
        role:"admin"
    }).then(()=>{
        alert("Prideta sekmingai")
    }).catch(()=>{
        console.log(err)
    })
}
// settingWaitTime()


// Addind other person
const AddingNewPeople=async()=>{
    await addDoc(collection(dataBase, "users"),{
        name:"Martynas",
        email:"Martynas@gmail.com",
        age:56,
        role:"simple user"
    }).then(()=>{
        alert("Paprastas zmogus buvo pridetas")
    }).catch(()=>{
        console.log(err)
    })
}
// AddingNewPeople()


// Getting info (one person)
const gettingInfo=async()=>{
    const docSnap=await getDoc(doc(dataBase,"users","egwhBd63I7Swx583ojBW"));
    console.log(docSnap.data())
}
// gettingInfo()


// Getting info (all)
const gettingAllInfo=async()=>{
    const snap=await getDocs(collection(dataBase,"users"))
    const users=[]
    snap.forEach((elements)=>users.push(elements.data()))
    console.log(users)
}
// gettingAllInfo()


// Updating one person info
const updatePeopleInfo=async()=>{
    await updateDoc(doc(dataBase,"users","1"),{
        age:38
    }).then(()=>{
        alert("changes has been made")
    }).catch((err)=>{
        console.log(err)
    })
}
// updatePeopleInfo()


// Deleting one user
const removePerson=async()=>{
    await deleteDoc(doc(dataBase,"users","1")).then(()=>{
        alert("Istrintas")
    }).catch((err)=>{
        console.log(err)
    })
}
// removePerson()