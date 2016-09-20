var React = require('React')

module.exports = React.createClass({
	_handleSubmit: function(event){
		event.preventDefault()
		var contact = {
			email: this._email.value,
			firstName: this._firstName.value,
			lastName: this._lastName.value
		}

		this.props.saveContact(contact)
	},

	render: function(){
		return (
			<form onSubmit={this._handleSubmit}>
				<div className="form-group">
					<label>Email address</label>
					<input ref={function(input){ this._email = input }.bind(this)} type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
				</div>
				<div className="form-group">
					<label>First Name</label>
					<input ref={function(input){ this._firstName = input }.bind(this)} type="text" className="form-control" placeholder="First name" />
				</div>
				<div className="form-group">
					<label>Last Name</label>
					<input ref={function(input){ this._lastName = input }.bind(this)} type="text" className="form-control" placeholder="Last name" />
				</div>

				<button type="submit" className="btn btn-default">Save</button>
			</form>
		)
	}
})