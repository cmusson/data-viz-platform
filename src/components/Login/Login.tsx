import { FormEvent, useState } from 'react';
import { signInWithEmail, signInWithGoogle } from '../../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert('Google Sign-In Successful');
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailSignIn = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
      alert('Email Sign-In Successful');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center p-4 border border-border-secondary rounded-lg w-fit bg-bg-primary">
        <button
          onClick={handleGoogleSignIn}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Sign in with Google
        </button>
        <form onSubmit={handleEmailSignIn} className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded bg-bg-primary border-border-secondary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded bg-bg-primary border-border-secondary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-lumi text-black px-4 py-2 rounded"
          >
            Sign in with Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
