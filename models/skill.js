const skills = [
  {id: 100, skill: 'HTML', done: true},
  {id: 200, skill: 'CSS', done: true},
  {id: 300, skill: 'Javascript', done: true},
  {id: 400, skill: 'Node.js', done: false},
  {id: 500, skill: 'Express', done: false},
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteSkill,
  edit,
  update
};

function update(id, updateSkill) {
  id = parseInt(id);
  const skill = skills.find(todo => todo.id === id );
  Object.assign(skill, updateSkill);
}

function edit(id) {
  id = parseInt(id);
  skills.find( skill => skill.id === id )
}

function deleteSkill(id) {
  id = parseInt(id);
  const idx = skills.findIndex( skill => skill.id === id );
  skills.splice(idx, 1)
};

// Function to create a new skill
function create(skill) {
  skill.id = Date.now() *10000
  skill.done = false;
  skills.push(skill)
};

// Will populate all the skills
function getAll() {
  return skills;
};

// Will get one of the skills by looking up the id
function getOne(id) {
  id = parseInt(id);
  return skills.find( skill => skill.id === id );
};