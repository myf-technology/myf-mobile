export default (form, value, id, setForm, index) => {
  const updatedForm = [...form];
  if (id === 'zipcode') {
    if (value.length === 0) {
      updatedForm[index].errorMessage = 'Este campo deve ser preenchido';
      setForm(updatedForm);
      return;
    }
    if (value.length <= 7) {
      updatedForm[index].errorMessage = 'CEP deve conter oito dígitos';
      setForm(updatedForm);
      return;
    }
    if (value.length >= 9) {
      updatedForm[index].errorMessage = 'CEP deve menos de 9 dígitos';
      setForm(updatedForm);
    } else {
      updatedForm[index].errorMessage = '';
      setForm(updatedForm);
    }
  }
  if (id === 'complement') {
    if (value.length === 0) {
      updatedForm[index].errorMessage = 'Este campo deve ser preenchido';
      setForm(updatedForm);
    } else {
      updatedForm[index].errorMessage = '';
      setForm(updatedForm);
    }
  }

  if (id === 'street') {
    if (value.length === 0) {
      updatedForm[index].errorMessage = 'Este campo deve ser preenchido';
      setForm(updatedForm);
    } else {
      updatedForm[index].errorMessage = '';
      setForm(updatedForm);
    }
  }
  if (id === 'number') {
    if (value.length === 0) {
      updatedForm[index].errorMessage = 'Este campo deve ser preenchido';
      setForm(updatedForm);
    } else {
      updatedForm[index].errorMessage = '';
      setForm(updatedForm);
    }
  }
  if (id === 'district') {
    if (value.length === 0) {
      updatedForm[index].errorMessage = 'Este campo deve ser preenchido';
      setForm(updatedForm);
    } else {
      updatedForm[index].errorMessage = '';
      setForm(updatedForm);
    }
  }
  if (id === 'city') {
    if (value.length === 0) {
      updatedForm[index].errorMessage = 'Este campo deve ser preenchido';
      setForm(updatedForm);
    } else {
      updatedForm[index].errorMessage = '';
      setForm(updatedForm);
    }
  }
  if (id === 'state') {
    if (value.length === 0) {
      updatedForm[index].errorMessage = 'Este campo deve ser preenchido';
      setForm(updatedForm);
    } else {
      updatedForm[index].errorMessage = '';
      setForm(updatedForm);
    }
  }
};
