

const CreateInput = () => {
  return (
    <div className="input">
      <h2>Create User Here</h2>
      <form>
        <input type="text" name="fullName" />
        <input type="text" name="lastName" />
        <input type="text" name="position" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateInput;
