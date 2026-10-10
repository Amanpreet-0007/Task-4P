import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, googleProvider } from '../firebase';
import { 
  signInWithPopup, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile 
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { FcGoogle } from 'react-icons/fc';
import './LoginPage.css';

function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 1. Google Sign-In Handler
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await setDoc(doc(db, 'users', user.uid), {
        name: user.displayName || 'Google User',
        email: user.email,
        lastLogin: serverTimestamp(),
        provider: 'google.com'
      }, { merge: true });

      alert(`Welcome ${user.displayName || user.email}!`);
      navigate('/');
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert(error.message);
    }
  };

  // 2. Email & Password Sign Up / Log In Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Validate confirm password for Sign Up
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      try {
        // Create user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          formData.email, 
          formData.password
        );
        const user = userCredential.user;

        // Set Display Name in Firebase Auth profile
        await updateProfile(user, {
          displayName: formData.username
        });

        // Store user profile record in Firestore
        await setDoc(doc(db, 'users', user.uid), {
          name: formData.username,
          email: formData.email,
          createdAt: serverTimestamp(),
          lastLogin: serverTimestamp(),
          provider: 'password'
        });

        alert(`Account created successfully! Welcome, ${formData.username}!`);
        navigate('/');
      } catch (error) {
        console.error("Sign Up Error:", error);
        alert(`Sign Up Failed: ${error.message}`);
      }

    } else {
      // Handle Email/Password Log In
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth, 
          formData.email, 
          formData.password
        );
        const user = userCredential.user;

        // Update last login timestamp in Firestore
        await setDoc(doc(db, 'users', user.uid), {
          lastLogin: serverTimestamp()
        }, { merge: true });

        alert(`Welcome back, ${user.displayName || user.email}!`);
        navigate('/');
      } catch (error) {
        console.error("Login Error:", error);
        alert(`Login Failed: ${error.message}`);
      }
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
        <p className="login-subtitle">
          {isSignUp ? 'Sign up to access the staff portal' : 'Please enter your credentials to log in'}
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Username (Only required on Sign Up) */}
          {isSignUp && (
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password (Only required on Sign Up) */}
          {isSignUp && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Google Sign-In Option */}
          <button 
            type="button" 
            className="google-btn" 
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="google-icon" /> Continue with Google
          </button>

          {/* Main Action Button */}
          <button type="submit" className="submit-btn">
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        {/* Toggle between Login and Sign Up */}
        <div className="toggle-container">
          <span>{isSignUp ? 'Already have an account?' : "Don't have an account?"}</span>
          <button 
            type="button" 
            className="toggle-btn"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Log In' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
