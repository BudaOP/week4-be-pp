let userArray = [];
let nextId = 1;

function getAll() {
  return userArray;
}

function addOne(userData) {
  const {
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    membership_status,
  } = userData;

  if (
    !name ||
    !email ||
    !password ||
    !phone_number ||
    !gender ||
    !date_of_birth ||
    !membership_status
  ) {
    return false;
  }

  const newItem = {
    id: nextId++,
    ...userData,
  };

  userArray.push(newItem);
  return newItem;
}

function findById(id) {
  const numericId = Number(id);
  const item = userArray.find((item) => item.id === numericId);
  return item || false;
}

function updateOneById(id, updatedData) {
  const user = findById(id);
  if (user) {
    Object.assign(user, updatedData);
    return user;
  }
  return false;
}

function deleteOneById(id) {
  const item = findById(id);
  if (item) {
    const initialLength = userArray.length;
    userArray = userArray.filter((item) => item.id !== Number(id));
    return userArray.length < initialLength;
  }
  return false;
}

const User = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = User;
