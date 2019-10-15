import m from 'mithril';

export const Hello = {
  view: function() {
    return m('main', [
      m('h1', {class: 'title'}, 'My first app'),
      m('button', 'A button'),
    ]);
  }
};
