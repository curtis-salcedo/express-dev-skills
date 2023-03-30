const Skill = require('../models/skill.js')

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

function update(req, res) {
  // Will give a value to the checkbox in the update screen
  req.body.done = !!req.body.done;
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id)
  res.render('skills/edit', {
    title: 'Edit Skill',
    skill
  });
}

function deleteSkill(req, res) {
  Skill.deleteSkill(req.params.id)
  res.redirect('/skills')
}

function create(req, res) {
  Skill.create(req.body)
  res.redirect('/skills')
}

// This function will add the new skill to the  model
function newSkill(req, res) {
  res.render('skills/new', { title: 'Add a new Skill' })
}

// This will show all the skills and have them available to click
function index (req, res) {
  res.render('skills/index', { skills: Skill.getAll() })
}

// This will show the individual skill when clicked
function show (req, res) {
  res.render('skills/show', { skill: Skill.getOne(req.params.id) })
}