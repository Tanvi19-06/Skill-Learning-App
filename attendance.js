// attendance.js
import { db, auth } from './firebase.js';
import { setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

async function markAttendance() {
  const user = auth.currentUser;
  if (!user) return;

  const dateStr = new Date().toISOString().split("T")[0]; // e.g., "2025-05-22"
  await setDoc(doc(db, "attendance", `${user.uid}_${dateStr}`), {
    userId: user.uid,
    date: dateStr,
    status: "present"
  });

  alert("Attendance marked!");
}
