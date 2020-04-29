const {Navbar, NavbarBrand, Nav} = Reactstrap;

class TopNavbar extends React.Component{
	render(){
		return(
			<Navbar color="dark" fixed="top">
				<NavbarBrand className="text-light" href="/">Portfolio Name </NavbarBrand>
				<Nav>
					<NavOption href='#home' text='Home' />
					<NavOption href='#about' text='About' />
					<NavOption href='#projects' text='Projects' />
					<NavOption href='#blog' text='Blog' />
					<NavOption href='#contact' text='Contact' />
				</Nav>
			</Navbar>
		);
	}
}



const {NavItem, NavLink} = Reactstrap;
class NavOption extends React.Component{
	render(){
		return(
			<NavItem>
				<NavLink className="text-light" href={this.props.href}>
					{this.props.text}
				</NavLink>
			</NavItem>
		);
	}
}



















