import './Nav.scss';
function Nav (){
    return(
        <>
         <div className='nav-main'>
            <div className='nav-head'>
                <h2>CRUD APP</h2>

            </div>
            <ul className='nav-list'>
                <li>Home </li>
                <li>Services </li>
                <li>About US </li>
            </ul>
         </div>
        </>
    )
}
export default  Nav;