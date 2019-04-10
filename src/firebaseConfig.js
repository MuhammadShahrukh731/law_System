import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBOx_35wcurkrD9bbLmgnl_iw9OoSS9t1w",
    authDomain: "lawmanagement-29134.firebaseapp.com",
    databaseURL: "https://lawmanagement-29134.firebaseio.com",
    projectId: "lawmanagement-29134",
    storageBucket: "lawmanagement-29134.appspot.com",
    messagingSenderId: "567403162268"
};
const firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig;
const db = firebase.database();

const register = ({firstName, lastName, email, password, }) => {
    return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
                console.log(res,'respone&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
                    db.ref('users/').push({
                        id : res.uid,
                        first_name: firstName,
                        last_name: lastName,
                        email: email.toLowerCase()
                    }).then(()=>{
                        resolve(res);
                    })
                        .catch((error) =>  {
                            reject(error);
                            console.log(error);
                        });
                }
            ).catch((error)=>{
                reject(error)
            })
        }
    )};


const login = ({email, password}) => {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject({error: 'Something went wrong!'})
            });
    })
};

const updateCriminal = (id, params) =>{
    console.log(id,'iddddddddddddddd');
    console.log(params,'parm');
    return db.ref("criminal/" + id).update(params)
};

const criminalLawAdd = (params) =>{
    return new Promise((resolve, reject)=>{
        db.ref("criminal/").push(params)
            .then((res)=>{
                resolve(res)
            })
            .catch((error)=>{
                reject(error)
            })
    })
};

const deleteCriminalLaws = (id) =>{
    return db.ref('criminal/' + id).remove();
};



const updatecivil = (id, params) =>{
    console.log(id,'iddddddddddddddd');
    console.log(params,'parm');
    return db.ref("civil/" + id).update(params)
};

const civilLawAdd = (params) =>{
    return new Promise((resolve, reject)=>{
        db.ref("civil/").push(params)
            .then((res)=>{
                resolve(res)
            })
            .catch((error)=>{
                reject(error)
            })
    })
};

const deletecivilLaws = (id) =>{
    return db.ref('civil/' + id).remove();
};
export {
    register,
    login,
    updateCriminal,
    criminalLawAdd,
    deleteCriminalLaws,
    updatecivil,
    civilLawAdd,
    deletecivilLaws
}