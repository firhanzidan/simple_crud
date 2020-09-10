const UserValidation = (values) => {
    const errors = {};
  
    if (!values.nama || values.nama === "") {
      errors.nama = "Nama harus diisi";
    }
  
    if (!values.nohp || values.nohp === "") {
      errors.nohp = "No HP harus diisi";
    }
  
    return errors
  };
  
  export default UserValidation;