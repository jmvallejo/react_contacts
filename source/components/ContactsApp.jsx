var React = require('react')
var ContactList = require('./ContactList.jsx')
var CreateContact = require('./CreateContact.jsx')

module.exports = React.createClass({
	getInitialState: function(){
		this.contactList = []

		return {
			activeSection: 'contacts',
			contactList: this.contactList
		}
	},

	_getTabClass: function(sectionName){
		if(sectionName == this.state.activeSection){
			return 'active'
		} else {
			return ''
		}
	},

	_changeSection: function(sectionName){
		this.setState({ activeSection: sectionName })
	},

	_saveContact: function(contact){
		this.contactList.push(contact)
		this.setState({ contactList: this.contactList, activeSection: 'contacts' })
	},

	_getContent: function(){
		if(this.state.activeSection == 'contacts'){
			return <ContactList contacts={this.state.contactList} />
		} else if(this.state.activeSection == 'create_new'){
			return <CreateContact saveContact={this._saveContact} />
		}
	},

	render: function(){
		return(
			<div>
				<ul className="nav nav-pills">
					<li role="presentation" className={this._getTabClass('contacts')} onClick={this._changeSection.bind(this, 'contacts')}><a href="#">Contacts</a></li>
					<li role="presentation" className={this._getTabClass('create_new')} onClick={this._changeSection.bind(this, 'create_new')}><a href="#">Create New</a></li>
				</ul>
				<br />
				<div className="panel panel-default">
					<div className="panel-body">
						{this._getContent()}
					</div>
				</div>
			</div>
		)
	}
})