
// function Header (title, taco) { // DESTRUCTURING 
function Header (props) {

    return (
        <>
        <h3>Hi! {props.title} </h3>
        <h3>{props.taco}</h3>
        
        </>


    )
}

export default Header;