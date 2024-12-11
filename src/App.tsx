import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase/firebaseConfig';
import { setUser, setLoading } from './redux/userSlice';
import { RootState } from './redux/store';
import Login from './components/Login';
import { closeModal } from './redux/modalSlice';
import EditVariablesModal from './components/Modals';
import MainPage from './pages/MainPage';

const App = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: RootState) => state.user);
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(setUser(currentUser));
      dispatch(setLoading(false));
    });
    return () => unsubscribe();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-screen w-full">
      {user ? <MainPage /> : <Login />}
      <EditVariablesModal
        isOpen={isModalOpen}
        onClose={() => dispatch(closeModal())}
      />
    </div>
  );
};

export default App;

// If we want signout button at any point
//   <button
//     onClick={() => auth.signOut()}
//     className="bg-red-500 text-white px-4 py-2 rounded"
//   >
//     Sign Out
//   </button>
