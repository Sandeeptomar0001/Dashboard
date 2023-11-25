import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';

const AddStudentForm = ( {onAddStudent} ) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a student object with the form data
    const newStudent = {
      firstName,
      lastName,
      email,
      username,
      password,
    };

    // Call the onAddStudent function from props to add the student
    onAddStudent(newStudent);

    // Reset form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setUsername('');
    setPassword('');

    // Display a success alert using SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Good Job!',
      text: 'Details submitted successfully!',
    });
  };

  return (
    <>
    <h1>ENTER STUDENT DETAILS</h1>
    <form onSubmit={handleSubmit}>
      {/* First Name input */}
      <TextField
        label="First Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      {/* Last Name input */}
      <TextField
        label="Last Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      {/* Email input */}
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Username input */}
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Password input */}
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Submit button */}
      <Button type="submit" variant="contained" color="primary">
        Add Student
      </Button>
    </form>
    </>
  );
};

export default AddStudentForm;
