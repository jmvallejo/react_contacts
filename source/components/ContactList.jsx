var React = require('react')

module.exports = React.createClass({
	_getContent: function(){
		var content = <div>No contacts were found.</div>

		if(this.props.contacts && this.props.contacts.length > 0){
			content = (
				<table className="table table-striped">
					<thead>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
					</thead>
					<tbody>
						{this._buildContacts()}
					</tbody>
				</table>
			)
		}

		return content
	},

	_buildContacts: function(){
		return this.props.contacts.map((contact) => {
			return (
				<tr>
					<td>{contact.firstName}</td>
					<td>{contact.lastName}</td>
					<td>{contact.email}</td>
				</tr>
			)
		})
	},

	render: function(){
		return this._getContent()
	}
})