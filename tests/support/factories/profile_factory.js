FactoryGuy.define('profile', {
  default: {
    description: 'Text goes here'
  },
  traits: {
    goofy_description: {
      description: 'goofy'
    },
    with_company: {
      company: FactoryGuy.belongsTo('company')
    }
  }
})