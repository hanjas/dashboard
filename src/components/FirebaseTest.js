import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyB8m7Bj2_jWc01mcegWNJDZ03Op7aGOA6I",
    authDomain: "fst-tut.firebaseapp.com",
    projectId: "fst-tut",
    storageBucket: "fst-tut.appspot.com",
    messagingSenderId: "746144830978",
    appId: "1:746144830978:web:21092fb510218de38c791b",
    measurementId: "G-X8YNQW38TS"
});
const firestore = firebase.firestore();


const ChatRoom = () => {
    const db = firestore.collection('testing');
    const [name, setName] = useState("");
    const [city, setCity] = useState("");

    const [msgs] = useCollectionData(db, {idField: 'id'});

    const createUsr = async (e) => {
        e.preventDefault();

        await db.add({
            name,
            city
        });

        setName('');
        setCity('');
    }

    return (
        <div>
            <main>
                {msgs && msgs.map(msg => (
                    <div key={msg.id}>
                        <div>Name: {msg.name}</div>
                        <div>City: {msg.city}</div>
                    </div>
                ))}
            </main>
            <form onSubmit={createUsr}>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Name"/>
                <input type="text" value={city} onChange={e=>setCity(e.target.value)} placeholder="City"/>
                <button type="submit" >create</button>
            </form>
        </div>
    );
}


export default function FirebaseTest() {
    
    // const messagesRef = firestore.collection('testing');
    // const [messages] = useCollectionData(messagesRef, { idField: 'id' });

    return (
        <div>
            <ChatRoom />
        </div>
    )
}
