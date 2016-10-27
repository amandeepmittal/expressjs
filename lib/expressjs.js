'use babel';

import ExpressjsView from './expressjs-view';
import { CompositeDisposable } from 'atom';

export default {

  expressjsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.expressjsView = new ExpressjsView(state.expressjsViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.expressjsView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'expressjs:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.expressjsView.destroy();
  },

  serialize() {
    return {
      expressjsViewState: this.expressjsView.serialize()
    };
  },

  toggle() {
    console.log('Expressjs was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
